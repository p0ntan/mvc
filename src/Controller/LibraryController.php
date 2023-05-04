<?php

namespace App\Controller;

use App\Entity\Book;
use App\Repository\BookRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class LibraryController extends AbstractController
{
    #[Route('/library', name: 'library')]
    public function home(): Response
    {
        return $this->render('library/index.html.twig');
    }

    #[Route('/library/create', name: 'library_add_book', methods: ["GET"])]
    public function createBookPage(): Response
    {
        return $this->render('library/create.html.twig');
    }

    #[Route('/library/create', name: 'library_add_book_post', methods: ["POST"])]
    public function createBook(
        ManagerRegistry $doctrine,
        Request $request
    ): Response {
        $title = $request->get("title");
        $author = $request->get("author");
        $isbn = $request->get("isbn");
        $img = $request->get("img");

        $entityManager = $doctrine->getManager();

        $book = new Book();
        $book->setTitle($title);
        $book->setIsbn($isbn);
        $book->setAuthor($author);
        $book->setImg($img);

        // tell Doctrine you want to (eventually) save the book
        // (no queries yet)
        $entityManager->persist($book);

        // actually executes the queries (i.e. the INSERT query)
        $entityManager->flush();

        return $this->redirectToRoute('library_show_all');
    }

    #[Route('/library/show', name: 'library_show_all')]
    public function showAllBooks(
        BookRepository $bookRepository
    ): Response {
        $books = $bookRepository->findAll();
        $data = [ "books" => $books ];
        return $this->render('library/show-all.html.twig', $data);
    }

    #[Route('/library/show/{idNum}', name: 'library_book_by_id')]
    public function showBookById(
        BookRepository $bookRepository,
        int $idNum
    ): Response {
        $book = $bookRepository->find($idNum);
        $data = [ "book" => $book];
        return $this->render('library/show-one.html.twig', $data);
    }

    #[Route('/library/update/{idNum}', name: 'library_update_book', methods: ["GET"])]
    public function updateBook(
        BookRepository $bookRepository,
        int $idNum
    ): Response {
        $book = $bookRepository->find($idNum);

        if (!$book) {
            throw $this->createNotFoundException(
                'No book found for id '.$idNum
            );
        }
        $data = [ "book" => $book ];
        return $this->render('library/update.html.twig', $data);
    }

    #[Route('/library/update/{idNum}', name: 'library_update_book_post', methods:  ["POST"])]
    public function updateBookPost(
        BookRepository $bookRepository,
        Request $request,
        int $idNum
    ): Response {
        $book = $bookRepository->find($idNum);

        $title = $request->get("title");
        $author = $request->get("author");
        $isbn = $request->get("isbn");
        $img = $request->get("img");


        if (!$book) {
            throw $this->createNotFoundException(
                'No book found for id '.$idNum
            );
        }
        $book->setTitle($title);
        $book->setIsbn($isbn);
        $book->setAuthor($author);
        $book->setImg($img);

        $bookRepository->save($book, true);

        return $this->redirectToRoute('library_book_by_id', ['idNum' => $idNum]);
    }

    #[Route('/library/delete/{idNum}', name: 'library_delete_book', methods: ["POST"])]
    public function deleteBookById(
        BookRepository $bookRepository,
        int $idNum
    ): Response {
        $book = $bookRepository->find($idNum);
        if (!$book) {
            throw $this->createNotFoundException(
                'No book found for id '.$idNum
            );
        }
        $bookRepository->remove($book, true);

        return $this->redirectToRoute('library_show_all');
    }
}
