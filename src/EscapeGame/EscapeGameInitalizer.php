<?php

namespace App\EscapeGame;

use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;

/**
 * EscapeGameInitalizer class initialization of the escape game.
 * This class purpose is to inject all the necessary dependencies into EscapeGame class
 */
class EscapeGameInitalizer
{
    public function initGame(
        EscapeGame $escapeGame,
        EscapeRoomRepository $roomRepository,
        EscapeObjectRepository $objectRepository
    ): EscapeGame {
        $allObjects = $this->initObjects($objectRepository);
        $allRooms = $this->initRooms($roomRepository);
        $this->addObjectsToRoom($allObjects, $allRooms);

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
                'position' => [$object->getPositionX(), $object->getPositionY()],
                'actionsOff' => [],
                'actionsOn' => [],
                'img' => $object->getImg(),
                'imgActive' => $object->getImgActive(),
                'inRoom' => $object->getInRoom()
            ];
            $newObject = new EscapeObject($data);
            $resObjects[] = $newObject;
        }
        return $resObjects;
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
}
