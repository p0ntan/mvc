<?php

namespace App\EscapeGame;

/**
 * EscapeDirection represents each direction to move in a room
 */
class EscapeDirection
{
    protected int $fromRoom;
    protected int $toRoom;
    protected int $posX;
    protected int $posY;
    protected string $direction;

    /**
     * @param array<mixed> $data
     */
    public function __construct(array $data)
    {
        $this->fromRoom = $data['from_room'];
        $this->toRoom = $data['to_room'];
        $this->posX = $data['pos_x'];
        $this->posY = $data['pos_y'];
        $this->direction = $data['direction'];
    }

    /**
     * Get from room
     *
     * @return int
     */
    public function getFromRoom(): int
    {
        return $this->fromRoom;
    }

    /**
     * Get to room
     *
     * @return int
     */
    public function getToRoom(): int
    {
        return $this->toRoom;
    }

    /**
     * Get position x
     *
     * @return int
     */
    public function getPosX(): int
    {
        return $this->posX;
    }

    /**
     * Get position y
     *
     * @return int
     */
    public function getPosY(): int
    {
        return $this->posY;
    }

    /**
     * Get direction
     *
     * @return string
     */
    public function getDirection(): string
    {
        return $this->direction;
    }
}
