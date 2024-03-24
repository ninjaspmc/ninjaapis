//CREDITOS @ATROX.DEV (COPIA NÃO)
const puppeteer = require('puppeteer');
const fs = require('fs');
const previouslySelectedLinksFile = 'selectedLinks.json';

async function getTikTokLink(searchTerm) {
const browser = await puppeteer.launch({headless: "new"});
const page = await browser.newPage();
// Formatar termo de pesquisa para URL
const formattedSearchTerm = searchTerm.split(' ').join('%20');
await page.goto(`https://www.tiktok.com/search?q=${formattedSearchTerm}`, { waitUntil: 'networkidle2' });
await page.waitForTimeout(5000);
// Aguardar pelo elemento XPath
await page.waitForXPath('//*[@id="main-content-general_search"]');
let links = [];
try {
// Capturar todas as URLs dos vídeos
links = await page.$$eval('a[href^="https://www.tiktok.com/@"]', elements => elements.map(el => el.href));
} catch (error) {
console.error('Erro ao tentar obter os links:', error.message);
}
let linkFinal = null;
if (links.length) {
let previousLinks = [];
if (fs.existsSync(previouslySelectedLinksFile)) {
previousLinks = JSON.parse(fs.readFileSync(previouslySelectedLinksFile, 'utf8'));
}
let availableLinks = links.filter(link => !previousLinks.includes(link));
if (availableLinks.length === 0) {
availableLinks = links;  // Resetando caso todos os links já tenham sido usados
previousLinks = [];  // Limpando histórico
}
// Escolher um link aleatório
linkFinal = availableLinks[Math.floor(Math.random() * availableLinks.length)];
previousLinks.push(linkFinal);
console.log(`Realizando o download para o vídeo: ${linkFinal}`)
// Salvar o link em arquivo JSON
fs.writeFileSync(previouslySelectedLinksFile, JSON.stringify(previousLinks));
}
await browser.close();
return linkFinal;
}

/* Testar a função
(async () => {
try {
const link = await getTikTokLink('ballena vulgo fk');
console.log(link);
} catch (error) {
console.error('Erro durante o scrapping ou edit não encontrada:', error.message);
}
})();
*/

module.exports = { getTikTokLink }

//CREDITOS @ATROX.DEV / IG: @codm.atrox