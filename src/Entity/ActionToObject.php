<?php

namespace App\Entity;

use App\Repository\ActionToObjectRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @SuppressWarnings(PHPMD)
 */
#[ORM\Entity(repositoryClass: ActionToObjectRepository::class)]
class ActionToObject
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column]
    private ?int $action_id = null;

    #[ORM\Column]
    private ?int $object_id = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getActionId(): ?int
    {
        return $this->action_id;
    }

    public function setActionId(int $action_id): self
    {
        $this->action_id = $action_id;

        return $this;
    }

    public function getObjectId(): ?int
    {
        return $this->object_id;
    }

    public function setObjectId(int $object_id): self
    {
        $this->object_id = $object_id;

        return $this;
    }
}
