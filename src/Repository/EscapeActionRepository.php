<?php

namespace App\Repository;

use App\Entity\EscapeAction;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<EscapeAction>
 * @SuppressWarnings(PHPMD)
 *
 * @method EscapeAction|null find($id, $lockMode = null, $lockVersion = null)
 * @method EscapeAction|null findOneBy(array $criteria, array $orderBy = null)
 * @method EscapeAction[]    findAll()
 * @method EscapeAction[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EscapeActionRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, EscapeAction::class);
    }

    public function save(EscapeAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(EscapeAction $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return EscapeAction[] Returns an array of EscapeAction objects
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

//    public function findOneBySomeField($value): ?EscapeAction
//    {
//        return $this->createQueryBuilder('e')
//            ->andWhere('e.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
