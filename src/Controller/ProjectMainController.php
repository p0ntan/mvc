<?php

namespace App\Controller;

use Doctrine\DBAL\Connection;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Session\SessionInterface;

class ProjectMainController extends AbstractController
{
    #[Route('/proj', name: 'proj')]
    public function home(
        SessionInterface $session
    ): Response {
        $data = [
            'isPlaying' => false
        ];
        if ($session->has('proj_game')) {
            $escapeGame = $session->get('proj_game');
            $data['isPlaying'] = !$escapeGame->isGameOver();
        }
        return $this->render('project/index.html.twig', $data);
    }

    #[Route('/proj/help', name: 'proj_help')]
    public function help(): Response
    {
        return $this->render('project/help.html.twig');
    }

    #[Route('/proj/about', name: 'proj_about')]
    public function aboutProject(): Response
    {
        return $this->render('project/about.html.twig');
    }

    #[Route('/proj/about/database', name: 'proj_about_database')]
    public function aboutProjectDatabase(): Response
    {
        return $this->render('project/database.html.twig');
    }

    #[Route('/proj/database/reset', name: 'proj_about_database_reset', methods: ['POST'])]
    public function projectResetDatabase(
        ManagerRegistry $doctrine,
    ): Response {
        /** @var Connection $connection */
        $connection = $doctrine->getConnection();
        $filename = 'sql/backup.sql';
        $sqlFile = strval(file_get_contents($filename));
        $connection->exec($sqlFile);

        return $this->redirectToRoute('proj_about_database');
    }
}
