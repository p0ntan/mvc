<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;

/**
 * Class for testing cases for class DeckOfCards
 */
class DeckOfCardsTestPart2 extends TestCase
{
    /**
     * Test add some cards and get a sorted deck
     */
    public function testGetSortedDeck(): void
    {
        $card1 = new Card("spades", 5);
        $card2 = new Card("hearts", 10);
        $card3 = new Card("diamonds", 2);
        $card4 = new Card("hearts", 5);
        $card5 = new Card("clubs", 7);

        $allCards = [$card1, $card2, $card3, $card4, $card5];
        $deckOfCards = new DeckOfCards();
        foreach ($allCards as $card) {
            $deckOfCards->addCard($card);
        }

        $exp = [$card5, $card3, $card4, $card2, $card1];
        $res = $deckOfCards->getSortedDeck();

        $this->assertEquals($exp, $res);
    }

    /**
     * Test add some cards and get a sorted deck as json
     */
    public function testGetSortedDeckJson(): void
    {
        $card1 = new Card("spades", 5);
        $card2 = new Card("hearts", 10);
        $card3 = new Card("diamonds", 2);
        $card4 = new Card("hearts", 5);
        $card5 = new Card("clubs", 7);

        $allCards = [$card1, $card2, $card3, $card4, $card5];
        $deckOfCards = new DeckOfCards();
        foreach ($allCards as $card) {
            $deckOfCards->addCard($card);
        }

        $exp = [
            [
                "suit" => "clubs",
                "value" => 7,
                "name" => "7 of clubs"
            ],
            [
                "suit" => "diamonds",
                "value" => 2,
                "name" => "2 of diamonds"
            ],
            [
                "suit" => "hearts",
                "value" => 5,
                "name" => "5 of hearts"
            ],
            [
                "suit" => "hearts",
                "value" => 10,
                "name" => "10 of hearts"
            ],
            [
                "suit" => "spades",
                "value" => 5,
                "name" => "5 of spades"
            ]
        ];
        $res = $deckOfCards->getSortedDeckJson();

        $this->assertEquals($exp, $res);
    }

    /**
     * Test to give cards to several hands
     */
    public function testGiveCardToPlayers(): void
    {
        $deckOfCards = new DeckOfCards();
        $cards = [
            new Card("clubs", 7),
            new Card("diamonds", 2),
            new Card("hearts", 5),
            new Card("hearts", 10),
            new Card("spades", 5)
        ];
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }

        $players = $deckOfCards->giveCardsToHands(2, 2);
        $this->assertIsArray($players);
        $this->assertInstanceOf("\App\Card\CardHand", $players[0]);
        $this->assertInstanceOf("\App\Card\CardHand", $players[1]);
    }

    /**
     * Test to give cards to several hands when not enough cards or empty deck
     */
    public function testGiveCardToPlayersFail(): void
    {
        $deckOfCards = new DeckOfCards();
        $exp = ["Not enough cards to deal as requested."];
        $res = $deckOfCards->giveCardsToHands(2, 2);
        $this->assertEquals($exp, $res);
        $cards = [
            new Card("clubs", 7),
            new Card("diamonds", 2),
            new Card("hearts", 5),
            new Card("hearts", 10),
            new Card("spades", 5)
        ];
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }

        $res = $deckOfCards->giveCardsToHands(3, 2);
        $this->assertEquals($exp, $res);
    }
}
