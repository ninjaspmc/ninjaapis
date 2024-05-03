const axios = require("axios");
const cheerio = require("cheerio");
const request = require('request');

const rastrearEncomendas = async(id) => {
   const res = await axios.get('https://www.linkcorreios.com.br/?id=' + id)
      const $ = cheerio.load(res.data)
        let ultimo_status = $('ul.linha_status.m-0').find('li').text();
        let eventos_do_trajeto = $('ul.linha_status').find('li').text();
            return {
                  lastStatus: ultimo_status.trim()
                      .replace(new RegExp("Data  :", "gi"), "\nData:")
                      .replace(new RegExp("Local:", "gi"), "\nLocal:"),
                  pathObject: eventos_do_trajeto.trim()
                      .replace(new RegExp("Data  :", "gi"), "\nData:")
                      .replace(new RegExp("Origem:", "gi"), " | Origem:")
                      .replace(new RegExp("Status:", "gi"), "\n—\nStatus:")
                      .replace(new RegExp("Local:", "gi"), "\nLocal:")
                      .replace(new RegExp("Destino:", "gi"), "\nDestino:")
  }
}

const dafontSearch = async (query) => {
   const base = `https://www.dafont.com`
      const res = await axios.get(`${base}/search.php?q=${query}`)
      const $ = cheerio.load(res.data)
      const hasil = []
         const total = $('div.dffont2').text().replace(` fonts on DaFont for ${query}`, '') 
      $('div').find('div.container > div > div.preview').each(function(a, b) {
      $('div').find('div.container > div > div.lv1left.dfbg').each(function(c, d) { 
      $('div').find('div.container > div > div.lv1right.dfbg').each(function(e, f) { 
        let link = `${base}/` + $(b).find('a').attr('href')
       let titulo = $(d).text() 
       let estilo = $(f).text() 
         hasil.push({
             fonte: titulo, 
             style: estilo, 
             total: total,
             linkFonte: link 
           }) 
      }) 
   }) 
}) 
return hasil
}

const dafontDownload = async (link) => {
   const des = await axios.get(link)
      const sup = cheerio.load(des.data)
         let estilo = sup('div').find('div.container > div > div.lv1right.dfbg').text() 
         let titulo = sup('div').find('div.container > div > div.lv1left.dfbg').text() 
           try {
             isi = sup('div').find('div.container > div > span').text().split('.ttf')
             fileName = sup('div').find('div.container > div > span').eq(0).text().replace('ttf' , 'zip')
           } catch {
             isi = sup('div').find('div.container > div > span').text().split('.otf')
             fileName = sup('div').find('div.container > div > span').eq(0).text().replace('otf' , 'zip')
    }
         let download = 'http:' + sup('div').find('div.container > div > div.dlbox > a').attr('href')
   return {estilo, titulo, fileName, download}
}

function xvideosPorno(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://xvideosporno.blog.br/?s=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.postbox").each((_, say) => {
    var titulo = $(say).find("a").attr('title');
    var link = $(say).find("a").attr('href');
    var img = $(say).find("img").attr('src');
    var duração = $(say).find("time.duration-top").text().trim();
    var qualidade = $(say).find("b.hd-top").text().trim();
    var resultado = {
      titulo: titulo,
      img: img,
      duração: duração,
      qualidade: qualidade,
      link: link
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

function pensador(nome) {
return new Promise((resolve, reject) => {
  axios.get(`https://www.pensador.com/busca.php?q=${nome}`).then( tod => {
  const $ = cheerio.load(tod.data)  
  var postagem = [];
$("div.thought-card.mb-20").each((_, say) => {
    var frase = $(say).find("p").text().trim(); 
    var compartilhamentos = $(say).find("div.total-shares").text().trim(); 
    var autor = $(say).find("a").text().split("\n")[0];
    var imagem = $(say).find("div.sg-social-hidden.sg-social").attr('data-media');
    var resultado = {
      image: imagem,
      frase: frase,
      compartilhamentos: compartilhamentos
    }
    postagem.push(resultado)
  })
  resolve(postagem)
  }).catch(reject)
  });
}

module.exports = { rastrearEncomendas, dafontDownload, dafontSearch, xvideosPorno, pensador }