<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeRoom
 */
class EscapeRoomTest extends TestCase
{
    /** @var mixed */
    private $escapeRoom;

    /**
     * Create the EscapeRoom instance before each test
     */
    protected function setUp(): void
    {
        parent::setUp();

        $data = [
            'id' => 10,
            'info' => 'Infotest',
            'img' => 'image.png',
            'firstRoom' => true
        ];

        $this->escapeRoom = new EscapeRoom($data);
    }

    /**
     * Tear down after each test
     */
    protected function tearDown(): void
    {
        $this->escapeRoom = null;

        parent::tearDown();
    }

    /**
     * Test instance and verify that it is the right class
     */
    public function testEscapeFirstRoom(): void
    {
        $escapeRoom = $this->escapeRoom;

        $this->assertInstanceOf("\App\EscapeGame\EscapeRoom", $escapeRoom);
        $this->assertTrue($this->escapeRoom->isCurrentRoom());
    }

    /**
     * Test to get id and info
     */
    public function testGetIdAndInfo(): void
    {
        $escapeRoom = $this->escapeRoom;
        $res = $escapeRoom->getId();
        $exp = 10;
        $this->assertEquals($exp, $res);
        $res = $escapeRoom->getInfo();
        $exp = "Infotest";
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get currentRoom
     */
    public function testSetAndGetCurrentRoom(): void
    {
        $escapeRoom = $this->escapeRoom;

        $current = $escapeRoom->isCurrentRoom();
        $this->assertTrue($current);

        $escapeRoom->setCurrentRoom(false);
        $current = $escapeRoom->isCurrentRoom();
        $this->assertFalse($current);
    }

    /**
     * Test to get img
     */
    public function testGetImg(): void
    {
        $escapeRoom = $this->escapeRoom;

        $res = $escapeRoom->getImg();
        $exp = "image.png";
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to add multiple escapeObjects in an array
     */
    public function testAddMultipleObjects(): void
    {
        $escapeRoom = $this->escapeRoom;

        $mockObject = $this->createMock(EscapeObject::class);
        $mockObjectTwo = $this->createMock(EscapeObject::class);
        $objects = [$mockObject, $mockObjectTwo];

        $res = $escapeRoom->getObjects();
        $this->assertIsArray($res);
        $this->assertCount(0, $res);

        $escapeRoom->addObjects($objects);
        $res = $escapeRoom->getObjects();
        $this->assertIsArray($res);
        $this->assertCount(2, $res);
        $this->assertSame($objects, $res);
    }

    /**
     * Test to add single object to room
     */
    public function testAddObject(): void
    {
        $escapeRoom = $this->escapeRoom;

        $mockObject = $this->createMock(EscapeObject::class);
        $escapeRoom->addObject($mockObject);

        $res = $escapeRoom->getObjects();
        $exp = [$mockObject];
        $this->assertIsArray($res);
        $this->assertCount(1, $res);
        $this->assertSame($exp, $res);
    }
}
