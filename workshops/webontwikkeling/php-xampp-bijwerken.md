# PHP veilig bijwerken in XAMPP

**Duur:** 45–60 minuten · **Voor wie:** volwassenen die lokaal met XAMPP ontwikkelen  
**Software:** Windows, XAMPP, PowerShell, Composer en eventueel Laravel

## Voor wie is deze workshop?

Voor iedereen die op Windows met XAMPP, PHP en eventueel Composer of Laravel werkt. Enige ervaring met Windows en PowerShell is handig.

## Wat ga je leren?

- De actieve PHP-versie en bijbehorende architectuur herkennen.
- Een geschikte patchupdate kiezen en vooraf een herstelbare back-up maken.
- PHP, Apache, phpMyAdmin en eventuele ontwikkelprojecten na afloop controleren.
- Een mislukte wijziging terugdraaien.

## Introductie

XAMPP bevat onder andere Apache, MariaDB en PHP. Verouderde PHP-versies kunnen fouten en beveiligingsproblemen bevatten. Let op: een patchupdate binnen een PHP-reeks die niet meer wordt ondersteund, maakt die reeks niet opnieuw veilig. In deze handleiding werk je daarom een bestaande PHP-installatie bij naar een nieuwere **patchversie binnen dezelfde reeks**.

Voorbeeld:

- huidige versie: PHP 8.2.4;
- nieuwe patchversie: PHP 8.2.35.

> [!NOTE]
> Versienummers veranderen. Controleer vóór een update altijd de officiële PHP-downloadpagina en kies de nieuwste beschikbare patchversie binnen de reeks die je al gebruikt.

> [!WARNING]
> Deze les gaat over een patchupdate binnen dezelfde reeks, bijvoorbeeld **8.2.4 → 8.2.35**. Stap met deze werkwijze niet zomaar over van PHP 8.2 naar PHP 8.5. Bij zo'n grotere upgrade moet je eerst XAMPP, Apache, je extensies en alle Composer-projecten op compatibiliteit controleren.

## Achtergrond en uitleg

### Hoe lees je een PHP-versienummer?

Bij PHP 8.2.35 betekent:

| Deel | Naam | Betekenis |
|---|---|---|
| 8 | Major | Grote versie met belangrijke wijzigingen |
| 2 | Minor | Nieuwe functies binnen PHP 8 |
| 35 | Patch | Fout- en beveiligingsoplossingen |

Een patchupdate binnen dezelfde minorversie geeft meestal minder compatibiliteitsproblemen dan een overstap naar een nieuwe major- of minorversie.

### Waarom Thread Safe?

XAMPP gebruikt PHP als module van de Apache-webserver. Daarom download je voor deze standaardopstelling een **Thread Safe**-versie.

Bij een veelgebruikte 64-bits XAMPP-installatie met PHP 8.2 kies je doorgaans:

**x64 Thread Safe – ZIP**, met een runtime/build die bij de bestaande Apache-installatie past. De beschikbare buildnaam hangt af van de PHP-versie

Controleer altijd eerst de informatie van je eigen installatie met `php -v`.

### Waarom eerst een back-up?

Bij een update vervang je de map `C:\xampp\php`. Als Apache daarna niet start, kun je met de bewaarde oude map meteen terug naar de werkende situatie.

> [!WARNING]
> XAMPP is bedoeld als lokale ontwikkelomgeving. Maak je computer niet rechtstreeks vanaf internet bereikbaar en gebruik XAMPP niet als openbare productieserver.

## Stapsgewijze handleiding

### Stap 1 – Controleer de huidige versie

Open PowerShell en voer uit:

```powershell
php -v
```

Voorbeeld:

```text
PHP 8.2.4 (cli) (ZTS Visual C++ 2019 x64)
```

Noteer:

- het volledige versienummer;
- of `ZTS` wordt genoemd;
- of je installatie `x64` gebruikt.

Deze gegevens helpen je om de juiste download te kiezen.

### Stap 2 – Download de juiste PHP-versie

Open de officiële pagina:

[PHP-downloads voor Windows](https://www.php.net/downloads.php?os=windows)

Kies:

1. dezelfde PHP-reeks als je huidige installatie, bijvoorbeeld **8.2**;
2. de juiste architectuur, meestal **x64**;
3. **Thread Safe**;
4. het ZIP-bestand.

Pak het ZIP-bestand na het downloaden uit.

> [!WARNING]
> Download niet per ongeluk de `Non Thread Safe`-versie of een andere PHP-reeks.

### Stap 3 – Stop XAMPP

Open het **XAMPP Control Panel** en stop:

- Apache;
- MySQL.

Ga pas verder als beide onderdelen zijn gestopt.

### Stap 4 – Maak een back-up van de PHP-map

Open Verkenner en ga naar:

```text
C:\xampp
```

Hernoem de bestaande map `php`, bijvoorbeeld naar:

```text
php_backup_8.2.4
```

Gebruik in de mapnaam je eigen oude versienummer. Verwijder deze back-up nog niet.

> [!NOTE]
> Staat XAMPP bij jou in een andere map? Gebruik dan jouw eigen installatiepad in alle volgende stappen.

### Stap 5 – Plaats de nieuwe PHP-map

Hernoem de uitgepakte map naar `php` en verplaats deze naar `C:\xampp`.

Controleer of dit bestand rechtstreeks in de nieuwe map staat:

```text
C:\xampp\php\php.exe
```

Als `php.exe` nog in een extra onderliggende map staat, is de mapstructuur niet goed.

### Stap 6 – Neem de bestaande instellingen over

Vergelijk je bestaande configuratie met de instellingen van de nieuwe PHP-versie. Bij een patchupdate binnen dezelfde reeks kun je doorgaans de oorspronkelijke `php.ini` als uitgangspunt gebruiken. Controleer wel extensies en paden. Kopieer vervolgens, indien passend:

```text
van: C:\xampp\php_backup_8.2.4\php.ini
naar: C:\xampp\php\php.ini
```

Controleer daarna of je de volgende map nodig hebt en kopieer die zo nodig:

```text
van: C:\xampp\php_backup_8.2.4\extras
naar: C:\xampp\php\extras
```

De map `extras` kan bijvoorbeeld `browscap.ini` bevatten. Alleen als jouw configuratie hiernaar verwijst, moet het bestand aanwezig zijn of de verwijzing worden aangepast.

### Stap 7 – Test PHP voordat je Apache start

Voer in PowerShell uit:

```powershell
C:\xampp\php\php.exe -v
```

Bij een geslaagde update verschijnt de nieuwe versie zonder waarschuwingen, bijvoorbeeld:

```text
PHP 8.2.35 (cli) (ZTS Visual C++ 2019 x64)
```

### Stap 8 – Start Apache en MySQL

Start in het XAMPP Control Panel:

- Apache;
- MySQL.

Beide regels moeten groen blijven en de status `running` tonen.

### Stap 9 – Test phpMyAdmin

Open [http://localhost/phpmyadmin](http://localhost/phpmyadmin).

Controleer of:

- phpMyAdmin normaal opent;
- je databases zichtbaar zijn;
- bij **Webserver** de nieuwe PHP-versie staat.

### Stap 10 – Test Composer en Laravel

Controleer Composer:

```powershell
composer --version
```

Composer moet de nieuwe PHP-versie en `C:\xampp\php\php.exe` tonen.

Ga daarna naar een Laravel-project en voer uit:

```powershell
php artisan --version
composer check-platform-reqs
```

Als de Laravel-versie verschijnt en Composer geen ontbrekende vereisten meldt, is de belangrijkste controle geslaagd.

## Problemen oplossen

### `Cannot open ... extras\browscap.ini`

Kopieer de map `extras` uit de back-up naar de nieuwe PHP-map en voer opnieuw uit:

```powershell
C:\xampp\php\php.exe -v
```

### Apache start niet

1. Stop Apache en MySQL.
2. Open via het XAMPP Control Panel het Apache-foutlogboek.
3. Noteer de volledige foutmelding.
4. Voer de herstelprocedure hieronder uit als je het probleem niet kunt oplossen.

### Een PHP-extensie ontbreekt

Controleer eerst welk configuratiebestand PHP gebruikt:

```powershell
C:\xampp\php\php.exe --ini
```

Controleer daarna in `C:\xampp\php\php.ini` of de benodigde extensie is ingeschakeld.

## Herstelprocedure

Werkt de nieuwe versie niet? Zet dan de back-up terug:

1. Stop Apache en MySQL.
2. Hernoem `C:\xampp\php` naar `php_mislukt`.
3. Hernoem je back-upmap terug naar `php`.
4. Start Apache en MySQL opnieuw.
5. Controleer met `php -v` welke versie actief is.

Omdat je de oorspronkelijke map hebt bewaard, raak je de oude werkende installatie niet kwijt.

## Samenvatting

Met deze stappen kun je PHP binnen XAMPP veilig bijwerken zonder direct naar een nieuwe major- of minorversie over te stappen. Je maakte eerst een herstelbare back-up, nam de bestaande configuratie over en controleerde daarna PHP, Apache, MySQL, phpMyAdmin, Composer en eventueel Laravel.

## Verder lezen

**Officiële bronnen:**

- [Officiële PHP-downloadpagina voor Windows](https://www.php.net/downloads.php?os=windows)
- [Ondersteunde PHP-versies](https://www.php.net/supported-versions.php)
- [Officiële XAMPP-website](https://www.apachefriends.org/)
