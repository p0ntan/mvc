<?php

namespace App\Card;

/**
 * A class to create a deck of cards
 */

class DeckFactory
{
    public function createDeck(DeckOfCards $cardDeck, string $typeOfDeck): DeckOfCards
    {
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        if ($typeOfDeck == "Card") {
            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new Card($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
        } elseif ($typeOfDeck == "CardGraphic") {
            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new CardGraphic($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
        }
        $cardDeck->shuffleDeck();
        return $cardDeck;
    }
}
