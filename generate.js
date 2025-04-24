const fs = require('fs');
const path = require('path');

// Funzione per generare un articolo
function generateArticle() {
  const today = new Date();
  const articleDate = today.toISOString().split('T')[0];  // Formato data "YYYY-MM-DD"
  
  // Creazione del titolo
  const articleTitle = `Guida Legale: Nuove normative e diritti in evoluzione - ${articleDate}`;
  
  // Creazione della meta description per SEO
  const metaDescription = `Scopri le ultime novità legali, le normative aggiornate e i tuoi diritti in evoluzione. Un articolo settimanale dedicato a temi legali importanti.`;
  
  // Contenuto dell'articolo: lunga, informativa e SEO-friendly
  const articleContent = `
    <html lang="it">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="${metaDescription}" />
      <title>${articleTitle}</title>
      <meta name="keywords" content="legge, diritti, normativa, contratto, diritto civile, consumatore, giustizia">
    </head>
    <body>
      <h1>${articleTitle}</h1>
      <p>Benvenuti nel nostro articolo settimanale che esplora temi legali cruciali per la nostra società. Oggi parleremo delle nuove normative legali che influenzano i consumatori e i cittadini.</p>
      
      <h2>Introduzione alla normativa recente</h2>
      <p>Nel corso degli ultimi mesi, diverse leggi e normative sono state introdotte per migliorare la protezione dei consumatori e semplificare la giustizia civile. Questi cambiamenti sono vitali per garantire che i diritti di ogni cittadino siano tutelati in modo equo e giusto.</p>
      
      <h3>1. Cambiamenti nel diritto civile</h3>
      <p>Una delle aree più rilevanti per i cittadini riguarda le modifiche al diritto civile, con l'introduzione di nuove misure per la risoluzione delle controversie e l'accelerazione dei procedimenti legali...</p>
      
      <h3>2. Il contratto di consumo e le nuove regole</h3>
      <p>I contratti di consumo hanno subito delle modifiche che riguardano principalmente la trasparenza, la possibilità di recesso e le nuove tutele per gli utenti, con l'intento di rendere i processi più chiari e sicuri...</p>
      
      <h3>3. Le leggi per la tutela del consumatore</h3>
      <p>Le leggi incentrate sulla protezione dei consumatori hanno portato a numerosi aggiornamenti che riguardano le vendite a distanza, il commercio elettronico e la risoluzione dei conflitti senza il bisogno di andare in tribunale...</p>
      
      <h2>Conclusioni</h2>
      <p>Il panorama legale sta cambiando rapidamente, e come cittadini è fondamentale rimanere informati. Questo articolo ha trattato alcune delle principali novità che riguardano la vita quotidiana e il diritto di ciascuno di noi...</p>
      
      <p>Per maggiori aggiornamenti e articoli settimanali, continuate a seguirci. Se avete domande o dubbi riguardanti la legislazione, non esitate a contattarci.</p>
    </body>
    </html>
  `;
  
  // Percorso in cui salvare l'articolo
  const articlePath = path.join(__dirname, 'articles', `articolo-${articleDate}.html`);
  
  // Creazione della cartella se non esiste
  fs.mkdirSync(path.join(__dirname, 'articles'), { recursive: true });
  
  // Scrive il contenuto dell'articolo nel file HTML
  fs.writeFileSync(articlePath, articleContent);
  
  console.log(`Articolo generato per la data ${articleDate}`);
}

// Esegui la generazione dell'articolo
generateArticle();
