<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

/**
 * Cardgame controller
 */
class CardGameController extends AbstractController
{
    #[Route("/card", name: "card_start")]
    public function home(): Response
    {
        return $this->render('card/home.html.twig');
    }

    #[Route("/card/deck", name: "card_deck")]
    public function cardDeck(): Response
    {
        // Logic for showing all the cards

        return $this->render('card/show_all_cards.html.twig');
    }

    #[Route("/card/deck/shuffle", name: "card_deck_shuffle")]
    public function cardDeckShuffle(): Response
    {
        // Logic for showing all the that has been shuffled

        return $this->render('card/show_all_cards.html.twig');
    }

    #[Route("/card/deck/draw", name: "card_deck_draw_one")]
    public function cardDeckDraw(): Response
    {
        // Logic for taking away one card

        return $this->render('card/draw_one_card.html.twig');
    }

    #[Route("/card/deck/draw/{num<\d+>}", name: "card_deck_draw_multi")]
    public function cardDeckDrawMulti(): Response
    {
        // Logic for taking away one card

        return $this->render('card/draw_multi_card.html.twig');
    }
}
