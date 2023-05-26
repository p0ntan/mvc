<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeGame
 */
class EscapeGameTestTwo extends TestCase
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
     * Test to change current room
     */
    public function testChangeCurrentRoom(): void
    {
        $escapeGame = $this->escapeGame;
        $roomOne = new EscapeRoom([
            'id' => 10,
            'info' => '',
            'img' => '',
            'firstRoom' => true
        ]);
        $roomTwo = new EscapeRoom([
            'id' => 12,
            'info' => '',
            'img' => '',
            'firstRoom' => false
        ]);

        $escapeGame->addRoom($roomOne);
        $escapeGame->addRoom($roomTwo);

        $res = $escapeGame->getCurrentRoom();
        $this->assertSame($roomOne, $res);

        $escapeGame->changeCurrentRoom(10, 12);
        $res = $escapeGame->getCurrentRoom();
        $this->assertSame($roomTwo, $res);
    }

    /**
     * Test to get any object that don't exist
     */
    public function testGetObjectFail(): void
    {
        $escapeGame = $this->escapeGame;

        $objectOne = $this->createMock(EscapeObject::class);
        $objectOne->method('getId')->willReturn(1);
        $objectTwo = $this->createMock(EscapeObject::class);
        $objectTwo->method('getId')->willReturn(2);
        $objectThree = $this->createMock(EscapeObject::class);
        $objectThree->method('getId')->willReturn(3);
        $room = $this->createMock(EscapeRoom::class);
        $room->method('getObjects')->willReturn([$objectOne, $objectTwo, $objectThree]);
        $escapeGame->addRoom($room);
        $this->expectException(ObjectNotFoundException::class);
        $escapeGame->getAnyObject(5);
    }

    /**
     * Test action on object, ActionOpenDoor
     */
    public function testActionOpenDoor(): void
    {
        $escapeGame = $this->escapeGame;

        $arrayKey = "openDoor";
        $action = new ActionOpenDoor();
        $mockObject = $this->createMock(EscapeObject::class);
        $mockObject->method('getActions')->willReturn([
            $arrayKey => $action
        ]);

        $escapeGame->actionOnObject($mockObject, $arrayKey);
        $res = $escapeGame->isGameOver();
        $this->assertTrue($res);
    }

    /**
     * Test action on object, ActionMoveDown
     */
    public function testActionMoveDown(): void
    {
        $escapeGame = $this->escapeGame;

        $arrayKey = "moveDown";
        $action = new ActionMoveDown();
        $object = new EscapeObject([
            'id' => 1,
            'name' => 'test',
            'info' => 'Infotest',
            'innerInfo' => 'Infotest active',
            'position' => [2, 5],
            'size' => [12, 12],
            'img' => 'image.png',
            'inRoom' => 1,
            'inObject' => -1,
            'isHidden' => false
        ]);
        $object->addAction($action, $arrayKey);

        $escapeGame->actionOnObject($object, $arrayKey);
        $res = $object->getPosition();
        $exp = [31, 63];
        $this->assertSame($exp, $res);
    }

    /**
     * Test action on object, ActionTakeKey
     */
    public function testActionTakeKey(): void
    {
        $escapeGame = $this->escapeGame;

        $arrayKey = "takeKey";
        $action = new ActionTakeKey();
        $object = new EscapeObject([
            'id' => 27,
            'name' => 'test',
            'info' => 'Infotest',
            'innerInfo' => 'Infotest active',
            'position' => [2, 5],
            'size' => [12, 12],
            'img' => 'image.png',
            'inRoom' => 1,
            'inObject' => -1,
            'isHidden' => false
        ]);
        $object->addAction($action, $arrayKey);
        $mockInventory = $this->createMock(Inventory::class);
        $mockRoom = $this->createMock(EscapeRoom::class);
        $mockRoom->method('getObjects')->willReturn([$object]);

        $escapeGame->addRoom($mockRoom);
        $escapeGame->setInventory($mockInventory);
        $escapeGame->actionOnObject($object, $arrayKey);
        $res = $object->isHidden();
        $this->assertTrue($res);
    }
}
