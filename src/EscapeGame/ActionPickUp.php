<?php

namespace App\EscapeGame;

/**
 * ActionPickUp is used to pick up an object in the game and put it into the inventory.
 */
class ActionPickUp implements ActionTwoInterface
{
    public function execute(EscapeObject $object, Inventory $inventory): void
    {
        $inventory->addItem($object);
        $object->setIsPicked(true);
    }

    public function getName(): string
    {
        return 'Lägg i ryggsäck';
    }
}
