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
use DateTime;

/**
 * Api controller
 */
class ApiController extends AbstractController
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

    #[Route("/api", name: "api_start")]
    public function start(): Response
    {
        return $this->render('api.html.twig');
    }

    #[Route("/api/quote", name: "api_quote")]
    public function apiQuote(): Response
    {
        $quotes = [
            "Vad du än kan göra eller drömmer om att kunna göra, börja med det. Dristighet har begåvning, kraft och magi i sig.",
            "Det finns inget bättre tillfälle än nu att bli den person du vill vara.",
            "Det är inte vad som händer med dig som är viktigt, utan hur du reagerar på det.",
            "Livet handlar inte om att vänta på att stormen ska passera, det handlar om att lära sig dansa i regnet.",
            "Livet är som en kamera, fokusera på det positiva, utveckla från de negativa och om något inte fungerar, ta ett nytt kort."
        ];
        $number = random_int(0, 4);
        $date = new DateTime();
        $data = [
            'date' => $date->format("Y-m-d"),
            'timestamp' => $date->getTimestamp(),
            'quote' => $quotes[$number]
        ];
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
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
        $data = $cardDeck->shuffleDeckJson();

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

    #[Route("api/game", name: "api_game", methods: ["POST"])]
    public function apiGame(
        SessionInterface $session
    ): Response {
        $data = ["There is no game initialized."];
        if ($session->has('blackjack_game')) {
            $blackjackGame = $session->get('blackjack_game');
            $data = $blackjackGame->getAsJson();
        }
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
        $playerHands = [];
        if (!$players <= 0) {
            for ($i = 0; $i < $players; $i++) {
                $cardHand = new CardHand();
                $cardsToHand = $cardDeck->giveCards($cards);
                foreach ($cardsToHand as $card) {
                    $cardHand->addCard($card);
                }
                $playerHands[] = $cardHand;
            }
        }
        $data = ["cardsLeft" => $cardDeck->deckSize()];
        for ($i = 0; $i < $players; $i++) {
            $data["players"][$i] = $playerHands[$i]->getHandAsJson();
        }
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }
}
