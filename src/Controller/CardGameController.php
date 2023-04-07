<?php

namespace App\Controller;

use App\Card\Card;
use App\Card\CardGraphic;
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
    #[Route("/card", name: "card_start")]
    public function home(
        SessionInterface $session,
    ): Response
    {
        // Check if there is deck in session, if not create deck.
        if (!$session->has('card_deck')) {
            $cardDeck = new DeckOfCards();
            $allSuits = Card::SUITS;
            $allValues = Card::VALUES;

            foreach ($allSuits as $suit) {
                foreach ($allValues as $value) {
                    $newCard = new CardGraphic($suit, $value);
                    $cardDeck->addCard($newCard);
                }
            }
            $session->set('card_deck', $cardDeck);
        }
        return $this->render('card/home.html.twig');
    }

    #[Route("/card/deck", name: "card_deck")]
    public function cardDeck(
        SessionInterface $session
    ): Response
    {
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "En sorterad kortlek",
            "size" => $cardDeck->deckSize(),
            "cardDeck" => $cardDeck->getSortedDeck()
        ];
        return $this->render('card/show_all_cards.html.twig', $data);
    }

    #[Route("/card/deck/shuffle", name: "card_deck_shuffle")]
    public function cardDeckShuffle(
        SessionInterface $session
    ): Response
    {
        $cardDeck = new DeckOfCards();
        $allSuits = Card::SUITS;
        $allValues = Card::VALUES;

        foreach ($allSuits as $suit) {
            foreach ($allValues as $value) {
                $newCard = new CardGraphic($suit, $value);
                $cardDeck->addCard($newCard);
            }
        }
        $cardDeck->shuffelDeck();
        $session->set('card_deck', $cardDeck);

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
    ): Response
    {
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "Dra ett kort",
            "drawnCard" => $cardDeck->drawCards(),
            "size" => $cardDeck->deckSize()
        ];

        return $this->render('card/draw_card.html.twig', $data);
    }

    #[Route("/card/deck/draw/{num<\d+>}", name: "card_deck_draw_multi")]
    public function cardDeckDrawMulti(
        SessionInterface $session,
        int $num
    ): Response
    {
        $cardDeck = $session->get('card_deck');
        $data = [
            "title" => "Dra flera kort",
            "drawnCard" => $cardDeck->drawCards($num),
            "size" => $cardDeck->deckSize()
        ];
        return $this->render('card/draw_card.html.twig', $data);
    }
}