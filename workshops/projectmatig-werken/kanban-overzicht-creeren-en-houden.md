# Kanban – overzicht creëren en houden

*Je hebt ideeën, taken en afspraken, maar het is lastig om overzicht te houden. Met Kanban maak je zichtbaar wat er moet gebeuren, waaraan wordt gewerkt en wat echt klaar is.*

**Duur:** 30–45 minuten om de werkwijze te leren; een eigen bord opzetten kan langer duren.  
**Voor wie:** volwassenen, makers, vrijwilligers, projectteams en iedereen die meer overzicht in het werk wil.  
**Voorkennis:** geen ervaring met projectmanagement nodig.  
**Benodigdheden:** een vel papier of whiteboard met plakbriefjes, óf een digitaal bord zoals Microsoft Planner, Trello of GitHub Projects.

## Wat levert deze workshop op?

Na het lezen begrijp je hoe je:

- werk overzichtelijk maakt met een Kanban-bord;
- taken concreet en klein genoeg formuleert;
- voorkomt dat er te veel werkzaamheden tegelijk lopen;
- blokkades en prioriteiten zichtbaar maakt;
- werk pas naar **Klaar** verplaatst wanneer het aan duidelijke afspraken voldoet;
- Kanban toepast in je eentje of binnen een team.

> [!TIP]
> Begin met een simpel bord. De kracht van Kanban zit niet in de software, maar in het zichtbaar maken en verbeteren van je werk.

## 1. Wat is Kanban?

**Kanban** is een manier om werk te visualiseren en de doorstroming te verbeteren. Taken worden weergegeven als kaarten die door verschillende fasen van het werk bewegen.

Het bekendste voorbeeld is:

| Te doen | Bezig | Controleren | Klaar |
| --- | --- | --- | --- |
| Meetgegevens tonen | Sensor aansluiten | — | Onderdelenlijst |
| Handleiding schrijven | — | — | Projectdoel |

Deze indeling is slechts een begin. Een administratief team kan andere stappen gebruiken dan een softwareteam. Kies kolommen die aansluiten op het werk dat werkelijk gebeurt.

Kanban is geen verplicht stappenplan en ook geen synoniem voor een to-dolijst. Het helpt je vooral om **werk te zien, minder tegelijk te doen en knelpunten aan te pakken**.

### Kanban tegenover een gewone takenlijst

Een takenlijst vertelt *wat* er nog moet gebeuren. Een Kanban-bord laat daarnaast zien:

- wat is gestart;
- hoeveel werk tegelijk loopt;
- waar taken blijven hangen;
- waar een ander moet controleren of helpen;
- wat daadwerkelijk is afgerond.

## 2. Eén doorlopend voorbeeld: de slimme plantenmonitor

Stel: je ontwikkelt een klein systeem dat het bodemvocht bij één plant meet en de laatste meetwaarde op een webpagina toont.

Je hebt een eenvoudig projectplan gemaakt. Nu wil je de dagelijkse voortgang bijhouden. Op het Kanban-bord plaats je bijvoorbeeld deze kaarten:

| Te doen | Bezig | Controleren | Klaar |
| --- | --- | --- | --- |
| Testgegevens verzamelen | Sensor aansluiten | Meetbereik bepalen | Onderdelen kiezen |
| Webpagina opzetten | — | — | Doel beschrijven |
| Korte gebruiksinstructie schrijven | — | — | — |

Dit is een **momentopname**, geen vaste planning. Elke kaart beweegt wanneer de toestand van het werk verandert.

> [!WARNING]
> De kolom **Klaar** betekent niet “ik heb eraan gewerkt”, maar “het afgesproken resultaat voldoet aan de controlepunten”.

## 3. Een Kanban-bord opzetten

Je hebt geen account of software nodig om te beginnen. Een bord met vier kolommen is voldoende.

### Stap 1 – Kies je werkproces

Begin met:

1. **Te doen:** werk dat is afgesproken maar nog niet gestart.
2. **Bezig:** werk waaraan actief wordt gewerkt.
3. **Controleren:** werk dat klaar lijkt, maar nog moet worden nagekeken.
4. **Klaar:** werk dat aan de gemaakte afspraken voldoet.

Voor sommige teams is **Controleren** niet nodig. Andere teams voegen bijvoorbeeld **Wachten op reactie** toe. Kies alleen een extra kolom als die echt helpt.

### Stap 2 – Schrijf concrete taakkaarten

Een goede kaart bevat ten minste:

- **een actie en een zichtbaar resultaat**;
- **een verantwoordelijke**, bij samenwerking;
- **een korte omschrijving** van wanneer de taak klaar is.

Vergelijk:

| Onduidelijke kaart | Duidelijkere kaart |
| --- | --- |
| “Website” | “Maak een pagina die de laatste bodemvochtmeting toont.” |
| “Sensor” | “Lees de analoge waarde van de sensor uit via de ESP32.” |
| “Testen” | “Vergelijk vijf meetwaarden in droge en vochtige potgrond.” |
| “Documentatie” | “Beschrijf de aansluiting en startprocedure in de README.” |

Een taak die wekenlang in **Bezig** blijft, is meestal te groot of heeft een blokkade. Splits de kaart dan op in kleinere resultaten.

### Stap 3 – Maak het bord zichtbaar

Op papier: teken vier kolommen en gebruik losse briefjes. Digitaal: maak een bord aan, voeg de kolommen toe en maak per taak een kaart.

Gebruik je een digitaal hulpmiddel, kijk dan of het mogelijk is om een eigenaar, checklist, datum en opmerkingen aan een kaart toe te voegen. De precieze benamingen verschillen per programma en versie.

### Stap 4 – Spreek af wanneer kaarten mogen verplaatsen

Maak een simpele werkafspraak:

- **Te doen → Bezig:** iemand pakt de taak daadwerkelijk op.
- **Bezig → Controleren:** het resultaat is beschikbaar voor controle.
- **Controleren → Klaar:** de afgesproken criteria zijn gecontroleerd.
- **Controleren → Bezig:** er is iets te herstellen.

Zo vertelt het bord de waarheid over de voortgang.

## 4. Minder tegelijk doen: de WIP-limiet

**WIP** betekent *Work in Progress*: het aantal taken waaraan tegelijk wordt gewerkt.

Stel dat je vijf projecten hebt en overal één taak start. Je bent voortdurend bezig, maar rondt misschien weinig af.

Een **WIP-limiet** is een afspraak over hoeveel kaarten maximaal in een bepaalde kolom mogen staan. Bijvoorbeeld:

| Kolom | Voorbeeldlimiet |
| --- | ---: |
| Te doen | Geen limiet |
| Bezig | Maximaal 2 kaarten |
| Controleren | Maximaal 2 kaarten |
| Klaar | Geen limiet |

De aantallen zijn **slechts voorbeelden**. Eén persoon kan met maximaal één of twee actieve taken beginnen; een groter team kiest een grens die bij de capaciteit past.

### Wat gebeurt er als Bezig vol is?

Start niet automatisch iets nieuws. Kijk eerst of je:

- een bestaande taak kunt afronden;
- een collega kunt helpen;
- een blokkade kunt oplossen;
- een kaart kunt verduidelijken of verkleinen.

Het doel is niet iedereen voortdurend maximaal bezig te houden, maar **werk sneller en betrouwbaarder af te ronden**.

## 5. Wat doe je met blokkades?

Een taak kan vastlopen omdat informatie ontbreekt, een onderdeel niet beschikbaar is of iemand nog moet reageren.

Houd zo'n blokkade zichtbaar op de kaart. Noteer:

- wat de blokkade is;
- wie kan helpen of beslissen;
- wat de eerstvolgende actie is.

**Voorbeeld:** “De webpagina kan nog geen metingen tonen, omdat de API-sleutel ontbreekt. Actie: beheerder vragen om een testomgeving en toegang.”

Maak eventueel een apart label **Geblokkeerd**. Verplaats de taak niet zomaar naar **Klaar** om het bord netjes te laten lijken.

> [!TIP]
> Gebruik op een gedeeld bord liever een duidelijke korte omschrijving dan alleen een kleur of emoji. Dan begrijpt iedereen waarom een kaart aandacht nodig heeft.

## 6. Prioriteit: wat pak je eerst op?

Niet elke taak is even belangrijk. Kijk naar drie vragen:

1. **Wat brengt het belangrijkste resultaat dichterbij?**
2. **Welke taak blokkeert ander werk?**
3. **Welke taak is voldoende duidelijk om nu te starten?**

Bij de plantenmonitor is het uitlezen van een betrouwbare sensorwaarde waarschijnlijk belangrijker dan het kiezen van een mooie kleur voor het dashboard.

Een simpele rangorde werkt meestal goed: **Nu**, **Hierna**, **Later**. Gebruik niet meteen tien prioriteitsniveaus.

### Laat ruimte voor onverwacht werk

Een fout oplossen of een dringend verzoek hoort soms bij het werk. Maak dan bewust een keuze: wat schuift op als dit erbij komt? Een bord helpt om die afweging zichtbaar te maken.

## 7. Samenwerken met Kanban

In een team werkt Kanban het beste wanneer het bord één gedeelde weergave is van het werk.

Een kort overleg kan bijvoorbeeld langs het bord verlopen:

- **Wat is er sinds de vorige keer afgerond?**
- **Welke taak zit vast?**
- **Welke kaart moeten we helpen afmaken voordat we iets nieuws starten?**
- **Is er een beslissing of nieuwe informatie nodig?**

Houd het gesprek bij de voortgang van het werk, niet bij een uitgebreide verantwoording van ieders dag.

### Wie is verantwoordelijk?

Geef een taak bij voorkeur één duidelijke eigenaar. Dat betekent niet dat maar één persoon eraan mag werken: samenwerken en reviewen blijft mogelijk.

Gebruik opmerkingen op kaarten voor relevante keuzes en verwijzingen naar bestanden. Besluiten die belangrijk blijven, leg je op een herkenbare plek vast.

## 8. Wanneer is een kaart echt klaar?

Een **Definition of Done** is een gezamenlijke afspraak over wat “klaar” betekent. Voor een kleine technische taak kan dat zijn:

- het afgesproken resultaat is aanwezig;
- de werking is gecontroleerd;
- eventuele foutmeldingen zijn opgelost of gedocumenteerd;
- belangrijke bestanden of instructies zijn bijgewerkt.

Voor de kaart **“Toon de laatste meetwaarde op de webpagina”** zou je bijvoorbeeld afspreken dat de pagina de meest recente meting leesbaar toont en dat dit met testgegevens is gecontroleerd.

De controlepunten hoeven niet ingewikkeld te zijn. Ze voorkomen vooral dat mensen verschillende verwachtingen hebben.

## 9. Kanban in verschillende situaties

### Alleen werken

Gebruik een klein bord voor je eigen website, studie, huisproject of hobby. Begin met maximaal één of twee taken in **Bezig**. Bekijk het bord bijvoorbeeld aan het begin en einde van je werksessie.

### In een softwareteam

Combineer kaarten met GitHub-issues, branches en pull requests. De kolom **Controleren** kan overeenkomen met een code-review of een testmoment. Een GitHub Projects-bord kan de voortgang van meerdere repositories zichtbaar maken.

### In een vereniging of vrijwilligersproject

Een bord kan helpen bij het organiseren van een activiteit, onderhoud of communicatie. Werk met duidelijke eigenaren, datums en afspraken, en voorkom dat persoonsgegevens onnodig op een breed toegankelijk bord terechtkomen.

## 10. Verbeter je werkwijze met eenvoudige signalen

Je hoeft geen ingewikkelde statistieken te verzamelen. Let op:

| Signaal | Wat kan het betekenen? |
| --- | --- |
| Veel kaarten blijven in **Bezig** | Er loopt te veel tegelijk, of taken zijn te groot. |
| **Controleren** raakt steeds vol | Reviews of beslissingen duren te lang. |
| Taken keren vaak terug naar **Bezig** | Criteria zijn onduidelijk, of fouten worden laat ontdekt. |
| **Klaar** groeit nauwelijks | Het werk is geblokkeerd of er worden weinig taken afgerond. |

Twee nuttige begrippen zijn:

- **Doorlooptijd (lead time):** tijd tussen het moment dat werk wordt aangevraagd en het moment dat het is afgerond.
- **Cyclustijd (cycle time):** tijd vanaf het daadwerkelijk starten van werk tot het afronden ervan.

De precieze meetpunten spreek je binnen een team af. Voor een klein project is het vaak voldoende om regelmatig te kijken waar het werk vertraagt.

## 11. Veelgemaakte fouten

**Te veel kolommen.** Begin eenvoudig. Voeg pas een stap toe als dat echt meer inzicht geeft.

**Alle taken direct starten.** Probeer eerst lopend werk af te maken en stel een passende WIP-limiet in.

**Kaarten zijn te groot.** Deel ze op in resultaten die binnen een overzichtelijke periode af te ronden zijn.

**Klaar betekent voor iedereen iets anders.** Maak controlepunten expliciet.

**Het bord wordt niet bijgewerkt.** Spreek een vast moment af om wijzigingen te verwerken.

**Het bord wordt een controlesysteem voor personen.** Gebruik het in de eerste plaats om het werk samen te verbeteren, niet om mensen op snelheid af te rekenen.

## 12. Voorbeeld van een eenvoudig persoonlijk bord

Deze indeling kun je direct overnemen in een notitie, spreadsheet of digitaal bord:

```text
TE DOEN                 BEZIG (max. 2)         CONTROLEREN         KLAAR
---------------------   -------------------    -----------------    ----------------
Webpagina voorbereiden  Sensor uitlezen        Meetbereik testen    Doel formuleren
README schrijven        API koppelen           -                    Onderdelen kiezen
Testscenario bedenken   -                      -                    -
```

Bekijk het bord regelmatig en stel de werkwijze bij als taken steeds op dezelfde plek blijven hangen.

## Samenvatting

Met Kanban maak je het werk zichtbaar en houd je de aandacht bij **afronden in plaats van steeds opnieuw beginnen**.

De belangrijkste principes:

1. Visualiseer het werk en gebruik duidelijke taakkaarten.
2. Beperk het aantal taken waaraan je tegelijk werkt.
3. Maak blokkades en prioriteiten zichtbaar.
4. Controleer wat “klaar” betekent.
5. Verbeter de werkwijze op basis van wat je op het bord ziet.

## Verder met dit thema

De workshop **Van idee naar een helder projectplan** helpt om het doel en de stappen van een project helder te krijgen.

Daarna kun je je verdiepen in **Scrum**, waarbij teams in korte iteraties samenwerken en regelmatig feedback verzamelen, of in **GitHub Projects** om een digitaal projectbord aan issues en ontwikkelwerk te koppelen. Deze vervolgen worden toegevoegd zodra ze beschikbaar zijn.
