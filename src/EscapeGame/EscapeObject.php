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
    /** @var array<int> $position */
    protected array $position;
    /**
     * Actions for object when object is "off"
     * @var array<ActionInterface> $actionsOff
     */
    protected array $actionsOff;

    /**
     * Actions for object when object is "on"
     * @var array<ActionInterface> $actionsOn
     */
    protected array $actionsOn;
    protected bool $isOn = false;
    protected bool $isActive = false;
    protected string $img;
    protected string $imgActive;
    protected int $inRoom;
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
        $this->position = $data['position'];
        $this->actionsOff = $data['actionsOff'];
        $this->actionsOn = $data['actionsOn'];
        $this->img = $data['img'];
        $this->imgActive = $data['imgActive'];
        $this->inRoom = $data['inRoom'];
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
     * Get position
     *
     * @return array<mixed>
     */
    public function getPosition(): array
    {
        return $this->position;
    }

    /**
     * Get actions
     *
     * @return array<ActionInterface>
     */
    public function getActions(): array
    {
        if ($this->isOn) {
            return $this->actionsOn;
        }
        return $this->actionsOff;
    }

    /**
     * Get isOn
     *
     * @return bool
     */
    public function isOn(): bool
    {
        return $this->isOn;
    }

    /**
     * Set isOn
     *
     * @param bool $boolean
     */
    public function setIsOn(bool $boolean): void
    {
        $this->isOn = $boolean;
    }

    /**
     * Get isActive
     *
     * @return bool
     */
    public function isActive(): bool
    {
        return $this->isActive;
    }

    /**
     * Set isActive
     *
     * @param bool $boolean
     */
    public function setIsActive(bool $boolean): void
    {
        $this->isActive = $boolean;
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
     * Get imgActive
     *
     * @return string
     */
    public function getImgActive(): string
    {
        return $this->imgActive;
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
