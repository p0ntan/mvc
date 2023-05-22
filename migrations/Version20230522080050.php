<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230522080050 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE escape_object ADD COLUMN size_x INTEGER DEFAULT NULL');
        $this->addSql('ALTER TABLE escape_object ADD COLUMN size_y INTEGER DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_object AS SELECT id, name, info, position_x, position_y, img, img_active, in_room FROM escape_object');
        $this->addSql('DROP TABLE escape_object');
        $this->addSql('CREATE TABLE escape_object (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(25) DEFAULT NULL, info CLOB DEFAULT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, img VARCHAR(55) DEFAULT NULL, img_active VARCHAR(55) DEFAULT NULL, in_room INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_object (id, name, info, position_x, position_y, img, img_active, in_room) SELECT id, name, info, position_x, position_y, img, img_active, in_room FROM __temp__escape_object');
        $this->addSql('DROP TABLE __temp__escape_object');
    }
}
