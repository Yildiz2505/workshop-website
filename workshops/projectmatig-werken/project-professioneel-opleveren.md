# Een project professioneel opleveren

*Een werkende oplossing is een belangrijk resultaat. Maar kan een ander het gebruiken, begrijpen en onderhouden zonder voortdurend jouw hulp nodig te hebben? Professioneel opleveren betekent dat je daar vooraf over nadenkt.*

**Duur:** ongeveer 45 minuten · **Voor wie:** makers, projectteams, zelfstandigen, ontwikkelaars en vrijwilligers · **Voorkennis:** een eigen project helpt, maar is niet verplicht.

**Benodigdheden:** het projectresultaat, een overzicht van afspraken en eventueel GitHub of een gedeelde map.

## Wat levert deze workshop op?

Je ontdekt hoe je:

- controleert of het afgesproken resultaat compleet is;
- een begrijpelijke README of gebruiksinstructie schrijft;
- een korte demonstratie voorbereidt;
- technische en organisatorische informatie overdraagt;
- openstaande problemen en vervolgwensen eerlijk vastlegt;
- een project afsluit zonder belangrijke kennis kwijt te raken.

## 1. Klaar met bouwen is niet altijd klaar met opleveren

Bij de slimme plantenmonitor werkt de sensor en verschijnen waarden op een webpagina. Maar de volgende gebruiker kan nog vragen hebben:

- Hoe start ik het systeem?
- Wat betekent de meetwaarde?
- Wat gebeurt er wanneer wifi wegvalt?
- Waar vind ik de actuele code?
- Hoe kan ik controleren of de sensor juist meet?
- Wie helpt als er later iets stukgaat?

De oplevering is pas bruikbaar wanneer de relevante vragen voldoende zijn beantwoord.

## 2. Toets aan de oorspronkelijke afspraken

Pak het projectdoel en de acceptatiecriteria erbij.

| Afspraak | Bewijs of controle |
| --- | --- |
| Eén plant meten | Sensor levert een meetwaarde. |
| Laatste meting tonen | Webpagina toont waarde en tijdstip. |
| Werking controleren | Testbevindingen zijn beschikbaar. |
| Eenvoudig te gebruiken | Basisinstructie beschrijft starten en interpreteren. |

Niet elk nieuw idee hoeft voor oplevering af te zijn. Houd het afgesproken resultaat en latere uitbreidingen uit elkaar.

> [!TIP]
> Begin pas aan een grote extra functie wanneer duidelijk is dat die nodig is voor de afgesproken oplevering. Een kleinere betrouwbare versie is vaak waardevoller dan een uitgebreide onstabiele versie.

## 3. De README: iemand wegwijs maken

Voor een software- of techniekproject is een **README** vaak de eerste plek waar iemand kijkt.

Een praktische README bevat bijvoorbeeld:

1. **Wat is dit?** Korte omschrijving van doel en doelgroep.
2. **Wat kan het?** De belangrijkste functies en grenzen.
3. **Wat heb je nodig?** Apparatuur, softwareversies en vereisten.
4. **Hoe start je?** Duidelijke stappen.
5. **Hoe test je?** Controle van de basiswerking.
6. **Wat is bekend?** Beperkingen en veelvoorkomende problemen.
7. **Waar staan bestanden?** Links naar code, schema's en documentatie.
8. **Wie onderhoudt het?** Contact- of beheerafspraken als die relevant zijn.

### Voorbeeldfragment voor de plantenmonitor

**Project:** Plantenmonitor voor één potplant.

**Doel:** Laat via een sensor de laatste bodemvochtmeting zien.

**Vereisten:** ESP32, geschikte bodemvochtsensor, wifi en webomgeving met ingestelde toegang.

**Gebruik:** Schakel de ESP32 in, open de dashboardpagina en controleer de tijd van de laatste meting.

**Controle:** Vergelijk enkele metingen bij verschillende vochtigheidsniveaus.

**Bekende beperking:** De sensormeting moet voor deze grondsoort worden gekalibreerd.

Schrijf voor de persoon die het later leest, niet alleen voor degene die het gebouwd heeft.

## 4. Wat moet je wel en niet documenteren?

Schrijf vooral op wat moeilijk opnieuw te ontdekken is:

- belangrijke technische keuzes;
- versievereisten en afhankelijkheden;
- aansluiting van hardware;
- installatie- en herstelstappen;
- beperkingen en veilige gebruiksgrenzen;
- de plek van bronbestanden;
- noodzakelijke beheertaken.

Schrijf niet elk experiment tot in detail op als dat voor het vervolg geen betekenis heeft.

> [!WARNING]
> Zet nooit echte wachtwoorden, API-sleutels of geheime tokens in openbare documentatie. Leg uit **waar** beheerders hun eigen geheimen veilig moeten instellen, niet **wat** de geheime waarden zijn.

## 5. Demonstreer wat de gebruiker nodig heeft

Een goede demo hoeft niet spectaculair te zijn. Laat het belangrijkste gebruikersdoel zien.

**Voorbeeldopbouw in vijf minuten:**

1. Leg in één zin uit welk probleem je oplost.
2. Laat het werkende resultaat zien.
3. Toon één herkenbare handeling of situatie.
4. Licht een belangrijke beperking toe.
5. Geef aan waar instructies en contactafspraken staan.

Voor de plantenmonitor toon je een meetwaarde met een zichtbaar tijdstip en leg je uit hoe de gebruiker kan zien of die waarde recent is.

Vermijd een demo waarin je alleen maar code toont terwijl de doelgroep vooral wil weten hoe het systeem helpt.

## 6. De overdracht: van maker naar gebruiker of beheerder

Bij overdracht draait het om verantwoordelijkheden.

| Onderdeel | Vraag |
| --- | --- |
| Product | Welke versie is nu afgesproken en beschikbaar? |
| Toegang | Wie mag gebruiken, wijzigen en beheren? |
| Documentatie | Waar staan de actuele instructies? |
| Onderhoud | Wie houdt dependencies of onderdelen bij? |
| Ondersteuning | Hoe meldt iemand een probleem? |
| Bekende punten | Welke beperkingen en vervolgacties zijn er? |

Maak onderscheid tussen een **gebruikersoverdracht** en een **technische overdracht**. Een gebruiker heeft andere informatie nodig dan een ontwikkelaar.

## 7. Versies en bronbestanden

Bij een digitaal project is het prettig wanneer duidelijk is welke versie is opgeleverd.

Gebruik een herkenbare releaseaanduiding of datum. Leg vast welke code en instellingen erbij horen.

GitHub kan helpen om code en wijzigingen terug te vinden. Het opslaan van broncode is echter geen volledige back-upstrategie: controleer waar data, configuratie en andere bestanden veilig bewaard worden.

Bij hardware horen vaak ook een aansluitschema, typenummers en eventueel 3D-ontwerpbestanden bij de overdracht.

## 8. Openstaande punten eerlijk communiceren

Niet alle verbeteringen hoeven bij oplevering klaar te zijn. Noteer wel wat nog openstaat.

| Type | Voorbeeld | Afspraak |
| --- | --- | --- |
| Bekende beperking | Sensor is alleen voor deze grond gekalibreerd. | Vermelden in instructie. |
| Fout die eerst opgelost moet worden | Dashboard toont misleidend recente tijd. | Oplossen vóór oplevering. |
| Vervolgidee | Automatische bewatering toevoegen. | Op backlog voor later. |
| Onderhoudspunt | Batterij of voeding periodiek controleren. | Beheerafspraak vastleggen. |

Zo voorkom je dat een wens, een risico en een kritieke fout op één hoop belanden.

## 9. Een compacte opleverchecklist

Deze checklist is een vrijblijvend hulpmiddel voor je eigen project:

- [ ] Het afgesproken resultaat is aanwezig.
- [ ] De belangrijkste gebruikssituaties zijn getest.
- [ ] Kritieke fouten zijn opgelost.
- [ ] Bekende beperkingen zijn genoteerd.
- [ ] De actuele bronbestanden zijn vindbaar.
- [ ] Gebruikers- of installatie-instructies zijn begrijpelijk.
- [ ] Benodigde toegangen en beheerders zijn afgesproken.
- [ ] Veiligheids- en privacyaspecten zijn bekeken.
- [ ] Er is een korte demonstratie of uitleg beschikbaar.
- [ ] Vervolgacties hebben een eigenaar of zijn bewust afgesloten.

Je kunt onderdelen weglaten die bij jouw project niet relevant zijn, zolang de overdracht daadwerkelijk bruikbaar blijft.

## 10. Het project netjes afsluiten

Na de oplevering is een korte terugblik zinvol:

- Welke aanpak werkte goed?
- Wat veroorzaakte vertraging?
- Wat zou je bij een volgend project eerder testen?
- Welke kennis moet bewaard blijven?

Bewaar de belangrijkste conclusies in een paar zinnen en spreek af wat daarna met het project gebeurt. Er is geen verplicht eindrapport nodig.

## Veelgemaakte fouten

**Documentatie op het laatst improviseren.** Noteer belangrijke keuzes tijdens het bouwen.

**Alleen een demo geven zonder bestanden over te dragen.** Zorg dat anderen de oplossing werkelijk kunnen gebruiken.

**Bekende beperkingen verbergen.** Benoem ze met de gevolgen en eventuele tijdelijke aanpak.

**Geen beheerafspraak maken.** Ook een klein project kan later onderhoud nodig hebben.

**Een project blijven uitbreiden zonder af te ronden.** Lever een afgesproken versie op en plan vervolgwensen apart.

## Samenvatting

Professioneel opleveren betekent: **een bruikbaar resultaat, gecontroleerde kwaliteit en een overdracht waar anderen mee verder kunnen**.

Een klein project hoeft geen ingewikkeld dossier te krijgen. Een goede README, een werkend voorbeeld, duidelijke afspraken en een eerlijke lijst beperkingen brengen je vaak al ver.

## Verder met dit thema

Combineer deze workshop met [Testen, feedback verwerken en kwaliteit bewaken](?workshop=testen-feedback-en-kwaliteit) en [Professioneel communiceren in een project](?workshop=professioneel-communiceren-in-projecten).
