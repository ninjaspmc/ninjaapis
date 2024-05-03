const cheerio = require('cheerio');
const request = require('request');

const REGEX_UP = /(http|https):\/\/|(www\.)(br\.)(uptodown.com\/)|(br\.)(uptodown.com\/)/;

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

static uptodownInfo(url) {
	if (!REGEX_UP.test(url)) return Promise.reject("Não é a URL Uptodown.");
	
	const getDate = String(Date.now()).slice(0, 10)
	const hears = {
		"User-agent": userAgent(),
		Cookie: '_ga=GA1.2.2107262286.'+getDate,
		'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
		'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
	}
	return this.getHTML(url+"/download", {
		method: 'GET',
		headers: hears
	}).then(html => {
		const $ = cheerio.load(html);
		const size = $('p.size').text()
		const img = $('img[itemprop="image"]').attr('src')
		const downloads = $('.dwstat').text().trim()
		const views = Number($('.stats').text().split(/ +/)[0])
		const version = $('.version').text()
		const autor = $('a#author-link').attr('href')
		const name = $('a#author-link').text().replace(/\n/g, "").trim()
		const id = Number($('h1#detail-app-name').attr('data-file-id'))
		const title = $('h1#detail-app-name').text().replace(/\n/g, "").trim()
		return Promise.resolve({ autor: { link: autor, name }, apk: { downloads, views, title, version, size, img }, link: url });
	});
};

static searchUptodown(query) {
	const getDate = String(Date.now()).slice(0, 10)
	const hears = {
		"User-agent": userAgent(),
		Cookie: '_ga=GA1.2.2107262286.'+getDate,
		'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
		'Accept-Language': "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7"
	}
	return this.getHTML("https://br.uptodown.com/android/search", {
		method: 'POST',
		headers: hears,
		form: {
			q: query
		}
	}).then(html => {
		const cache = new Array()
		const $ = cheerio.load(html);
		$('.item').each((i, elem) => {
			const title = $(elem).find('a').text()
			const desc = $(elem).find('.description').text()
			const url = $(elem).find('a').attr('href')
			const image = $(elem).find('img').attr('src')
			cache.push({
				title,
				desc,
				image,
				url,
				get: () => uptodownInfo(url)
			})
		})
		return Promise.resolve(cache);
	})
};

}

module.exports = new Object({
	searchUptodown: (query) => ScrapperData.searchUptodown(query),
	infoUptodown: (url) => ScrapperData.uptodownInfo(url)
})