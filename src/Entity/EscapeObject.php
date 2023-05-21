<?php

namespace App\Entity;

use App\Repository\EscapeObjectRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * @SuppressWarnings(PHPMD)
 */
#[ORM\Entity(repositoryClass: EscapeObjectRepository::class)]
class EscapeObject
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 25, nullable: true)]
    private ?string $name = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $info = null;

    #[ORM\Column(nullable: true)]
    private ?int $position_x = null;

    #[ORM\Column(nullable: true)]
    private ?int $position_y = null;

    #[ORM\Column(length: 55, nullable: true)]
    private ?string $img = null;

    #[ORM\Column(length: 55, nullable: true)]
    private ?string $img_active = null;

    #[ORM\Column(nullable: true)]
    private ?int $in_room = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(?string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getInfo(): ?string
    {
        return $this->info;
    }

    public function setInfo(?string $info): self
    {
        $this->info = $info;

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

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function getImgActive(): ?string
    {
        return $this->img_active;
    }

    public function setImgActive(?string $img_active): self
    {
        $this->img_active = $img_active;

        return $this;
    }

    public function getInRoom(): ?int
    {
        return $this->in_room;
    }

    public function setInRoom(?int $in_room): self
    {
        $this->in_room = $in_room;

        return $this;
    }
}
