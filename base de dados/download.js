const fetch = require("node-fetch");
const cheerio = require("cheerio");
const axios = require("axios"); 

function parseFileSize(size) {
return parseFloat(size) * (/GB/i.test(size) ? 1000000 : /MB/i.test(size) ? 1000 : /KB/i.test(size) ? 1 : /bytes?/i.test(size) ? 0.001 : /B/i.test(size) ? 0.1 : 0);
}

async function GDriveDl(url) {
let id;
if (!(url && url.match(/drive\.google/i))) throw "O url fornecido está inválido.";
id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))[1];
if (!id) throw "Error - [ID NOT FOUND] - Possível motivo: O arquivo pode estar privado.";
let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
    method: "post",
    headers: {
      "accept-encoding": "gzip, deflate, br",
      "content-length": 0,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      origin: "https://drive.google.com",
      "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36",
      "x-client-data": "CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=",
      "x-drive-first-party": "DriveWebUi",
      "x-json-requested": "true",
    },
});
let {fileName, sizeBytes, downloadUrl} = JSON.parse((await res.text()).slice(4));
if (!downloadUrl) throw "Limite de download de links!";
let data = await fetch(downloadUrl);
if (data.status !== 200) throw data.statusText;
return {downloadUrl, fileName, mimetype: data.headers.get("content-type")};
}

function mediafiredl__(url) {
return new Promise(async(resolve, reject) => {
var a, b;
if (!/https?:\/\/(www\.)?mediafire\.com/.test(url)) return resolve()
const data = await axios.get(url).catch(function (error) {})
if (!data) { resolve({status: 404, message: "Erro no Servidor Interno"}) } else {
const $ = cheerio.load(data.data);
const $intro = $('div.dl-info > div.intro');
const $li = $('div.dl-info > ul.details > li');
const result = {
filename: $intro.find('div.filename').text().trim(),
typeName: $intro.find('div.filetype > span').eq(0).text().trim(),
filetype: ((b = (a = /\(\.(.*?)\)/.exec($intro.find('div.filetype > span').eq(1).text())) === null || a === void 0 ? void 0 : a[1]) === null || b === void 0 ? void 0 : b.trim()) || 'bin',
url: ($('#downloadButton').attr('href') || '').trim() || ($('#download_link > a.retry').attr('href') || '').trim(),
url2: ($('#download_link > a.retry').attr('href') || '').trim(),
uploadDate: $li.eq(1).find('span').text().trim(),
size: $li.eq(0).find('span').text().trim()
};
resolve(result)
}
})
}

module.exports = { GDriveDl, mediafiredl__ }