<?php
/**
 * GameBlackjack.php contains the class GameBlackjack.
 */

namespace App\Blackjack;

use App\Card\CardHand;
use App\Card\DeckOfCards;
use App\Card\NotEnoughCardsException;

/**
 * GameBlackjack class
 *
 * A class to play the game of blackjack. Contains everything needed for game.
 */
class GameBlackjack
{
    /** @var PlayerBlackjack $player Holds the player with all hands and info */
    protected PlayerBlackjack $player;

    /** @var CardHand $computer Holds the computers hand */
    protected CardHand $computer;

    /** @var DeckOfCards $cardDeck Is the carddeck used in game */
    protected DeckOfCards $cardDeck;

    /** @var RulesBlackjack $rules Is the rules of the game */
    protected RulesBlackjack $rules;

    /** @var bool $roundDone Tells if the round is over */
    protected bool $roundDone = false;

    /** @var bool $gameOver Tells if the game is over */
    public bool $gameOver = false;

    /**
     * Method to init the game. Needs injection of a carddeck
     *
     * @param DeckOfCards $cardDeck
     */
    public function initGame(
        DeckOfCards $cardDeck
    ): void {
        $this->cardDeck = $cardDeck;
        $this->player = new PlayerBlackjack();
        $this->rules = new RulesBlackjack();
        $this->gameOver = false;
        $this->roundDone = false;
    }

    /**
     * Method to place a bet for the player
     *
     * @param int $bet The players bet
     */
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
     * Updates hands points and hand
     *
     * Method for updating hands when the state of the game is changed.
     * Example when a hand is split och new cards are handed out.
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
     * Method to check what options a certain hand has
     *
     * @param CardHand $cardHand The hand to check
     *
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
     * Method to get both players
     *
     * Returns an array with the players in game which would be the player and the computer
     *
     * @return array<mixed>
     */
    public function getPlayers(): array
    {
        return [$this->player, $this->computer];
    }

    /**
     * Adds card to a hand
     *
     * Adds one card to the cardhand used as a parameter.
     * If the deck runs out of cards then the deck is shuffled and then a card is given.
     * For the player it will look like a whole new carddeck was added to the game.
     *
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

    /**
     * Doubles the bet for the player and gives one last card to players current hand.
     */
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

    /**
     * Splits the hand for the player
     */
    public function splitHand(): void
    {
        $this->player->splitHand();
    }

    /**
     * Plays computers hand
     *
     * Method to finish the game for the computer when the player is done.
     * Some game logic is in method aswell for when a computer can stop or keep ask for cards.
     */
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

    /**
     * Sets the currenthand for the player to done
     */
    public function playerStay(): void
    {
        $currentHand = $this->player->currentHand();
        $currentHand->setDone(true);
    }

    /**
     * Add cards to players hand
     *
     * Adds a card to the players current hand. Returns a boolean if hand bust or not
     *
     * @return bool If currenthand gets busted or not
     */
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

    /**
     * Checks if player has won and pays out bet
     *
     * Method that compares each playerhand to computer and pays out money if player wins.
     * Sets property $gameOver to done if player runs out of money
     */
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
     * Get current state in a JSON-structure
     *
     * Method to get the status of the game as an array that can be used as a JSON object.
     *
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
