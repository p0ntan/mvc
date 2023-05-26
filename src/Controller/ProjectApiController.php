<?php

namespace App\Controller;

use App\EscapeGame\ObjectInitializer;
use App\EscapeGame\RoomInitializer;
use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ProjectApiController extends AbstractController
{
    #[Route('/proj/api', name: 'proj_api')]
    public function home(): Response
    {
        return $this->render('project/api.html.twig');
    }

    /**
     * Route to get one room as json
     */
    #[Route('/proj/api/room/{idRoom}', name: 'proj_api_room')]
    public function projApiRoom(
        EscapeRoomRepository $repo,
        int $idRoom
    ): Response {
        $roomInit = new RoomInitializer();
        $room = $roomInit->initOneRoom($repo, $idRoom);
        $data = $room->asJson();

        $response = $this->json($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }

    /**
     * Route to get one object as json
     */
    #[Route('/proj/api/object/{idObject}', name: 'proj_api_object')]
    public function projApiObject(
        EscapeObjectRepository $repo,
        int $idObject
    ): Response {
        $objectInit = new ObjectInitializer();
        $object = $objectInit->initOneObject($repo, $idObject);
        $data = $object->asJson();

        $response = $this->json($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }

    /**
     * Route to get all objects as json
     */
    #[Route('/proj/api/objects', name: 'proj_api_all_objects')]
    public function projApiAllObjects(
        EscapeObjectRepository $repo
    ): Response {
        $objectInit = new ObjectInitializer();
        $object = $objectInit->initObjects($repo);
        $data = [];
        foreach ($object as $object) {
            $data[$object->getId()] = $object->asJson();
        }

        $response = $this->json($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }

    /**
     * Route to get all directions as json
     */
    #[Route('/proj/api/directions', name: 'proj_api_directions')]
    public function projApiDirections(
        EscapeObjectRepository $repo
    ): Response {
        $objectInit = new ObjectInitializer();
        $object = $objectInit->initObjects($repo);
        $data = [];
        foreach ($object as $object) {
            $data[$object->getId()] = $object->asJson();
        }

        $response = $this->json($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }

    /**
     * Route to get all objects as json
     */
    #[Route('/proj/api/objects/{idRoom}', name: 'proj_api_room_objects', methods: ["POST"])]
    public function projApiAllObjectInRoom(
        EscapeObjectRepository $repo,
        int $idRoom
    ): Response {
        $objectInit = new ObjectInitializer();
        $object = $objectInit->initObjects($repo);
        $data = [];

        foreach ($object as $object) {
            if ($object->getInRoom() == $idRoom) {
                $data[$object->getId()] = $object->asJson();
            }
        }

        $response = $this->json($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }
}
