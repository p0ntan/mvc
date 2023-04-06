<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Controller for lucky-route
 */
class LuckyControllerTwig extends AbstractController
{
    #[Route("/lucky", name: "lucky")]

    public function lucky(): Response
    {
        $number = random_int(1, 4);

        $data = [
            'number' => $number
        ];

        return $this->render('lucky.html.twig', $data);
    }
}
