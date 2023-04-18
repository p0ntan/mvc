<?php

namespace App\Card;

/**
 * CardHand class for card game
 */
class CardHand
{
    /** @var array<Card> */
    protected array $cards = [];

    /**
     * To compare different hands at end of a game
     * @var bool
     */
    protected bool $winner = false;

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
     * Function to drop all cards,
     */
    public function resetHand(): void
    {
        $this->cards = [];
        $this->winner = false;
    }

    /**
     * @return bool
     */
    public function isWinner(): bool
    {
        return $this->winner;
    }

    /**
     * Function to set property winner
     */
    public function setWinner(bool $boolean): void
    {
        $this->winner = $boolean;
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
