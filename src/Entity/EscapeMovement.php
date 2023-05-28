<?php

namespace App\Entity;

use App\Repository\EscapeMovementRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @SuppressWarnings(PHPMD)
 */
#[ORM\Entity(repositoryClass: EscapeMovementRepository::class)]
class EscapeMovement
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $to_room = null;

    #[ORM\Column(nullable: true)]
    private ?int $position_x = null;

    #[ORM\Column(nullable: true)]
    private ?int $position_y = null;

    #[ORM\Column(length: 10, nullable: true)]
    private ?string $direction = null;

    #[ORM\Column(nullable: true)]
    private ?int $room_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getRoomId(): ?int
    {
        return $this->room_id;
    }

    public function setRoomId(int $room_id): self
    {
        $this->room_id = $room_id;

        return $this;
    }

    public function getToRoom(): ?int
    {
        return $this->to_room;
    }

    public function setToRoom(int $to_room): self
    {
        $this->to_room = $to_room;

        return $this;
    }

    public function getPositionX(): ?int
    {
        return $this->position_x;
    }

    public function setPositionX(?int $position_x): self
    {
        $this->position_x = $position_x;

        return $this;
    }

    public function getPositionY(): ?int
    {
        return $this->position_y;
    }

    public function setPositionY(?int $position_y): self
    {
        $this->position_y = $position_y;

        return $this;
    }

    public function getDirection(): ?string
    {
        return $this->direction;
    }

    public function setDirection(?string $direction): self
    {
        $this->direction = $direction;

        return $this;
    }
}
