<?php

namespace App\EscapeGame;

use App\Repository\EscapeObjectRepository;

/**
 * ObjectInitializer class initialization of the objects in the game.
 */
class ObjectInitializer
{
    /**
     * Function to create all objects from database
     *
     * @return array<EscapeObject>
     */
    public function initObjects(
        EscapeObjectRepository $objectRepository
    ): array {
        $objects = $objectRepository->findAll();
        $resObjects = [];
        foreach ($objects as $object) {
            $data = [
                'id' => $object->getId(),
                'name' => $object->getName(),
                'info' => $object->getInfo(),
                'innerInfo' => $object->getInfoInner(),
                'position' => [$object->getPositionX(), $object->getPositionY()],
                'size' => [$object->getSizeX(), $object->getSizeY()],
                'img' => $object->getImg(),
                'inRoom' => $object->getInRoom(),
                'inObject' => $object->getInObject(),
                'isHidden' => $object->isHidden()
            ];
            $newObject = new EscapeObject($data);
            $resObjects[] = $newObject;
        }
        return $resObjects;
    }

    /**
     * Function to create one object from database
     *
     * @return EscapeObject
     */
    public function initOneObject(
        EscapeObjectRepository $objectRepository,
        int $objectId
    ): EscapeObject {
        $object = $objectRepository->findOneBy(['id' => $objectId]);

        if (!$object) {
            throw new ObjectNotFoundException();
        }

        $data = [
            'id' => $object->getId(),
            'name' => $object->getName(),
            'info' => $object->getInfo(),
            'innerInfo' => $object->getInfoInner(),
            'position' => [$object->getPositionX(), $object->getPositionY()],
            'size' => [$object->getSizeX(), $object->getSizeY()],
            'img' => $object->getImg(),
            'inRoom' => $object->getInRoom(),
            'inObject' => $object->getInObject(),
            'isHidden' => $object->isHidden()
        ];
        $newObject = new EscapeObject($data);
        return $newObject;
    }
}
