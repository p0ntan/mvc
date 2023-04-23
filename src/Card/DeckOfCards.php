<?php

namespace App\Card;

/**
 * Class for a deck of cards
 */
class DeckOfCards
{
    /** @var array<Card> $unusedCards */
    protected array $unusedCards = [];

    /**
     * Contains cards that are in use by players
     * @var array<mixed> $cardsInUse
     */
    protected array $cardsInUse = [];

    /**
     * Contains cards that are drawn but not handed out
     *  @var array<mixed> $drawnCards
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
        $this->unusedCards = array_merge($this->unusedCards, $this->drawnCards, $this->cardsInUse);
        $this->drawnCards = [];
        $this->cardsInUse = [];
        shuffle($this->unusedCards);
    }

    /**
     * @return array<mixed>
     */
    public function shuffleDeckJson(): array
    {
        $this->shuffleDeck();
        $data = [];
        foreach ($this->getDeck() as $card) {
            $data[] = [
                "suit" => $card->getSuit(),
                "value" => $card->getValue(),
                "name" => $card->getAsString()
            ];
        }
        return $data;
    }

    /**
     * @return array<mixed>
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
     * @return array<mixed>
     */
    public function drawCardsJson(int $noOfCards = 1): array
    {
        $drawnCard = $this->drawCards($noOfCards);
        $data = [
            "cardsLeft" => $this->deckSize()
        ];
        foreach ($drawnCard as $card) {
            $data["drawnCards"][] = [
            "suit" => $card->getSuit(),
            "value" => $card->getValue(),
            "name" => $card->getAsString()
            ];
        }
        return $data;
    }

    /**
     * @return array<mixed>
     */
    public function giveCards(int $noOfCards = 1): array
    {
        $usedCards = [];

        if ($noOfCards > $this->deckSize()) {
            throw new NotEnoughCardsException();
        }

        for ($i = 0; $i < $noOfCards; $i ++) {
            $usedCards[] = array_pop($this->unusedCards);
        }

        $this->cardsInUse = array_merge($this->cardsInUse, $usedCards);
        return $usedCards;
    }

    /**
     * @return array<mixed>
     */
    public function giveCardsToHands(int $noOfPlayers, int $noOfCards): array
    {
        if ($this->deckSize() < ($noOfPlayers * $noOfCards)) {
            return ["Not enough cards to deal as requested."];
        }

        $playerHands = [];
        for ($i = 0; $i < $noOfPlayers; $i++) {
            $cardHand = new CardHand();
            $cardsToHand = $this->giveCards($noOfCards);
            foreach ($cardsToHand as $card) {
                $cardHand->addCard($card);
            }
            $playerHands[] = $cardHand;
        }
        return $playerHands;
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
     * @return array<mixed>
     */
    public function getSortedDeckJson(): array
    {
        $data = [];
        $sortedDeck = $this->getSortedDeck();
        foreach ($sortedDeck as $card) {
            $data[] = [
                "suit" => $card->getSuit(),
                "value" => $card->getValue(),
                "name" => $card->getAsString()
            ];
        }
        return $data;
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
