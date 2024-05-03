const cheerio = require('cheerio')
const axios = require('axios')

async function iFunny() {
	return new Promise((resolve, reject) => {
	  axios.get('https://br.ifunny.co/page'+Math.floor(Math.random() * 99), {
		headers: {
		  "user-agent": "Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.5195.136 Mobile Safari/537.36"
		}
	  })
	  .then(res => {
		const $ = cheerio.load(res.data);
		const dados = [];
		const dados2 = [];
		$('._0ZvA').each((i,e) => {
		  var json = {
			titulo: $(e).find('a[class="WiQc mVpV HGgf"]').text() || $(e).find('img:first').attr('alt') || $(e).find('a:first').attr('aria-label') || 'Sem Titulo',
			imagem: $(e).find('img:first').attr('data-src'),
			link: $(e).find('a:first').attr('href')
		  }
		  var json2 = {
			titulo: $(e).find('a[class="WiQc mVpV HGgf"]').text() || $(e).find('img:first').attr('alt') || $(e).find('a:first').attr('aria-label') || 'Sem Titulo',
			thumb: $(e).find('video:first').attr('data-poster'),
			video: $(e).find('video:first').attr('data-src'),
			link: $(e).find('a:first').attr('href')
		  }
		  json.imagem && dados.push(json);
		  json2.video && json2.video.toLowerCase().includes("mp4") && dados2.push(json2);
		});
		resolve({status: res.status, imagens: dados, videos: dados2})
	  })
	  .catch(e => {
		reject(e)
	  });
	});
  }
  
module.exports = { iFunny }