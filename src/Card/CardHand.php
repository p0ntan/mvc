<?php

namespace App\Card;

/**
 * CardHand class for card game
 */
class CardHand
{
    /**
     * @var array<Card>
     */
    protected array $cards = [];

    /**
     * Add card to CardHand
     */
    public function addCard(Card $card): void
    {
        $this->cards[] = $card;
    }

    /**
     * @return array<Card>
     */
    public function getCards(): array
    {
        return $this->cards;
    }
}
