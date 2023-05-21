<?php

namespace App\EscapeGame;

/**
 * Inventory is a class to carry a player's collected items.
 */
class Inventory
{
    /** @var array<?EscapeObject> $items */
    protected array $items = [];

    public function addItem(EscapeObject $item): void
    {
        $this->items[] = $item;
    }

    /**
     * Get items
     *
     * @return array<?EscapeObject>
     */
    public function getItems(): array
    {
        return $this->items;
    }
}
