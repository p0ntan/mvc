<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardHand;
use App\Card\DeckFactory;
use App\Card\DeckOfCards;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Api controller
 */
class ApiCardController extends AbstractController
{
    /**
     * Helper function to initiate and inject cards into carddeck if no deck in session
     * Helps to stop site from crashing if accessing some routes before others
     */
    private function controlDeckSession(SessionInterface $session): void
    {
        if (!$session->has('card_deck_api')) {
            $emtpyDeck = new DeckOfCards();
            $deckFactory = new DeckFactory();
            $cardDeck = $deckFactory->createDeck($emtpyDeck, "Card");
            $session->set('card_deck_api', $cardDeck);
        }
    }

    #[Route("/api/deck", name: "api_card_deck", methods: ["GET"])]
    public function cardDeck(
        SessionInterface $session
    ): Response {
        // First control that there is a deck in session
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $data = $cardDeck->getSortedDeckJson();

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("/api/deck/shuffle", name: "api_card_deck_shuffle", methods: ["POST"])]
    public function cardDeckShuffle(
        SessionInterface $session
    ): Response {
        // First control that there is a deck in session
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $cardDeck->shuffleDeck();
        $data = $cardDeck->getAsJson();

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/draw", name: "api_card_deck_draw_one", methods: ["POST"])]
    public function cardDeckDraw(
        SessionInterface $session
    ): Response {
        // First control that there is a deck in session
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $data = $cardDeck->drawCardsJson();
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/draw/{number<\d+>}", name: "api_card_deck_draw_multi", methods: ["POST"])]
    public function cardDeckDrawMulti(
        SessionInterface $session,
        int $number
    ): Response {
        // First control that there is a deck in session
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $data = $cardDeck->drawCardsJson($number);
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/deal/{players<\d+>}/{cards<\d+>}", name: "api_card_deal", methods: ["POST"])]
    public function cardDeal(
        SessionInterface $session,
        int $players,
        int $cards
    ): Response {
        // First control that there is a deck in session
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $allHands = $cardDeck->giveCardsToHands($players, $cards);
        $data = ["cardsLeft" => $cardDeck->deckSize()];
        $noOfHands = sizeof($allHands);
        for ($i = 0; $i < $noOfHands; $i++) {
            if ($allHands[$i] instanceof CardHand) {
                $data["players"][$i] = $allHands[$i]->getHandAsJson();
                continue;
            }
            $data["message"] = $allHands[$i];
        }
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }
}
