<?php

namespace App\Card;

/**
 * CardHand class for card game
 */
class CardHand
{
    /** @var array<Card> */
    protected array $cards;

    /**
     * To compare different hands at end of a game.
     * Setting "draw" as default
     * @var string
     */
    protected string $handOutcome = "draw";

    /**
     * To see if a hand is "done", if a player can have multiple hands in a game
     * @var bool
     */
    protected bool $handDone = false;

    /**
     * How much money to bet on this hand
     * @var int
     */
    protected int $bet = 0;

    /**
     * Highest value for game
     * @var int
     */
    protected int $bestValue = 0;

    /**
     * Add card to CardHand
     */
    public function addCard(Card $card): void
    {
        $this->cards[] = $card;
    }

    /**
     * Add card to CardHand
     *
     * @param array<Card> $cards
     */
    public function addCards(array $cards): void
    {
        foreach ($cards as $card) {
            $this->cards[] = $card;
        }
    }

    /**
     * @return array<Card>
     */
    public function getCards(): array
    {
        return $this->cards;
    }

    /**
     * @return int
     */
    public function cardsInHand(): int
    {
        return count($this->cards);
    }

    /**
     * @return mixed
     */
    public function removeLast(): mixed
    {
        return array_pop($this->cards);
    }

    /**
     * @return string
     */
    public function getOutcome(): string
    {
        return $this->handOutcome;
    }

    /**
     * Function to set property handOutcome
     */
    public function setOutcome(string $outcome): void
    {
        $this->handOutcome = $outcome;
    }

    /**
     * @return bool
     */
    public function isDone(): bool
    {
        return $this->handDone;
    }

    /**
     * Function to set property handDone
     */
    public function setDone(bool $boolean): void
    {
        $this->handDone = $boolean;
    }

    /**
     * @return int
     */
    public function getPoints(): int
    {
        return $this->bestValue;
    }

    /**
     * Function to set property handDone
     */
    public function setPoints(int $value): void
    {
        $this->bestValue = $value;
    }

    /**
     * Function to get property bet
     */
    public function getBet(): int
    {
        return $this->bet;
    }

    /**
     * Function to set property bet
     */
    public function setBet(int $value): void
    {
        $this->bet = $value;
    }

    /**
     * @return array<mixed>
     */
    public function getHandAsJson(): array
    {
        $data = [];
        foreach ($this->getCards() as $card) {
            $data[] = $card->getAsJson();
        }
        return $data;
    }
}
