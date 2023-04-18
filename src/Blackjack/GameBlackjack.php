<?php

namespace App\Blackjack;

use App\Card\CardGraphic;
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
    protected CardHand $player;
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
        $this->player = new CardHand();
        $this->computer = new CardHand();
        $this->rules = new RulesBlackjack();
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->player->addCards($cards);
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->computer->addCards($cards);
    }

    /**
     * Method for setting up blackjack
     */
    public function newRound(): void
    {
        if ($this->cardDeck->deckSize() < 10) {
            $this->cardDeck->shuffleDeck();
        }
        $this->player->resetHand();
        $this->computer->resetHand();

        $cardsToDeal = 2;
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->player->addCards($cards);
        $cards = $this->cardDeck->giveCards($cardsToDeal);
        $this->computer->addCards($cards);
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

    public function getPlayer(): CardHand
    {
        return $this->player;
    }

    public function getComputer(): CardHand
    {
        return $this->computer;
    }

    public function addCard(CardHand $player): void
    {
        $drawnCard = $this->cardDeck->drawCards();
        $player->addCards($drawnCard);
    }

    public function playComputer(): void
    {
        $options = $this->checkOptions($this->player);
        if (!$options["blackjack"] && !$options["bust"]) {
            $computerFinished = $this->rules->computerRules($this->computer);
            while (!$computerFinished) {
                $this->addCard($this->computer);
                $computerFinished = $this->rules->computerRules($this->computer);
            }
        }
        $this->gameDone = true;
        $this->rules->findWinner($this->player, $this->computer);
    }

    public function gameOver(): bool
    {
        return $this->gameDone;
    }

    public function getWinner(): string
    {
        $playerBool = $this->player->isWinner();
        $computerBool = $this->computer->isWinner();
        if ($playerBool !== $computerBool) {
            $winner = $playerBool ? "Du vann!" : "Banken vann.";
            return $winner;
        }
        return "Det blev oavgjort.";
    }

    public function getAsJson(): array
    {
        return [
            "pointsComputer" => $this->rules->checkAllRules($this->computer)["bestValue"],
            "pointsPlayer" => $this->rules->checkAllRules($this->player)["bestValue"],
            "gameDone" => $this->gameDone
        ];
    }
}
