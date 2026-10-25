# Workshop Studio

Een zelfstandige, responsieve website met Markdown-workshops voor volwassenen. De stijl is gebaseerd op [SD Learn 3.0](https://github.com/Yildiz2505/sd-course-template), maar de oorspronkelijke repository wordt niet gewijzigd.

## Website

- `index.html`: startpagina, categorieën en workshopweergave.
- `css/style.css` en `css/print.css`: vormgeving en printinstellingen.
- `js/app.js`: laadt navigatie en Markdown-bestanden.
- `data/workshops.json`: centraal register van categorieën en workshops.
- `workshops/`: één Markdown-bestand per workshop.
- `templates/workshop.md`: vaste, flexibele opmaak zonder schoolse toetsen of inlevermomenten.

## Nieuwe workshop toevoegen

1. Maak een nieuw Markdown-bestand met `templates/workshop.md` als basis en plaats het in `workshops/<categorie>/`.
2. Voeg een record toe aan `data/workshops.json` met uniek `id`, `category`, `title`, `description`, `duration` en `path`.
3. De website bouwt de navigatie en het workshopoverzicht automatisch op. Controleer de paden en links.
4. Afbeeldingen kunnen worden geplaatst in `images/<onderwerp>/`; verwijs ernaar vanaf de websitehoofdmappen, bijvoorbeeld `images/voorbeeld/schema.svg`.

## Testen

Open de site via een lokale webserver, bijvoorbeeld `python -m http.server 8000` in de repositorymap en ga naar `http://localhost:8000`. `file://` kan geen Markdown ophalen met `fetch()`.

De site gebruikt Marked en DOMPurify via jsDelivr. Er is geen database of server-side PHP nodig.

## Publiceren

Publiceer uitsluitend handmatig via Cloud86/Plesk: eerst **Nu pull uitvoeren**, daarna **Nu publiceren**. Er is geen automatische publicatie of GitHub Actions ingericht.

## Inhoud

De eerste workshop, *PHP veilig bijwerken in XAMPP*, is gebaseerd op de bestaande [PHP/XAMPP-cursus](https://github.com/Yildiz2505/php-xampp-cursus) en herschreven als handleiding voor volwassenen.
