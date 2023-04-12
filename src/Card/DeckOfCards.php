<?php

namespace App\Card;

/**
 * Class for a deck of cards
 */
class DeckOfCards
{
    /**
     * @var array<Card> $unusedCards
     */
    protected array $unusedCards = [];

    /**
     * @var array<Card> $cardsInUse
     */
    protected array $cardsInUse = [];

    /**
     * @var array<Card> $drawnCards
     */
    protected array $drawnCards = [];

    /**
     * Add card to DeckOfCards
     */
    public function addCard(Card $card): void
    {
        $this->unusedCards[] = $card;
    }

    /**
     * Get number of cards in deck that has not been drawn
     */
    public function deckSize(): int
    {
        return count($this->unusedCards);
    }

    /**
     * Shuffles deck
     */
    public function shuffleDeck(): void
    {
        shuffle($this->unusedCards);
    }

    /**
     * @return array<Card>
     */
    public function drawCards(int $noOfCards = 1): array
    {
        $drawnCards = [];

        if ($this->deckSize() == 0) {
            return $drawnCards;
        } elseif ($noOfCards > $this->deckSize()) {
            $noOfCards = $this->deckSize();
        }

        for ($i = 0; $i < $noOfCards; $i ++) {
            $drawnCards[] = array_pop($this->unusedCards);
        }

        $this->drawnCards = array_merge($this->drawnCards, $drawnCards);
        return $drawnCards;
    }

    /**
     * @return array<Card>
     */
    public function giveCards(int $noOfCards): array
    {
        $usedCards = [];

        if ($this->deckSize() == 0) {
            return $usedCards;
        } elseif ($noOfCards > $this->deckSize()) {
            $noOfCards = $this->deckSize();
        }

        for ($i = 0; $i < $noOfCards; $i ++) {
            $usedCards[] = array_pop($this->unusedCards);
        }

        $this->cardsInUse = array_merge($this->cardsInUse, $usedCards);
        return $usedCards;
    }

    /**
     * @return array<Card>
     */
    public function getDeck(): array
    {
        return $this->unusedCards;
    }

    /**
     * @return array<Card>
     */
    public function getSortedDeck(): array
    {
        // Merge unusedCards with drawnCards and cardsInUse
        $sortedDeck = array_merge($this->unusedCards, $this->drawnCards, $this->cardsInUse);

        // Sort the cards by suit and value
        usort($sortedDeck, function ($firstCard, $secondCard) {
            if ($firstCard->getSuit() === $secondCard->getSuit()) {
                return $firstCard->getValue() <=> $secondCard->getValue();
            }
            return array_search($firstCard->getSuit(), Card::SUITS) <=> array_search($secondCard->getSuit(), Card::SUITS);
        });

        return $sortedDeck;
    }

    /**
     * Get all ununsed cards as a string
     */
    public function getAsString(): string
    {
        $allCardsStr = "";
        foreach ($this->unusedCards as $card) {
            $allCardsStr .= $card->getAsString();
        }
        return $allCardsStr;
    }
}
