<?php

namespace Nurun\Bundle\RhBundle\Command;
 
use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Helper\ProgressBar;
 
use Nurun\Bundle\RhBundle\Entity\Conseiller;
use Nurun\Bundle\RhBundle\Entity\PosteConseiller;
use Nurun\Bundle\RhBundle\Entity\RoleConseiller;
use Nurun\Bundle\RhBundle\Entity\Domaine;
use Nurun\Bundle\RhBundle\Entity\StatutConseiller;
use Nurun\Bundle\RhBundle\Entity\VicePresidence;


 
class ImportConseillersCommand extends ContainerAwareCommand
{
 
    protected function configure()
    {
        // Name and description for app/console command
        $this
        ->setName('importConseillers:csv')
        ->setDescription('Import data from CSV file')
        ->addArgument(
            'file',
            InputArgument::REQUIRED,
            'chemin complet du fichier à charger')
                ;
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
        foreach($data as $row) {
 
            $domaine = $em->getRepository('NurunRhBundle:Domaine')
                       ->findOneByDescription('Soutien administratif');
            $poste = $em->getRepository('NurunRhBundle:PosteConseiller')
                       ->findOneByDescription($row['poste']);
            if (empty($poste))
            {
                $poste = new PosteConseiller();
                $poste->setDescription($row['poste']);
                $em->persist($poste);
                $em->flush();
            }

            $role = $em->getRepository('NurunRhBundle:RoleConseiller')
                       ->findOneByDescription($row['Rôle']);
            if (empty($role))
            {
                $role = new RoleConseiller();
                $role->setDescription($row['Rôle']);
                $em->persist($role);
                $em->flush();
            }
            $statut = $em->getRepository('NurunRhBundle:StatutConseiller')
                       ->findOneByDescription($row['Statut']); 
            $vp = $em->getRepository('NurunRhBundle:VicePresidence')
                       ->findOneByAcronyme('CFO');
            
            $conseillerpresent = $em->getRepository('NurunRhBundle:Conseiller')
                       ->findOneByName($row['Nom'], $row['Prénom']);
            
            if (empty($conseillerpresent))
            {
                $conseiller = new Conseiller();
            }
            else
            {
                $conseiller = $conseillerpresent;
            }
            $conseiller->setActif(true);
            $conseiller->setNumEmploye($row['Numéro employé']);
            $conseiller->setPrenom($row['Prénom']);
            $conseiller->setNom($row['Nom']);
            $conseiller->setCourriel($row['courriel']);
            $conseiller->setPoste($poste);
            $conseiller->setRole($role);
            $conseiller->setDomaine($domaine);
            $conseiller->setDateArrivee(new \DateTime());
            $conseiller->setStatut($statut);
            $conseiller->setNbreHeures($row['heureSemaine']);
            $conseiller->setDateFete(new \DateTime($row['dateNaissance']));
            $conseiller->setVicePresidence($vp);

           
            $em->persist($conseiller);
            
            
            if (($i % $batchSize) === 0) 
            {
                $em->flush();
                $em->clear();

                // Advancing for progress display on console
                $progress->advance($batchSize);
                $now = new \DateTime();
                $output->writeln(' of conseillers imported ... | ' . $now->format('d-m-Y G:i:s'));
            }
 
                $i++;
        }
        
        // Flushing and clear data on queue
        $em->flush();
        $em->clear();
        // Ending the progress bar process
        $progress->finish();
    }
 
    protected function get(InputInterface $input, OutputInterface $output)
    {
        if ($filename = $input->getArgument('file'))
        {
            // Using service for converting CSV to PHP Array
            $converter = $this->getContainer()->get('import.csvtoarray');
            $data = $converter->convert($filename, ',');
        
            return $data;
        }
        else
        {
            exit(1);   
        }
    }
    
}