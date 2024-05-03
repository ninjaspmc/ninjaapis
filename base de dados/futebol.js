const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function BrasileirãoFutebol() { 
    try {
        const { data } = await axios.get('https://www.cbf.com.br/futebol-brasileiro/competicoes/campeonato-brasileiro-serie-a/2023');
        const $ = cheerio.load(data);
        let teams = [];
        try {
            const rows = $('#menu-panel > article > div:nth-of-type(1) > div > div > section > div:nth-of-type(1) > table > tbody > tr');       
            rows.each((i, row) => {
                const cells = $(row).find('td, th');
                const teamName = cells.eq(0).find('span.hidden-xs').text();
                if(teamName) {
                    teams.push({
                        equipe: teamName,
                        pontos: cells.eq(1).text() || '0',
                        jogosJogados: cells.eq(2).text() || '0',
                    });
                }
            });
            // Salvar os dados em JSON (opcional)
            if (teams.length > 0) {
                fs.writeFileSync('tabela.json', JSON.stringify(teams, null, 2), 'utf-8');
            } else {
                throw new Error('Nenhum time foi raspado com sucesso.');
            }
            
        } catch (error) {
            console.error('Erro durante a raspagem:', error);
        }
        return teams; //retorna os dados

    } catch (error) {
        console.error('Erro durante a raspagem:', error);
    }
}

async function getNoticiasEsporte(termo = '') {
  const urlBase = 'https://ge.globo.com/';
  const motor = 'https://ge.globo.com/motor/' 
  //url para retornar noticias da formula-1
const esportes = [
  'futebol', 
  'basquete', 
  'volei', 
  'tenis', 
  'atletismo', 
  'natacao', 
  'ciclismo', 
  'boxe', 
  'beisebol', 
  'judo',
  'ginastica-artistica', 
  'futebol-americano', 
  'futsal', 
  'golfe', 
  'surfe',
  'skate' 
];
const eSports = {
    'esports': 'esports',
    'cod': 'call-of-duty',
    'csgo': 'csgo',
    'fifa': 'fifa',
    'fortnite': 'fortnite',
    'freefire': 'free-fire',
    'gamexp': 'gamexp',
    'lol': 'lol',
    'pcgamer': 'pc-gamer-e-consoles',
    'pes': 'pes',
    'pokemon': 'pokemon',
    'premio-esports': 'premio-esports-brasil',
    'rainbow-6': 'rainbow-6',
    'valorant': 'valorant',
    'tcg': 'tcg'
}

  let url;
  if (termo) {
  const termoLowerCase = termo.toLowerCase();
  if (termoLowerCase === 'motor') {
    url = motor;
  } else if (termoLowerCase === 'formula-1') {
    url = `${motor}formula-1/`;
  } else if (esportes.includes(termoLowerCase)) {
    url = `${urlBase}${termoLowerCase}/`;
  } else if (termoLowerCase in eSports) {
    url = `${urlBase}esports/${eSports[termoLowerCase]}/`;
  } else {
    url = `${urlBase}futebol/times/${termoLowerCase}/`;
  }
} else {
  url = urlBase;
}
  try {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/57.3',
      },
    });
    const $ = cheerio.load(data);
    const seletorHorario = 'span.feed-post-datetime';
    const seletorImg = 'img.bstn-fd-picture-image';
    const noticias = [];
    $('.feed-post').each((i, element) => {
      try {
        const titulo = $(element).find('h2[elementtiming="text-ssr"]').text();
        const trechoManchete = $(element).find('.feed-post-body-resumo p[elementtiming="text-ssr"]').text();
        const horarioPostagem = $(element).find(seletorHorario).text();
        const linkImagem = $(element).find(seletorImg).attr('src');
        const linkNoticia = $(element).find('a.feed-post-link').attr('href');
        noticias.push({ titulo, trechoManchete, horarioPostagem, linkImagem, linkNoticia });
      } catch (error) {
        console.error(`Erro ao encontrar a notícia ${i + 1}:`, error);
      }
    });
    return noticias;
  } catch (error) {
    console.error('Erro no Scrapping de esportes:', error);
    return [];
  }
}

module.exports = { BrasileirãoFutebol, getNoticiasEsporte }