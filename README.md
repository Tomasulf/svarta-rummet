# Svarta Rummet

Pausunderhållning för Diplomacy. Tryck på sigillet för att dra en dramatisk
depesch — en händelse med ett konkret direktiv som spelarna får agera på
innan nästa spelomgång. 24 unika händelser, ingen upprepas förrän hela
högen är förbrukad.

## Kom igång lokalt

```bash
npm install
npm run dev
```

## Lägg upp på GitHub

```bash
git init
git add .
git commit -m "Svarta Rummet"
git branch -M main
git remote add origin https://github.com/<ditt-användarnamn>/svarta-rummet.git
git push -u origin main
```

## Driftsätt på Vercel

1. Gå till [vercel.com](https://vercel.com) → **Add New Project**.
2. Importera GitHub-repot `svarta-rummet`.
3. Vercel känner automatiskt igen Vite — inga inställningar behöver ändras
   (build command `vite build`, output-mapp `dist`).
4. Klicka **Deploy**. Ni får en URL i stil med
   `https://svarta-rummet.vercel.app`.

Öppna `src/App.jsx` och uppdatera konstanten `SITE_URL` högst upp i filen
med er riktiga Vercel-URL — då blir QR-koden i appen korrekt. Committa och
pusha, så uppdateras sajten automatiskt.

## Hemliga uppdrag per nation

Klicka på **"Dela ut nationsuppdrag"** i huvudvyn för att visa sju QR-koder,
en per stormakt. Låt varje spelare skanna koden för sin egen nation vid
speluppstart — de kommer då till en privat sida där de kan dra ett
personligt hemligt uppdrag som ingen annan vid bordet ser. Uppdraget sparas
i webbläsaren på deras egen telefon, så det ligger kvar om de stänger och
öppnar sidan igen. Lägg till eller ändra uppdrag i `src/missions.js`.

## Använda QR-koden vid bordet

Klicka på **"Visa QR-kod för bordet"** i appen. En spelare kan då skanna
koden med mobilen och öppna Svarta Rummet på sin egen skärm — praktiskt om
ni vill skicka runt telefonen, eller om spelledarrollen byter person under
kvällen. Ni kan också skriva ut QR-koden och tejpa fast den vid bordet.

## Lägga till egna händelser

Öppna `src/events.js`. Varje händelse i `HANDELSER`-listan har:

- `kod` — kort etikett
- `titel` — rubrik på depeschen
- `text` — brödtext (kan innehålla `{MAKT}`, som ersätts med en slumpad stormakt)
- `direktiv` — instruktionen spelledaren läser högt för bordet

Lägg bara till fler objekt i listan så dyker de upp i draghögen.
