const fs = require('fs');
function gerarPHPSESSID(tamanho = 32) {
	const crypto = require("crypto");
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
	const randomId = () => {
		let n1000 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
		n1000 = n1000[Math.floor(Math.random() * n1000.length)] + Math.floor(Math.random() * 999)
		return n1000+':'+gerarPHPSESSID(72)
	}
	return {
		"User-Agent": userAgent(),
		'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
		'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7",
		Referer: 'https://www.instagram.com/accounts/onetap/?next=%2F',
	}
}

const setClass = {
	query: '',
	saveFile: './Instagram',
	reload: false,
	headers: new Object({
		Cookie: '',
		'X-Csrftoken': '',
		'X-Ig-App-Id': 0,
		'X-Ig-Www-Claim': '',
		'rank_token': 0
	}),
	countPost: 0
}

module.exports = class InstaStalker {
	constructor(config = {}) {
		const { query, reload, headers, countPost, saveFile } = Object.assign(setClass, config)
		this.user = query.split(/ +/).find(v => /@([A-Za-z0-9._]+)/.test(v))?.replace('@', '')
		this.query = query && encodeURIComponent(query)
		this.headers = headers
		this.reload = reload
		this.count = countPost
		this.saveFile = (() => {
			const folderInfo = fs.existsSync(saveFile) && fs.statSync(saveFile)
			if (folderInfo) {
				if (!folderInfo?.isDirectory()) {
					throw new Error(`Encontrou algo que não é um diretório em ${saveFile}, exclua-o ou especifique um local diferente.`);
				}
			} else {
				fs.mkdirSync(saveFile, { recursive: true });
			}
			return saveFile
		})()
		if (!(
			typeof headers === 'object' ||
			headers.Cookie ||
			headers['rank_token'] ||
			headers['X-Ig-App-Id'] ||
			headers['X-Csrftoken'] ||
			headers['X-Ig-Www-Claim']
		)) {
			throw new Error(`Está faltando algo no "headers".`);
		}
	}
	
	getHTML(url, config = {}) {
		return new Promise((resolve, reject) => {
			const request = require('request');
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
    
    configCookie() {
    	const randomId = () => {
			let n1000 = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]
			n1000 = n1000[Math.floor(Math.random() * n1000.length)] + Math.floor(Math.random() * 999)
			return n1000+':'+gerarPHPSESSID(72)+`"`
		}
		const cookie = (this.headers.Cookie.substr(0, 574)+randomId()).split(/#/g)
		return cookie.join('\\')
    }
    
    fileGetInsta(insta) {
		if (fs.existsSync(insta)) {
			try {
				return JSON.parse(fs.readFileSync(insta, 'utf-8'))
			} catch { }
		}
		return null
	}
	
	instaQuery() {
		if (!this.query) return Promise.reject('Não foi encontrado nada no campo de texto.');
		
		const fileInsta = this.saveFile+'query_'+this.query.replace(/ +/, '').toLowerCase()+'.json'
		const data = this.fileGetInsta(fileInsta)
		if (data && !this.reload) return Promise.resolve(data)
		
		const token = this.headers['rank_token']
		const insta = generateNewCookies()
		this.headers = Object.assign(this.headers, {
			...insta,
			Cookie: this.configCookie(),
			Referer: 'https://www.instagram.com/explore/search/'
		})
		delete this.headers['rank_token']
		return this.getHTML("https://www.instagram.com/api/v1/web/search/topsearch/?context=blended&include_reel=true&query="+this.query+"&rank_token="+token+"&search_surface=web_top_search", {
			method: 'GET',
			headers: this.headers
		}).then(res => {
			if (typeof res !== 'object') return Promise.reject("O resultado não é object.");
			
			fs.writeFileSync(fileInsta, JSON.stringify(res, null, '\t'));
			return Promise.resolve(res)
		});
	};
	
	instaUser() {
		if (!this.user) return Promise.reject('Não foi colocado o user no campo de texto.');
		
		const fileInsta = this.saveFile+'@'+this.user.replace(/[^a-zA-Z]/g, '')+'.json'
		const data = this.fileGetInsta(fileInsta)
		if (data && !this.reload) return Promise.resolve(data)
		
		const insta = generateNewCookies()
		this.headers = Object.assign(this.headers, {
			...insta,
			Cookie: this.configCookie(),
			Referer: 'https://www.instagram.com/'+this.user+'/'
		})
		delete this.headers['rank_token']
		return this.getHTML("https://www.instagram.com/api/v1/users/web_profile_info/?username="+this.user, {
			method: 'GET',
			headers: this.headers
		}).then(res => {
			if (typeof res !== 'object') return Promise.reject("O resultado não é object.");
			
			fs.writeFileSync(fileInsta, JSON.stringify(res, null, '\t'));
			return Promise.resolve(res)
		});
	}
	
	instaUserGetAllMidia() {
		if (!this.user) return Promise.reject('Não foi colocado o user no campo de texto.');
		
		const fileInsta = this.saveFile+'feed_@'+this.user.replace(/[^a-zA-Z]/g, '')+'.json'
		const data = this.fileGetInsta(fileInsta)
		if (data && !this.reload) return Promise.resolve(data)
		if (!this.count) return Promise.reject("Você não colocou a quantidade de post que existe no perfil.");
		
		const insta = generateNewCookies()
		this.headers = Object.assign(this.headers, {
			...insta,
			Cookie: this.configCookie(),
			Referer: 'https://www.instagram.com/'+this.user+'/'
		})
		delete this.headers['rank_token']
		return this.getHTML("https://www.instagram.com/api/v1/feed/user/"+this.user+"/username/?count="+this.count, {
			method: 'GET',
			headers: this.headers
		}).then(res => {
			if (typeof res !== 'object') return Promise.reject("O resultado não é object.");
			
			fs.writeFileSync(fileInsta, JSON.stringify(res, null, '\t'));
			return Promise.resolve(res)
		});
	};
	
}
/*
	• Para capturar o Cookie, deve usar o navegador: Kiwi (Recomendado!)
	• abre o site do Instagram e faça o login
	• Clica no canto esquerdo superior, depois clica no: Abrir DevTools
	[ • Apenas 1 site precisa pegar o resultado do headers; ]
	• Volte para página do Instagram e recarrega o site e logo depois volte na página de DevTools.
	• Ache o link;
		>>> https://www.instagram.com/api/v1
		• Pode ser qualquer um também, mas recomendo achar esse parecido.
	• Logo depois, pegue apenas o que está pedindo no "setClass > headers".
	• A única coisa que você vai mudar é no Cookie, você vai editar ela manualmente, o que você encontrar a "\" troque pelo "#", apenas isso!
		• Se caso não entender, mande o Cookie para mim configurar.
	• Agora você vai pegar o "rank_token";
		• Volte para o Instagram e pesquisa algum user;
			• Não precisa clicar em nenhum user, apenas pesquise.
		• Volte novamente para o DevTools e ache a URL:
			>>> https://www.instagram.com/api/v1/web/search/topsearch
			• Pegue dentro da URL na tag "rank_token".
*/