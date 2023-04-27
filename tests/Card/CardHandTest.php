<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;
use TypeError;

/**
 * Class for testing cases for class CardHand
 */
class CardHandTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments and control with default variables.
     */
    public function testCreateCardHand(): void
    {
        $cardHand = new CardHand();
        $res = $cardHand->getCards();
        $noOfCards = $cardHand->cardsInHand(); // Default 0
        $resValue = $cardHand->getBet(); // Default 0
        $resBet = $cardHand->getPoints(); // Default 0
        $resDone = $cardHand->isDone(); // Default false

        $this->assertInstanceOf("\App\Card\CardHand", $cardHand);
        $this->assertIsArray($res);
        $this->assertEquals(0, $noOfCards); // No cards in hand
        $this->assertEquals(0, $resValue);
        $this->assertEquals(0, $resBet);
        $this->assertEquals(false, $resDone);
    }

    /**
     * Test for adding and getting back a single card
     */
    public function testAddAndGetCard(): void
    {
        $cardHand = new CardHand();
        $card = new Card();
        $cardHand->addCard($card);
        $resCard = $cardHand->getCards();
        $noOfCards = $cardHand->cardsInHand();

        $this->assertIsArray($resCard);
        $this->assertEquals($card, $resCard[0]);
        $this->assertEquals(1, $noOfCards); // One card in hand
    }

    /**
     * Test for adding something that isn't a Card
     */
    public function testAddCardFail(): void
    {
        $cardHand = new CardHand();
        $card = "card";
        $this->expectException(TypeError::class);
        $cardHand->addCard("card");
    }

    /**
     * Test for adding and getting back a multiple cards
     */
    public function testAddAndGetMultipleCards(): void
    {
        $cardHand = new CardHand();
        $cards = [new Card(), new Card(), new Card(), new Card()];
        $cardHand->addCards($cards);
        $resCard = $cardHand->getCards();
        $noOfCards = $cardHand->cardsInHand();

        $this->assertIsArray($resCard);
        for ($i = 0; $i < $noOfCards; $i++) { 
            $this->assertEquals($cards[$i], $resCard[$i]);
        }
        $this->assertEquals(4, $noOfCards); // Four cards in hand
    }

    /**
     * Test for remove last card in hand
     */
    public function testRemoveLastCard(): void
    {
        $cardHand = new CardHand();
        $lastCard = new Card("hearts", 2);
        $cards = [new Card(), new Card(), new Card(), $lastCard];

        $cardHand->addCards($cards);
        $noOfCards = $cardHand->cardsInHand();
        $resHand = $cardHand->getCards();
        $this->assertContains($lastCard, $resHand);
        $this->assertEquals(4, $noOfCards); // Four cards in hand

        $removedCard = $cardHand->removeLast();
        $noOfCards = $cardHand->cardsInHand();
        $resHand = $cardHand->getCards();
        $this->assertEquals(3, $noOfCards); // Three cards in hand
        $this->assertEquals($lastCard, $removedCard);
        $this->assertNotContains($lastCard, $resHand);
    }

    /**
     * Test for remove last card in an empty hand
     */
    public function testRemoveLastCardEmptyHand(): void
    {
        $cardHand = new CardHand();
        $noOfCards = $cardHand->cardsInHand();
        $resHand = $cardHand->getCards();
        $this->assertEquals(0, $noOfCards); // 0 cards in hand

        $removedCard = $cardHand->removeLast();
        $noOfCards = $cardHand->cardsInHand();
        $resHand = $cardHand->getCards();
        $this->assertEquals(0, $noOfCards); // 0 cards in hand
        $this->assertNull($removedCard);
    }

    /**
     * Test to set and get hand outcome
     */
    public function testSetAndGetOutcome(): void
    {
        $cardHand = new CardHand();
        $exp = "draw";
        $res = $cardHand->getOutcome();
        $this->assertEquals($exp, $res);

        $cardHand->setOutcome("win");
        $exp = "win";
        $res = $cardHand->getOutcome();
        $this->assertEquals($exp, $res);

        $cardHand->setOutcome("lose");
        $exp = "lose";
        $res = $cardHand->getOutcome();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get when hand is done
     */
    public function testSetAndGetIsDone(): void
    {
        $cardHand = new CardHand();
        $exp = false;
        $res = $cardHand->isDone();
        $this->assertEquals($exp, $res);

        $cardHand->setDone(true);
        $exp = true;
        $res = $cardHand->isDone();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get when hand is done with wrong datatype.
     */
    public function testSetAndGetIsDoneWrongType(): void
    {
        $cardHand = new CardHand();

        // Method will convert input into a boolean
        $cardHand->setDone("212");
        $exp = true;
        $res = $cardHand->isDone();
        $this->assertEquals($exp, $res);

        $cardHand->setDone("");
        $exp = false;
        $res = $cardHand->isDone();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get points in the hand
     */
    public function testSetAndGetPoints(): void
    {
        $cardHand = new CardHand();
        $exp = 0;
        $res = $cardHand->getPoints();
        $this->assertEquals($exp, $res);

        $cardHand->setPoints(23);
        $exp = 23;
        $res = $cardHand->getPoints();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get points in the hand with wrong datatype
     */
    public function testSetAndGetPointsWrongType(): void
    {
        $cardHand = new CardHand();
        $this->expectException(TypeError::class);
        $cardHand->setPoints("tjena");
    }

    /**
     * Test to set and get bet
     */
    public function testSetAndGetBet(): void
    {
        $cardHand = new CardHand();
        $exp = 0;
        $res = $cardHand->getBet();
        $this->assertEquals($exp, $res);

        $cardHand->setBet(23);
        $exp = 23;
        $res = $cardHand->getBet();
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get bet with wrong datatype
     */
    public function testSetAndGetBetWrongType(): void
    {
        $cardHand = new CardHand();
        $this->expectException(TypeError::class);
        $cardHand->setBet("all money");
    }

    /**
     * Test to get hand as json
     */
    public function testGetAsJson(): void
    {
        $cardHand = new CardHand();
        // First test empty hand
        $res = $cardHand->getHandAsJson();
        $this->assertIsArray($res);
        $this->assertCount(0, $res); // Expecting empty array

        // Then with two mock cards that returns the same array
        $stubReturn = [
            "suit" => "mock",
            "value" => "mock",
            "name" => "mock"
        ];
        $mockCard = $this->createStub(Card::class);
        $mockCard->method("getAsJson")->willReturn($stubReturn);
        $mockCardTwo = $this->createStub(Card::class);
        $mockCardTwo->method("getAsJson")->willReturn($stubReturn);
        $cards = [$mockCard, $mockCardTwo];
        $cardHand->addCards($cards);

        $exp = [$stubReturn, $stubReturn];
        $res = $cardHand->getHandAsJson();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }
}
