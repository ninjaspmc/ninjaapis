const crypto = require("crypto");
const cheerio = require('cheerio');
const request = require('request');

function gerarPHPSESSID() {
	// Defina o tamanho do PHPSESSID fake que você deseja gerar (padrão 32 caracteres).
	const tamanho = 32;
	// Crie um conjunto de caracteres válidos para o PHPSESSID (alfanuméricos)
	const caracteresValidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let phpSessId = '';
	// Gere um valor aleatório para cada caractere do PHPSESSID
	for (let i = 0; i < tamanho; i++) {
		const indiceAleatorio = crypto.randomInt(0, caracteresValidos.length);
		phpSessId += caracteresValidos.charAt(indiceAleatorio);
	}
	return phpSessId;
}

function userAgent() {
	oos = [ 'Macintosh; Intel Mac OS X 10_15_7', 'Macintosh; Intel Mac OS X 10_15_5', 'Macintosh; Intel Mac OS X 10_11_6', 'Macintosh; Intel Mac OS X 10_6_6', 'Macintosh; Intel Mac OS X 10_9_5', 'Macintosh; Intel Mac OS X 10_10_5', 'Macintosh; Intel Mac OS X 10_7_5', 'Macintosh; Intel Mac OS X 10_11_3', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_6_8', 'Macintosh; Intel Mac OS X 10_10_2', 'Macintosh; Intel Mac OS X 10_10_3', 'Macintosh; Intel Mac OS X 10_11_5', 'Windows NT 10.0; Win64; x64', 'Windows NT 10.0; WOW64', 'Windows NT 10.0' ];

	return `Mozilla/5.0 (${oos[Math.floor(Math.random() * oos.length)]}) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/${Math.floor(Math.random() * 3) + 87}.0.${Math.floor(Math.random() * 190) + 4100}.${Math.floor(Math.random() * 50) + 140} Safari/537.36`;
}

function generateNewCookies() {
	const user = userAgent()
	let getDate = String(Date.now()).slice(0, 10)
	return {
		y2mate: {
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"user-agent": user,
			cookie: `_ga=GA1.1.289424107.${getDate}; _ga_K8CD7CY0TZ=GS1.1.${getDate}.7.1.${getDate}.0.0.0`,
			origin: "https://www.y2mate.com"
		},
		yt1s: {
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			"user-agent": user,
			cookie: `_gid=GA1.2.1902849797.${getDate}; _gat_gtag_UA_173445049_1=1; _ga_SHGNTSN7T4=GS1.1.${getDate}.3.0.${getDate}.0.0.0; _ga=GA1.1.882447112.${getDate}`,
			origin: "https://yt1s.com"
		},
		y2bs: {
			"user-agent": user,
			'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
			cookie: 'pll_language=pt; PHPSESSID='+gerarPHPSESSID()
		},
		stepto: {
			"user-agent": user,
			'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
			cookie: `PHPSESSID=${gerarPHPSESSID()}; pll_language=en; _ga_65MWJ3G65V=GS1.1.${getDate}.1.0.${getDate}.60.0.0; _ga=GA1.1.${getDate}.${getDate}`
		},
		savef: {
			"user-agent": user,
			'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
			cookie: 'PHPSESSID='+gerarPHPSESSID()
		}
	}
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
    
    static getKeyStepto(url, user) {
		return this.getHTML("https://steptodown.com/", {
			method: 'GET',
			headers: user
		}).then(html => {
			const $ = cheerio.load(html)
			try {
				return $('.container.mt-8 > .row.align-items-center > .col-12.col-lg-6.mb-5.mb-lg-0 > .d-flex.flex-wrap').html().split('value="')[1].split('">')[0]
			} catch {
				return null
			}
		});
	};
	
	static async steptodown(url) {
		const { stepto } = generateNewCookies()
		const token = await this.getKeyStepto(url, stepto)
		if (!token) return Promise.reject('Sem token no vídeo! (St)');
		
		return this.getHTML("https://steptodown.com/wp-json/aio-dl/video-data/", {
    		method: "POST",
			headers: stepto,
			form: { url, token }
    	});
	};
	
	static isUrlYt(input) {
		return input.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/user\/\S+|\/shorts\/|\/playlist\?list=|\/)([^\s?&]+)/)
	}
	
	static ytMateQualitiesHigh(obj) {
		let result = null
		if (obj['320']) {
			result = obj['320'] // 320Kbps
		} else if (obj['256']) {
			result = obj['256'] // 256Kbps
		} else if (obj['192']) {
			result = obj['192'] // 192Kbps
		} else if (obj['128']) {
			result = obj['128'] // 128Kbps
		} else if (obj['mp3128']) {
			result = obj['mp3128'] // 128Kbps
		} else if (obj['140']) {
			result = obj['140'] // 128Kbps
		} else if (obj['299']) {
			result = obj['299'] // 1080p
		} else if (obj['22']) {
			result = obj['22'] // 720p
		} else if (obj['298']) {
			result = obj['298'] // 720p
		} else if (obj['135']) {
			result = obj['135'] // 480p
		} else if (obj['18']) {
			result = obj['18'] // 320p
		} else if (obj['133']) {
			result = obj['133'] // 240p
		} else if (obj['160']) {
			result = obj['160'] // 144p
		}
		
		return result
	}
	
	static yt1sDownloader(url, type, server) {
		const { yt1s } = generateNewCookies()
		return new Promise((resolve, reject) => {
			url = this.isUrlYt(url)
			if (!url) return reject('Não é uma URL YOUTUBE.');
			
			url = "https://youtu.be/"+url[1]
			this.getHTML('https://yt1s.com/api/ajaxSearch/index', {
				method: 'POST',
				form: {
					q: url,
					vt: 'mp3'
				},
				headers: {
					...yt1s,
					referer: "https://yt1s.com/"+server+"/youtube-to-mp3"
				}
			}).then(({ links, status, vid }) => {
				if (status !== 'ok') return reject('Sem resultado de data.');
			
				const meta = links[type] && this.ytMateQualitiesHigh(links[type]);
				if (!meta) return reject('Sem mídia em qualidade alta.');
			
				this.getHTML('https://yt1s.com/api/ajaxConvert/convert', {
					method: 'POST',
					form: {
						k: meta.k,
						vid: vid
					},
					headers: {
						...yt1s,
						referer: "https://yt1s.com/"+server+"/youtube-to-mp3"
					}
				}).then(({ dlink, status }) => {
					if (status !== 'ok') return reject('Sem resultado de data.');
					if (!dlink) return reject('Sem resultado da URL.');
					
					resolve({
						size: meta.size,
						quality: meta.q,
						'dl_link': dlink
					});
				}).catch(({ message }) => reject(message));
			}).catch(({ message }) => reject(message));
		});
	}
	
	static y2mate(url, type, server) {
		const { yt2mate } = generateNewCookies()
		return new Promise((resolve, reject) => {
			url = this.isUrlYt(url)
			if (!url) return reject('Não é uma URL YOUTUBE.');
			
			url = "https://youtu.be/"+url[1]
			this.getHTML('https://www.y2mate.com/mates/analyzeV2/ajax', {
				method: 'POST',
				form: {
					k_query: url,
					k_page: 'mp3',
					hl: 'en',
					q_auto: '0'
				},
				headers: {
					...yt2mate,
					referer: "https://www.y2mate.com/"+server+"/youtube-mp3"
				}
			}).then(({ links, status, vid }) => {
				const meta = links[type] && this.ytMateQualitiesHigh(links[type]);
				if (!meta) return reject('Sem mídia em qualidade alta.');
		
				this.getHTML('https://www.y2mate.com/mates/convertV2/index', {
					method: 'POST',
					form: {
						k: meta.k,
						vid: vid
					},
					headers: {
						...yt2mate,
						referer: "https://www.y2mate.com/"+server.replace(/[\d]/g, '')+"/youtube-mp3/"+vid
					}
				}).then(({ dlink, status }) => {
					if (status !== 'ok') return reject('Sem resultado de data.');
					if (!dlink) return reject('Sem resultado da URL.');
					
					resolve({
						size: meta.size,
						quality: meta.q,
						'dl_link': dlink
					});
				}).catch(({ message }) => reject(message));
			}).catch(({ message }) => reject(message));
		});
	};
	
	static getKeySavef(url, user) {
		return this.getHTML("https://www-savefrom.com/", {
			method: 'GET',
			headers: user
		}).then(html => {
			const $ = cheerio.load(html)
			try {
				return $('.container.mt-8 > .row.align-items-center > .col-12.col-lg-6.mb-5.mb-lg-0 > .d-flex.flex-wrap').html().split('value="')[1].split('">')[0]
			} catch {
				return null
			}
		});
	};
	
	static getKeyY2bs(url, user) {
		return this.getHTML("https://y2bs.com/en17/pt/#url="+url, {
			method: 'GET',
			headers: user
		}).then(html => {
			const $ = cheerio.load(html)
			try {
				return $('.container.mt-8 > .row.align-items-center > .col-12.col-lg-6.mb-5.mb-lg-0 > .d-flex.flex-wrap').html().split('value="')[1].split('">')[0]
			} catch {
				return null
			}
		});
	};
	
	static async y2bs(url) {
		const { y2bs } = generateNewCookies()
		const token = await this.getKeyY2bs(url, y2bs)
		if (!token) return Promise.reject('Sem token no vídeo! (Y)');
		
		return this.getHTML("https://y2bs.com/wp-json/aio-dl/video-data/", {
    		method: "POST",
			headers: y2bs,
			form: { url, token }
    	});
	};
	
	static async savefrom(url) {
		const { savef } = generateNewCookies()
		const token = await this.getKeySavef(url, savef)
		if (!token) return Promise.reject('Sem token no vídeo! (S)');
		
		return this.getHTML("https://www-savefrom.com/wp-json/aio-dl/video-data/", {
    		method: "POST",
			headers: savef,
			form: { url, token }
    	});
	};
	
	static tuna(query) {
		const user = userAgent()
		return this.getHTML('https://tuna-api.voicemod.net/v1/sounds/search?search='+encodeURIComponent(query)+'&page=1&size=20&tagsSize=50&noDmca=false', {
			method: 'GET',
			headers: {
				"user-Agent": user,
				'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(({ items }) => {
			return items.map(i => i.path)
		});
	};
	
	static myinstants(query) {
		const user = userAgent()
		return this.getHTML('https://www.myinstants.com/pt/search/?name='+encodeURIComponent(query), {
			method: 'GET',
			headers: {
				"user-Agent": user,
				'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(html => {
			const cache = new Array()
			const $ = cheerio.load(html)
	$('#instants_container > .instants.result-page > .instant').each((i, elem) => {
			const title = $(elem).find('button.small-button').attr('title').replaceAll("Tocar o som de ", '')
			const audio = "https://www.myinstants.com"+$(elem).find('button.small-button').attr('onclick').replaceAll("play('", '').split("',")[0]
			cache.push(audio)
		})
			return cache
		});
	};
	
	static searchMyInstants(query) {
		const user = userAgent()
		return this.getHTML('https://www.myinstants.com/pt/search/?name='+encodeURIComponent(query), {
			method: 'GET',
			headers: {
				"user-Agent": user,
				'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
			}
		}).then(html => {
			const cache = new Array()
			const $ = cheerio.load(html)
	$('#instants_container > .instants.result-page > .instant').each((i, elem) => {
			const title = $(elem).find('button.small-button').attr('title').replaceAll("Tocar o som de ", '')
			const audio = "https://www.myinstants.com"+$(elem).find('button.small-button').attr('onclick').replaceAll("play('", '').split("',")[0]
			cache.push({title, audio})
		})
			return cache
		});
	};
    
}

function downConfig(medias, type) {
	medias = medias?.sort((a, b) => (Number(a.size) < Number(b.size)) ? 1 : -1).find(i => i.audioAvailable && (i.extension == type))
	if (!medias) return Promise.reject('Sem resultado da URL.');
				
	return Promise.resolve({
		type: medias.extension,
		size: (medias.formattedSize || Number(medias.size)),
		quality: medias.quality,
		'dl_link': medias.url
	});
}

module.exports = {
	yt1s: (url, type = 'mp4', server = 'en492') => ScrapperData.yt1sDownloader(url, type, server),
	yt2mate: (url, type = 'mp3', server = "pt559") => ScrapperData.y2mate(url, type, server),
	stepto: (url, type = 'mp3') => ScrapperData.steptodown(url).then(({ medias }) => downConfig(medias, type)),
	savef: (url, type = 'mp4') => ScrapperData.savefrom(url).then(({ medias }) => downConfig(medias, type)),
	y2bs: (url, type = 'mp3') => ScrapperData.y2bs(url).then(({ medias }) => downConfig(medias, type)),
	get: {
		all: async (url, type = 'mp3') => {
			let results = await Promise.allSettled([
				ScrapperData.y2mate(url, type, 'pt559'),
				ScrapperData.yt1sDownloader(url, type, 'en492'),
				ScrapperData.savefrom(url).then(({ medias }) => downConfig(medias, type)),
				ScrapperData.steptodown(url).then(({ medias }) => downConfig(medias, type)),
				ScrapperData.y2bs(url).then(({ medias }) => downConfig(medias, type)),
			]);
			results = results.filter(i => i.status === 'fulfilled').map(i => i.value)
			return results.length ? Promise.resolve(results) : Promise.reject('Nenhuma data foi encontrada.')
		},
		race: async (url, type = 'mp3') => {
			let results = await Promise.allSettled([
				ScrapperData.y2mate(url, type, 'pt559'),
				ScrapperData.yt1sDownloader(url, type, 'en492'),
				ScrapperData.savefrom(url).then(({ medias }) => downConfig(medias, type)),
				ScrapperData.steptodown(url).then(({ medias }) => downConfig(medias, type)),
				ScrapperData.y2bs(url).then(({ medias }) => downConfig(medias, type)),
			])
			results = results.filter(i => i.status === 'fulfilled').find(i => i.value['dl_link'])
			return results ? Promise.resolve(results.value) : Promise.reject('Nenhuma data foi encontrada.')
		}
	},
	audioMeme: {
		tuna: (query) => ScrapperData.tuna(query),
		myinstants: (query) => ScrapperData.myinstants(query),
		MyInstantsSearch: (query) => ScrapperData.searchMyInstants(query),
		get: async (query) => {
			let results = await Promise.allSettled([
				ScrapperData.myinstants(query),
				ScrapperData.tuna(query),
			]);
			results = results.filter(i => i.status === 'fulfilled').find(i => i.value.length)
			return results ? Promise.resolve(results.value) : Promise.reject('Nenhuma data foi encontrada.')
		}
	}
}