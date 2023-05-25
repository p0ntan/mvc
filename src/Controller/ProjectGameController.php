<?php

namespace App\Controller;

use App\Entity\EscapeRoom;
use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;
use App\Repository\EscapeActionRepository;
use App\Repository\ActionToObjectRepository;
use App\Repository\EscapeMovementRepository;

use App\EscapeGame\EscapeGame;
use App\EscapeGame\EscapeGameInitalizer;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ProjectGameController extends AbstractController
{
    #[Route('/proj/init', name: 'proj_init_game', methods: ["POST"])]
    public function initGame(
        SessionInterface $session,
        EscapeRoomRepository $roomRepo,
        EscapeObjectRepository $objectRepo,
        EscapeActionRepository $actionRepo,
        ActionToObjectRepository $actionToObjectRepo,
        EscapeMovementRepository $escapeMovementRepo
    ): Response {
        $escapeGame = new EscapeGame();
        $initializer = new EscapeGameInitalizer();
        $escapeGame = $initializer->initGame(
            $escapeGame,
            $roomRepo,
            $objectRepo,
            $actionRepo,
            $actionToObjectRepo,
            $escapeMovementRepo
        );
        $session->set('proj_game', $escapeGame);
        return $this->redirectToRoute('proj_game');
    }

    #[Route('/proj/game', name: 'proj_game', methods: ["GET"])]
    public function game(
        SessionInterface $session,
        Request $request
    ): Response {
        $escapeGame = $session->get('proj_game');
        $currentRoom = $escapeGame->getCurrentRoom();
        $queryParam = $request->get('object');
        $object = null;

        if ($queryParam) {
            $object = $escapeGame->getObjectInCurrentRoom($queryParam);
        }

        $data = [
            "id" => $currentRoom->getId(),
            "img" => $currentRoom->getImg(),
            "info" => $currentRoom->getInfo(),
            "directions" => $currentRoom->getDirections(),
            "inventory" => $escapeGame->getInventory(),
            "objects" => $currentRoom->getObjects(),
            "object" => $object
        ];
        return $this->render('project/game.html.twig', $data);
    }

    #[Route('/proj/game/over', name: 'proj_game_over')]
    public function gameOver(
    ): Response {
        return $this->render('project/gameover.html.twig');
    }


    #[Route('/proj/game/inventory', name: 'proj_game_inv', methods: ["GET"])]
    public function inventory(
        SessionInterface $session,
        Request $request
    ): Response {
        $escapeGame = $session->get('proj_game');
        $currentRoom = $escapeGame->getCurrentRoom();
        $queryParam = $request->get('object');
        $object = null;

        if ($queryParam) {
            $object = $escapeGame->getAnyObject($queryParam);
        }

        $data = [
            "id" => $currentRoom->getId(),
            "img" => $currentRoom->getImg(),
            "info" => $currentRoom->getInfo(),
            "inventory" => $escapeGame->getInventory()->getItems(),
            "objects" => $currentRoom->getObjects(),
            "object" => $object
        ];
        return $this->render('project/inventory.html.twig', $data);
    }

    #[Route('/proj/game/changeroom', name: 'proj_game_change_room', methods: ["POST"])]
    public function changeRoom(
        SessionInterface $session,
        Request $request
    ): Response {
        $escapeGame = $session->get('proj_game');
        $fromRoom = $request->get('from-room');
        $toRoom = $request->get('to-room');
        $escapeGame->changeCurrentRoom($fromRoom, $toRoom);

        return $this->redirectToRoute('proj_game');
    }

    #[Route('/proj/game/{objectId<\d+>}', name: 'proj_game_object')]
    public function objectCloseUp(
        SessionInterface $session,
        Request $request,
        int $objectId
    ): Response {
        $escapeGame = $session->get('proj_game');
        $currentRoom = $escapeGame->getCurrentRoom();
        $queryParam = $request->get('object');
        $object = $escapeGame->getObjectInCurrentRoom($objectId);
        $clickedObject = null;
        if ($queryParam) {
            $clickedObject = $object->getOneInnerObject($queryParam);
        }
        $data = [
            "id" => $objectId,
            "img" => $currentRoom->getImg(),
            "objectImg" => $object->getImg(),
            "info" => $object->getInnerInfo(),
            "innerObjects" => $object->getInnerObjects(),
            "object" => $clickedObject
        ];
        return $this->render('project/game.object.html.twig', $data);
    }

    #[Route('/proj/game/inner/{outerObj<\d+>}', name: 'proj_game_object_inner')]
    public function objectCloseUpInner(
        SessionInterface $session,
        int $outerObj
    ): Response {
        $escapeGame = $session->get('proj_game');
        $currentRoom = $escapeGame->getCurrentRoom();
        $innerObj = 24; // Hardcoded id for lock, for bigger game this needs to be changed.
        $outerObject = $escapeGame->getObjectInCurrentRoom($outerObj);
        $innerObject = $escapeGame->getObjectInCurrentRoom($innerObj);

        $data = [
            "id" => $outerObj,
            "img" => $currentRoom->getImg(),
            "outerImg" => $outerObject->getImg(),
            "innerImg" => $innerObject->getImg(),
            "info" => $session->get('flash_message')
        ];
        $session->set('flash_message', "");
        return $this->render('project/game.inner.html.twig', $data);
    }

    #[Route('/proj/game/action/{objectId<\d+>}', name: 'proj_object_action', methods: ["POST"])]
    public function objectCloseUpAction(
        SessionInterface $session,
        Request $request,
        int $objectId
    ): Response {
        $escapeGame = $session->get('proj_game');
        $action = $request->get('action');
        $innerId = $request->get('inner-object');
        $object = $escapeGame->getObjectInCurrentRoom($innerId);
        $escapeGame->actionOnObject($object, $action);

        if ($escapeGame->isGameOver()) {
            return $this->redirectToRoute('proj_game_over');
        }

        return $this->redirectToRoute('proj_game_object', ['objectId' => $objectId]);
    }

    #[Route('/proj/game/lock/', name: 'proj_open_lock', methods: ["POST"])]
    public function openLock(
        SessionInterface $session,
        Request $request
    ): Response {
        $escapeGame = $session->get('proj_game');
        $first = $request->get('first');
        $second = $request->get('second');
        $third = $request->get('third');
        $res = $escapeGame->tryCombination($first, $second, $third);
        if ($res) {
            return $this->redirectToRoute('proj_game_object', ['objectId' => 25]);
        }
        $session->set('flash_message', "Fel kombination.");
        return $this->redirectToRoute('proj_game_object_inner', ['outerObj' => 23]);
    }
}
