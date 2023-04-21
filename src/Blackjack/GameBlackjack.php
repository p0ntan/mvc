<?php

namespace App\Blackjack;

use App\Card\CardHand;
use App\Card\DeckOfCards;

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
    protected bool $gameDone = false;

    /**
     * Method for setting up blackjack
     */
    public function initGame(DeckOfCards $aCardDeck): void
    {
        $cardsToDeal = 2;
        $this->cardDeck = $aCardDeck;
        $this->player = new PlayerBlackjack();
        $this->computer = new CardHand();
        $this->rules = new RulesBlackjack();
        $playerCardHand = new CardHand();
        // Player
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $playerCardHand->addCards($cards);
        $this->player->addCardHand($playerCardHand);
        // Computer
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->computer->addCards($cards);
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
        if ($this->cardDeck->deckSize() < 10) {
            $this->cardDeck->shuffleDeck();
        }
        $this->player->resetHands();
        $this->computer = new CardHand();
        $playerCardHand = new CardHand();
        $this->gameDone = false;

        $cardsToDeal = 2;
        // Player
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $playerCardHand->addCards($cards);
        $this->player->addCardHand($playerCardHand);
        // Computer
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->computer->addCards($cards);
    }

    /**
     * Method for setting up blackjack
     */
    public function nextRound(): void
    {
        $currentHand = $this->player->currentHand();
        // First control that
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
        $options = $this->rules->checkAllRules($cardHand);
        return $options;
    }

    /**
     * @return array<mixed>
     */
    public function getPlayers(): array
    {
        return [$this->player, $this->computer];
    }

    public function getPlayer(): PlayerBlackjack
    {
        return $this->player;
    }

    private function addCard(CardHand $player): void
    {
        $drawnCard = $this->cardDeck->drawCards();
        $player->addCards($drawnCard);
    }

    public function splitHand(): void
    {
        $this->player->splitHand();
    }

    public function playComputer(): void
    {
        $allPlayerHands = $this->player->getHands();
        $allBust = true;
        $allBlackjack = true;
        foreach ($allPlayerHands as $hand) {
            $options = $this->checkOptions($hand);
            if (!$options["bust"] && !$options["blackjack"]) {
                $allBust = false;
                $allBlackjack = false;
                break;
            } elseif (!$options["bust"]) {
                $allBust = false;
            } elseif (!$options["blackjack"]) {
                $allBlackjack = false;
            }
        }
        if (!$allBlackjack && !$allBust) {
            $computerFinished = $this->rules->computerRules($this->computer);
            while (!$computerFinished) {
                $this->addCard($this->computer);
                $computerFinished = $this->rules->computerRules($this->computer);
            }
        }
        $this->gameDone = true;
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
            switch ($result) {
                case "win":
                    $this->player->setMoney($totMoney + ($bet * 2));
                    break;
                case "draw":
                    $this->player->setMoney($totMoney + $bet);
                    break;
            }
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
                "cardHand" => $hand->getHandAsJson(),
                "handOutcome" => $this->gameDone ? $hand->getOutcome() : "game not done"
            ];
        }
        $data = [
            "gameDone" => $this->gameDone,
            "player" => $playerData,
            "computer" => [
                "bestPoint" => $this->computer->getPoints(),
                "cardHand" => $this->computer->getHandAsJson()
            ]
        ];
        return $data;
    }
}
