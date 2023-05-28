<?php

namespace App\EscapeGame;

/**
 * ActionPickUp is used to pick up an object in the game and put it into the inventory.
 */
class ActionPickUp implements ActionInventory
{
    /**
     * Execute the action, pick up object and put it in inventory.
     */
    public function execute(EscapeObject $object, Inventory $inventory): void
    {
        $inventory->addItem($object);
        $object->setIsHidden(true);
    }

    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Lägg i ryggsäck';
    }
}
