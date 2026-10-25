# AI als projectassistent

*AI kan helpen om ideeën te ordenen, teksten te verduidelijken en werk voor te bereiden. Maar jij blijft verantwoordelijk voor beslissingen, controle en de informatie die je invoert.*

**Duur:** 45–60 minuten · **Voor wie:** volwassenen, zelfstandige makers, projectteams en vrijwilligers · **Voorkennis:** basiservaring met een AI-chat is handig, niet noodzakelijk.

**Benodigdheden:** een AI-assistent naar keuze, zoals ChatGPT of Copilot, en een niet-vertrouwelijk voorbeeldproject.

## Wat levert deze workshop op?

Je leert AI verantwoord te gebruiken bij:

- het verhelderen van een projectidee;
- het opstellen van een eerste werkverdeling;
- het formuleren van concrete taken en acceptatiecriteria;
- het voorbereiden van vergaderingen en statusupdates;
- het bedenken van testscenario's en risico's;
- het samenvatten van uitsluitend daarvoor geschikte en gedeelde informatie;
- het herkennen en controleren van onjuiste AI-antwoorden.

## 1. Wat kan AI goed, en wat niet?

AI kan snel ideeën en eerste versies van teksten genereren. Dat is bruikbaar voor:

| AI kan ondersteunen bij | Menselijke controle blijft nodig voor |
| --- | --- |
| Brainstormen en structureren | Kiezen wat echt belangrijk is |
| Conceptplanning maken | Haalbaarheid, budget en beschikbare mensen |
| Taken helder formuleren | Werkverdeling en akkoord van betrokkenen |
| Risico's bedenken | Echte technische, juridische en organisatorische beoordeling |
| Samenvattingen schrijven | Feitelijke juistheid en gevoeligheid van gegevens |
| Testsuggesties maken | Werkelijke uitvoering en beoordeling |

AI heeft geen vanzelfsprekende toegang tot de actuele projectcontext. Zelfs overtuigend geformuleerde antwoorden kunnen onjuist of onvolledig zijn.

## 2. De basis van een bruikbare opdracht

Een duidelijke vraag aan een AI-assistent bevat bij voorkeur vijf onderdelen:

1. **Context:** waar gaat het project over?
2. **Doel:** wat wil je bereiken?
3. **Doelgroep:** voor wie is het resultaat?
4. **Grenzen:** tijd, middelen, eisen en dingen die buiten scope blijven.
5. **Gewenste uitvoer:** bijvoorbeeld een compacte tabel of concepttekst.

### Voorbeeld: de slimme plantenmonitor

**Vage vraag:** “Maak een projectplan voor een IoT-project.”

**Bruikbaardere opdracht:**

> Ik wil met twee mensen een prototype maken dat het bodemvocht bij één plant meet en de laatste meetwaarde op een webpagina toont. We werken er drie weken aan, naast andere verplichtingen. Automatisch water geven valt buiten de eerste versie. Maak een concept-projectplan op één pagina met doel, resultaten, maximaal zes mijlpalen, drie risico's en een voorstel voor de eerste week. Geef onzekerheden expliciet aan en verzin geen beschikbare uren of kosten.

Dit levert meestal relevantere suggesties op omdat duidelijk is waar het project wel en niet over gaat.

## 3. AI gebruiken om taken klein te maken

Stel dat je in het projectplan hebt staan: “Bouw het dashboard.”

Dat is te groot voor één duidelijke taakkaart.

Een nuttige vervolgvraag:

> Splits “Bouw het dashboard” op in maximaal vijf kleine, controleerbare taken. Beschrijf per taak het verwachte resultaat en één eenvoudig acceptatiecriterium. Houd de taken passend bij een eerste prototype zonder accounts of uitgebreide grafieken.

**Mogelijke concepttaken:**

| Taak | Wanneer klaar? |
| --- | --- |
| Bepaal het formaat van de meetgegevens | Voorbeeld van invoer en verwachte waarde beschreven |
| Maak een eenvoudige webpagina | Pagina laadt zonder foutmelding |
| Toon de laatste meetwaarde | Waarde verschijnt op de juiste plek |
| Toon het meettijdstip | Gebruiker herkent of de data recent is |
| Test ontbrekende gegevens | Pagina geeft een duidelijke melding |

Controleer of de afhankelijkheden kloppen en pas onrealistische taken aan.

## 4. AI als hulp bij projectcommunicatie

Je kunt AI een **concept** laten maken voor een statusupdate, zonder vertrouwelijke berichten te delen.

### Voorbeeldprompt

> Schrijf een korte, zakelijke statusupdate voor een technisch project. Gebruik alleen deze feiten: sensor uitlezen werkt; dashboard toont nog geen gegevens; oorzaak van de fout is nog onbekend; morgen controleren we de API-respons. Structuur: klaar, bezig, blokkade en volgende stap. Voeg geen nieuwe feiten toe.

De uitkomst is een eerste versie. Controleer of hij juist en passend is voordat je hem deelt.

> [!TIP]
> Vraag AI expliciet om onbekende informatie open te laten in plaats van zelf namen, deadlines of besluiten in te vullen.

## 5. AI voor een overleg gebruiken

AI kan helpen een korte agenda te maken:

> Maak een agenda voor een overleg van twintig minuten over een plantenmonitor. De onderwerpen zijn: resultaat van sensortest, API-blokkade en keuze tussen historie of waarschuwingen in de volgende fase. Zet per onderwerp de gewenste beslissing of uitkomst erbij.

Gebruik voor notulen of transcripties alleen een hulpmiddel dat volgens de afspraken van je organisatie en de privacyregels is toegestaan. Controleer of deelnemers op de hoogte moeten worden gesteld en of verwerking van de gegevens is toegestaan.

### Van ruwe notities naar een actielijst

Wanneer je geschikte, niet-vertrouwelijke of geautoriseerde notities hebt, kun je vragen:

> Maak op basis van onderstaande notities een besluitenlijst en een actielijst. Gebruik uitsluitend informatie uit de notities. Zet bij ontbrekende eigenaars of datums “nog af te spreken”. Maak een apart kopje voor vragen die nog openstaan.

Controleer het resultaat altijd met de oorspronkelijke notities. Een AI-assistent kan besluiten verwisselen met voorstellen of iemand onterecht een taak toewijzen.

## 6. AI helpt bij risico's en testscenario's

Vraag bijvoorbeeld:

> Bedenk voor een ESP32-bodemvochtmonitor vijf waarschijnlijke fouten bij sensor, voeding, wifi en gegevensweergave. Geef per fout een veilige testaanpak en het verwachte resultaat. Neem geen gevaarlijke elektrische handelingen op.

Gebruik de lijst om je eigen testplan aan te vullen.

AI kent niet automatisch jouw exacte hardware, bedrading of serverinstellingen. Verifieer technische instructies met betrouwbare documentatie en test veilig.

## 7. AI bij Scrum en Kanban

AI kan:

- lange taken herschrijven naar kleinere kaarten;
- onduidelijke acceptatiecriteria aanwijzen;
- een concept-Sprintdoel formuleren;
- risico's en afhankelijkheden signaleren;
- een overzicht van openstaande punten helpen structureren.

AI mag **niet zelfstandig bepalen** welke taken het team moet uitvoeren zonder dat iemand de context en afwegingen beoordeelt.

Bij Scrum blijft de Product Owner verantwoordelijk voor waarde en prioritering. Het team blijft verantwoordelijk voor de uitvoering en kwaliteit.

## 8. Bescherm gegevens en vertrouwelijkheid

Voer niet zomaar het volgende in bij een willekeurige AI-dienst:

- wachtwoorden, API-sleutels of toegangstokens;
- persoonsgegevens, medische gegevens of vertrouwelijke correspondentie;
- interne notulen of klantgegevens zonder passende grondslag en afspraken;
- bedrijfsgeheimen of niet-openbare broncode wanneer dat niet is toegestaan.

Gebruik fictieve of geanonimiseerde voorbeelden wanneer dat volstaat. Let ook op: echte anonimisering is meer dan alleen een naam verwijderen; iemand kan via andere details nog herkenbaar zijn.

Controleer bij gebruik binnen een organisatie de geldende regels over toegestane AI-diensten, bewaartermijnen en gegevensverwerking.

## 9. Controleer AI-uitvoer systematisch

Een praktische controle bestaat uit vijf vragen:

1. **Feiten:** kloppen de concrete beweringen?
2. **Bronnen:** zijn aangehaalde bronnen echt en relevant?
3. **Aannames:** vult AI dingen in die niet bekend zijn?
4. **Veiligheid en privacy:** bevat het voorstel risico's?
5. **Uitvoerbaarheid:** past het bij beschikbare tijd, middelen en mensen?

### Voorbeeld

AI stelt voor om in week één een dashboard, wifi-verbinding, automatische pomp én mobiele app te bouwen.

Dat klinkt productief maar is voor een klein prototype waarschijnlijk te ambitieus. Je kunt het antwoord verbeteren met:

> Beperk het voorstel tot één meetbare eerste versie: sensor uitlezen en laatste waarde tonen. Plaats automatische bewatering en de app onder “later”.

Zo gebruik je AI als **meedenker**, niet als automatische beslisser.

## 10. Een herbruikbaar promptformat

Onderstaand format kun je voor eigen, niet-vertrouwelijke projecten aanpassen:

> **Context:** Ik werk aan [korte projectbeschrijving].
>
> **Doel:** Het gewenste resultaat is [resultaat].
>
> **Doelgroep:** Dit is bedoeld voor [doelgroep].
>
> **Grenzen:** We hebben [tijd/middelen]; [functies] vallen buiten de scope.
>
> **Vraag:** Help mij met [specifieke taak].
>
> **Uitvoer:** Geef [tabel, checklist of korte tekst].
>
> **Kwaliteit:** Noem aannames en onzekerheden. Verzin geen namen, kosten, deadlines of behaalde resultaten. Stel waar nodig maximaal drie gerichte vragen.

## 11. Veelgemaakte fouten

**Een mooi antwoord meteen voor waar aannemen.** Controleer cijfers, bronnen en technische keuzes.

**Een volledig projectplan laten verzinnen zonder context.** Lever zelf het doel en de grenzen aan.

**Besluiten laten samenvatten zonder broncontrole.** Vergelijk de conceptlijst met wat werkelijk is besproken.

**Vertrouwelijke informatie delen voor het gemak.** Gebruik een toegestane werkwijze en beperk de ingevoerde gegevens.

**Alles door AI laten formuleren.** Kies zelf wat relevant is en houd de communicatie herkenbaar menselijk.

## Samenvatting

AI kan veel tijd besparen bij het **voorbereiden, ordenen, verhelderen en controleren** van projectwerk. Het vervangt geen verantwoordelijkheid, vakkennis of echte samenwerking.

De beste aanpak: geef duidelijke context, vraag om een afgebakend resultaat, controleer de uitvoer en leg belangrijke beslissingen bij mensen.

## Verder met dit thema

Deze workshop sluit aan op [Van idee naar een helder projectplan](?workshop=van-idee-naar-projectplan), [Professioneel communiceren](?workshop=professioneel-communiceren-in-projecten) en [Testen en kwaliteit bewaken](?workshop=testen-feedback-en-kwaliteit).
