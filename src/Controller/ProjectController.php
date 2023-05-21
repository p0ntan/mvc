<?php

namespace App\Controller;

use App\Entity\EscapeRoom;
use App\Repository\EscapeRoomRepository;
use App\Repository\EscapeObjectRepository;

use App\EscapeGame\EscapeGame;
use App\EscapeGame\EscapeGameInitalizer;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ProjectController extends AbstractController
{
    #[Route('/proj', name: 'proj')]
    public function home(): Response
    {
        return $this->render('project/index.html.twig');
    }

    #[Route('/proj/init', name: 'proj_init_game', methods: ["POST"])]
    public function initGame(
        SessionInterface $session,
        EscapeRoomRepository $roomRepo,
        EscapeObjectRepository $objectRepo
    ): Response {
        $escapeGame = new EscapeGame();
        $initializer = new EscapeGameInitalizer();
        $escapeGame = $initializer->initGame(
            $escapeGame,
            $roomRepo,
            $objectRepo
        );
        $session->set('proj_game', $escapeGame);
        return $this->redirectToRoute('proj_game');
    }

    #[Route('/proj/game', name: 'proj_game')]
    public function game(
        SessionInterface $session,
    ): Response {
        $escapeGame = $session->get('proj_game');
        $currentRoom = $escapeGame->getCurrentRoom();

        $data = [
            "id" => $currentRoom->getId(),
            "img" => $currentRoom->getImg(),
            "info" => $currentRoom->getInfo(),
            "objects" => $currentRoom->getObjects(),
        ];
        return $this->render('project/game.html.twig', $data);
    }

    #[Route('/proj/game/{room<\d+>}/{object<\d+>}', name: 'proj_action')]
    public function action(
        Request $request
    ): Response {
    }
}
