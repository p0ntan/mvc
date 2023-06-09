<?php

namespace App\Controller;

use App\Repository\BookRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
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

    #[Route("api/library/books", name: "api_library", methods: ["GET"])]
    public function apiLibrary(
        BookRepository $bookRepository
    ): Response {
        $books = $bookRepository->findAll();

        $response = $this->json($books);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }

    #[Route("api/library/book/{isbn}", name: "api_library_single_book", methods: ["GET"])]
    public function apiLibrarySingleBook(
        BookRepository $bookRepository,
        string $isbn
    ): Response {
        $book = $bookRepository->findOneBy(["isbn" => $isbn]);

        $response = $this->json($book);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );
        return $response;
    }
}
