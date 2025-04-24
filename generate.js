const fs = require("fs");
const path = require("path");

const TEMI = [
  "Separazione consensuale: procedura e vantaggi",
  "Divorzio con figli minori: responsabilità e tutele",
  "Sinistro mortale: responsabilità e risarcimento",
  "Successione legittima: guida completa",
  "Locazioni: obblighi del locatore e dell’inquilino",
  "Licenziamento illegittimo: come difendersi",
  "Spese straordinarie per i figli",
  "Danni da incidente: come ottenere il risarcimento",
  "Responsabilità medica e danni alla persona",
  "Condominio: diritti e doveri dei proprietari"
];

function scegliTemi(n) {
  const shuffle = [...TEMI].sort(() => 0.5 - Math.random());
  return shuffle.slice(0, n);
}

function creaArticolo(titolo, data) {
  const slug = titolo.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  const fileName = `articoli/${slug}-${data}.html`;

  const contenuto = `
<!DOCTYPE html>
<html lang="it">
<head>
  <meta charset="UTF-8">
  <title>${titolo}</title>
  <meta name="description" content="${titolo} - Approfondimento legale a cura dello Studio Scardino.">
</head>
<body>
  <h1>${titolo}</h1>

  <h2>Introduzione</h2>
  <p>${titolo}. In questo articolo esamineremo gli aspetti principali legati a questa tematica, analizzando implicazioni pratiche e legali.</p>

  <h2>Contesto normativo</h2>
  <p>La normativa italiana regola questa materia attraverso articoli precisi del codice civile, del codice penale e delle leggi speciali. È importante conoscere i riferimenti per tutelare i propri diritti.</p>

  <h2>Applicazioni pratiche</h2>
  <p>Nel contesto quotidiano, il tema di "${titolo}" si presenta in varie situazioni. Ad esempio, durante controversie familiari, incidenti stradali o contenziosi condominiali.</p>

  <h2>Casi frequenti</h2>
  <p>L’esperienza dello Studio Legale Scardino ci ha mostrato che i casi più frequenti includono errori comuni di gestione, mancanza di documentazione o sottovalutazione dei termini procedurali.</p>

  <h2>Conclusioni</h2>
  <p>Il consiglio è sempre quello di affidarsi a un professionista per una consulenza dettagliata e tempestiva.</p>

  <p>Per assistenza legale su questo argomento, visita il sito ufficiale 👉 <a href="https://www.studiolegalescardino.com" target="_blank">studiolegalescardino.com</a></p>

  <p><a href="/">← Torna alla homepage</a></p>
</body>
</html>
`;

  fs.mkdirSync("articoli", { recursive: true });
  fs.writeFileSync(fileName, contenuto.trim());

  return `<li><a href="${fileName}">${titolo}</a></li>\n`;
}

// Calcolo settimane trascorse dal giorno zero (puoi cambiarlo)
const dataInizio = new Date("2025-04-24"); // oggi
const oggi = new Date();
const diffSettimane = Math.floor((oggi - dataInizio) / (1000 * 60 * 60 * 24 * 7));
const quantiArticoli = diffSettimane < 6 ? 1 : 2;

const oggiStr = oggi.toISOString().slice(0, 10);
const temiSelezionati = scegliTemi(quantiArticoli);

let index = fs.readFileSync("index.html", "utf-8");
const marker = "<!-- ARTICOLI -->";

temiSelezionati.forEach(titolo => {
  const riga = creaArticolo(titolo, oggiStr);
  if (index.includes(marker)) {
    index = index.replace(marker, riga + marker);
  }
});

fs.writeFileSync("index.html", index);
console.log(`✅ Generati ${quantiArticoli} articolo/i per la data ${oggiStr}`);
