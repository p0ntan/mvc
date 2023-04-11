<?php

namespace App\Card;

/**
 * Class for a deck of cards
 */
class DeckOfCards
{
    protected array $unusedCards = [];
    protected array $cardsInUse = [];
    protected array $drawnCards = [];

    public function addCard(Card $card): void
    {
        $this->unusedCards[] = $card;
    }

    public function deckSize(): int
    {
        return count($this->unusedCards);
    }

    public function shuffleDeck(): void
    {
        shuffle($this->unusedCards);
    }

    public function drawCards(int $noOfCards = 1): array
    {
        $drawnCards = [];

        if ($noOfCards <= 0 || $this->deckSize() == 0) {
            return $drawnCards;
        } elseif ($noOfCards > $this->deckSize()) {
            $noOfCards = $this->deckSize();
        }

        foreach (range(1, $noOfCards) as $key => $value) {
            $drawnCards[] = array_pop($this->unusedCards);
        }
        $this->drawnCards = array_merge($this->drawnCards, $drawnCards);
        return $drawnCards;
    }

    public function giveCards(int $noOfCards): array
    {
        $usedCards = [];

        if ($noOfCards <= 0 || $this->deckSize() == 0) {
            return $usedCards;
        } elseif ($noOfCards > $this->deckSize()) {
            $noOfCards = $this->deckSize();
        }

        foreach (range(1, $noOfCards) as $key => $value) {
            $usedCards[] = array_pop($this->unusedCards);
        }
        $this->cardsInUse = array_merge($this->cardsInUse, $usedCards);
        return $usedCards;
    }

    public function getDeck(): array
    {
        return $this->unusedCards;
    }

    public function getSortedDeck(): array
    {
        // Merge unusedCards with drawnCards and cardsInUse
        $sortedDeck = array_merge($this->unusedCards, $this->drawnCards, $this->cardsInUse);

        // Sort the cards by suit and value
        usort($sortedDeck, function ($a, $b) {
            if ($a->getSuit() === $b->getSuit()) {
                return $a->getValue() <=> $b->getValue();
            }
            return array_search($a->getSuit(), Card::SUITS) <=> array_search($b->getSuit(), Card::SUITS);
        });

        return $sortedDeck;
    }

    public function getAsString(): string
    {
        $allCardsStr = "";
        foreach ($this->unusedCards as $card) {
            $allCardsStr .= $card->getAsString();
        }
        return $allCardsStr;
    }
}
