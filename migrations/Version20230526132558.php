<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230526132558 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_action AS SELECT id, name FROM escape_action');
        $this->addSql('DROP TABLE escape_action');
        $this->addSql('CREATE TABLE escape_action (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(25) DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_action (id, name) SELECT id, name FROM __temp__escape_action');
        $this->addSql('DROP TABLE __temp__escape_action');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE escape_action ADD COLUMN is_on BOOLEAN DEFAULT NULL');
    }
}
