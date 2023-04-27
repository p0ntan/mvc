<?php

namespace App\Card;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class DeckFactory
 */
class DeckFactoryTest extends TestCase
{
    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreateCardDeck(): void
    {
        $emptyDeck = new DeckOfCards();
        $deckFactory = new DeckFactory();
        $cardDeck = $deckFactory->createDeck($emptyDeck, "Card");

        $this->assertInstanceOf("\App\Card\DeckOfCards", $emptyDeck);
        $this->assertInstanceOf("\App\Card\DeckFactory", $deckFactory);
        $this->assertInstanceOf("\App\Card\DeckOfCards", $cardDeck);

        $expSize = 52;
        $resSize = $cardDeck->deckSize();
        $this->assertEquals($expSize, $resSize);

        $resArr = $cardDeck->giveCards();
        $this->assertIsArray($resArr);
        $this->assertInstanceOf("\App\Card\Card", $resArr[0]);
    }

    /**
     * Construct object and verify that the object has the expected
     * properties, use no arguments.
     */
    public function testCreateCardGraphicDeck(): void
    {
        $emptyDeck = new DeckOfCards();
        $deckFactory = new DeckFactory();
        $cardDeck = $deckFactory->createDeck($emptyDeck, "CardGraphic");

        $this->assertInstanceOf("\App\Card\DeckOfCards", $emptyDeck);
        $this->assertInstanceOf("\App\Card\DeckFactory", $deckFactory);
        $this->assertInstanceOf("\App\Card\DeckOfCards", $cardDeck);

        $expSize = 52;
        $resSize = $cardDeck->deckSize();
        $this->assertEquals($expSize, $resSize);

        $resArr = $cardDeck->giveCards();
        $this->assertIsArray($resArr);
        $this->assertInstanceOf("\App\Card\CardGraphic", $resArr[0]);
    }
}
