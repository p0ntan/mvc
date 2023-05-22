<?php

namespace App\EscapeGame;

/**
 * EscapeGame class for playing the game with all it's logic and actions
 */
class EscapeGame
{
    /** @var array<EscapeRoom> */
    protected array $rooms;
    protected Inventory $inventory;
    protected bool $gameOver = false;

    /**
     * Add rooms to the game
     *
     * @param array<EscapeRoom> $rooms
     */
    public function addRooms(array $rooms): void
    {
        foreach ($rooms as $room) {
            $this->addRoom($room);
        }
    }

    public function addRoom(EscapeRoom $room): void
    {
        $this->rooms[] = $room;
    }

    /**
     * Method to get all rooms
     *
     * @return array<EscapeRoom>
     */
    public function getRooms(): array
    {
        return $this->rooms;
    }

    public function setInventory(Inventory $inventory): void
    {
        $this->inventory = $inventory;
    }

    public function getInventory(): Inventory
    {
        return $this->inventory;
    }

    public function isGameOver(): bool
    {
        return $this->gameOver;
    }

    public function setGameOver(bool $gameOver): void
    {
        $this->gameOver = $gameOver;
    }

    public function actionOnObject(EscapeObject $object, string $actionKey): void
    {
        $allActions = $object->getActions();
        $action = $allActions[$actionKey];
        if ($action instanceof ActionTwoInterface) {
            $action->execute($object, $this->inventory);
        } elseif ($action instanceof ActionOneInterface) {
            $action->execute($object);
        }
    }

    public function getCurrentRoom(): EscapeRoom
    {
        foreach ($this->rooms as $room) {
            if ($room->isCurrentRoom()) {
                return $room;
            }
        }
        throw new NoCurrentRoomException();
    }

    public function getObjectInCurrentRoom(int $idNum): EscapeObject
    {
        $currentRoom = $this->getCurrentRoom();
        return $currentRoom->getObjectInRoom($idNum);
    }
}
