<?php

namespace Nurun\Bundle\RhBundle\Command;

use Nurun\Bundle\RhBundle\Entity\Certification;
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Helper\ProgressBar;

//use Nurun\Bundle\RhBundle\Entity\Certification;
use Nurun\Bundle\RhBundle\Entity\ConseillerCertification;
//use Nurun\Bundle\RhBundle\Entity\Conseiller;

class ImportConseillerCertificationCommand extends ContainerAwareCommand
{

    protected function configure()
    {
        // Name and description for app/console command
        $this
            ->setName('importConseillerCertification:csv')
            ->setDescription('Import data from CSV file')
            ->addArgument(
                'file',
                InputArgument::REQUIRED,
                'chemin complet du fichier à charger');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        // Showing when the script is launched
        $now = new \DateTime();
        $output->writeln('<comment>Start : ' . $now->format('d-m-Y G:i:s') . ' ---</comment>');

        // Importing CSV on DB via Doctrine ORM
        $this->import($input, $output);

        // Showing when the script is over
        $now = new \DateTime();
        $output->writeln('<comment>End : ' . $now->format('d-m-Y G:i:s') . ' ---</comment>');
    }

    protected function import(InputInterface $input, OutputInterface $output)
    {
        // Getting php array of data from CSV
        $data = $this->get($input, $output);

        // Getting doctrine manager
        $em = $this->getContainer()->get('doctrine')->getManager();

        // Turning off doctrine default logs queries for saving memory
        $em->getConnection()->getConfiguration()->setSQLLogger(null);

        // Define the size of record, the frequency for persisting the data and the current index of records
        $size = count($data);
        $batchSize = 10;
        $i = 1;

        // Starting progress
        $progress = new ProgressBar($output, $size);
        $progress->start();

        // Processing on each row of data
        foreach ($data as $row) {

            //On commence par identifier le conseiller concerné par la certification en cours de lecture
            $conseiller = $em->getRepository('NurunRhBundle:Conseiller')
                ->findOneByName($row['nom'], $row['prenom']);

            // si on y arrive pas on tente d'autre manière de l'identifier
            if (!is_object($conseiller)) {
                // on tente uniquement par le nom
                $conseiller = $em->getRepository('NurunRhBundle:Conseiller')
                    ->findByNom($row['nom']);

                // si il existe des homonymes on supprime le résultat
                if (count($conseiller) > 1) {
                    $conseiller = null;
                }
                // en dernier lieu on tente par le courriel de l'identifier
                if (empty($conseiller)) {
                    $conseiller = $em->getRepository('NurunRhBundle:Conseiller')
                        ->findByCourriel($row['courriel']);
                }
                if (empty($conseiller)) {
                    $output->writeln('<error>Le conseiller ' . $row['prenom'] . ' ' . $row['nom'] . ' ne se trouve pas</error>');
                }
            }

            // si $conseiller est un objet alors c'est qu'on a identifié le conseiller
            if (is_object($conseiller)) {
                if (!(empty($row['longue']))) {
                    $certification = $em->getRepository('NurunRhBundle:Certification')
                        ->findOneByDescription($row['longue']);

                    if (empty($certification)) {
                        $certification = new Certification();
                        $certification->setDescription($row['longue']);
                        if (!empty($row['courte'])) {
                            $certification->setAcronyme($row['courte']);
                        }
                        $em->persist($certification);
                        $em->flush();
                    }

                    $conseillerCertification = $em->getRepository('NurunRhBundle:ConseillerCertification')
                        ->findOneBy(
                            array('conseiller' => $conseiller, 'certification' => $certification)
                        );
                    if (empty($conseillerCertification)) {
                        $conseillerCertification = new ConseillerCertification();
                        $conseillerCertification->setConseiller($conseiller);
                        $conseillerCertification->setCertification($certification);
                    }
                    if (!empty($row['date'])) {
                        $conseillerCertification->setDate(new \DateTime($row['date'].'-01-01'));
                    }
                    $em->persist($conseillerCertification);

                }
            }

            if (($i % $batchSize) === 0) {
                $em->flush();
                $em->clear();

                // Advancing for progress display on console
                $progress->advance($batchSize);
                $now = new \DateTime();
                $output->writeln(' of certification imported ... | ' . $now->format('d-m-Y G:i:s'));
            }

//                    Puis on recommance avec la ligne suivante du fichier
            $i++;

        }

// Ending the progress bar process
        $progress->finish();
    }

    protected function get(InputInterface $input, OutputInterface $output)
    {
        if ($filename = $input->getArgument('file')) {
            // Using service for converting CSV to PHP Array
            $converter = $this->getContainer()->get('import.csvtoarray');
            $data = $converter->convert($filename, ',');

            return $data;
        } else {
            exit(1);
        }
    }

}