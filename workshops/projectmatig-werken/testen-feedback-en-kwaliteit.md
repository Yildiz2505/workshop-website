# Testen, feedback verwerken en kwaliteit bewaken

*Een project is niet klaar omdat iets één keer lijkt te werken. Je wilt weten of het resultaat doet wat is afgesproken, of het bruikbaar is en wat er gebeurt wanneer iets misgaat.*

**Duur:** 45–60 minuten · **Voor wie:** makers, projectteams, ontwikkelaars en mensen die producten of diensten verbeteren · **Voorkennis:** geen specialistische testkennis vereist.

**Benodigdheden:** een concreet resultaat dat je wilt beoordelen, de oorspronkelijke afspraken en een plek om bevindingen vast te leggen.

## Wat levert deze workshop op?

Je leert:

- kwaliteit vooraf in eenvoudige criteria vast te leggen;
- het verschil tussen testen, controleren en feedback verzamelen;
- een kleine testaanpak samen te stellen;
- problemen duidelijk te beschrijven en te prioriteren;
- feedback om te zetten in verbeteringen;
- te bepalen wanneer iets voldoende betrouwbaar is om op te leveren.

## 1. Wat bedoelen we met kwaliteit?

Een resultaat is niet automatisch goed omdat het technisch werkt.

Bij een slimme plantenmonitor zijn meerdere vragen relevant:

| Aspect | Vraag |
| --- | --- |
| Functioneel | Wordt de laatste meetwaarde juist getoond? |
| Betrouwbaar | Blijft het systeem werken bij tijdelijk wegvallende wifi? |
| Bruikbaar | Begrijpt iemand wat de getoonde waarde betekent? |
| Veilig | Worden geheimen niet zichtbaar gepubliceerd? |
| Onderhoudbaar | Kan iemand een fout terugvinden en onderdelen vervangen? |
| Toegankelijk | Is de informatie leesbaar op kleine schermen en bij beperkte zichtbaarheid? |

Kwaliteit is dus een **afspraak over wat het resultaat voor de gebruiker moet kunnen betekenen**.

## 2. Begin bij acceptatiecriteria

Met **acceptatiecriteria** beschrijf je vooraf wanneer een wens voldoende is uitgevoerd.

Voor de wens “Toon de laatste bodemvochtwaarde”:

- De pagina toont een numerieke waarde of een duidelijke status.
- Het tijdstip van de laatste meting is zichtbaar.
- Wanneer er nog geen data is, verschijnt een begrijpelijke melding.
- Bij een technische fout wordt niet ten onrechte een verse meting getoond.
- De informatie is leesbaar op laptop én telefoon.

Een goed criterium is **observeerbaar**. “Mooi en professioneel” is vaag; “de hoofdinformatie is zonder horizontaal scrollen leesbaar op mobiel” is controleerbaar.

> [!TIP]
> Houd acceptatiecriteria klein en specifiek. Je hoeft niet direct een uitgebreide formele testmethode te gebruiken.

## 3. Verschillende soorten controle

### Functioneel testen

Controleren of een afgesproken functie werkt. Bijvoorbeeld: verschijnt een nieuwe meetwaarde op de pagina?

### Testen met uitzonderingen

Wat gebeurt er wanneer de sensor los is, de internetverbinding wegvalt of het antwoord van de server ontbreekt?

### Gebruikstest

Laat een gebruiker het resultaat bekijken. Begrijpt die zonder extra uitleg wat het betekent en hoe je het gebruikt?

### Review

Laat iemand de code, instructies of het ontwerp kritisch bekijken. Daarbij kun je fouten vinden die bij een demonstratie niet opvallen.

### Herhalingstest

Controleer na een wijziging of eerder werkende onderdelen nog steeds werken. In software heet dit vaak *regressietesten*.

## 4. Een klein testplan maken

Begin niet met tientallen pagina's documentatie. Maak een tabel die bij de belangrijkste risico's past.

| Test | Aanpak | Verwacht resultaat |
| --- | --- | --- |
| Nieuwe meetwaarde | Stuur een testmeting naar de server. | Laatste waarde en tijdstip veranderen. |
| Geen verbinding | Onderbreek tijdelijk de verbinding in een veilige testopstelling. | Duidelijke foutmelding of herkenbare oude waarde. |
| Geen meetdata | Open de pagina zonder beschikbare records. | Geen misleidende nulwaarde, maar uitleg. |
| Mobiele weergave | Bekijk de pagina op een telefoon. | Waarde is leesbaar zonder onnodig schuiven. |
| Bekende fout | Voer dezelfde situatie uit na een reparatie. | Probleem treedt niet opnieuw op. |

Gebruik voor fouttests een testomgeving of een veilige simulatie. Onderbreek niet zomaar een productiesysteem dat andere mensen gebruiken.

## 5. Van bevinding naar bruikbare foutmelding

Een melding als “Werkt niet” is voor een ander lastig te onderzoeken.

Een duidelijke bugmelding bevat:

1. **Titel:** wat gaat er fout?
2. **Situatie:** apparaat, pagina, versie of omstandigheden.
3. **Stappen om te herhalen:** wat deed je?
4. **Verwacht resultaat:** wat had moeten gebeuren?
5. **Werkelijk resultaat:** wat gebeurde er?
6. **Impact:** hoe ernstig is het?
7. **Bijlage:** eventueel een relevante schermafbeelding zonder gevoelige gegevens.

### Voorbeeld

**Titel:** Dashboard toont oude meetwaarde als nieuw.

**Stappen:** wifi uitschakelen, enkele minuten later dashboard openen.

**Verwacht:** zichtbaar dat de data verouderd is.

**Werkelijk:** de oude waarde wordt zonder tijdswaarschuwing getoond.

**Impact:** gebruiker kan een onjuiste beslissing nemen over water geven.

Met deze informatie kan iemand gericht herstellen en opnieuw testen.

## 6. Wat test je eerst?

Je hebt bijna nooit onbeperkte tijd. Geef daarom voorrang aan problemen met grote gevolgen.

Denk aan:

- **Impact:** wat gebeurt er wanneer dit fout gaat?
- **Kans:** hoe waarschijnlijk is het dat de fout voorkomt?
- **Blootstelling:** hoe vaak of door hoeveel mensen wordt de functie gebruikt?

Een veiligheidsprobleem of verloren gegevens verdienen doorgaans eerder aandacht dan een kleine kleurafwijking.

Een eenvoudige indeling:

| Prioriteit | Betekenis |
| --- | --- |
| Kritiek | Onveilige situatie, ernstig dataverlies of kernfunctie onbruikbaar. |
| Hoog | Belangrijk onderdeel werkt niet betrouwbaar. |
| Normaal | Duidelijke fout met bruikbare omweg. |
| Laag | Kleine cosmetische afwijking. |

Maak bij twijfel samen een bewuste keuze; een label vervangt geen inhoudelijke beoordeling.

## 7. Feedback verzamelen die bruikbaar is

Vraag een gebruiker niet alleen “Vind je het mooi?”, maar laat hem of haar het resultaat bekijken in een echte situatie.

Bijvoorbeeld: “Kun je aanwijzen wanneer deze plant voor het laatst is gemeten?”

Observeer waar iemand twijfelt en vraag daarna om toelichting.

Maak onderscheid tussen:

- **Waarneming:** gebruiker ziet het meettijdstip niet.
- **Interpretatie:** het tijdstip valt mogelijk te weinig op.
- **Mogelijke verbetering:** plaats een duidelijk label “Laatst gemeten”.
- **Beslissing:** probeer de wijziging en toets opnieuw.

Niet elke suggestie hoeft direct gebouwd te worden. Bewaar ideeën op een backlog en kies op basis van doel en waarde.

## 8. De Definition of Done

De **Definition of Done** is een afspraak over wat “klaar” betekent.

Voor een klein softwareproject kan dat zijn:

- acceptatiecriteria zijn gecontroleerd;
- relevante fouten zijn opgelost of bewust vastgelegd;
- wijzigingen zijn beoordeeld;
- noodzakelijke documentatie is bijgewerkt;
- er is een werkende versie beschikbaar voor de afgesproken gebruiker.

Voor een ESP32-prototype kunnen daarnaast bedrading, voeding en veilige werking belangrijk zijn.

> [!WARNING]
> “Niet getest, maar het lijkt goed” is geen bewijs van kwaliteit. Noteer eerlijk wat wel en niet is gecontroleerd.

## 9. Een korte kwaliteitsronde bij de plantenmonitor

Een praktische volgorde:

1. Lees de afgesproken acceptatiecriteria.
2. Test eerst het normale gebruik.
3. Test één of twee waarschijnlijke foutscenario's.
4. Vraag een ander om de belangrijkste informatie te vinden.
5. Noteer afwijkingen als duidelijke taken.
6. Herstel de belangrijkste fouten.
7. Controleer dat de oplossing het probleem verhelpt.
8. Noteer bekende beperkingen bij de oplevering.

Met een klein Kanban-bord blijven testtaken en openstaande fouten zichtbaar.

## 10. Veelgemaakte fouten

**Pas op het einde testen.** Dan wordt het duur om problemen te herstellen. Test vanaf een vroege werkende versie.

**Alleen positieve scenario's testen.** Denk ook aan ontbrekende invoer, netwerkproblemen en onjuiste waarden.

**Vage feedback direct uitvoeren.** Vraag eerst welk probleem iemand werkelijk ervaart.

**Geen onderscheid tussen fout en nieuwe wens.** Een fout herstelt afgesproken gedrag; een nieuwe wens verandert wat is afgesproken.

**Alles willen testen.** Kies bewust op basis van risico en gebruik.

## Samenvatting

Kwaliteit ontstaat niet vanzelf op de laatste projectdag. Spreek vooraf af wat “goed” betekent, test regelmatig, leg bevindingen duidelijk vast en verbeter op basis van feedback.

Het doel is niet om aan te tonen dat een project foutloos is, maar om **voldoende vertrouwen in het resultaat** te krijgen en eerlijk te zijn over de beperkingen.

## Verder met dit thema

Lees ook [Van idee naar een helder projectplan](?workshop=van-idee-naar-projectplan) voor het formuleren van doelen en [Scrum begrijpen](?workshop=scrum-begrijpen-zonder-jargon) voor regelmatige feedback tijdens de ontwikkeling.
