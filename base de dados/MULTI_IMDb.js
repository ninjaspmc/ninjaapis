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
		"user-agent": user,
		'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,ru;q=0.6",
		cookie: `cf_clearance=S8UA7AhG3DnGt3mCLgNof6buyJRnUgQJTUXygGNKJuI-${getDate}-0-1-680be310.16e925.3f0abcf0-0.2.${getDate}; pll_language=pt; PHPSESSID=${gerarPHPSESSID()}`
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
    
    static imdbData(url) {
		const user = userAgent()
		return new Promise((resolve, reject) => {
			this.getHTML(url, {
				method: 'GET',
				headers: {
					"user-Agent": user,
					accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
					'accept-language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
				}
			}).then((html) => {
				const $ = cheerio.load(html)
				try {
					const data = JSON.parse($('script[type="application/json"]').text())?.props?.pageProps
					resolve(data)
				} catch (error) {
					reject(error);
				}
			}).catch(error => reject(error));
		});
	}
	
	static imdbGetVideo(url) { // Pegar a url do vídeo
		return new Promise((resolve, reject) => {
			this.imdbData(url).then(({ videoPlaybackData }) => {
				if (!videoPlaybackData) return reject('Nenhuma data recebida.');
					
				const { video } = videoPlaybackData
				let data = video.playbackURLs.find(o => o.displayName.value == '1080p')
				if (!data) data = video.playbackURLs.find(o => o.displayName.value == '720p')
				if (!data) data = video.playbackURLs.find(o => o.displayName.value == '480p')
				if (!data) return reject('Nenhuma data de vídeo.');
				
				resolve(data.url);
			}).catch(error => reject(error));
		});
	}
	
	static imdbAcimaDataFilme(data) { // data
		if (typeof data !== 'object') data = new Object()
		try {
			const {
				certificate,
				runtime,
				ratingsSummary,
				meterRanking: { currentRank, rankChange },
				metacritic,
				genres,
				plot: { plotText },
				principalCredits,
				reviews,
				criticReviewsTotal,
				directorsPageTitle,
				titleType,
				titleText,
				originalTitleText,
				production,
				primaryImage
			} = data
			return new Object({
				titulo: titleText.text, // String
				tituloOriginal: originalTitleText.text, // String
				capa: (primaryImage?.url || null),
				certificado: Number(certificate?.rating || false), // Number
				duracao: (runtime?.displayableProperty?.value?.plainText || ''), // String
				trama: (plotText?.plainText || ''), // String
				avaliacaoTotalUsers: (reviews?.total || 0), // Number
				criticaTotal: (criticReviewsTotal?.total || 0), // Number
				tipo: (titleType?.text || ''), // String
				nota: {
					ponto: (ratingsSummary?.aggregateRating || 0), // Number
					total: (ratingsSummary?.voteCount || 0) // Number
				},
				metaCritica: {
					rank: (currentRank || false), // Number
					diferenca: (rankChange?.difference || false), // Number
					posicao: (rankChange?.changeDirection || ''), // String
					pontuacao: (metacritic?.metascore?.score || 0) // Number
				},
				genero: (genres.genres?.map(i => i.text) || []),
				diretores: (directorsPageTitle?.map((v, i) => ({
					total: (v.credits || []).length,
					direcao: (v.credits?.map(p => p.name.nameText.text) || [])
				})) || []),
				creditosPrincipais: (principalCredits?.map(i => ({
					categoria: i.category.text,
					creditos: (i.credits?.map(v => v.name.nameText.text) || [])
				})) || []),
				produtores: (production?.edges?.map(({ node }) => node.company.companyText.text) || [])
			});
		} catch (error) {
			console.error('IMDb Acima ERROR:', error)
			return {}
		}
	}
	
	static imdbPrincipalDataFilme({ id, titleText, reviews, production, releaseDate, originalTitleText, videoStrip, titleMainImages, productionStatus, titleType, cast, writers, productionBudget, lifetimeGross, openingWeekendGross, worldwideGross, technicalSpecifications, wins, nominations, ratingsSummary, episodes }) { // data
		try {
			return new Object({
				titulo: titleText.text,
				tituloOriginal: originalTitleText.text,
				visualizacao: (reviews?.total || 0), // Number
				proporcao: (technicalSpecifications?.aspectRatios?.items[0]?.aspectRatio || ''), // String
				status: (productionStatus?.currentProductionStage?.text || ''), // String
				dataLancamento: {
					dia: (releaseDate?.day || false), // Number
					mes: (releaseDate?.month || false), // Number
					ano: (releaseDate?.year || false) // Number
				},
				dinheiro: {
					orcamento: {
						valor: (productionBudget?.budget?.amount || 0), // Number
						moeda: (productionBudget?.budget?.currency || '') // String
					},
					brutoPaises: {
						valor: (lifetimeGross?.total?.amount || 0), // Number
						moeda: (lifetimeGross?.total?.currency || '') // String
					},
					semana: {
						valor: (openingWeekendGross?.gross?.total?.amount || 0), // Number
						moeda: (openingWeekendGross?.gross?.total?.currency || '') // String
					},
					brutoMundial: {
						valor: (worldwideGross?.total?.amount || 0), // Number
						moeda: (worldwideGross?.total?.currency || '') // String
					}
				},
				avaliado: {
					vitorias: (wins?.total || 0), // Number 
					indicacoes: (nominations?.total || 0), // Number
					rank: (ratingsSummary?.topRanking?.rank || 0) // Number
				},
				mixagens: (technicalSpecifications?.soundMixes?.items?.map(v => v.text) || []),
				producao: (production?.edges?.map(({ node }) => node.company.companyText.text) || []),
				trailers: (videoStrip?.edges?.map(({ node }) => ({
					titulo: node.name.value,
					segundos: node.runtime.value,
					imagem: node.thumbnail.url,
					url: "https://m.imdb.com/video/"+node.id+"/?playlistId="+id+"&ref_=tt_ov_vi",
					video: () => this.imdbGetVideo("https://m.imdb.com/video/"+node.id+"/?playlistId="+id+"&ref_=tt_ov_vi")
				})) || []),
				imagens: (titleMainImages?.edges?.map(({ node }) => ({
					imagem: node.url,
					titulo: node.caption.plainText
				})) || []),
				elencoPrincipal: (cast?.edges?.map(({ node }) => ({
					nome: (node.name?.nameText?.text || ''),
					foto: (node.name?.primaryImage?.url || ''),
					categoria: (node.category?.id.replace('actor', 'Ator').replace('actress', 'Atriz') || ''),
					personagem: (node.characters?.map(v => v.name) || []),
					atributos: (node.attributes?.map(v => v.text) || [])
				})) || []),
				escritoras: (writers?.map(v => ({
					categoria: v.category.text,
					creditos: (v.credits?.map(o => o.name.nameText.text) || [])
				})) || [])
			})
		} catch (error) {
			console.error('IMDb Principal ERROR:', error)
			return {}
		}
	}
	
	static imdbGetFilm(url) { // Puxar informações do filme
		return new Promise((resolve, reject) => {
			this.imdbData(url).then(({ mainColumnData, aboveTheFoldData }) => {
				if (!(mainColumnData || aboveTheFoldData)) return reject('Nenhuma data recebida.');
				const principal = this.imdbPrincipalDataFilme(mainColumnData)
				const acima = this.imdbAcimaDataFilme(aboveTheFoldData)
				resolve(Object.assign(principal, acima));
			}).catch(error => reject(error));
		});
	}
	
	static imdbSearch(query) { // Achar na lista de filmes
		return new Promise((resolve, reject) => {
			this.imdbData('https://m.imdb.com/find/?q='+encodeURIComponent(query)+'&ref_=nv_sr_sm').then(({ titleResults }) => {
				if (!titleResults) return reject('Nenhuma data recebida.');
				
				const filmes = titleResults.results.map((i, n) => {
					const url = "https://m.imdb.com/title/"+i.id+"/?ref_=fn_al_tt_"+(n+1)
					return {
						title: i.titleNameText,
						release: i.titleReleaseText,
						image: i.titlePosterImageModel.url,
						topCredits: i.topCredits,
						url,
						getInfo: () => this.imdbGetFilm(url)					
					}
				})
				resolve(filmes);
			}).catch(error => reject(error));
		});
	}
	
	static async getKeyPocbi(url, user) {
    	return this.getHTML("https://pocbi.com/#url="+url, {
			method: 'GET',
			headers: user
		}).then(html => {
			const $ = cheerio.load(html)
			return $('.d-flex.flex-wrap > #token').val()
		});
    };
    
    static async pocbiDL(url) {
    	const pocbi = generateNewCookies()
	    const token = await this.getKeyPocbi(url, pocbi)
		if (!token) return Promise.reject('Sem token no vídeo! (P)');		
    	return this.getHTML("https://pocbi.com/wp-json/aio-dl/video-data/", {
    		method: "POST",
			headers: pocbi,
    		form: { url, token }
    	});
	};
	
}

module.exports = new Object({
		MultiDownload: (url) => ScrapperData.pocbiDL(url),
	IMDb: {
		searchFilm: (query) => ScrapperData.imdbSearch(query),
		infoFilm: (url) => ScrapperData.imdbGetFilm(url),
		videoFilm: (url) => ScrapperData.imdbGetVideo(url),
		dataFilm: (url) => ScrapperData.imdbData(url)
	}
})