<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230528084550 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE escape_movement');
        $this->addSql('CREATE TABLE escape_movement (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, room_id INTEGER NOT NULL, to_room INTEGER NOT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, direction VARCHAR(10) DEFAULT NULL, FOREIGN KEY (room_id) REFERENCES escape_room(id))');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_movement AS SELECT id, to_room, position_x, position_y, direction FROM escape_movement');
        $this->addSql('DROP TABLE escape_movement');
        $this->addSql('CREATE TABLE escape_movement (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, to_room INTEGER NOT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, direction VARCHAR(10) DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_movement (id, to_room, position_x, position_y, direction) SELECT id, to_room, position_x, position_y, direction FROM __temp__escape_movement');
        $this->addSql('DROP TABLE __temp__escape_movement');
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_object AS SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden, in_room, action_id FROM escape_object');
        $this->addSql('DROP TABLE escape_object');
        $this->addSql('CREATE TABLE escape_object (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, in_room INTEGER DEFAULT NULL, action_id INTEGER DEFAULT NULL, name VARCHAR(25) DEFAULT NULL, info CLOB DEFAULT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL, img VARCHAR(55) DEFAULT NULL, size_x INTEGER DEFAULT NULL, size_y INTEGER DEFAULT NULL, in_object INTEGER DEFAULT NULL, info_inner CLOB DEFAULT NULL, hidden BOOLEAN DEFAULT NULL, FOREIGN KEY (in_room) REFERENCES escape_room (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE, FOREIGN KEY (action_id) REFERENCES escape_action (id) ON UPDATE NO ACTION ON DELETE NO ACTION NOT DEFERRABLE INITIALLY IMMEDIATE)');
        $this->addSql('INSERT INTO escape_object (id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden, in_room, action_id) SELECT id, name, info, position_x, position_y, img, size_x, size_y, in_object, info_inner, hidden, in_room, action_id FROM __temp__escape_object');
        $this->addSql('DROP TABLE __temp__escape_object');
        $this->addSql('CREATE INDEX IDX_1C351DA758246EFF ON escape_object (in_room)');
        $this->addSql('CREATE INDEX IDX_1C351DA79D32F035 ON escape_object (action_id)');
    }
}
