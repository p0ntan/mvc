<?php

namespace App\Blackjack;

use App\Card\CardHand;
use App\Card\DeckFactory;
use App\Card\DeckOfCards;
use App\Card\NotEnoughCardsException;

/**
 * Class for blackjack game
 */
class GameBlackjack
{
    /**
     * Variables to hold parts of the game
     */
    protected PlayerBlackjack $player;
    protected CardHand $computer;
    protected DeckOfCards $cardDeck;
    protected RulesBlackjack $rules;
    protected bool $roundDone = false;
    public bool $gameOver = false;

    /**
     * Method for setting up blackjack
     */
    public function initGame(): void
    {
        $emptyDeck = new DeckOfCards();
        $deckFactory = new DeckFactory();
        $cardDeck = $deckFactory->createDeck($emptyDeck, "CardGraphic");
        $this->cardDeck = $cardDeck;
        $this->rules = new RulesBlackjack();
        $this->player = new PlayerBlackjack();
        $this->gameOver = false;
        $this->roundDone = false;
    }

    public function placeBet(int $bet): void
    {
        $currentTotal = $this->player->getMoney();
        $this->player->setMoney($currentTotal - $bet);
        $this->player->currentHand()->setBet($bet);
    }

    /**
     * Method for setting up a new round
     */
    public function newRound(): void
    {
        $this->player->resetHands();
        $this->computer = new CardHand();
        $playerCardHand = new CardHand();
        $this->roundDone = false;

        $cardsToDeal = 2;
        for ($i = 0; $i < $cardsToDeal; $i++) {
            $this->addCard($playerCardHand);
            $this->addCard($this->computer);
        }
        $this->player->addCardHand($playerCardHand);
        $this->updateHands();
    }

    /**
     * Method for setting up next round
     */
    public function updateHands(): void
    {
        $currentHand = $this->player->currentHand();
        // First control that there are two cards in hand (after split)
        if ($currentHand->cardsInHand() < 2) {
            $this->addCard($currentHand);
        }
        // Setting the highest value for all hands in game
        $this->computer->setPoints($this->rules->getHighestValue($this->computer));
        foreach ($this->player->getHands() as $hand) {
            $hand->setPoints($this->rules->getHighestValue($hand));
        }
    }

    /**
     * Function to check what options the hand has
     * @return array<mixed>
     */
    public function checkOptions(CardHand $cardHand): array
    {
        $playerMoney = $this->player->getMoney();
        $cardBet = $cardHand->getBet();
        $options = $this->rules->checkAllRules($cardHand);
        $options["split"] = $playerMoney < $cardBet ? false : $options["split"];
        $options["doubleDown"] = $playerMoney < $cardBet ? false : $options["doubleDown"];
        return $options;
    }

    /**
     * @return array<mixed>
     */
    public function getPlayers(): array
    {
        return [$this->player, $this->computer];
    }

    /**
     * Adds one card to the the cardhand
     * @param CardHand $cardHand, the hand to give cards to
     */
    private function addCard(CardHand $cardHand): void
    {
        try {
            $drawnCard = $this->cardDeck->giveCards();
            $cardHand->addCards($drawnCard);
        } catch (NotEnoughCardsException) {
            $this->cardDeck->shuffleDeck();
            $this->addCard($cardHand);
        }
    }

    public function doubleDown(): void
    {
        $currentHand = $this->player->currentHand();
        $currentTotal = $this->player->getMoney();
        $currentBet = $currentHand->getBet();
        $currentHand->setBet($currentBet * 2);
        $this->player->setMoney($currentTotal - $currentBet);
        $this->addCard($currentHand);
        $this->playerStay();
    }

    public function splitHand(): void
    {
        $this->player->splitHand();
    }

    public function playComputer(): void
    {
        $allPlayerHands = $this->player->getHands();
        $computerFinished = true;
        foreach ($allPlayerHands as $hand) {
            $options = $this->checkOptions($hand);
            if (!$options["bust"] && !$options["blackjack"]) {
                $computerFinished = false;
                break;
            }
        }
        if (!$computerFinished) {
            $computerFinished = $this->rules->computerRules($this->computer);
            while (!$computerFinished) {
                $this->addCard($this->computer);
                $computerFinished = $this->rules->computerRules($this->computer);
            }
        }
        $this->roundDone = true;
        $this->rules->findWinner($this->player, $this->computer);
        $this->payOut();
    }

    public function playerStay(): void
    {
        $currentHand = $this->player->currentHand();
        $currentHand->setDone(true);
    }

    public function playerAddCard(): bool
    {
        $currentHand = $this->player->currentHand();
        $this->addCard($currentHand);
        $handBust = $this->checkOptions($currentHand)["bust"];
        if ($handBust) {
            return true;
        }
        return false;
    }

    private function payOut(): void
    {
        $allHands = $this->player->getHands();
        foreach ($allHands as $hand) {
            $result = $hand->getOutcome();
            $bet = $hand->getBet();
            $totMoney = $this->player->getMoney();
            $blackjack = $this->checkOptions($hand)["blackjack"];
            switch ($result) {
                case "win":
                    $odds = $blackjack ? 2.5 : 2;
                    $win = intval($bet * $odds);
                    $this->player->setMoney($totMoney + $win);
                    break;
                case "draw":
                    $this->player->setMoney($totMoney + $bet);
                    break;
            }
        }
        $playerMoney = $this->player->getMoney();
        if ($playerMoney == 0) {
            $this->gameOver = true;
        }
    }

    /**
     * Function to get game-status as json
     * @return array<mixed>
     */
    public function getAsJson(): array
    {
        $playerData = [];
        $allPlayerHands = $this->player->getHands();
        foreach ($allPlayerHands as $hand) {
            $playerData["hands"][] = [
                "bestPoint" => $hand->getPoints(),
                "placedBet" => $hand->getBet(),
                "cardHand" => $hand->getHandAsJson(),
                "handOutcome" => $this->roundDone ? $hand->getOutcome() : "round not done"
            ];
        }
        $computerHand = [
            "hands" => [
                "bestPoint" => $this->computer->getPoints(),
                "cardHand" => $this->computer->getHandAsJson()
            ]
        ];
        $data = [
            "gameOver" => $this->gameOver,
            "roundOver" => $this->roundDone,
            "player" => $playerData,
            "computer" => $computerHand
        ];
        return $data;
    }
}
