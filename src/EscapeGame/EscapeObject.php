<?php

namespace App\EscapeGame;

/**
 * EscapeObject represents each object in the game.
 */
class EscapeObject
{
    protected int $idNum;
    protected string $name;
    protected string $info;
    protected string $innerInfo;
    /** @var array<int> $position */
    protected array $position;
    /** @var array<int> $size */
    protected array $size;
    /** @var array<ActionInterface> $actions */
    protected array $actions;
    protected bool $isPicked = false;
    protected string $img;
    protected int $inRoom;
    protected int $inObject;
    protected ?EscapeObject $innerObject = null;

    /**
     * Constructor for EscapeObject
     *
     * @param array<mixed> $data With all data needed for object
     */
    public function __construct(array $data)
    {
        $this->idNum = $data['id'];
        $this->name = $data['name'];
        $this->info = $data['info'];
        $this->innerInfo = $data['innerInfo'];
        $this->position = $data['position'];
        $this->size = $data['size'];
        $this->img = $data['img'];
        $this->inRoom = $data['inRoom'];
        $this->inObject = $data['inObject'];
    }

    /**
     * Get id
     *
     * @return int
     */
    public function getId(): int
    {
        return $this->idNum;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Get info
     *
     * @return string
     */
    public function getInfo(): string
    {
        return $this->info;
    }

    /**
     * Get inner info, used when looking closer at an object
     *
     * @return string
     */
    public function getInnerInfo(): string
    {
        return $this->innerInfo;
    }

    /**
     * Get position
     *
     * @return array<int>
     */
    public function getPosition(): array
    {
        return $this->position;
    }

    /**
     * Get size
     *
     * @return array<int>
     */
    public function getSize(): array
    {
        return $this->size;
    }

    /**
     * Get actions
     *
     * @return array<ActionInterface>
     */
    public function getActions(): array
    {
        return $this->actions;
    }

    /**
     * Add a new action
     */
    public function addAction(ActionInterface $action, string $name): void
    {
        $this->actions[$name] = $action;
    }

    /**
     * Get isPicked
     *
     * @return bool
     */
    public function isPicked(): bool
    {
        return $this->isPicked;
    }

    /**
     * Set isPicked
     *
     * @param bool $boolean
     */
    public function setIsPicked(bool $boolean): void
    {
        $this->isPicked = $boolean;
    }

    /**
     * Get img
     *
     * @return string
     */
    public function getImg(): string
    {
        return $this->img;
    }

    /**
     * Get inRoom
     *
     * @return int
     */
    public function getInRoom(): int
    {
        return $this->inRoom;
    }

    /**
     * Get inObject
     *
     * @return int
     */
    public function getInObject(): int
    {
        return $this->inObject;
    }

    /**
     * Get innerObject
     *
     * @return EscapeObject
     */
    public function getInnerObject(): ?EscapeObject
    {
        return $this->innerObject;
    }

    /**
     * Set innerObject
     *
     * @param EscapeObject $innerObject
     */
    public function setInnerObject(EscapeObject $innerObject): void
    {
        $this->innerObject = $innerObject;
    }

    /**
     * Get as JSON
     *
     * @return array<string,mixed>
     */
    public function asJson(): array
    {
        return get_object_vars($this);
    }
}
