<?php

namespace App\Controller;

use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ApiControllerJson
{
    #[Route("/api/quote", name: "api_quote")]
    public function number(): Response
    {
        $number = random_int(0, 100);

        $data = [
            'date' => date("Y-m-d"),
            'timestamp' => time(),
            'number' => $number
        ];

        $response = new JsonResponse($data);
        $response->setEncodingOptions(
            $response->getEncodingOptions() | JSON_PRETTY_PRINT
        );

        return $response;
    }
}
