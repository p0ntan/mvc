<?php

namespace App\EscapeGame;

/**
 * ActionTakeKey is used to pick up a key in the game, put it in the inventory and also add
 * one action to the door to get out and finish the game.
 */
class ActionTakeKey implements ActionTwoInventory
{
    /**
     * Execute the action, takes key and puts it into inventory and adds ActionOpenDoor to the second object
     */
    public function execute(EscapeObject $object, EscapeObject $secondObject, Inventory $inventory): void
    {
        $inventory->addItem($object);
        $object->setIsHidden(true);
        $secondObject->addAction(new ActionOpenDoor(), "openDoor");
    }

    /**
     * Returns name of action
     *
     * @return string
     */
    public function getName(): string
    {
        return 'Plocka upp nyckel';
    }
}
