<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeObject
 */
class EscapeObjectTestTwo extends TestCase
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
            'inObject' => -1,
            'isHidden' => false
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
     * Test to set and get one innerObject
     */
    public function testSetAndGetInnerOneObject(): void
    {
        $escapeObject = $this->escapeObject;
        $idNum = 1;
        $mockObject = $this->createMock(EscapeObject::class);
        $mockObject->method('getId')->willReturn($idNum);

        $escapeObject->addInnerObject($mockObject);
        $res = $escapeObject->getOneInnerObject($idNum);
        $exp = $mockObject;
        $this->assertSame($exp, $res);

        // Wrong id
        $idNum = 2;
        $this->expectException(ObjectNotInRoomException::class);
        $escapeObject->getOneInnerObject($idNum);
    }

    /**
     * Test to set and get one innerObject
     */
    public function testSetAndGetInnerObjectFail(): void
    {
        $escapeObject = $this->escapeObject;
        $idNum = 1;
        $mockObject = $this->createMock(EscapeObject::class);
        $mockObject->method('getId')->willReturn($idNum);

        // Without any objects added
        $res = $escapeObject->getInnerObjects();
        $this->assertIsArray($res);
        $this->assertCount(0, $res);
        $this->expectException(ObjectNotInRoomException::class);
        $escapeObject->getOneInnerObject($idNum);
    }

    /**
     * Test to set isHidden and get isHidden
     */
    public function testSetAndGetIsHidden(): void
    {
        $escapeObject = $this->escapeObject;

        $res = $escapeObject->isHidden();
        $this->assertFalse($res);

        $escapeObject->setIsHidden(true);
        $res = $escapeObject->isHidden();
        $this->assertTrue($res);
    }

    /**
     * Test to get inObject
     */
    public function testGetInObject(): void
    {
        $escapeObject = $this->escapeObject;
        $exp = -1;
        $res = $escapeObject->getInObject();
        $this->assertSame($exp, $res);
    }
}
