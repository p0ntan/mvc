<?php

namespace App\Entity;

use App\Repository\EscapeRoomRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

/**
 * @SuppressWarnings(PHPMD)
 */
#[ORM\Entity(repositoryClass: EscapeRoomRepository::class)]
class EscapeRoom
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::TEXT, nullable: true)]
    private ?string $info = null;

    #[ORM\Column(length: 100, nullable: true)]
    private ?string $img = null;

    #[ORM\Column(nullable: true)]
    private ?bool $first_room = null;

    public function getId(): ?int
    {
        return $this->id;
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

    public function getImg(): ?string
    {
        return $this->img;
    }

    public function setImg(?string $img): self
    {
        $this->img = $img;

        return $this;
    }

    public function isFirstRoom(): ?bool
    {
        return $this->first_room;
    }

    public function setFirstRoom(?bool $first_room): self
    {
        $this->first_room = $first_room;

        return $this;
    }
}
