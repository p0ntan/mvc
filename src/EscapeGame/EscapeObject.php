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
    protected bool $isHidden;
    protected string $img;
    protected int $inRoom;
    protected int $inObject;
    /** @var array<EscapeObject> $innerObjects */
    protected array $innerObjects;

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
        $this->isHidden = $data['isHidden'];
        $this->actions = [];
        $this->innerObjects = [];
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
     * Set position
     * @param array<int> $position
     */
    public function setPosition(array $position): void
    {
        $this->position = $position;

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
     * Get isHidden
     *
     * @return bool
     */
    public function isHidden(): bool
    {
        return $this->isHidden;
    }

    /**
     * Set isHidden
     *
     * @param bool $boolean
     */
    public function setIsHidden(bool $boolean): void
    {
        $this->isHidden = $boolean;
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
     * Get innerObjects
     *
     * @return array<EscapeObject>
     */
    public function getInnerObjects(): array
    {
        return $this->innerObjects;
    }

    /**
     * Get innerObject
     * @param int $idNum
     *
     * @return EscapeObject
     */
    public function getOneInnerObject(int $idNum): EscapeObject
    {
        foreach ($this->innerObjects as $object) {
            if ($object->getId() === $idNum) {
                return $object;
            }
        }
        throw new ObjectNotInRoomException();
    }

    /**
     * Set innerObject
     *
     * @param EscapeObject $innerObject
     */
    public function addInnerObject(EscapeObject $innerObject): void
    {
        $this->innerObjects[] = $innerObject;
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
