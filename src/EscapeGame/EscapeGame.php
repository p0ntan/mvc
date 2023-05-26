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

    public function getCurrentRoom(): EscapeRoom
    {
        foreach ($this->rooms as $room) {
            if ($room->isCurrentRoom()) {
                return $room;
            }
        }
        throw new RoomNotFoundException();
    }

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


    public function getObjectInCurrentRoom(int $idNum): EscapeObject
    {
        $currentRoom = $this->getCurrentRoom();
        return $currentRoom->getObjectInRoom($idNum);
    }
}
