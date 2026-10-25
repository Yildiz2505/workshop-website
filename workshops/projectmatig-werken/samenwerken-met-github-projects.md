# Samenwerken met GitHub Projects

*Een project loopt gemakkelijker wanneer ideeën, taken, code en afspraken op één plek zichtbaar zijn. GitHub Projects verbindt een flexibel projectbord met issues en pull requests.*

**Duur:** 60–75 minuten · **Voor wie:** makers, ontwikkelaars, projectteams en geïnteresseerden · **Voorkennis:** basisbegrippen van GitHub zijn handig, maar niet verplicht.

**Benodigdheden:** een GitHub-account; voor de voorbeelden bij voorkeur een eigen testrepository. Maak geen vertrouwelijke gegevens openbaar.

## Wat leer je?

Je ontdekt hoe je een Project opzet, taken als issues vastlegt, een bord inricht, verantwoordelijkheden verduidelijkt, codewijzigingen koppelt en de voortgang bespreekt. Het eindresultaat is een overzichtelijk werkproces dat ook voor een klein team bruikbaar is.

## 1. GitHub Projects, Issues en Pull Requests

Drie onderdelen werken samen:

| Onderdeel | Betekenis | Voorbeeld plantenmonitor |
| --- | --- | --- |
| **Project** | Overzicht met een bord, tabel of tijdlijn. | Alle werkzaamheden voor het prototype. |
| **Issue** | Een vastgelegde taak, wens, bug of vraag in een repository. | “Toon de laatste meetwaarde op de startpagina.” |
| **Pull request** | Voorstel om codewijzigingen samen te bekijken en samen te voegen. | Nieuwe pagina testen voordat die in de hoofdversie komt. |

GitHub Projects is niet hetzelfde als het klassieke, inmiddels verouderde repository-projectbord. Gebruik de huidige **Projects**-omgeving via je profiel of organisatie.

Een Project kan items uit meerdere repositories volgen. Dat is handig als een oplossing zowel een website als ESP32-code heeft.

## 2. Voorbereiden: een eigen Project maken

### Stap 1 — Open Projects

1. Log in bij GitHub.
2. Klik op je profielfoto, kies **Your profile** en open **Projects**.
3. Kies **New project**.
4. Start bijvoorbeeld met een **Board**-weergave.
5. Geef het Project een herkenbare naam, bijvoorbeeld **Plantenmonitor – prototype**.

De exacte knoppen kunnen veranderen; GitHub biedt ook Table- en Roadmap-weergaven en sjablonen aan.

### Stap 2 — Maak de werkstroom zichtbaar

Gebruik als eenvoudige beginindeling:

| Te doen | Bezig | Controleren | Klaar |
| --- | --- | --- | --- |
| Dashboard voorbereiden | Sensor uitlezen | — | Doel afspreken |
| Testgegevens verzamelen | — | — | Onderdelen bepalen |

In GitHub Projects kun je items met een **Status**-veld groeperen. Als de standaardstatussen anders heten, kun je ze aan je werkwijze aanpassen. Maak het niet ingewikkelder dan nodig.

### Stap 3 — Kies nuttige velden

Begin met een beperkt aantal velden:

- **Status:** waar staat de taak?
- **Assignee:** wie is aanspreekpunt?
- **Priority:** wat is nu het belangrijkst?
- **Iteration** of **Target date** (optioneel): in welke periode of uiterlijk wanneer?

Custom fields kunnen per project verschillen. Maak pas een nieuw veld als het helpt bij een echte beslissing.

> [!TIP]
> Start eerst met status en eigenaar. Een bord met tien velden geeft vaak minder overzicht dan een bord met drie goed bijgehouden velden.

## 3. Maak een goede Issue

Een issue moet herkenbaar zijn voor iemand die er morgen aan begint.

**Voorbeeldtitel:** Toon de actuele bodemvochtmeting op de webpagina.

**Voorbeeldinhoud:**

**Waarom:** de gebruiker wil in één oogopslag zien of er een recente meting is.

**Gewenst resultaat:** de startpagina toont de laatste ontvangen meetwaarde en het tijdstip daarvan.

**Klaar als:**
- de meetwaarde leesbaar wordt getoond;
- bij ontbrekende data een duidelijke melding verschijnt;
- de weergave op telefoon en laptop bruikbaar is.

**Aanvullende informatie:** link naar een schets of relevante documentatie.

Gebruik labels alleen als ze echt bijdragen, bijvoorbeeld bug, verbetering of documentatie.

## 4. Issues toevoegen aan het Project

Er zijn meerdere manieren:

1. Open een issue in de repository en koppel het via het **Projects**-veld aan je Project.
2. Voeg vanuit het Project een bestaand issue of een pull request toe.
3. Leg eerst een los idee vast als **draft issue** en zet dit later indien nodig om naar een repository-issue.

Voor het prototype kun je aanvankelijk de volgende items aanmaken:

| Issue | Eerste status |
| --- | --- |
| Sensor uitlezen | Bezig |
| Meting naar de server sturen | Te doen |
| Laatste waarde tonen | Te doen |
| Testen met droge en vochtige potgrond | Te doen |
| README met aansluitingen schrijven | Te doen |

Een draft issue kan handig zijn om een ruwe gedachte te parkeren. Een repository-issue is logischer wanneer je die wilt verbinden aan code en een pull request.

## 5. Samenwerken: eigenaarschap en afspraken

Een gedeeld bord werkt alleen wanneer je afspraken maakt:

- Wie beheert de volgorde van de belangrijkste items?
- Wie pakt de volgende taak op?
- Hoe melden we een blokkade?
- Wie controleert of iets klaar is?
- Wanneer werken we het bord bij?

Gebruik bij voorkeur één aanspreekpunt per issue, ook als meerdere mensen bijdragen.

### Een eenvoudig overleg

Loop wekelijks of per werksessie de kaarten van rechts naar links door:

1. Wat is afgerond?
2. Wat staat bij **Controleren**?
3. Welke taak zit vast in **Bezig**?
4. Wat starten we pas als er capaciteit vrijkomt?

Zo overleg je over **de voortgang van het werk**, niet alleen over individuele prestaties.

## 6. Codewijzigingen koppelen aan het plan

Voor softwareontwikkeling kun je een issue koppelen aan een branch en pull request.

Een eenvoudige werkwijze:

1. Kies een concreet issue.
2. Maak de codewijziging in een aparte branch.
3. Open een pull request met een duidelijke beschrijving.
4. Laat iemand de wijziging beoordelen of controleer zelf met een vaste checklist.
5. Voeg het resultaat na controle samen.

GitHub kan issues automatisch sluiten wanneer een pull request met een geschikte sluitingsverwijzing wordt samengevoegd in de standaardbranch, bijvoorbeeld **Closes #12**. Controleer of dit past bij jullie werkwijze; een issue is pas inhoudelijk klaar als de afgesproken acceptatiecriteria zijn gehaald.

> [!WARNING]
> Zet geen wachtwoorden, API-sleutels of persoonsgegevens in issues, screenshots, voorbeeldcode of een openbare repository. Gebruik daarvoor geschikte geheimenopslag en toegangsbeheer.

## 7. Views: dezelfde informatie anders bekijken

Een voordeel van Projects is dat je niet vijf verschillende lijsten hoeft te onderhouden.

| View | Wanneer handig? |
| --- | --- |
| **Board** | Dagelijks overzicht van status en blokkades. |
| **Table** | Veel taken vergelijken, sorteren en bewerken. |
| **Roadmap** | Planning en grotere mijlpalen over een periode bekijken. |

Een team kan bijvoorbeeld één view voor lopend werk en een tweede view voor toekomstige ideeën maken. Beide tonen dezelfde onderliggende items.

## 8. Automatiseren zonder overzicht te verliezen

GitHub Projects ondersteunt ingebouwde workflows, bijvoorbeeld om nieuw toegevoegde items een beginstatus te geven. In sommige situaties kun je ook automatisch passende repository-issues laten toevoegen.

Begin handmatig en automatiseer pas wanneer duidelijk is welke regels betrouwbaar werken.

Controleer na het inschakelen van automatisering of kaarten in de bedoelde status terechtkomen. Een automatische verplaatsing is **geen vervanging voor een inhoudelijke kwaliteitscontrole**.

## 9. Praktijkvoorbeeld: van wens naar oplevering

Voor de plantenmonitor verloopt één item bijvoorbeeld zo:

| Fase | Wat gebeurt er? |
| --- | --- |
| Te doen | Issue beschrijft welke waarde de pagina moet tonen. |
| Bezig | Ontwikkelaar bouwt de weergave op een branch. |
| Controleren | Pull request wordt nagekeken; testgegevens worden gebruikt. |
| Klaar | Code is goedgekeurd, samengevoegd en het resultaat werkt zoals afgesproken. |

De Project-view laat de voortgang zien; de issue bewaart de inhoudelijke afspraak; de pull request maakt de technische wijziging controleerbaar.

## 10. Veelgemaakte fouten

**Alles als een grote issue beschrijven.** Splits het werk op in kleine resultaten.

**Een kaart een eigenaar geven zonder afspraak.** Bevestig wie werkelijk aan de slag gaat.

**Te veel labels of velden toevoegen.** Begin met de informatie die je echt gebruikt.

**Code als klaar markeren voordat iemand het heeft getest.** Maak de Definition of Done expliciet.

**Een Project als personeelscontrole gebruiken.** Gebruik het vooral om werk zichtbaar en de samenwerking beter te maken.

## Samenvatting

GitHub Projects helpt je om planning, werkzaamheden en resultaten bij elkaar te brengen.

Onthoud: een **Project** geeft overzicht, een **Issue** beschrijft een taak of wens, een **Pull Request** helpt wijzigingen beoordelen. Houd de workflow eenvoudig en laat je werkafspraken bepalen hoe het bord wordt gebruikt.

## Verder lezen

- [GitHub Docs – Een Project maken](https://docs.github.com/en/issues/planning-and-tracking-with-projects/creating-projects/creating-a-project)
- [GitHub Docs – Quickstart for Projects](https://docs.github.com/en/issues/planning-and-tracking-with-projects/learning-about-projects/quickstart-for-projects)
- [Kanban – overzicht creëren en houden](?workshop=kanban-overzicht-creeren-en-houden)
