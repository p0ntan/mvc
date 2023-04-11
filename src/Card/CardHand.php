<?php

namespace App\Card;

/**
 * CardHand class for card game
 */
class CardHand
{
    protected array $cards = [];

    public function addCard(Card $card): void
    {
        $this->cards[] = $card;
    }

    public function getCards(): array
    {
        return $this->cards;
    }
}
