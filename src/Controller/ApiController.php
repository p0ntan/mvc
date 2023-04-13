<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardHand;
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

    #[Route("/api/card/init", name: "card_init", methods: ["POST"])]
    public function cardInitApi(
        SessionInterface $session,
        Request $request
    ): Response {
        $cardDeck = new DeckOfCards();
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;
        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new Card($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        $cardDeck->shuffleDeck();
        $session->set('card_deck_api', $cardDeck);
        // Since some routes are post then it needs forwarding instead of a redirect
        $controller = strval($request->attributes->get('_controller'));
        $methodName = explode('::', $controller)[1];
        $number = $request->attributes->get('number');
        $players = $request->attributes->get('players');
        $cards = $request->attributes->get('cards');
        return $this->forward("App\Controller\ApiController::$methodName", [
            'request' => $request,
            'number' => $number,
            'players' => $players,
            'cards' => $cards
        ]);
    }

    #[Route("/api/deck", name: "api_card_deck", methods: ["GET"])]
    public function cardDeck(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck_api')) {
            return $this->forward('App\Controller\ApiController::cardInitApi', [
                'request' => $request
            ]);
        }
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $data = [];
        $sortedDeck = $cardDeck->getSortedDeck();
        foreach ($sortedDeck as $card) {
            $data[] = [
                "suit" => $card->getSuit(),
                "value" => $card->getValue(),
                "name" => $card->getAsString()
            ];
        }

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("/api/deck/shuffle", name: "api_card_deck_shuffle", methods: ["POST"])]
    public function cardDeckShuffle(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck_api')) {
            return $this->forward('App\Controller\ApiController::cardInitApi', [
                'request' => $request
            ]);
        }
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $cardDeck->shuffleDeck();
        $data = [];
        foreach ($cardDeck->getDeck() as $card) {
            $data[] = [
                "suit" => $card->getSuit(),
                "value" => $card->getValue(),
                "name" => $card->getAsString()
            ];
        }

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/draw", name: "api_card_deck_draw_one", methods: ["POST"])]
    public function cardDeckDraw(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck_api')) {
            return $this->forward('App\Controller\ApiController::cardInitApi', [
                'request' => $request
            ]);
        }
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $drawnCard = $cardDeck->drawCards();
        $data = [
            "cardsLeft" => $cardDeck->deckSize()
        ];
        foreach ($drawnCard as $card) {
            $data["drawnCards"][] = [
            "suit" => $card->getSuit(),
            "value" => $card->getValue(),
            "name" => $card->getAsString()
            ];
        }
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/draw/{number<\d+>}", name: "api_card_deck_draw_multi", methods: ["POST"])]
    public function cardDeckDrawMulti(
        SessionInterface $session,
        Request $request,
        int $number
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck_api')) {
            return $this->forward('App\Controller\ApiController::cardInitApi', [
                'request' => $request
            ]);
        }
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck_api');
        $drawnCards = $cardDeck->drawCards($number);
        $data = [
            "cardsLeft" => $cardDeck->deckSize()
        ];
        foreach ($drawnCards as $card) {
            $data["drawnCards"][] = [
            "suit" => $card->getSuit(),
            "value" => $card->getValue(),
            "name" => $card->getAsString()
            ];
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
        Request $request,
        int $players,
        int $cards
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck_api')) {
            return $this->forward('App\Controller\ApiController::cardInitApi', [
                'request' => $request
            ]);
        }
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
        $data = [
            "cardsLeft" => $cardDeck->deckSize()
        ];
        for ($i = 0; $i < $players; $i++) {
            foreach ($playerHands[$i]->getCards() as $card) {
                $data["players"][$i][] = [
                    "suit" => $card->getSuit(),
                    "value" => $card->getValue(),
                    "name" => $card->getAsString()
                    ];
            }
        }
        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }
}
