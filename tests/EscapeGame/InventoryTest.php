<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class Inventory
 */
class InventoryTest extends TestCase
{
    /**
     * Test to get items from inventory when empty
     */
    public function testEmptyInventory(): void
    {
        $inventory = new Inventory();

        $res = $inventory->getItems();
        $exp = [];
        $this->assertIsArray($res);
        $this->assertEquals($exp, $res);
        $this->assertCount(0, $res);
    }

    /**
     * Test to add item to inventory
     */
    public function testAddAndGetItem(): void
    {
        $inventory = new Inventory();
        $res = $inventory->getItems();

        $mockObject = $this->createMock(EscapeObject::class);
        $mockObjectTwo = $this->createMock(EscapeObject::class);
        $inventory->addItem($mockObject);
        $inventory->addItem($mockObjectTwo);

        $res = $inventory->getItems();
        $this->assertIsArray($res);
        $this->assertCount(2, $res);
        $this->assertSame($mockObject, $res[0]);
        $this->assertSame($mockObjectTwo, $res[1]);
    }

    /**
     * Test to add item to inventory using actionPickUp
     */
    public function testAddItemUsingActionPickUp(): void
    {
        $inventory = new Inventory();
        $action = new ActionPickUp();
        $mockObject = $this->createMock(EscapeObject::class);

        $action->execute($mockObject, $inventory);

        $res = $inventory->getItems();
        $exp = [$mockObject];
        $this->assertIsArray($res);
        $this->assertCount(1, $res);
        $this->assertSame($exp, $res);
    }
}
