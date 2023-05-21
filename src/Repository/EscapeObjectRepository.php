<?php

namespace App\Repository;

use App\Entity\EscapeObject;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EscapeObject>
 * @SuppressWarnings(PHPMD)
 *
 * @method EscapeObject|null find($id, $lockMode = null, $lockVersion = null)
 * @method EscapeObject|null findOneBy(array $criteria, array $orderBy = null)
 * @method EscapeObject[]    findAll()
 * @method EscapeObject[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EscapeObjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EscapeObject::class);
    }

    public function save(EscapeObject $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EscapeObject $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EscapeObject[] Returns an array of EscapeObject objects
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

//    public function findOneBySomeField($value): ?EscapeObject
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
