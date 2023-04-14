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
    public function cardsInHand(): array
    {
        return count($this->cards);
    }
}
