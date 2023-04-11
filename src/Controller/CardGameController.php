<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardGraphic;
use App\Card\CardHand;
use App\Card\DeckOfCards;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Cardgame controller
 */
class CardGameController extends AbstractController
{
    #[Route("/card/init", name: "card_init", methods: ["POST"])]
    public function cardInit(
        SessionInterface $session,
        Request $request
    ): Response {
        $cardDeck = new DeckOfCards();
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;
        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new CardGraphic($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        $cardDeck->shuffleDeck();
        $session->set('card_deck', $cardDeck);
        $number = $request->attributes->get('number');
        return $this->redirectToRoute($request->attributes->get('_route'), [
            'number' => $number,
            'players' => 0,
            'cards' => 0
        ]);
    }

    #[Route("/card", name: "card_start")]
    public function home(
        SessionInterface $session,
        Request $request
    ): Response {
        return $this->render('card/home.html.twig');
    }

    #[Route("/card/deck", name: "card_deck")]
    public function cardDeck(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck')) {
            return $this->forward('App\Controller\CardGameController::cardInit', [
                'request' => $request
            ]);
        }
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "En komplett sorterad kortlek",
            "size" => $cardDeck->deckSize(),
            "cardDeck" => $cardDeck->getSortedDeck()
        ];
        return $this->render('card/show_all_cards.html.twig', $data);
    }

    #[Route("/card/deck/shuffle", name: "card_deck_shuffle")]
    public function cardDeckShuffle(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session or the deck is "full", forward to card_init if not
        if (!$session->has('card_deck') || $session->get('card_deck')->deckSize() < 52) {
            return $this->forward('App\Controller\CardGameController::cardInit', [
                'request' => $request
            ]);
        }
        $cardDeck = $session->get('card_deck');

        $data = [
            "title" => "En komplett blandad kortlek",
            "size" => $cardDeck->deckSize(),
            "cardDeck" => $cardDeck->getDeck()
        ];
        return $this->render('card/show_all_cards.html.twig', $data);
    }

    #[Route("/card/deck/draw", name: "card_deck_draw_one")]
    public function cardDeckDraw(
        SessionInterface $session,
        Request $request
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck')) {
            return $this->forward('App\Controller\CardGameController::cardInit', [
                'request' => $request
            ]);
        }
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "Dra ett kort",
            "drawnCards" => $cardDeck->drawCards(),
            "size" => $cardDeck->deckSize(),
            "multi" => false
        ];

        return $this->render('card/draw_card.html.twig', $data);
    }

    #[Route("/card/deck/draw/{number<\d+>}", name: "card_deck_draw_multi")]
    public function cardDeckDrawMulti(
        SessionInterface $session,
        Request $request,
        int $number
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck')) {
            return $this->forward('App\Controller\CardGameController::cardInit', [
                'request' => $request
            ]);
        }
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "Dra flera kort",
            "drawnCards" => $cardDeck->drawCards($number),
            "size" => $cardDeck->deckSize(),
            "multi" => true
        ];
        return $this->render('card/draw_card.html.twig', $data);
    }

    #[Route("/card/deck/deal/{players<\d+>}/{cards<\d+>}", name: "card_deck_deal")]
    public function cardDeckDeal(
        SessionInterface $session,
        Request $request,
        int $players,
        int $cards
    ): Response {
        // Check if there is deck in session, forward to card_init if not
        if (!$session->has('card_deck')) {
            return $this->forward('App\Controller\CardGameController::cardInit', [
                'request' => $request
            ]);
        }
        $cardDeck = $session->get('card_deck');
        $playerHands = [];
        if (!$players <= 0) {
            foreach (range(1, $players) as $player) {
                $cardHand = new CardHand();
                $cardsToHand = $cardDeck->giveCards($cards);
                foreach ($cardsToHand as $card) {
                    $cardHand->addCard($card);
                }
                $playerHands[] = $cardHand;
            }
        }

        $data = [
            "title" => "Dra kort till spelare",
            "players" => $playerHands,
            "size" => $cardDeck->deckSize(),
        ];
        return $this->render('card/deal_card.html.twig', $data);
    }
}
