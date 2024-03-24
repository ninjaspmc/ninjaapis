const crypto = require("crypto");
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
    // https://animetvonline.cx
    static searchAnimeTvOnline(query) {
    	return this.getHTML("https://animetvonline.cx/?s="+encodeURIComponent(query)).then(html => {
			const cache = []
			const $ = cheerio.load(html)
			$('.listupd > article.bs > .bsx').get().map(async (e) => {
				const url = $(e).find('a').attr('href')
				const title = $(e).find('a').attr('title')
				const thumb = $(e).find('a > .limit > img.ts-post-image.wp-post-image.attachment-medium_large.size-medium_large.perfmatters-lazy').attr('data-src')
				const type = $(e).find('a > .limit > .typez.TV').text() || $(e).find('a > .limit > .typez.Movie').text()
				cache.push({
					title,
					type,
					thumb,
					url,
					get: () => this.listEpsAnimeTvOnline(url)
				});
			});
			return Promise.resolve(cache)
		});
    }
    static listEpsAnimeTvOnline(url) {
    	return this.getHTML(url).then(async (html) => {
			const cache = { list: [] }
			const $ = cheerio.load(html)
			cache.title = $('.ts-breadcrumb.bixbox > ol').text().split(' › ')[1]
			cache.classification = $('.rating-prc').html().split(`ratingValue" content="`)[1].split(`">`)[0]
			cache.thumb = $('img.ts-post-image.wp-post-image.attachment-medium_large.size-medium_large.perfmatters-lazy').attr('data-src')
			for (const e of $('div.eplister > ul > li').get()) {
				const url = $(e).find('a').attr('href');
				const date = $(e).find('.epl-date').text();
				const title = $(e).find('.epl-title').text();
				const eps = $(e).find('.epl-num').text();
				const urlVideo = await this.getVideoAnimeTvOnline(url).catch(() => null)
				cache.list.push({
					eps,
					title,
					date,
					url,
					urlVideo
				});
			}
			return Promise.resolve(cache)
		});
    }
    static getVideoAnimeTvOnline(url) {
    	return this.getHTML(url).then(html => {
			const $ = cheerio.load(html)
			const $2 = cheerio.load($('div.Link > a').attr('href'))
			return ($2('.player-embed > iframe').attr('src') || $2('.player-embed').text()).trim()
		});
    };
    ///
    static formtarNumero(n) {
		n = n?.replace(/[^0-9]/g, "")
		if (!(n.startsWith('55') && /([0-9]{5,16}|0)/.test(n))) return null

		const ddd = n.substr(2, 2) // 91
		const testN = 8 == n.substr(4).length // 8 = 9 (false) | 8 = 8 (true)
		let numero = n.substr(4, 5)+"-"+n.substr(9, 4)
		if (testN) {
			numero = n.substr(4, 4)+"-"+n.substr(8, 4)
		}
		return `(${ddd}) ${numero}`
	}
    
    static qualOperadora(numero) {
    	const user = userAgent()
		const getDate = String(Date.now()).slice(0, 10)
		const telefone = this.formtarNumero(numero)
		if (!telefone) return Promise.reject('Número desconhecido.');
	
		const heards = new Object({
			method: "POST",
			headers: new Object({
				"user-agent": user,
				cookie: `SSID=sfeb17gj92tcllul8c17tb6iji; USID=4f85b07d2188dc8b683bf2050d0a20dc; _jsuid=2662589599; _heatmaps_g2g_100536567=no; cf_clearance=KmTYQBKBLdNP4axA2h60DDwZE9j.wTKAPaI38jgr8lk-${getDate}-0-1-68ba348d.886f8aa2.e20e0874-0.2.${getDate}`,
				'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
				Origin: 'https://www.qualoperadora.net',
				Referer: 'https://www.qualoperadora.net/'
			}),
			form: { telefone }
		})
		return this.getHTML('https://www.qualoperadora.net', heards).then((html) => {
			const $ = cheerio.load(html)
			const ope = $('div[id="resultado"] > span').html()?.split(/ +/)
			if (!ope) return Promise.reject('Operadora desconhecido ou não foi encontrado.');
		
			const estado = $('div[id="resultado"] > span > span').html()
			return Promise.resolve({
				telefone,
				operadora: ope[0],
				dispositivo: ope.pop(),
				estado
			});
		});
	}
	
}

module.exports = {
	animeTv: {
		search: (query) => ScrapperData.searchAnimeTvOnline(query),
		video: (url) => ScrapperData.getVideoAnimeTvOnline(url),
		list: (url) => ScrapperData.listEpsAnimeTvOnline(url)
	},
	qualOperadora: (n) => ScrapperData.qualOperadora(n)
}