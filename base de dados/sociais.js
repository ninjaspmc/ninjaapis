const cheerio = require("cheerio");
const axios = require("axios");
const qs = require("querystring");
const got = require("got");

function musically(url) {
return new Promise((resolve, rejecet) => {
axios.get('https://musicaldown.com/id', {
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
}
}).then(res => {
const $ = cheerio.load(res.data)
const url_name = $("#link_url").attr("name")
const token_name = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("name")
const token_ = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(2)").attr("value")
const verify = $("#submit-form > div").find("div:nth-child(1) > input[type=hidden]:nth-child(3)").attr("value")
let data = {
[`${url_name}`]: url,
[`${token_name}`]: token_,
verify: verify
}
axios.request({
url: 'https://musicaldown.com/id/download',
method: 'post',
data: new URLSearchParams(Object.entries(data)),
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
'cookie': res.headers["set-cookie"]
}
}).then(respon => {
const ch = cheerio.load(respon.data)
if(!ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > div > img').attr('src')){	
let getResultPhotos = []
ch('body > div.welcome.section > div > div:nth-child(3) > div > div.row > div').each(function (a, b) {
getResultPhotos.push(ch(b).find('img').attr('src'))
})
let result = {
audio: ch('body > div.welcome.section > div > div:nth-child(3) > div > a.btn.waves-effect.waves-light.orange.download').attr('href'),
photo: getResultPhotos
}
if (!result.photo[0]){
resolve({erro: "Erro no Servidor Interno"})
} else {
resolve(result)	
}
} else {
axios.request({
url: 'https://musicaldown.com/id/mp3',
method: 'post',
headers: {
'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36',
'cookie': res.headers["set-cookie"]
}
}).then(resaudio => { 
const hc = cheerio.load(resaudio.data) 
let result = {
thumbnail: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > div > img').attr('src'),
username: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > h2:nth-child(2) > b').text(),
description: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l4.center-align > div > h2:nth-child(3)').text(),
video_noWatermark: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(5)').attr('href'),
video_watermark: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(9)').attr('href'),
video_HD: ch('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(7)').attr('href'),
audio: hc('body > div.welcome.section > div > div:nth-child(3) > div.col.s12.l8 > a:nth-child(6)').attr('href')
}
resolve(result)
})
}
})
})
})
}

async function ssstik(url) {
try {
let data = await axios.get("https://ssstik.io/en", {
headers: {
"Hx-Current-Url": "https://ssstik.io/en",
"Hx-Request": true,
"Hx-Target": "target",
"Hx-Trigger": "_gcaptcha_pt",
"Origin": "https://ssstik.io",
"Referer": "https://ssstik.io/en",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
}
})
let tt = /tt:(["'])(.*?)\1/g.exec(data.data)[2]
data = await axios.post("https://ssstik.io/abc?url=dl", {
id: url,
locale: "en",
tt
}, {
headers: {
"Accept": "*/*",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "id,en-US;q=0.9,en;q=0.8",
"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
"Hx-Current-Url": "https://ssstik.io/en",
"Hx-Request": true,
"Hx-Target": "target",
"Hx-Trigger": "_gcaptcha_pt",
"Origin": "https://ssstik.io",
"Referer": "https://ssstik.io/en",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"
}
})
let $ = cheerio.load(data.data)
let slide = $("ul > li").map((a, b) => {
return $(b).find("a").attr('href') || $(b).find("img").attr("src")
}).get()
let result = {
thumbnail: $("img.result_author").attr("src"),
nameAuthor: $("div.pure-u-18-24.pd-lr > h2").text().trim() || $("div.pure-u-20-24.pd-lr > h2").text().trim(),
description: $("div.pure-u-18-24.pd-lr > p").text().trim(),
videoDownload: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.without_watermark.vignette_active.notranslate").attr("href") || slide,
audioDownload: $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.vignette_active.notranslate").attr("href") || $("a.pure-button.pure-button-primary.is-center.u-bl.dl-button.download_link.music.notranslate").attr("href"),
getLikes: $("div.d-flex.flex-1.align-items-center.justify-content-start").text().trim(),
getComments: $("div.d-flex.flex-1.align-items-center.justify-content-center").text().trim(),
getShare: $("div.d-flex.flex-1.align-items-center.justify-content-end").text().trim()
}
return result
} catch (e) {
throw e
}
}

async function lovetik(query) {
let response = await axios("https://lovetik.com/api/ajax/search", {
method: "POST",
data: new URLSearchParams(Object.entries({ query})),
});
const clean = (data) => {
let regex = /(<([^>]+)>)/gi;
data = data.replace(/(<br?\s?\/>)/gi, " \n");
return data.replace(regex, "");};
async function shortener(url) {
return url;}
result = {};
result.description = clean(response.data.desc);
result.author = clean(response.data.author);
result.videoSemWt = await shortener((response.data.links[0].a || "").replace("https", "http"));
result.videoOriginal = await shortener((response.data.links[1].a || "").replace("https", "http"));
result.audio = await shortener((response.data.links[2].a || "").replace("https", "http"));
result.thumbnail = await shortener(response.data.cover);
return result;
}

async function saveinsta(url) {
try {
let { data } = await axios.post("https://saveinsta.io/core/ajax.php", {url, "host": "instagram"}, {
headers: {
"Accept": "*/*",
"Accept-Encoding": "gzip, deflate, br",
"Accept-Language": "id,en-US;q=0.9,en;q=0.8",
"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
"Origin": "https://saveinsta.io",
"Referer": "https://saveinsta.io/",
"Sec-Ch-Ua": '"Not/A)Brand";v="99", "Microsoft Edge";v="115", "Chromium";v="115"',
"Sec-Ch-Mobile": "?0",
"Sec-Ch-Ua-Platform": '"Windows"',
"Sec-Fetch-Dest": "empty",
"Sec-Fetch-Mode": "cors",
"Sec-Fetch-Site": "same-origin",
"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188",
"X-Requested-With": "XMLHttpRequest"
}
})
let $ = cheerio.load(data)
let urls = $("div.row > div.col-md-12 > div").map((a, b) => {
return $(b).find("a").attr("href") || $(b).find("img").attr("src")
}).get()
return urls.filter(a => a).map(a => /dl\.php/i.test(a) && "https://saveinsta.io/" + a)
} catch (e) {
throw e
}
}

function saveig(url) {
return new Promise(async (resolve) => {
try {
const response = await axios.post(
"https://saveig.app/api/ajaxSearch",
require('querystring').stringify({ q: url, t: "media", lang: "en" }),
{
headers: {
'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
'Origin': 'https://saveig.app/en',
'Referer': 'https://saveig.app/en',
'Referrer-Policy': 'strict-origin-when-cross-origin',
'User-Agent': 'PostmanRuntime/7.31.1'
}
}
);
const contentType = response.headers['content-type'];
if (contentType.includes('application/json')) {
let jsonData = response.data;
if (jsonData && jsonData.data) {
let $ = cheerio.load(jsonData.data);
let result = [];
$('div[class="download-items__btn"]').each((i, e) => {
result.push({
type: $(e).find('a').attr('href').match('.jpg') ? 'image' : 'video',
url: $(e).find('a').attr('href')
});
});
if (!result.length) {
return resolve({ status: false, message: "Erro ao executar a scrapper." });
}
let resultado = result;
resolve(resultado);
} else {
throw new Error('JSON response did not match expected format.');
}
} else {
throw new Error('Unknown content type');
} 
} catch (e) {
return resolve({ status: false, message: e.message });
}
});
}

function saveig_reels(link) { 
return new Promise(async(resolve, reject) => {
const headers = {
"User-Agent": "PostmanRuntime/7.31.1", 
"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", 
"Accept-Encoding": "gzip, deflate, br"
}
res = await axios.post("https://saveig.app/api/ajaxSearch", 
qs.stringify({q: link, t: "media", lang: "en"}), {headers}); 
try { 
const $ = cheerio.load(res.data.data); 
let resultado = {
url: $('a[title="Download Video"]').attr('href'), 
thumbnail: $('img[alt="saveig"]').attr('src')
}
resolve(resultado)
} catch (error) { 
resolve({error: true, message: 'Video not found or privated!'})
}
})
}

function snapsave(url) {
return new Promise(async (resolve) => {
try {
if (!url.match(/(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/) && !url.match(/(https|http):\/\/www.instagram.com\/(p|reel|tv|stories)/gi)) return resolve({message: `Url inválido, ou seja, coloque um url que seja do instagram ou facebook.`, status: false})
function decodeSnapApp(args) {
let [h, u, n, t, e, r] = args
function decode (d, e, f) {
const g = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ+/'.split('')
let h = g.slice(0, e)
let i = g.slice(0, f)
let j = d.split('').reverse().reduce(function (a, b, c) {
if (h.indexOf(b) !== -1)
return a += h.indexOf(b) * (Math.pow(e, c))
}, 0)
let k = ''
while (j > 0) {
k = i[j % f] + k
j = (j - (j % f)) / f
}
return k || '0'
}
r = ''
for (let i = 0, len = h.length; i < len; i++) {
let s = ""
// @ts-ignore
while (h[i] !== n[e]) {
s += h[i]; i++
}
for (let j = 0; j < n.length; j++)
s = s.replace(new RegExp(n[j], "g"), j.toString())
// @ts-ignore
r += String.fromCharCode(decode(s, e, 10) - t)
}
return decodeURIComponent(encodeURIComponent(r))
}
function getEncodedSnapApp(data) {
return data.split('decodeURIComponent(escape(r))}(')[1]
.split('))')[0]
.split(',')
.map(v => v.replace(/"/g, '').trim())
}
function getDecodedSnapSave (data) {
return data.split('getElementById("download-section").innerHTML = "')[1]
.split('"; document.getElementById("inputData").remove(); ')[0]
.replace(/\\(\\)?/g, '')
}
function decryptSnapSave(data) {
return getDecodedSnapSave(decodeSnapApp(getEncodedSnapApp(data)))
}
const html = await got.post('https://snapsave.app/action.php?lang=id', {
headers: {
'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
'content-type': 'application/x-www-form-urlencoded','origin': 'https://snapsave.app',
'referer': 'https://snapsave.app/id',
'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36'
},
form: { url }
}).text()
const decode = decryptSnapSave(html)
const $ = cheerio.load(decode)
const results = []
if ($('table.table').length || $('article.media > figure').length) {
const thumbnail = $('article.media > figure').find('img').attr('src')
$('tbody > tr').each((_, el) => {
const $el = $(el)
const $td = $el.find('td')
const resolution = $td.eq(0).text()
let _url = $td.eq(2).find('a').attr('href') || $td.eq(2).find('button').attr('onclick')
const shouldRender = /get_progressApi/ig.test(_url || '')
if (shouldRender) {
_url = /get_progressApi\('(.*?)'\)/.exec(_url || '')?.[1] || _url
}
results.push({resolution, thumbnail, url: _url, shouldRender})
})
} else {
$('div.download-items__thumb').each((_, tod) => {
const thumbnail = $(tod).find('img').attr('src')
$('div.download-items__btn').each((_, ol) => {
let _url = $(ol).find('a').attr('href')
if (!/https?:\/\//.test(_url || '')) _url = `https://snapsave.app${_url}`
results.push({thumbnail,url: _url})
})
})
}
if (!results.length) return resolve({message: `Os dados fornecido está em branco, ou seja, no resultado está: []`, status: false})
return resolve(results)
} catch (e) {
return resolve({message: e.message, status: false})
}
})
}

async function getmyfb(url) {
try {
let { data } = await axios.post("https://getmyfb.com/process", {"id": url, locale: "en"}, 
{ headers: {"Accept": "*/*", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8", "Cookie": `PHPSESSID=k3eqo1f3rsq8fld57fgs9ck0q9; _token=1AHD0rRsiBSwwh7ypRad; __cflb=04dToeZfC9vebXjRcJCMjjSQh5PprejvCpooJf5xhb; _ga=GA1.2.193364307.1690654540; _gid=GA1.2.326360651.1690654544; _gat_UA-3524196-5=1; _ga_96G5RB4BBD=GS1.1.1690654539.1.0.1690654555.0.0.0`, "Origin": "https://getmyfb.com", "Referer": "https://getmyfb.com/", "Hx-Current-Url": "https://getmyfb.com", "Hx-Request": true, "Hx-Target": "target", "Hx-Trigger": "form", "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115.0.0.0 Safari/537.36 Edg/115.0.1901.188"}
})
let $ = cheerio.load(data)
let urls = []
$("ul > li").map((a, b) => {
videoLink = $(b).find("a").attr("href")
urls.push({quality: "720p(HD)", url: videoLink})
})
let result = {
status: 200,
resultado: {
description: $("div.results-item > div.results-item-text").text().trim(),
media: urls[0]
}
}
if (urls.length == 0) return $("h4").text()
return result
} catch (e) {
return {status: 404, error: e}
}
}

module.exports = { musically, ssstik, lovetik, saveinsta, saveig, saveig_reels, snapsave, getmyfb }