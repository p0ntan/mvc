<?php

namespace App\Controller;

use App\Card\Card;
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
    public function start(
        SessionInterface $session
    ): Response {
        // Check if there is deck in session, if not create deck.
        if (!$session->has('card_deck_api')) {
            $cardDeck = new DeckOfCards();
            $allSuits = Card::SUITS;
            $allValues = Card::VALUES;

            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new Card($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
            $session->set('card_deck_api', $cardDeck);
        }
        return $this->render('api.html.twig');
    }

    #[Route("/api/quote", name: "api_quote")]
    public function number(): Response
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
        SessionInterface $session
    ): Response {
        // Makes a new deck an shuffles it every time
        $cardDeck = new DeckOfCards();
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new Card($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        $cardDeck->shuffelDeck();
        $session->set('card_deck_api', $cardDeck);

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
        SessionInterface $session
    ): Response {
        // Check if there is deck in session, if not create deck.
        // Should use some rerouting to an init-rout
        // but can't figure out how to do it with post.
        if (!$session->has('card_deck_api')) {
            $cardDeck = new DeckOfCards();
            $allSuits = Card::SUITS;
            $allValues = Card::VALUES;

            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new Card($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
            $cardDeck->shuffle();
            $session->set('card_deck_api', $cardDeck);
        }
        $noOfCards = 1;
        $cardDeck = $session->get('card_deck_api');
        // Control to not draw more cards than in deck
        if ($cardDeck->deckSize() < 1) {
            $noOfCards = 0;
        }
        $drawnCard = $cardDeck->drawCards($noOfCards);
        $data = [
            "cardsLeft" => $cardDeck->deckSize(),
            "drawnCard" => [
                "suit" => $drawnCard[0]->getSuit(),
                "value" => $drawnCard[0]->getValue(),
                "name" => $drawnCard[0]->getAsString()
            ]
        ];

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }

    #[Route("api/deck/draw/{num<\d+>}", name: "api_card_deck_draw_multi", methods: ["POST"])]
    public function cardDeckDrawMulti(
        SessionInterface $session,
        Request $request,
        int $num
    ): Response {
        // Check if there is deck in session, if not create deck.
        // Should use some rerouting to an init-rout
        // but can't figure out how to do it with post.
        if (!$session->has('card_deck_api')) {
            $cardDeck = new DeckOfCards();
            $allSuits = Card::SUITS;
            $allValues = Card::VALUES;

            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new Card($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
            $cardDeck->shuffle();
            $session->set('card_deck_api', $cardDeck);
        }
        $noOfCards = $num;
        $cardDeck = $session->get('card_deck_api');
        // Control to not draw more cards than in deck
        if ($noOfCards > $cardDeck->deckSize()) {
            $noOfCards = $cardDeck->deckSize();
        }
        $drawnCards = $cardDeck->drawCards($noOfCards);
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
}
