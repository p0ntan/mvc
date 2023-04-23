<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardGraphic;
use App\Card\CardHand;
use App\Card\DeckFactory;
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
    /**
     * Helper function to initiate and inject cards into carddeck if no deck in session
     * Helps to stop site from crashing if accessing some routes before others
     */
    private function controlDeckSession(SessionInterface $session): void
    {
        if (!$session->has('card_deck')) {
            $emtpyDeck = new DeckOfCards();
            $deckFactory = new DeckFactory();
            $cardDeck = $deckFactory->createDeck($emtpyDeck, "CardGraphic");
            $session->set('card_deck', $cardDeck);
        }
    }

    #[Route("/card", name: "card_start")]
    public function home(): Response
    {
        return $this->render('card/home.html.twig');
    }

    #[Route("/card/deck", name: "card_deck")]
    public function cardDeck(
        SessionInterface $session
    ): Response {
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
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
        SessionInterface $session
    ): Response {
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck');
        $cardDeck->shuffleDeck();
        $data = [
            "title" => "En komplett blandad kortlek",
            "size" => $cardDeck->deckSize(),
            "cardDeck" => $cardDeck->getDeck()
        ];
        return $this->render('card/show_all_cards.html.twig', $data);
    }

    #[Route("/card/deck/draw", name: "card_deck_draw_one")]
    public function cardDeckDraw(
        SessionInterface $session
    ): Response {
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
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
        int $number
    ): Response {
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
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
        int $players,
        int $cards
    ): Response {
        $this->controlDeckSession($session);
        /** @var DeckOfCards $cardDeck */
        $cardDeck = $session->get('card_deck');
        $allHands = $cardDeck->giveCardsToHands($players, $cards);
        $enoughInDeck = false;
        if (sizeOf($allHands) > 0) {
            $enoughInDeck = $allHands[0] instanceof CardHand;
        }

        $data = [
            "title" => "Dra kort till spelare",
            "players" => $allHands,
            "size" => $cardDeck->deckSize(),
            "enoughInDeck" => $enoughInDeck
        ];
        return $this->render('card/deal_card.html.twig', $data);
    }
}
