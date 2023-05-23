<?php

namespace App\EscapeGame;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for class EscapeDirection
 */
class EscapeDirectionTest extends TestCase
{
    /** @var mixed */
    private $escapeDirection;

    /**
     * Create the EscapeObject instance before each test
     */
    protected function setUp(): void
    {
        parent::setUp();

        $data = [
            'from_room' => 1,
            'to_room' => 2,
            'pos_x' => 10,
            'pos_y' => 20,
            'direction' => 'north'
        ];

        $this->escapeDirection = new EscapeDirection($data);
    }

    /**
     * Tear down after each test
     */
    protected function tearDown(): void
    {
        $this->escapeDirection = null;

        parent::tearDown();
    }

    public function testGetFromRoom(): void
    {
        $escapeDirection = $this->escapeDirection;
        $exp = 1;
        $res = $escapeDirection->getFromRoom();
        $this->assertSame($exp, $res);
    }

    public function testGetToRoom(): void
    {
        $escapeDirection = $this->escapeDirection;
        $exp = 2;
        $res = $escapeDirection->getToRoom();
        $this->assertSame($exp, $res);
    }

    public function testGetPosX(): void
    {
        $escapeDirection = $this->escapeDirection;
        $exp = 10;
        $res = $escapeDirection->getPosX();
        $this->assertSame($exp, $res);
    }

    public function testGetPosY(): void
    {
        $escapeDirection = $this->escapeDirection;
        $exp = 20;
        $res = $escapeDirection->getPosY();
        $this->assertSame($exp, $res);
    }

    public function testGetDirection(): void
    {
        $escapeDirection = $this->escapeDirection;
        $exp = 'north';
        $res = $escapeDirection->getDirection();
        $this->assertSame($exp, $res);
    }
}
