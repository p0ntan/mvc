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

        $mockActionOff = $this->createMock(ActionInterface::class);
        $mockActionOn = $this->createMock(ActionInterface::class);
        $data = [
            'id' => 1,
            'name' => 'test',
            'info' => 'Infotest',
            'position' => [2, 5],
            'actionsOff' => [$mockActionOff],
            'actionsOn' => [$mockActionOn],
            'img' => 'image.png',
            'imgActive' => 'active.png',
            'inRoom' => 1
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
        $this->assertFalse($this->escapeObject->isOn());
        $this->assertFalse($this->escapeObject->isActive());
        $this->assertNull($this->escapeObject->getInnerObject());
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
     * Test to get actions, both on and off by changing isOn property
     */
    public function testGetActionAndIsOn(): void
    {
        $mockActionOff = $this->createMock(ActionInterface::class);
        $mockActionOn = $this->createMock(ActionInterface::class);
        $data = [
            'id' => 1,
            'name' => 'test',
            'info' => '',
            'position' => [2, 5],
            'actionsOff' => [$mockActionOff],
            'actionsOn' => [$mockActionOn],
            'img' => '',
            'imgActive' => '',
            'inRoom' => 1
        ];

        $escapeObject = new EscapeObject($data);

        // Test to get actions when isOn is false
        $res = $escapeObject->getActions();
        $this->assertIsArray($res);
        $this->assertSame($mockActionOff, $res[0]);

        // Changing state of isOn property
        $escapeObject->setIsOn(true);

        // Test to get actions when isOn is true
        $res = $escapeObject->getActions();
        $this->assertIsArray($res);
        $this->assertSame($mockActionOn, $res[0]);
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
     * Test to get img and getImgActive
     */
    public function testGetUrl(): void
    {
        $escapeObject = $this->escapeObject;

        // Test to get img when isActive is false
        $img = $escapeObject->getImg();
        $exp = 'image.png';
        $this->assertEquals($exp, $img);

        // Test to get img when isActive is true
        $img = $escapeObject->getImgActive();
        $exp = 'active.png';
        $this->assertEquals($exp, $img);
    }

    /**
     * Test to set and get isActive
     */
    public function testSetAndGetIsActive(): void
    {
        $escapeObject = $this->escapeObject;

        $this->assertFalse($escapeObject->isActive());

        $escapeObject->setIsActive(true);
        $this->assertTrue($escapeObject->isActive());
    }

    /**
     * Test to set and get innerObject
     */
    public function testSetAndGetInnerObject(): void
    {
        $escapeObject = $this->escapeObject;
        $mockObject = $this->createMock(EscapeObject::class);

        $this->assertNull($escapeObject->getInnerObject());

        $escapeObject->setInnerObject($mockObject);
        $res = $escapeObject->getInnerObject();
        $this->assertSame($mockObject, $res);
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
