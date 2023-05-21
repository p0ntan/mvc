<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230521110639 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE escape_room ADD COLUMN img VARCHAR(100) DEFAULT NULL');
        $this->addSql('ALTER TABLE escape_room ADD COLUMN first_room BOOLEAN DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_room AS SELECT id, info FROM escape_room');
        $this->addSql('DROP TABLE escape_room');
        $this->addSql('CREATE TABLE escape_room (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, info CLOB DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_room (id, info) SELECT id, info FROM __temp__escape_room');
        $this->addSql('DROP TABLE __temp__escape_room');
    }
}
