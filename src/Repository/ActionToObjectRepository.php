<?php

namespace App\Repository;

use App\Entity\ActionToObject;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<ActionToObject>
 * @SuppressWarnings(PHPMD)
 *
 * @method ActionToObject|null find($id, $lockMode = null, $lockVersion = null)
 * @method ActionToObject|null findOneBy(array $criteria, array $orderBy = null)
 * @method ActionToObject[]    findAll()
 * @method ActionToObject[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActionToObjectRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, ActionToObject::class);
    }

    public function save(ActionToObject $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(ActionToObject $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ActionToObject[] Returns an array of ActionToObject objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ActionToObject
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
