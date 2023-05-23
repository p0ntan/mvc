<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeObject
 */
class EscapeObjectTest extends TestCase
{
    /** @var mixed */
    private $escapeObject;

    /**
     * Create the EscapeObject instance before each test
     */
    protected function setUp(): void
    {
        parent::setUp();

        $data = [
            'id' => 1,
            'name' => 'test',
            'info' => 'Infotest',
            'innerInfo' => 'Infotest active',
            'position' => [2, 5],
            'size' => [12, 12],
            'img' => 'image.png',
            'inRoom' => 1,
            'inObject' => -1
        ];

        $this->escapeObject = new EscapeObject($data);
    }

    /**
     * Tear down after each test
     */
    protected function tearDown(): void
    {
        $this->escapeObject = null;

        parent::tearDown();
    }

    /**
     * Test instance and verify that it is the right class
     */
    public function testEscapeObject(): void
    {
        $escapeObject = $this->escapeObject;

        $this->assertInstanceOf("\App\EscapeGame\EscapeObject", $escapeObject);
        $this->assertFalse($this->escapeObject->isPicked());
        $this->assertIsArray($this->escapeObject->getInnerObjects());
    }

    /**
     * Test to get right id, name and info
     */
    public function testGetIdNameInfo(): void
    {
        $escapeObject = $this->escapeObject;

        // Test to get info
        $res = $escapeObject->getInfo();
        $exp = "Infotest";
        $this->assertEquals($exp, $res);

        // Test to get id
        $res = $escapeObject->getId();
        $exp = 1;
        $this->assertEquals($exp, $res);

        // Test to get info
        $res = $escapeObject->getName();
        $exp = "test";
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to get actions
     */
    public function testGetAction(): void
    {
        $data = [
            'id' => 1,
            'name' => 'test',
            'info' => '',
            'innerInfo' => 'Infotest active',
            'position' => [2, 5],
            'size' => [12, 12],
            'img' => '',
            'inRoom' => 1,
            'inObject' => -1
        ];

        $escapeObject = new EscapeObject($data);

        // Add actions
        $mockAction = $this->createMock(ActionInterface::class);
        $mockPick = $this->createMock(ActionInterface::class);
        $escapeObject->addAction($mockAction, "action");
        $escapeObject->addAction($mockPick, "pick");
        // Test to get actions
        $res = $escapeObject->getActions();
        $this->assertIsArray($res);
        $this->assertCount(2, $res);
        $this->assertSame($mockAction, $res["action"]);
        $this->assertSame($mockPick, $res["pick"]);
    }

    /**
     * Test to get positions
     */
    public function testGetPosition(): void
    {
        $escapeObject = $this->escapeObject;

        $position = $escapeObject->getPosition();
        $exp = [2, 5];
        $this->assertIsArray($position);
        $this->assertSame($exp, $position);
    }

    /**
     * Test to get psize
     */
    public function testGetSize(): void
    {
        $escapeObject = $this->escapeObject;

        $size = $escapeObject->getSize();
        $exp = [12, 12];
        $this->assertIsArray($size);
        $this->assertSame($exp, $size);
    }

    /**
     * Test to get img and getImgActive
     */
    public function testGetUrl(): void
    {
        $escapeObject = $this->escapeObject;

        // Test to get img
        $img = $escapeObject->getImg();
        $exp = 'image.png';
        $this->assertEquals($exp, $img);
    }

    /**
     * Test to get inRoom
     *
     */
    public function testGetInRoom(): void
    {
        $escapeObject = $this->escapeObject;

        $res = $escapeObject->getInRoom();
        $exp = 1;
        $this->assertEquals($exp, $res);
    }

    /**
     * Test to set and get innerObject
     */
    public function testSetAndGetInnerObject(): void
    {
        $escapeObject = $this->escapeObject;
        $mockObject = $this->createMock(EscapeObject::class);

        $res = $escapeObject->getInnerObjects();
        $this->assertIsArray($res);
        $this->assertCount(0, $res);

        $escapeObject->addInnerObject($mockObject);
        $res = $escapeObject->getInnerObjects();
        $this->assertSame($mockObject, $res[0]);
    }

    /**
     * Test to get EscapeObject as JSON
     */
    public function testToJson(): void
    {
        $escapeObject = $this->escapeObject;

        $json = $escapeObject->asJson();
        $this->assertIsArray($json);
    }
}
