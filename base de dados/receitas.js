const BASE_URL = 'https://cybercook.com.br';
const cheerio = require('cheerio');
const request = require('request');

function userAgent() {
	oos = [ 'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0' ];

	return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

class ScrapperData {

static getHTML(url, config = {}) {
	return new Promise((resolve, reject) => {	  
	     request({
			url,
			...config
		}, (error, res, body) => {
			if (error) return reject(error);
			try {
				body = JSON.parse(body);
			} catch { }
				
			resolve(body);
		});
	});
}

static cyberInfo(url) {
	const user = userAgent()
	return this.getHTML(url, {
		method: 'GET',
		headers: {
			'User-Agent': user,
			Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
			'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
		}
	}).then(html => {
		const $ = cheerio.load(html)
		const parse = JSON.parse($('script[type="application/json"]').text())
		const { props: { pageProps } } = JSON.parse(JSON.stringify(parse, '', '\t'))
		return Promise.resolve(pageProps);
	})
}

static cyberSearch(query) {
	query = encodeURIComponent(query)
	const user = userAgent()
	return this.getHTML(BASE_URL+"/search?q="+query+"&is_premium=true&calorias=0&custo=0&prep=0", {
		method: 'GET',
		headers: {
			'User-Agent': user,
			Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
			'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
		}
	}).then(html => {
		const cache = new Array()
		const $ = cheerio.load(html)
		$('.pos-relative.border-card-half-2.grid-sm-12.font-serif.grid-lg-4.mb5').each((i, elem) => {
			const title = $(elem).find('.black > a > .card--half-2-image__image > .grid-lg-12').attr('title')
			const star = Number($(elem).find('.box-description-score > .score-yellow-box-group > .score-yellow-box-item').text())
			const by = $(elem).find('.grey--dark').text().trim().replace('Por ', '')
			const image = 'https:'+$(elem).find('.black > a > .card--half-2-image__image > .grid-lg-12').attr('src')
			const url = BASE_URL+$(elem).find('.black > a').attr('href')
			cache.push({
				title, by, assessment: {
					star,
					starEmoji: (star ? '⭐'.repeat(star) : '🫠')
				},
				url, image,
				get: () => this.cyberInfo(url)
			});
		})
		if (!cache.length) return Promise.reject("Não foi encontrado nenhuma receita.");
		
		return Promise.resolve(cache);
	})
}

}

module.exports = new Object({
  	 credits: 'Crap © Ethern | bit.ly/GroupEthern_',
     searchReceitas: (query) => ScrapperData.cyberSearch(query),
     infoReceita: (url) => ScrapperData.cyberInfo(url)
})