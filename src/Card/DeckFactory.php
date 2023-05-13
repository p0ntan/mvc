<?php

namespace App\Card;

/**
 * A class to create a deck of cards
 */

class DeckFactory
{
    public function createDeck(DeckOfCards $cardDeck, string $typeOfDeck): DeckOfCards
    {
        if ($typeOfDeck == "Card") {
            $cardDeck = $this->card($cardDeck);
        } elseif ($typeOfDeck == "CardGraphic") {
            $cardDeck = $this->cardGraphic($cardDeck);
        }

        $cardDeck->shuffleDeck();
        return $cardDeck;
    }

    private function card(DeckOfCards $cardDeck): DeckOfCards
    {
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new Card($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        return $cardDeck;
    }

    private function cardGraphic(DeckOfCards $cardDeck): DeckOfCards
    {
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new CardGraphic($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        return $cardDeck;
    }
}
