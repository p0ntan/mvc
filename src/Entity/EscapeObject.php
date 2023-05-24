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

    #[ORM\Column(nullable: true)]
    private ?int $in_room = null;

    #[ORM\Column(nullable: true)]
    private ?int $size_x = null;

    #[ORM\Column(nullable: true)]
    private ?int $size_y = null;

    #[ORM\Column(nullable: true)]
    private ?int $in_object = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $info_inner = null;

    #[ORM\Column(nullable: true)]
    private ?bool $hidden = null;

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

    public function getInRoom(): ?int
    {
        return $this->in_room;
    }

    public function setInRoom(?int $in_room): self
    {
        $this->in_room = $in_room;

        return $this;
    }

    public function getSizeX(): ?int
    {
        return $this->size_x;
    }

    public function setSizeX(?int $size_x): self
    {
        $this->size_x = $size_x;

        return $this;
    }

    public function getSizeY(): ?int
    {
        return $this->size_y;
    }

    public function setSizeY(?int $size_y): self
    {
        $this->size_y = $size_y;

        return $this;
    }

    public function getInObject(): ?int
    {
        return $this->in_object;
    }

    public function setInObject(?int $in_object): self
    {
        $this->in_object = $in_object;

        return $this;
    }

    public function getInfoInner(): ?string
    {
        return $this->info_inner;
    }

    public function setInfoInner(?string $info_inner): self
    {
        $this->info_inner = $info_inner;

        return $this;
    }

    public function isHidden(): ?bool
    {
        return $this->hidden;
    }

    public function setHidden(?bool $hidden): self
    {
        $this->hidden = $hidden;

        return $this;
    }
}
