<?php

namespace App\EscapeGame;

use App\Repository\EscapeMovementRepository;

/**
 * DirectionInitializer class initialization of the directions
 */
class DirectionInitializer
{
    /**
     * Function to create all directions from database
     *
     * @return array<EscapeDirection>
     */
    public function initDirections(
        EscapeMovementRepository $repo
    ): array {
        $resDirection = [];
        $directions = $repo->findAll();

        foreach ($directions as $dir) {
            $data = [
                'from_room' => $dir->getRoomId(),
                'to_room' => $dir->getToRoom(),
                'pos_x' => $dir->getPositionX(),
                'pos_y' => $dir->getPositionY(),
                'direction' => $dir->getDirection()
            ];
            $newdir = new EscapeDirection($data);
            $resDirection[] = $newdir;
        }
        return $resDirection;
    }
}
