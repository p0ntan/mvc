<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class Card
 */
class CardTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreateCardNoArgument(): void
    {
        $card = new Card();

        $expValue = 0;
        $expSuit = "joker";

        $resValue = $card->getValue();
        $resSuit = $card->getSuit();

        $this->assertInstanceOf("\App\Card\Card", $card);
        $this->assertEquals($expValue, $resValue);
        $this->assertEquals($expSuit, $resSuit);
    }

    /**
     * Construct object and verify that the object has the expected
     * properties, with argument.
     */
    public function testCreateCardWithArgument(): void
    {
        $card = new Card("hearts", 4);

        $expValue = 4;
        $expSuit = "hearts";

        $resValue = $card->getValue();
        $resSuit = $card->getSuit();

        $this->assertInstanceOf("\App\Card\Card", $card);
        $this->assertEquals($expValue, $resValue);
        $this->assertEquals($expSuit, $resSuit);
    }

    /**
     * Test method to get card as a string
     */
    public function testGetAsString(): void
    {
        $cardKing = new Card("spades", 13);
        $expStrKing = "King of spades";
        $resStrKing = $cardKing->getAsString();
        $this->assertEquals($expStrKing, $resStrKing);

        $cardFour = new Card("diamonds", 4);
        $expStrFour = "4 of diamonds";
        $resStrFour = $cardFour->getAsString();
        $this->assertEquals($expStrFour, $resStrFour);
    }

    /**
     * Test method to get card as a json
     */
    public function testGetAsJson(): void
    {
        $card = new Card("clubs", 11);
        $exp = [
            "suit" => "clubs",
            "value" => 11,
            "name" => "Knight of clubs"
        ];
        $res = $card->getAsJson();
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
    }
}
