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
    /** @var array<int> $combination */
    protected array $combination = [9, 7, 4];
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

    /**
     * Add room to the game
     *
     * @param EscapeRoom $room
     */
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

    /**
     * Method to set the inventory
     *
     * @param Inventory $inventory
     */
    public function setInventory(Inventory $inventory): void
    {
        $this->inventory = $inventory;
    }

    /**
     * Method to get the inventory
     *
     * @return Inventory
     */
    public function getInventory(): Inventory
    {
        return $this->inventory;
    }

    /**
     * Method to try game (lock) combination
     *
     * @param int $first
     * @param int $second
     * @param int $third
     */
    public function tryCombination(
        int $first,
        int $second,
        int $third
    ): bool {
        $userCombo = [$first, $second, $third];
        $actualCombo = $this->combination;
        if ($userCombo == $actualCombo) {
            $lockedChestId = 23;
            $openChestId = 25;
            $lockId = 24;
            $keyId = 26;

            // Hide locked chest and lock
            $lock = $this->getAnyObject($lockId);
            $lockedChest = $this->getAnyObject($lockedChestId);
            $lock->setIsHidden(true);
            $lockedChest->setIsHidden(true);
            // Show key and open chest
            $key = $this->getAnyObject($keyId);
            $openChest = $this->getAnyObject($openChestId);
            $key->setIsHidden(false);
            $openChest->setIsHidden(false);

            return true;
        }
        return false;
    }

    /**
     * Method to check if the game is over
     *
     * @return bool
     */
    public function isGameOver(): bool
    {
        return $this->gameOver;
    }

    /**
     * Method to set game over
     *
     * @param bool $gameOver
     */
    public function setGameOver(bool $gameOver): void
    {
        $this->gameOver = $gameOver;
    }

    /**
     * Method execute action on an object
     *
     * @param EscapeObject $object
     * @param string $actionKey
     */
    public function actionOnObject(EscapeObject $object, string $actionKey): void
    {
        $allActions = $object->getActions();
        $action = $allActions[$actionKey];
        if ($action instanceof ActionInventory) {
            $action->execute($object, $this->inventory);
        } elseif ($action instanceof ActionOneInterface) {
            $action->execute($object);
        } elseif ($action instanceof ActionTwoInventory) {
            $doorLockId = 27;
            $doorLock = $this->getAnyObject($doorLockId);
            $action->execute($object, $doorLock, $this->inventory);
        } elseif ($action instanceof ActionGame) {
            $action->execute($object, $this);
        }
    }

    /**
     * Method to change current roomr
     *
     * @param int $fromRoom
     * @param int $toRoom
     */
    public function changeCurrentRoom(int $fromRoom, int $toRoom): void
    {
        foreach ($this->rooms as $room) {
            if ($room->getId() == $fromRoom) {
                $room->setCurrentRoom(false);
            } elseif ($room->getId() == $toRoom) {
                $room->setCurrentRoom(true);
            }
        }
    }

    /**
     * Method to get the current room.
     *
     * @throws RoomNotFoundException
     * @return EscapeRoom
     */
    public function getCurrentRoom(): EscapeRoom
    {
        foreach ($this->rooms as $room) {
            if ($room->isCurrentRoom()) {
                return $room;
            }
        }
        throw new RoomNotFoundException();
    }

    /**
     * Method to get any object in game
     *
     * @param int $idNum
     *
     * @throws ObjectNotFoundException
     * @return EscapeObject
     *
     */
    public function getAnyObject(int $idNum): EscapeObject
    {
        foreach ($this->rooms as $room) {
            foreach ($room->getObjects() as $object) {
                if ($object->getId() == $idNum) {
                    return $object;
                }
            }
        }
        throw new ObjectNotFoundException();
    }

    /**
     * Method to get an object in the current room
     *
     * @param int $idNum
     *
     * @return EscapeObject
     */
    public function getObjectInCurrentRoom(int $idNum): EscapeObject
    {
        $currentRoom = $this->getCurrentRoom();
        return $currentRoom->getObjectInRoom($idNum);
    }
}
