<?php

namespace App\EscapeGame;

use App\Entity\EscapeRoom as RoomEntity;
use App\Entity\EscapeObject as ObjectEntity;
use App\Entity\EscapeAction as ActionEntity;
use App\Entity\EscapeMovement as MoveEntity;
use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;
use App\Repository\EscapeActionRepository;
use App\Repository\EscapeMovementRepository;

use PHPUnit\Framework\TestCase;

/**
 * Test cases for EscapeGameInitalizer
 */
class EscapeGameInitalizerTest extends TestCase
{
    /** @var mixed */
    private $mockRepoRoom;
    /** @var mixed */
    private $mockRepoObject;
    /** @var mixed */
    private $mockRepoAction;
    /** @var mixed */
    private $mockRepoMovement;

    /**
     * Create mocks for repositories used
     */
    protected function setUp(): void
    {
        parent::setUp();

        // Mock room entity and repo
        $mockRoom = $this->createMock(RoomEntity::class);
        $mockRoom->method('getId')->willReturn(1);
        $mockRoom->method('getInfo')->willReturn('Info om rummet');
        $mockRoom->method('getImg')->willReturn('testrum.png');
        $mockRoom->method('isFirstRoom')->willReturn(true);
        $mockRoomRepo = $this->createMock(EscapeRoomRepository::class);
        $mockRoomRepo->method('findAll')->willReturn([$mockRoom]);

        // Mock object entity and repo
        $mockObject = $this->createMock(ObjectEntity::class);
        $mockObject->method('getId')->willReturn(3);
        $mockObject->method('getName')->willReturn('testobject');
        $mockObject->method('getInfo')->willReturn('Info om objektet');
        $mockObject->method('getInfoInner')->willReturn('Mer info');
        $mockObject->method('getPositionX')->willReturn(20);
        $mockObject->method('getPositionY')->willReturn(10);
        $mockObject->method('getSizeX')->willReturn(15);
        $mockObject->method('getSizeY')->willReturn(25);
        $mockObject->method('getImg')->willReturn('testobject.png');
        $mockObject->method('getInRoom')->willReturn(1);
        $mockObject->method('getInObject')->willReturn(-1);
        $mockObject->method('isHidden')->willReturn(false);

        $mockObjectTwo = $this->createMock(ObjectEntity::class);
        $mockObjectTwo->method('getId')->willReturn(10);
        $mockObjectTwo->method('getName')->willReturn('testobject');
        $mockObjectTwo->method('getInfo')->willReturn('Info om objektet');
        $mockObjectTwo->method('getInfoInner')->willReturn('Mer info');
        $mockObjectTwo->method('getPositionX')->willReturn(20);
        $mockObjectTwo->method('getPositionY')->willReturn(10);
        $mockObjectTwo->method('getSizeX')->willReturn(15);
        $mockObjectTwo->method('getSizeY')->willReturn(25);
        $mockObjectTwo->method('getImg')->willReturn('testobject.png');
        $mockObjectTwo->method('getInRoom')->willReturn(1);
        $mockObjectTwo->method('getInObject')->willReturn(3);
        $mockObjectTwo->method('isHidden')->willReturn(false);

        $mockObjectRepo = $this->createMock(EscapeObjectRepository::class);
        $mockObjectRepo->method('findAll')->willReturn([$mockObject, $mockObjectTwo]);
        $mockObjectRepo->method('findOneBy')->willReturn($mockObject);

        // Mock action entity and repo
        $mockAction = $this->createMock(ActionEntity::class);
        $mockAction->method('getName')->willReturn('moveDown');
        $mockActionRepo = $this->createMock(EscapeActionRepository::class);
        $mockActionRepo->method('findOneBy')->willReturn($mockAction);

        // Mock direction entity and repo
        $mockMovement = $this->createMock(MoveEntity::class);
        $mockMovement->method('getRoomId')->willReturn(1);
        $mockMovement->method('getToRoom')->willReturn(4);
        $mockMovement->method('getPositionX')->willReturn(20);
        $mockMovement->method('getPositionY')->willReturn(10);
        $mockMovement->method('getDirection')->willReturn("left");
        $mockMovementRepo = $this->createMock(EscapeMovementRepository::class);
        $mockMovementRepo->method('findAll')->willReturn([$mockMovement]);

        $this->mockRepoRoom = $mockRoomRepo;
        $this->mockRepoObject = $mockObjectRepo;
        $this->mockRepoAction = $mockActionRepo;
        $this->mockRepoMovement = $mockMovementRepo;
    }

    /**
     * Tear down after each test
     */
    protected function tearDown(): void
    {
        $this->mockRepoRoom = null;
        $this->mockRepoObject = null;
        $this->mockRepoAction = null;
        $this->mockRepoMovement = null;

        parent::tearDown();
    }

    /**
     * Test initGame
     */
    public function testInitGame(): void
    {
        $escapeGame = new EscapeGame();
        $initilizer = new EscapeGameInitalizer();
        $escapeGame = $initilizer->initGame(
            $escapeGame,
            $this->mockRepoRoom,
            $this->mockRepoObject,
            $this->mockRepoAction,
            $this->mockRepoMovement
        );

        $res = $escapeGame->getCurrentRoom();
        $this->assertInstanceOf("\App\EscapeGame\EscapeRoom", $res);
        $this->assertTrue($res->isCurrentRoom());

        $objId = 3;
        $res = $escapeGame->getAnyObject($objId);
        $this->assertInstanceOf("\App\EscapeGame\EscapeObject", $res);

        $resAction = $res->getActions();
        $this->assertIsArray($resAction);
        $this->assertInstanceOf("\App\EscapeGame\ActionMoveDown", $resAction['moveDown']);
    }
}
