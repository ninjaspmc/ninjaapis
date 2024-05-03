const cheerio = require("cheerio");
const axios = require("axios");
const fs = require('fs')
const path = require("path");
const { dirname } = require('path');
__dirname = dirname(__filename);

function scrapper_happymod(nome) {
  return new Promise((resolve, reject) => {
  axios.get(`https://www.happymod.com/search.html?q=${nome}`).then(async tod => {
  const $ = cheerio.load(tod.data)
boxs_postagens = []
$("div.pdt-app-box").each(function(c, d) {
nome = $(d).find("a").text().trim();
icon = $(d).find("img.lazy").attr('data-original');
link = $(d).find("a").attr('href');
link2 = `https://www.happymod.com${link}`
const Data = {
icon: icon,
nome: nome,
link: link2
}
boxs_postagens.push(Data)
})
resolve(boxs_postagens);
}).catch(reject)
});
}
  
var key = JSON.parse(fs.readFileSync(__path+"/database/tokens.json"));
const usus_r = JSON.parse(fs.readFileSync(__path+"/database/usuarios.json"));

async function RG_US(token, req) {
var i4 = key.map(i => i?.token)?.indexOf(token)
if(i4 >= 0) {
key[i4].request -= 1;
fs.writeFileSync(__path+"/database/tokens.json", JSON.stringify(key, null, 2));
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = usus_r.map(i => i.key).indexOf(token);
if(i3 < 0 && !usus_r.map(i => i.IP).includes(IP?.split(":")[3])){
usus_r.push({key: token, IP: [IP?.split(":")[3]]})
fs.writeFileSync(__path+"/database/usuarios.json", JSON.stringify(usus_r, null, 2));
} else if(i3 >= 0 && !usus_r[i3]?.IP.includes(IP?.split(":")[3])) {
usus_r[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync(__path+"/database/usuarios.json", JSON.stringify(usus_r, null, 2));
}}}
  
async function happymodr(req, res) {
const query = req.query.nome;
const token = req.query.token;
if (query === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro nome & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "../public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "token inválida ou requests esgotados!"})
scrapper_happymod(query).then(result => {
RG_US(token, req);
res.status(200).send({status: 200, resultado: result});
}).catch(error => {
console.log(error);
res.status(500).send({
status: 500,
message: 'Erro no Servidor Interno'})
});
}  

module.exports = { scrapper_happymod, happymodr } 