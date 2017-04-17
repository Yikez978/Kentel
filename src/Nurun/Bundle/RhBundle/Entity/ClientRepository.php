<?php

namespace Nurun\Bundle\RhBundle\Entity;

use Doctrine\ORM\EntityRepository;

/**
 * ClientRepository
 *
 * This class was generated by the Doctrine ORM. Add your own custom
 * repository methods below.
 */
class ClientRepository extends EntityRepository
{

    public function findByAdresse($adresse)
    {
//        $qb = $this->createQueryBuilder('a');
        $em = $this->getEntityManager();
        $query=$em->createQuery("select c from NurunRhBundle:Client c JOIN c.mandats m
              where :adresseId MEMBER OF m.adresses and m.deletedAt is NULL")
            ->setParameter("adresseId", $adresse);
        $results=$query->getResult();
        return $results;
    }

}