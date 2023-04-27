<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;

/**
 * Class for testing cases for class DeckOfCards
 */
class DeckOfCardsTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments and control with default variables.
     */
    public function testCreateDeckOfCards(): void
    {
        $deckOfCards = new DeckOfCards();
        $exp = [];
        $res = $deckOfCards->getDeck();
        $cardsInDeck = $deckOfCards->deckSize(); // Default will be 0

        $this->assertInstanceOf("\App\Card\DeckOfCards", $deckOfCards);
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
        $this->assertEquals(0, $cardsInDeck); // No cards in deck
    }

    /**
     * Add card to deck and control with size
     */
    public function testAddCardToDeck(): void
    {
        $deckOfCards = new DeckOfCards();
        // Adding four cards to deck
        $cards = [new Card(), new Card(), new Card(), new Card()];
        $noOfCards = count($cards);
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }
        $res = $deckOfCards->getDeck();
        $cardsInDeck = $deckOfCards->deckSize(); // Expecting 4

        $this->assertIsArray($res);
        for ($i = 0; $i < $cardsInDeck; $i++) { 
            $this->assertInstanceOf("\App\Card\Card", $res[$i]);
            $this->assertEquals($cards[$i], $res[$i]);
        }
        $this->assertEquals($noOfCards, $cardsInDeck); // Four cards in deck
    }

    /**
     * Test to shuffle deck
     */
    public function testShuffleDeck(): void
    {
        $deckOfCards = new DeckOfCards();
        // Adding five cards to deck
        $cards = [
            new Card("hearts", 2),
            new Card("diamonds", 6),
            new Card("clubs", 5), 
            new Card("spades", 12),
            new Card(),
            new Card("spades", 1)
        ];
        $noOfCards = count($cards);
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }
        // Compare arrays before shuffling
        $res = $deckOfCards->getDeck();
        $this->assertEquals($cards, $res);

        // Shuffle deck, than compare arrays again.
        // There is a chance that the deck is same as before after shuffling
        // but very small possibility for that to happen.
        $deckOfCards->shuffleDeck();
        $res = $deckOfCards->getDeck();
        $this->assertIsArray($res);
        $this->assertNotEquals($cards, $res);
    }
}
