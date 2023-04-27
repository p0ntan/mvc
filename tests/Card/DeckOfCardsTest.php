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

        // Shuffle deck, than compare arrays again. There is a chance that the deck is 
        // same as before after shuffling but very small chance for that to happen.
        $deckOfCards->shuffleDeck();
        $res = $deckOfCards->getDeck();
        $this->assertIsArray($res);
        $this->assertNotEquals($cards, $res);
    }

    /**
     * Test add cards and get deck as a json
     */
    public function testGetAsJson(): void
    {
        $deckOfCards = new DeckOfCards();
   
        // Add mock cards that returns the same array when using cardmethod
        $stubReturn = [
            "suit" => "mock",
            "value" => "mock",
            "name" => "mock"
        ];
        $cards = [$stubReturn, $stubReturn, $stubReturn];

        foreach ($cards as $card) {
            $mockCard = $this->createStub(Card::class);
            $mockCard->method("getAsJson")->willReturn($card);
            $deckOfCards->addCard($mockCard);
        }
    
        $exp = [$stubReturn, $stubReturn, $stubReturn];
        $res = $deckOfCards->getAsJson();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }

    /**
     * Test add and then draw cards from deck
     */
    public function testDrawCards(): void
    {
        $deckOfCards = new DeckOfCards();
        $cards = [
            new Card("hearts", 2),
            new Card("diamonds", 6),
            new Card("clubs", 5), 
            new Card("spades", 12),
            new Card(),
            new Card("spades", 1)
        ];
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }
        // Draw one card
        $drawnCard = array_pop($cards);
        $res = $deckOfCards->drawCards();
        $noOfCards = count($cards);
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertIsArray($res);
        $this->assertEquals($noOfCards, $cardsInDeck);
        $this->assertEquals($drawnCard, $res[0]);

        // Trying to draw more cards than in deck (five left)
        $num = 10;
        $res = $deckOfCards->drawCards($num);
        $cards = array_reverse($cards);
        $this->assertIsArray($res);
        $this->assertEquals($cards, $res);

        // Control to see if deck is empty
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertEquals(0, $cardsInDeck); // Expecting empty deck
    }

    /**
     * Test add and then draw cards on empty deck
     */
    public function testDrawCardsEmptyDeck(): void
    {
        $deckOfCards = new DeckOfCards();

        // Control to see if deck is empty
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertEquals(0, $cardsInDeck); // Expecting empty deck

        // Draw one card
        $exp = [];
        $res = $deckOfCards->drawCards();
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
        $this->assertEquals(0, $cardsInDeck);

        // Trying to draw more cards than in deck (five left)
        $num = 10;
        $res = $deckOfCards->drawCards($num);
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
        $this->assertEquals(0, $cardsInDeck); // Expecting empty deck
    }

    /**
     * Test draw cards and then get as json
     */
    public function testDrawAndGetAsJson(): void
    {
        $deckOfCards = new DeckOfCards();
   
        // Add mock cards that returns the same array when using cardmethod
        $stubReturn = [
            "suit" => "mock",
            "value" => "mock",
            "name" => "mock"
        ];
        $stubReturnThree = [
            "suit" => "test",
            "value" => "test",
            "name" => "test"
        ];
        $cards = [$stubReturn, $stubReturn, $stubReturnThree];
        
        foreach ($cards as $card) {
            $mockCard = $this->createStub(Card::class);
            $mockCard->method("getAsJson")->willReturn($card);
            $deckOfCards->addCard($mockCard);
        }

        $num = 3;
        $exp = [
            "cardsLeft" => 0,
            "drawnCards" => [$stubReturnThree, $stubReturn, $stubReturn]]
        ;
        $res = $deckOfCards->drawCardsJson($num);
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }

    /**
     * Test add and then give cards
     */
    public function testGiveCards(): void
    {
        $deckOfCards = new DeckOfCards();
        $cards = [
            new Card("hearts", 2),
            new Card("diamonds", 6),
            new Card("clubs", 5), 
            new Card("spades", 12),
            new Card(),
            new Card("spades", 1)
        ];
        foreach ($cards as $card) {
            $deckOfCards->addCard($card);
        }
        // Give one card
        $drawnCard = array_pop($cards);
        $res = $deckOfCards->giveCards();
        $noOfCards = count($cards);
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertIsArray($res);
        $this->assertEquals($noOfCards, $cardsInDeck);
        $this->assertEquals($drawnCard, $res[0]);

        // Give five cards
        $num = 5;
        $res = $deckOfCards->giveCards($num);
        $cards = array_reverse($cards); 
        $this->assertIsArray($res);
        $this->assertEquals($cards, $res);

        // // Control to see if deck is empty
        $cardsInDeck = $deckOfCards->deckSize();
        $this->assertEquals(0, $cardsInDeck); // Expecting empty deck
    }

    /**
     * Test add and then give cards on empty deck and with more than in deck
     */
    public function testGiveCardsException(): void
    {
        $deckOfCards = new DeckOfCards();
        $this->expectException(NotEnoughCardsException::class);
        $res = $deckOfCards->giveCards();

        // Adding two cards, then trying to draw three
        $deckOfCards->addCard(new Card());
        $deckOfCards->addCard(new Card());

        $num = 3;
        $this->expectException(NotEnoughCardsException::class);
        $res = $deckOfCards->giveCards($num);
    }

    /**
     * Test get deck as string
     */
    public function testGetAsString(): void
    {
        $deckOfCards = new DeckOfCards();
        // Add mock cards that returns the same array when using cardmethod
        $deckOfCards = new DeckOfCards();
        $expValue = "cardTest";
        $expValueThree = "cardTestThree";
    
        $cards = [$expValue, $expValue, $expValueThree];
        foreach ($cards as $card) {
            $mockCard = $this->createStub(Card::class);
            $mockCard->method('getAsString')->willReturn($card);
            $deckOfCards->addCard($mockCard);
        }

        $exp = "cardTestcardTestcardTestThree";
        $res = $deckOfCards->getAsString();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test add some cards and get a sorted deck
     */
    public function testGetSortedDeck()
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
    public function testGetSortedDeckJson()
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
