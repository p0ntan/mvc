<?php

namespace App\Controller;

use App\Entity\EscapeObject;

use App\EscapeGame\DirectionInitializer;
use App\EscapeGame\ObjectInitializer;
use App\EscapeGame\ObjectNotFoundException;
use App\EscapeGame\RoomInitializer;
use App\EscapeGame\RoomNotFoundException;
use App\Repository\EscapeMovementRepository;
use App\Repository\EscapeObjectRepository;
use App\Repository\EscapeRoomRepository;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
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
    #[Route('/proj/api/room', name: 'proj_api_room')]
    public function projApiRoom(
        EscapeRoomRepository $repo,
        Request $request
    ): Response {
        $idRoom = $request->get('id-room');
        try {
            $roomInit = new RoomInitializer();
            $room = $roomInit->initOneRoom($repo, $idRoom);
            $data = $room->asJson();

            $response = $this->json($data);
            $response->setEncodingOptions(
                $response->getEncodingOptions() | JSON_PRETTY_PRINT
            );
            return $response;
        } catch (RoomNotFoundException) {
            return $this->json(["message" => "No room found with id $idRoom"]);
        }

    }

    /**
     * Route to get one object as json
     */
    #[Route('/proj/api/object', name: 'proj_api_object')]
    public function projApiObject(
        EscapeObjectRepository $repo,
        Request $request
    ): Response {
        $idObject = $request->get('id-object');
        try {
            $objectInit = new ObjectInitializer();
            $object = $objectInit->initOneObject($repo, $idObject);
            $data = $object->asJson();

            $response = $this->json($data);
            $response->setEncodingOptions(
                $response->getEncodingOptions() | JSON_PRETTY_PRINT
            );
            return $response;
        } catch (ObjectNotFoundException) {
            return $this->json(["message" => "No object found with id $idObject"]);
        }
    }

    /**
     * Route to get all objects as json
     */
    #[Route('/proj/api/objects', name: 'proj_api_all_objects')]
    public function projApiAllObjects(
        EscapeObjectRepository $repo
    ): Response {
        $objectInit = new ObjectInitializer();
        $objects = $objectInit->initObjects($repo);
        $data = [];
        foreach ($objects as $object) {
            $data[] = $object->asJson();
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
        EscapeMovementRepository $repo
    ): Response {
        $dirInit = new DirectionInitializer();
        $directions = $dirInit->initDirections($repo);
        $data = [];
        foreach ($directions as $dir) {
            $data[] = $dir->asJson();
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
    #[Route('/proj/api/objects/room', name: 'proj_api_room_objects', methods: ["POST"])]
    public function projApiAllObjectInRoom(
        EscapeObjectRepository $repo,
        EscapeRoomRepository $repoRoom,
        Request $request
    ): Response {
        $objectInit = new ObjectInitializer();
        $roomInit = new RoomInitializer();
        $idRoom = $request->get('id-room');

        try {
            $room = $roomInit->initOneRoom($repoRoom, $idRoom);
            $object = $objectInit->initObjects($repo);

            $data = [
                "room" => $room->asJson(),
                "objects" => []
            ];

            foreach ($object as $object) {
                if ($object->getInRoom() == $idRoom) {
                    $data["objects"][] = $object->asJson();
                }
            }

            $response = $this->json($data);
            $response->setEncodingOptions(
                $response->getEncodingOptions() | JSON_PRETTY_PRINT
            );
            return $response;
        } catch (RoomNotFoundException) {
            return $this->json(["message" => "No room found with id $idRoom"]);
        }
    }
}
