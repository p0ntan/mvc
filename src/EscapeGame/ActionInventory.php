<?php

namespace App\EscapeGame;

/**
 * ActionInventory is an interface to use for actions requiring two argument where
 * the second argument is the inventory.
 */
interface ActionInventory extends ActionInterface
{
    public function execute(EscapeObject $object, Inventory $inventory): void;
}
