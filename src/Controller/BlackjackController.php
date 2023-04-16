<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardGraphic;
use App\Card\DeckFactory;
use App\Card\DeckOfCards;
use App\Blackjack\GameBlackjack;
use App\Blackjack\RulesBlackjack;
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

    #[Route("/game/init", name: "blackjack_init", methods: ["POST"])]
    public function gameInit(
        SessionInterface $session
    ): Response {
        $blackjackGame = new GameBlackjack();
        $emptyDeck = new DeckOfCards();
        $deckFactory = new DeckFactory();
        $cardDeck = $deckFactory->createDeck($emptyDeck, "CardGraphic");
        $blackjackGame->initGame($cardDeck);
        $session->set('blackjack_game', $blackjackGame);

        return $this->redirectToRoute('blackjack_play');
    }

    #[Route("/game/play", name: "blackjack_play")]
    public function playGame(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        // Players
        $player = $blackjackGame->getPlayer();
        $computer = $blackjackGame->getComputer();
        $data = [
            "player" => $player->getCards(),
            "computer" => $computer->getCards(),
            "optionsPlayer" => $blackjackGame->checkOptions($player),
            "optionsComputer" => $blackjackGame->checkOptions($computer)
        ];
        return $this->render('game/play.html.twig', $data);
    }

    #[Route("/game/round-over", name: "blackjack_round_over")]
    public function roundOver(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $player = $blackjackGame->getPlayer();
        $computer = $blackjackGame->getComputer();
        $data = [
            "player" => $player->getCards(),
            "computer" => $computer->getCards(),
            "optionsPlayer" => $blackjackGame->checkOptions($player),
            "optionsComputer" => $blackjackGame->checkOptions($computer)
        ];
        $this->addFlash(
            'notice',
            $blackjackGame->getWinner()
        );
        return $this->render('game/roundover.html.twig', $data);
    }

    #[Route("/game/addcard", name: "blackjack_add_card", methods: ["POST"])]
    public function addCard(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $player = $blackjackGame->getPlayer();
        $blackjackGame->addCard($player);
        $playerBust = $blackjackGame->checkOptions($player)["bust"];
        if ($playerBust) {
            $blackjackGame->playComputer();
            return $this->redirectToRoute('blackjack_round_over');
        }
        return $this->redirectToRoute('blackjack_play');
    }

    #[Route("/game/stay", name: "blackjack_stay", methods: ["POST"])]
    public function playerStay(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->playComputer();
        return $this->redirectToRoute('blackjack_round_over');
    }

    #[Route("/game/new-round", name: "blackjack_new_round", methods: ["POST"])]
    public function newRound(
        SessionInterface $session
    ): Response {
        $blackjackGame = $session->get('blackjack_game');
        $blackjackGame->newRound();
        return $this->redirectToRoute('blackjack_play');
    }
}
