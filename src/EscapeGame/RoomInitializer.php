<?php

namespace App\EscapeGame;

use App\Repository\EscapeRoomRepository;

/**
 * RoomInitializer class initialization of the rooms in the game.
 */
class RoomInitializer
{
    /**
     * Function to create all rooms from database
     *
     * @return array<EscapeRoom>
     */
    public function initRooms(
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
     * Function to create one room from database
     *
     * @return EscapeRoom
     */
    public function initOneRoom(
        EscapeRoomRepository $roomRepository,
        int $roomId
    ): EscapeRoom {
        $room = $roomRepository->findOneBy(['id' => $roomId]);

        if (!$room) {
            throw new RoomNotFoundException();
        }

        $data = [
            'id' => $room->getId(),
            'info' => $room->getInfo(),
            'img' => $room->getImg(),
            'firstRoom' => $room->isFirstRoom()
        ];
        $newRoom = new EscapeRoom($data);
        return $newRoom;
    }
}
