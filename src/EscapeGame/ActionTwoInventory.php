<?php

namespace App\EscapeGame;

/**
 * ActionTwoInterface is an interface to use for actions requiring two argument where
 * the second argument is the inventory.
 */
interface ActionTwoInventory extends ActionInterface
{
    public function execute(EscapeObject $object, EscapeObject $secondObject, Inventory $inventory): void;
}
