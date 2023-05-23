<?php

namespace App\Repository;

use App\Entity\EscapeMovement;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EscapeMovement>
 * @SuppressWarnings(PHPMD)
 *
 * @method EscapeMovement|null find($id, $lockMode = null, $lockVersion = null)
 * @method EscapeMovement|null findOneBy(array $criteria, array $orderBy = null)
 * @method EscapeMovement[]    findAll()
 * @method EscapeMovement[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EscapeMovementRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EscapeMovement::class);
    }

    public function save(EscapeMovement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EscapeMovement $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EscapeMovement[] Returns an array of EscapeMovement objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('e.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?EscapeMovement
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
