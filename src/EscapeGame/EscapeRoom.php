<?php

namespace App\EscapeGame;

/**
 * Class for a room in the EscapeGame
 */
class EscapeRoom
{
    protected int $idNum;
    protected string $info;
    protected string $img;
    protected bool $currentRoom = false;
    /** @var array<EscapeObject> $objects */
    protected array $objects = [];

    /**
     * Constructor for EscapeRoom
     *
     * @param array<mixed> $data With the data for constructing the room
     */
    public function __construct(array $data)
    {
        $this->idNum = $data['id'];
        $this->info = $data['info'];
        $this->img = $data['img'];
        $this->currentRoom = $data['firstRoom'];
    }

    /**
     * Getter for idNum
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->idNum;
    }

    /**
     * Getter for info
     *
     * @return string
     */
    public function getInfo(): string
    {
        return $this->info;
    }

    /**
     * Getter for img
     *
     * @return string
     */
    public function getImg(): string
    {
        return $this->img;
    }

    /**
     * Add objects to room
     *
     * @param array<EscapeObject> $objects
     */
    public function addObjects(array $objects): void
    {
        foreach ($objects as $object) {
            $this->objects[] = $object;
        }
    }

    /**
     * Add one object to room
     *
     * @param EscapeObject $object
     */
    public function addObject(EscapeObject $object): void
    {
        $this->objects[] = $object;
    }

    /**
     * Getter for objects
     *
     * @return array<EscapeObject>
     */
    public function getObjects(): array
    {
        return $this->objects;
    }

    /**
     * Set current room
     *
     * @param bool $currentRoom
     */
    public function setCurrentRoom(bool $currentRoom): void
    {
        $this->currentRoom = $currentRoom;
    }

    /**
     * If room is current room
     *
     * @return bool
     */
    public function isCurrentRoom(): bool
    {
        return $this->currentRoom;
    }

    /**
     * Get an object by id
     *
     * @return EscapeObject
     * @throws ObjectNotInRoomException if object is not in room
     */
    public function getObjectInRoom(int $idNum): EscapeObject
    {
        foreach ($this->objects as $object) {
            if ($object->getId() === $idNum) {
                return $object;
            }
        }
        throw new ObjectNotInRoomException();
    }
}
