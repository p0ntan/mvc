<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class Card
 */
class CardGraphicTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreateCardGraphicNoArgument(): void
    {
        $card = new CardGraphic();

        $expValue = 0;
        $expSuit = "joker";

        $resValue = $card->getValue();
        $resSuit = $card->getSuit();

        $this->assertInstanceOf("\App\Card\CardGraphic", $card);
        $this->assertEquals($expValue, $resValue);
        $this->assertEquals($expSuit, $resSuit);
    }

    /**
     * Test method to get card as a classname
     */
    public function testGetClassName(): void
    {
        $card = new CardGraphic("hearts", 4);
        $exp = "card-sprite suit-hearts card-value-4";
        $res = $card->getClassName();

        $cardQueen = new CardGraphic("hearts", 12);
        $expQueen = "card-sprite suit-hearts card-value-12";
        $resQueen = $cardQueen->getClassName();

        $this->assertEquals($exp, $res);
        $this->assertEquals($expQueen, $resQueen);
    }

    /**
     * Test method get card as a graphic string
     */
    public function testGetAsGraphicString(): void
    {
        $cardJoker = new CardGraphic();
        $cardSix = new CardGraphic("clubs", 6);
        $cardKing = new CardGraphic("spades", 13);

        $expJoker = "[🂿 0]";
        $resJoker = $cardJoker->getAsGraphicString();
        $expSix = "[♣ 6]";
        $resSix = $cardSix->getAsGraphicString();
        $expKing = "[♠ K]";
        $resKing = $cardKing->getAsGraphicString();

        $this->assertEquals($expJoker, $resJoker);
        $this->assertEquals($expSix, $resSix);
        $this->assertEquals($expKing, $resKing);
    }
}
