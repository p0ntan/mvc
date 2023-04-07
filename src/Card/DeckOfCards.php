<?php

namespace App\Card;

/**
 * Class for a deck of cards
 */
class DeckOfCards
{
    protected array $allCards;

    public function addCard(Card $card): void
    {
        $this->allCards[] = $card;
    }

    public function deckSize(): int
    {
        return count($this->allCards);
    }

    public function shuffelDeck(): void
    {
        shuffle($this->allCards);
    }

    public function drawCards(int $noOfCards = 1): array
    {
        $drawnCards = [];

        if ($noOfCards <= 0) {
            return $drawnCards;
        }

        foreach (range(1, $noOfCards) as $key => $value) {
            $drawnCards[] = array_pop($this->allCards);
        }
        return $drawnCards;
    }

    public function getAsString(): string
    {
        $allCardsStr = "";
        foreach ($this->allCards as $card) {
            $allCardsStr .= $card->getAsString();
        }
        return $allCardsStr;
    }

    public function getSortedDeck(): string
    {
        $sortedCards = $this->allCards;

        // Sort the cards by suit and value
        usort($sortedCards, function($a, $b) {
            if ($a->getSuit() === $b->getSuit()) {
                return $a->getValue() <=> $b->getValue();
            }
            return array_search($a->getSuit(), Card::SUITS) <=> array_search($b->getSuit(), Card::SUITS);
        });
    
        // Return an array of card strings
        $sortedDeck = "";
        foreach ($sortedCards as $card) {
            $sortedDeck .= $card->getAsString();
        }
    
        return $sortedDeck;
    }
}
