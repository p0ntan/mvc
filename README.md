Scrutinizer badges:

[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/p0ntan/mvc/badges/quality-score.png?b=main)](https://scrutinizer-ci.com/g/p0ntan/mvc/?branch=main)
[![Code Coverage](https://scrutinizer-ci.com/g/p0ntan/mvc/badges/coverage.png?b=main)](https://scrutinizer-ci.com/g/p0ntan/mvc/?branch=main)
[![Build Status](https://scrutinizer-ci.com/g/p0ntan/mvc/badges/build.png?b=main)](https://scrutinizer-ci.com/g/p0ntan/mvc/build-status/main)

## Repo för kursen mvc

Detta är ett repo för min webbplats som har skapats för kursen mvc på BTH (Blekinge tekniska högskola).

På webbplatsen finns olika applikationer som t ex spelet blackjack, ett mindre digitalt bibliotek och ett äventyrsspel i stil med ett escape-room. Alla applikationer är programmerade objektorienterat i språket php, där källkoden ligger i detta repo tillgänglig för den vill titta närmare. Webbplatsen använder sig utav ramverket symfony och dess session, tillsammans med ORM Doctrine för att spara data i en databas. Databasen i sig är en SQLite databas och ligger även med i detta repo.

Repot har syftet att visa upp min kunskap i och fungerar som en examination för kursen mvc. Mvc står för modeller, vyer och kontroller som är ett sätt att struktuera upp en applikation där varje del har sitt eget ansvarsområde.

Webbplatsen kan man se [här](https://www.student.bth.se/~poak22/dbwebb-kurser/mvc/me/report/public/).

Om man vill klona detta repo och köra det lokalt kan man göra följande i en bash-terminal där man har git och php installerat.

- Ställ dig i den mapp du önskar klona repot
- Klona repot med kommandot: *git clone https://github.com/p0ntan/mvc*
- Gå in i mappen med kommandot: *cd mvc/*
- Initera repot och installera nödvändiga paket med kommandot: *composer install*
- Kommandot ovan kommer även att kopiera in databasen så den kan användas på webbplatsen.
- Starta sedan en php-server, förslagsvis med kommandot: *php -S localhost:8888 -t public*
- I en webbläsare gå sedan in på localhost:8888, webbplatsen är nu igång lokalt.php
