<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class all actions
 */
class ActionsTest extends TestCase
{
    public function testActionPickUp(): void
    {
        $action = new ActionPickUp();
        $exp = "Lägg i ryggsäck";
        $res = $action->getName();
        $this->assertSame($exp, $res);

        $object = $this->createMock(EscapeObject::class);
        $mockInventory = $this->createMock(Inventory::class);

        $action->execute($object, $mockInventory);
    }

    public function testActionLookCloser(): void
    {
        $action = new ActionLookCloser();
        $exp = "Titta närmare";
        $res = $action->getName();
        $this->assertSame($exp, $res);

        $object = $this->createMock(EscapeObject::class);
        $action->execute($object);
    }

    public function testActionMoveDown(): void
    {
        $action = new ActionMoveDown();
        $exp = "Flytta";
        $res = $action->getName();
        $this->assertSame($exp, $res);

        $data = [
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
        ];
        $object = new EscapeObject($data);
        $action->execute($object);
        $exp = [31, 63];
        $res = $object->getPosition();
        $this->assertSame($exp, $res);
    }

    public function testActionOpenDoor(): void
    {
        $action = new ActionOpenDoor();
        $exp = "Lås upp och öppna";
        $res = $action->getName();
        $this->assertSame($exp, $res);

        $game = new EscapeGame();
        $res = $game->isGameOver();
        $this->assertFalse($res);

        $object = $this->createMock(EscapeObject::class);
        $action->execute($object, $game);
        $res = $game->isGameOver();
        $this->assertTrue($res);
    }

    public function testActionTakeKey(): void
    {
        $action = new ActionTakeKey();
        $exp = "Plocka upp nyckel";
        $res = $action->getName();
        $this->assertSame($exp, $res);

        $data = [
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
        ];
        $object = new EscapeObject($data);
        $objectTwo = new EscapeObject($data);
        $inventory = new Inventory();

        $action->execute($object, $objectTwo, $inventory);
        $res = $object->isHidden();
        $this->assertTrue($res);

        $res = $objectTwo->getActions();
        $this-> assertInstanceOf("\App\EscapeGame\ActionOpenDoor", $res["openDoor"]);
    }
}
