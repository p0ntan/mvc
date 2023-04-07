<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\DeckOfCards;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
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

    #[Route("/api/deck", name: "api_card_deck")]
    public function cardDeck(): Response
    {
        $cardDeck = new DeckOfCards();
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new Card($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
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

    #[Route("/api/deck/shuffle", name: "api_card_deck_shuffle")]
    public function cardDeckShuffle(): Response
    {
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

}
