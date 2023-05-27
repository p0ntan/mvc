<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProjectMainController extends AbstractController
{
    #[Route('/proj', name: 'proj')]
    public function home(): Response
    {
        return $this->render('project/index.html.twig');
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

    #[Route('/proj/api', name: 'proj_api')]
    public function apiProject(): Response
    {
        return $this->render('project/api.html.twig');
    }
}
