<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeGame
 */
class EscapeGameTest extends TestCase
{
    /** @var mixed */
    private $escapeGame;

    /**
     * Create the EscapeRoom instance before each test
     */
    protected function setUp(): void
    {
        parent::setUp();

        $this->escapeGame = new EscapeGame();
    }

    /**
     * Tear down after each test
     */
    protected function tearDown(): void
    {
        $this->escapeGame = null;

        parent::tearDown();
    }

    /**
     * Test instance and verify that it is the right class
     */
    public function testIsGameOver(): void
    {
        $escapeGame = $this->escapeGame;

        $this->assertInstanceOf("\App\EscapeGame\EscapeGame", $escapeGame);
        $this->assertFalse($this->escapeGame->isGameOver());
    }

    /**
     * Test to add rooms to game
     */
    public function testAddRoom(): void
    {
        $escapeGame = $this->escapeGame;

        // Adding one room
        $mockRoom = $this->createMock(EscapeRoom::class);
        $escapeGame->addRoom($mockRoom);

        $res = $escapeGame->getRooms();
        $exp = [$mockRoom];
        $this->assertEquals($exp, $res);
        $this->assertCount(1, $res);

        // Adding rooms
        $rooms = [
            $this->createMock(EscapeRoom::class),
            $this->createMock(EscapeRoom::class),
        ];
        $escapeGame->addRooms($rooms);
        $res = $escapeGame->getRooms();
        $this->assertCount(3, $res);
    }

    /**
     * Test to set and get inventory
     */
    public function testSetAndGetInventory(): void
    {
        $escapeGame = $this->escapeGame;
        $mockInventory = $this->createMock(Inventory::class);

        $escapeGame->setInventory($mockInventory);
        $res = $escapeGame->getInventory();
        $this->assertInstanceOf("\App\EscapeGame\Inventory", $res);
    }

    /**
     * Test to set and get game over
     */
    public function testSetAndGetGameOver(): void
    {
        $escapeGame = $this->escapeGame;

        $res = $escapeGame->isGameOver();
        $this->assertFalse($res);

        $escapeGame->setGameOver(true);
        $res = $escapeGame->isGameOver();
        $this->assertTrue($res);
    }

    /**
     * Test to add room to game and perform action on object in room
     */
    public function testPickUpActionOnObject(): void
    {
        $action = new ActionPickUp();
        $inventory = new Inventory();
        $object = $this->createMock(EscapeObject::class);
        $object->method('getActions')
        ->willReturn(["pickUp" => $action]);
        $escapeGame = $this->escapeGame;
        $escapeGame->setInventory($inventory);
        $escapeGame->actionOnObject($object, "pickUp");

        $res = $escapeGame->getInventory();
        $exp = $inventory;
        $this->assertSame($exp, $res);

        $res = $inventory->getItems();
        $exp = [$object];
        $this->assertSame($exp, $res);
    }
}
