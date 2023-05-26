<?php

namespace App\EscapeGame;

use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;
use App\Repository\EscapeActionRepository;
use App\Repository\EscapeMovementRepository;

/**
 * EscapeGameInitalizer class initialization of the escape game.
 * This class purpose is to inject all the necessary dependencies into EscapeGame class
 */
class EscapeGameInitalizer
{
    public function initGame(
        EscapeGame $escapeGame,
        EscapeRoomRepository $roomRepository,
        EscapeObjectRepository $objectRepository,
        EscapeActionRepository $actionRepository,
        EscapeMovementRepository $escapeMovementRepo
    ): EscapeGame {
        $allObjects = $this->initObjects($objectRepository);
        $allRooms = $this->initRooms($roomRepository);
        $allDirections = $this->initDirections($escapeMovementRepo);
        $this->addActionsToObjects($actionRepository, $objectRepository, $allObjects);
        $this->addObjectsToObject($allObjects);
        $this->addObjectsToRoom($allObjects, $allRooms);
        $this->addDirectionsToRoom($allDirections, $allRooms);

        foreach ($allRooms as $room) {
            $escapeGame->addRoom($room);
        }

        return $escapeGame;
    }

    /**
     * Function to create all objects from database
     *
     * @return array<EscapeObject>
     */
    private function initObjects(
        EscapeObjectRepository $objectRepository
    ): array {
        $objects = $objectRepository->findAll();
        $resObjects = [];
        foreach ($objects as $object) {
            $data = [
                'id' => $object->getId(),
                'name' => $object->getName(),
                'info' => $object->getInfo(),
                'innerInfo' => $object->getInfoInner(),
                'position' => [$object->getPositionX(), $object->getPositionY()],
                'size' => [$object->getSizeX(), $object->getSizeY()],
                'img' => $object->getImg(),
                'inRoom' => $object->getInRoom(),
                'inObject' => $object->getInObject(),
                'isHidden' => $object->isHidden()
            ];
            $newObject = new EscapeObject($data);
            $resObjects[] = $newObject;
        }
        return $resObjects;
    }

    /**
     * Function to add actions to objects
     * @param EscapeActionRepository $actionRepository
     * @param array<EscapeObject> $objects
     */
    private function addActionsToObjects(
        EscapeActionRepository $actionRepository,
        EscapeObjectRepository $objectRepository,
        array $objects
    ): void {
        $actionInstances = [
            'lookCloser' => new ActionLookCloser(),
            'pickUp' => new ActionPickUp(),
            'moveDown' => new ActionMoveDown(),
            'takeKey' => new ActionTakeKey()
        ];
        foreach ($objects as $object) {
            $objectId = $object->getId();
            /**  @var mixed $objectData */
            $objectData = $objectRepository->findOneBy(['id' => $objectId]);
            $actionId = $objectData->getActionId();
            $action = $actionRepository->findOneBy(['id' => $actionId]);
            if ($action) {
                $actionName = strval($action->getName());
                $object->addAction($actionInstances[$actionName], $actionName);
            }
        }
    }

    /**
     * Function to create all rooms from database
     *
     * @return array<EscapeRoom>
     */
    private function initRooms(
        EscapeRoomRepository $roomRepository
    ): array {
        $resRooms = [];
        $rooms = $roomRepository->findAll();

        foreach ($rooms as $room) {
            $data = [
                'id' => $room->getId(),
                'info' => $room->getInfo(),
                'img' => $room->getImg(),
                'firstRoom' => $room->isFirstRoom()
            ];
            $newRoom = new EscapeRoom($data);
            $resRooms[] = $newRoom;
        }
        return $resRooms;
    }

    /**
     * Function to create all directions from database
     *
     * @return array<EscapeDirection>
     */
    private function initDirections(
        EscapeMovementRepository $escapeMovementRepo
    ): array {
        $resDirection = [];
        $directions = $escapeMovementRepo->findAll();

        foreach ($directions as $dir) {
            $data = [
                'from_room' => $dir->getRoomId(),
                'to_room' => $dir->getToRoom(),
                'pos_x' => $dir->getPositionX(),
                'pos_y' => $dir->getPositionY(),
                'direction' => $dir->getDirection()
            ];
            $newdir = new EscapeDirection($data);
            $resDirection[] = $newdir;
        }
        return $resDirection;
    }

    /**
     * Function to add objects to room
     *
     * @param array<EscapeObject> $objects
     * @param array<EscapeRoom> $rooms
     */
    private function addObjectsToRoom(
        array $objects,
        array $rooms
    ): void {
        foreach ($rooms as $room) {
            foreach ($objects as $object) {
                if ($object->getInRoom() == $room->getId()) {
                    $room->addObject($object);
                }
            }
        }
    }

    /**
     * Function to add directions to rooms
     *
     * @param array<EscapeDirection> $directions
     * @param array<EscapeRoom> $rooms
     */
    private function addDirectionsToRoom(
        array $directions,
        array $rooms
    ): void {
        foreach ($rooms as $room) {
            foreach ($directions as $dir) {
                if ($dir->getFromRoom() == $room->getId()) {
                    $room->addDirection($dir);
                }
            }
        }
    }

    /**
     * Function to add objects to objects
     *
     * @param array<EscapeObject> $objects
     */
    private function addObjectsToObject(
        array $objects
    ): void {
        foreach ($objects as $object) {
            foreach ($objects as $obj) {
                if ($obj->getInObject() == $object->getId()) {
                    $object->addInnerObject($obj);
                }
            }
        }
    }
}
