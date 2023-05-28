DELETE FROM escape_movement;
DELETE FROM escape_action;
DELETE FROM escape_object;
DELETE FROM escape_room;


INSERT INTO escape_room
    (id, info, img, first_room)
VALUES
    (
        1,
        'Du står i ett rum utan fönster med en dörr. På din vänstra och högra sida finns två utgångar.',
        'first-room.png',
        true
    ),
    (
        2,
        'Du har gått in i ett nytt rum. I rummet finns det bland annat ett skrivbord och en anslagstavla, det verkar vara ett arbetsrum av något slag.',
        'west-room.png',
        false
    ),
    (
        3,
        'Du är inne i ett nytt rum. I rummet finns ett fönster, två tavlor och två bokhyllor fyllda med böcker.',
        'east-room.png',
        false
    )
;

INSERT INTO escape_action
    (id, name)
VALUES
    (1, 'lookCloser'),
    (2, 'pickUp'),
    (3, 'moveDown'),
    (4, 'takeKey')
;

INSERT INTO escape_object
    (id, name, info, info_inner, position_x, position_y, size_x, size_y, img, in_room, in_object, hidden)
VALUES
    (
        1,
        'lampa',
        'En lampa hänger i taket',
        'I lampskärmen är ser du några vädersymboler. Vad kan de betyda?',
        50,
        10,
        12,
        12,     
        'taklampa.png',
        1,
        -1,
        false
    ),
    (
        2,
        'dörr',
        'Du ser en dörr som kan vara vägen ut.',
        '',
        50,
        51,
        14,
        45,     
        'dorr.png',
        1,
        -1,
        false
    ),
    (
        3,
        'matta',
        'Du ser en matta på golvet',
        'Du tittar under mattan',
        52,
        87,
        68,
        18,     
        'matta.png',
        1,
        -1,
        false
    ),
    (
        4,
        'papperslapp',
        'En papperslapp med en siffra och en symbol',
        '',
        40,
        65,
        15,
        30,     
        'papper-matta.png',
        1,
        3,
        false
    ),
    (
        5,
        'tavla',
        'Du ser en tavla som hänger på väggen',
        'På tavlan ser du en stad i asiatisk stil. Undrar om det betyder nåt?',
        73,
        34,
        16,
        41,     
        'tavla-gata.png',
        1,
        -1,
        false
    ),
    (
        6,
        'tavla',
        'Du ser en tavla på den högra väggen',
        'Du tittar lite närmre på tavlan, undrar var den ska föreställa?',
        93,
        40,
        8,
        48,     
        'tavla-abstrakt.png',
        3,
        -1,
        false
    ),
    (
        7,
        'tavla',
        'Du ser en tavla på den vänstra väggen',
        'Tavlan är en kopia på Mona-Lisa, men det är något som skiljer sig från orginalet...',
        7,
        40,
        9,
        48,     
        'tavla-monalisa.png',
        3,
        -1,
        false
    ),
    (
        8,
        'bokhylla',
        'En bokhylla med böcker. Böckerna är sorterade i bokstavsordning på varje hylla, översta hyllan har bara böcker som börjar på A. Nedersta hyllan har bara böcker på F.',
        '',
        24,
        42,
        18,
        75,
        'bokhylla.png',
        3,
        -1,
        false
    ),
    (
        9,
        'bokhylla',
        'En bokhylla med böcker. Böckerna är sorterade i bokstavsordning på varje hylla, översta hyllan har bara böcker som börjar på G. Nedersta hyllan har bara böcker på L.',
        '',
        76,
        42,
        18,
        75,
        'bokhylla.png',
        3,
        -1,
        false
    ),
    (
        10,
        'bok',
        'Du ser något som sticker upp ur en av böckerna.',
        'Du öppnar boken och tittar på en av sidorna.',
        78,
        62,
        4,
        10,
        'bok.png',
        3,
        -1,
        false
    ),
    (
        11,
        'papperslapp',
        'En papperslapp med en siffra och en symbol',
        '',
        64,
        30,
        15,
        30,     
        'papper-bok.png',
        3,
        10,
        false
    ),
    (
        12,
        'fönster',
        'Du ser ett fönster bakom två gardiner.',
        'Kanske man kan ta sig ut genom fönstret?',
        50,
        29,
        11,
        34,     
        'fonster.png',
        3,
        -1,
        false
    ),
    (
        13,
        'papperslapp',
        'En papperslapp med en siffra och en symbol',
        '',
        32,
        79,
        10,
        19,     
        'papper-fonster.png',
        3,
        12,
        false
    ),
    (
        14,
        'handtag',
        'Fönstret är låst.',
        '',
        49,
        50,
        2,
        8,     
        'handtag.png',
        3,
        12,
        false
    ),
    (15, 'papperskorg', 'Du ser en papperskorg i ena hörnet.', 'Papperskorgen är tom.', 83, 74, 8, 15, 'papperskorg.png', 2, -1, false),
    (16, 'fönster', 'Du ser ett fönster på vänstra väggen.', 'Kanske man kan komma ut genom fönstret?', 6, 38, 9, 53, 'fonster.png', 2, -1, false),
    (17, 'handtag', 'Fönstret är låst.', '', 49, 50, 2, 8, 'handtag.png', 2, 16, false),
    (18, 'anslagstavla', 'Du ser en anslagstavla väggen.', 'På anslagstavlan ser du polaroidbilder.', 68, 24, 29, 34, 'anslagstavla.png', 2, -1, false),
    (19, 'papperslapp', 'En papperslapp med en siffra och en symbol.', '', 31, 42, 15, 28, 'papper-anslag.png', 2, 18, false),
    (20, 'polaroidbilder', 'Bilderna sitter fast med nålar.', '', 31, 39, 16, 34, 'polaroider.png', 2, 18, false),
    (21, 'byrålåda', 'En olåst byrålåda', '', 20, 65, 11, 4, 'byralada.png', 2, -1, false),
    (22, 'papperslapp', 'En papperslapp med en siffra och en symbol.', '', 61, 42, 15, 28, 'papper-lada.png', 2, 21, false),
    (23, 'låda', 'På skrivbordet står en låda.', 'Lådan är stängd med ett lås på.', 42, 54, 7, 11, 'lada-stangd.png', 2, -1, false),
    (24, 'lås', 'Ett kodlås sitter på lådan.', '', 40, 52, 8, 21, 'hanglas-last.png', 2, 23, false),
    (25, 'låda', 'På skrivbordet står en låda.', 'Du har öppnat lådan.', 42, 54, 7, 11, 'lada-oppen.png', 2, -1, true),
    (26, 'nyckel', 'En nyckel, ser ut att gå till en dörr.', '', 47, 50, 19, 26, 'nyckel.png', 2, 25, true),
    (27, 'dorrhandtag', 'Dörren är låst.', '', 52, 51, 10, 35, 'dorrhandtag.png', 1, 2, false)
;

INSERT INTO escape_movement
    (room_id, to_room, position_x, position_y, direction)
VALUES
    (
        1,
        2,
        10,
        50,
        'left'
    ),
    (
        1,
        3,
        90,
        50,
        'right'
    ),
    (
        2,
        1,
        50,
        90,
        'down'
    ),
    (
        3,
        1,
        50,
        90,
        'down'
    )
;

UPDATE escape_object SET action_id = 1 WHERE id IN (1, 2, 3, 5, 6, 7, 10, 12, 15, 16, 18, 21, 23, 25);
UPDATE escape_object SET action_id = 2 WHERE id IN (4, 11, 13, 19, 22);
UPDATE escape_object SET action_id = 3 WHERE id IN (20);
UPDATE escape_object SET action_id = 4 WHERE id IN (26);
