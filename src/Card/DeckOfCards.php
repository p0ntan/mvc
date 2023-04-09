<?php

namespace App\Card;

/**
 * Class for a deck of cards
 */
class DeckOfCards
{
    protected array $allCards = [];
    protected array $drawnCards = [];

    public function addCard(Card $card): void
    {
        $this->allCards[] = $card;
    }

    public function deckSize(): int
    {
        return count($this->allCards);
    }

    public function shuffleDeck(): void
    {
        shuffle($this->allCards);
    }

    public function drawCards(int $noOfCards = 1): array
    {
        $drawnCards = [];

        if ($noOfCards <= 0 || $this->deckSize() == 0) {
            return $drawnCards;
        } else if ($noOfCards > $this->deckSize()) {
            $noOfCards = $this->deckSize();
        }

        foreach (range(1, $noOfCards) as $key => $value) {
            $drawnCards[] = array_pop($this->allCards);
        }
        $this->drawnCards = array_merge($this->drawnCards, $drawnCards);
        return $drawnCards;
    }

    public function getDeck(): array
    {
        return $this->allCards;
    }

    public function getSortedDeck(): array
    {
        // Merge cards in deck with drawn cards
        $sortedCards = array_merge($this->allCards, $this->drawnCards);

        // Sort the cards by suit and value
        usort($sortedCards, function ($a, $b) {
            if ($a->getSuit() === $b->getSuit()) {
                return $a->getValue() <=> $b->getValue();
            }
            return array_search($a->getSuit(), Card::SUITS) <=> array_search($b->getSuit(), Card::SUITS);
        });

        // Return an array of card strings
        $sortedDeck = [];
        foreach ($sortedCards as $card) {
            $sortedDeck[] = $card;
        }

        return $sortedDeck;
    }

    public function getAsString(): string
    {
        $allCardsStr = "";
        foreach ($this->allCards as $card) {
            $allCardsStr .= $card->getAsString();
        }
        return $allCardsStr;
    }
}
