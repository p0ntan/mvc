<?php

namespace App\Controller;

use App\Blackjack\GameBlackjack;
use App\Blackjack\NoHandsLeftException;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Blackjack controller
 */
class BlackjackController extends AbstractController
{
    #[Route("/game", name: "blackjack_start")]
    public function home(): Response
    {
        return $this->render('game/home.html.twig');
    }

    #[Route("/game/doc", name: "blackjack_doc")]
    public function aboutGame(): Response
    {
        return $this->render('game/doc.html.twig');
    }

    #[Route("/game/new-round", name: "blackjack_new_round", methods: ["POST"])]
    public function newRound(
        SessionInterface $session,
        Request $request
    ): Response {
        $formInput = $request->get("submit");
        if ($formInput == "init") {
            $blackjackGame = new GameBlackjack();
            $blackjackGame->initGame();
            $session->set('blackjack_game', $blackjackGame);
        }
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->newRound();
        return $this->redirectToRoute('blackjack_bet');
    }

    #[Route("/game/bet", name: "blackjack_bet", methods: ["GET", "POST"])]
    public function placeBet(
        SessionInterface $session,
        Request $request
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        if ($request->getMethod() == "POST") {
            $playerBet = $request->get('playerbet');
            $blackjackGame->placeBet($playerBet);
            return $this->redirectToRoute('blackjack_play');
        }
        $data = [
            "playerMoney" => $blackjackGame->getPlayer()->getMoney()
        ];
        return $this->render('game/bet.html.twig', $data);
    }

    #[Route("/game/play", name: "blackjack_play")]
    public function playGame(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        try {
            $blackjackGame->nextRound();
            [$player, $computer] = $blackjackGame->getPlayers();
            $playerOptions = $blackjackGame->checkOptions($player->currentHand());
            $data = [
                "player" => $player,
                "computer" => $computer,
                "optionsPlayer" => $playerOptions
            ];
            return $this->render('game/play.html.twig', $data);
        } catch (NoHandsLeftException) {
            $blackjackGame->playComputer();
            return $this->redirectToRoute('blackjack_round_over');
        }

    }

    #[Route("/game/round-over", name: "blackjack_round_over")]
    public function roundOver(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        [$player, $computer] = $blackjackGame->getPlayers();
        $data = [
            "player" => $player,
            "computer" => $computer,
        ];
        return $this->render('game/roundover.html.twig', $data);
    }

    #[Route("/game/addcard", name: "blackjack_add_card", methods: ["POST"])]
    public function addCard(
        SessionInterface $session,
        Request $request
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $handBust = $blackjackGame->playerAddCard();
        if ($handBust) {
            return $this->forward('App\Controller\BlackjackController::playerStay', [
                "request" => $request
            ]);
        }
        return $this->redirectToRoute('blackjack_play');
    }

    #[Route("/game/stay", name: "blackjack_stay", methods: ["POST"])]
    public function playerStay(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->playerStay();
        return $this->redirectToRoute('blackjack_play');
    }

    #[Route("/game/doubledown", name: "blackjack_doubledown", methods: ["POST"])]
    public function playerDoubleDown(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->doubleDown();
        return $this->redirectToRoute('blackjack_play');
    }

    #[Route("/game/split", name: "blackjack_split", methods: ["POST"])]
    public function playerSplit(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->splitHand();
        return $this->redirectToRoute('blackjack_play');
    }
}
