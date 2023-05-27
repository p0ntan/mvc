<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230526142748 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_object AS SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden FROM escape_object');
        $this->addSql('DROP TABLE escape_object');
        $this->addSql('CREATE TABLE escape_object (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(25) DEFAULT NULL, info CLOB DEFAULT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, img VARCHAR(55) DEFAULT NULL, size_x INTEGER DEFAULT NULL, size_y INTEGER DEFAULT NULL, in_object INTEGER DEFAULT NULL, info_inner CLOB DEFAULT NULL, hidden BOOLEAN DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_object (id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden) SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden FROM __temp__escape_object');
        $this->addSql('DROP TABLE __temp__escape_object');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_object AS SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden FROM escape_object');
        $this->addSql('DROP TABLE escape_object');
        $this->addSql('CREATE TABLE escape_object (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, action_id_id INTEGER DEFAULT NULL, name VARCHAR(25) DEFAULT NULL, info CLOB DEFAULT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, img VARCHAR(55) DEFAULT NULL, size_x INTEGER DEFAULT NULL, size_y INTEGER DEFAULT NULL, in_object INTEGER DEFAULT NULL, info_inner CLOB DEFAULT NULL, hidden BOOLEAN DEFAULT NULL, in_room INTEGER DEFAULT NULL, CONSTRAINT FK_1C351DA7988A52EB FOREIGN KEY (action_id_id) REFERENCES escape_action (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO escape_object (id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden) SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden FROM __temp__escape_object');
        $this->addSql('DROP TABLE __temp__escape_object');
        $this->addSql('CREATE INDEX IDX_1C351DA7988A52EB ON escape_object (action_id_id)');
    }
}
