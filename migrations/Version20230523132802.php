<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 * @SuppressWarnings(PHPMD)
 */
final class Version20230523132802 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE escape_movement ADD COLUMN direction VARCHAR(10) DEFAULT NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TEMPORARY TABLE __temp__escape_movement AS SELECT id, room_id, to_room, position_x, position_y FROM escape_movement');
        $this->addSql('DROP TABLE escape_movement');
        $this->addSql('CREATE TABLE escape_movement (id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, room_id INTEGER NOT NULL, to_room INTEGER NOT NULL, position_x INTEGER DEFAULT NULL, position_y INTEGER DEFAULT NULL)');
        $this->addSql('INSERT INTO escape_movement (id, room_id, to_room, position_x, position_y) SELECT id, room_id, to_room, position_x, position_y FROM __temp__escape_movement');
        $this->addSql('DROP TABLE __temp__escape_movement');
    }
}
