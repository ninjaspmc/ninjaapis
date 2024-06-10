bla = process.cwd()
__path = process.cwd()
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
const PORT = process.env.PORT || 8080
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
const ffmpeg = require('fluent-ffmpeg');
const uuid = require('uuid').v4
const fs = require('fs')
const hx = require('hxz-api');
const axios = require('axios')
const zrapi = require('zrapi')
const jpeg = require('jpeg-js')
const { GoogleGenerativeAI } = require("@google/generative-ai")
const { GOOGLE_IMG_SCRAP , GOOGLE_QUERY } = require('google-img-scrap');
const moment = require('moment-timezone')
const yts = require('yt-search')
const translate = require('translate-google-api')
const multer = require('multer')
const { Lyrics, aliexpress } = require("./base de dados/ali+lyric.js");
const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const fetch = require('node-fetch')
const FormData = require('form-data')
const lyricsFinder2 = require('lyrics-finder');
const uber = require('uberduck-api');
const AssemblyAI = require("assemblyai");
const Vagalume = require('@eugabrielsilva/vagalume');
const Canvasfy = require("canvafy")
var { igstory} = require('./base de dados/scrape.js');
const cyberCook = require("./base de dados/receitas.js")
const InstaStalker = require("./base de dados/instaStalker.js")
const tinder = JSON.parse(fs.readFileSync("./database/tinder.json"));
const { xvideosdl, xnxxdl, xvideosSearch, xnxxSearch } = require("./base de dados/+18.js")
var { searchSpotify } = require('./base de dados/spotify.js');
const getInfo = require("./base de dados/opsanime.js");
const { SpotifySearchDL } = require("./base de dados/spotifydl.js");
const uptodown = require("./base de dados/uptodown.js")
const icms = require('./base de dados/icms.js')
const { init, askAI, Chat } = require(bla+'/base de dados/modules/bard-ai');
const { GDriveDl, mediafiredl__ } = require(bla+'/base de dados/download.js');
const { Youtube } = require('ytdownloader.js')
var canvasx = require('discord-canvas')
var { fromBuffer } = require('file-type')
const BrainlySearch = require('./base de dados/brainly.js')
const Canvas = require("@napi-rs/canvas")
const { PlayLinkMP4_1 } = require('./base de dados/youtube2.js')
const { instagramStoryUser, igProfileStalk, unsplashSearch } = require('./base de dados/get.js')
const { fetchJson } = require('./base de dados/myfunc')
const { audioMeme, yt2mate, yt1s, savef, get, y2bs } = require("./base de dados/sociais-2.js")
const isUrl = require("is-url")
var gerarnick = require('./base de dados/gerarnick.js')
var { mediafireDl } = require('./base de dados/mediafire.js');
const { fetchTwitterMedia } = require('./base de dados/twtdl.js')
var buffer = require('./base de dados/upload.js')
var exec = require('child_process').exec;
var { Maker } = require('imagemaker.js')
var TikTokScraper = require('tiktok-scraper');
var download = require('@phaticusthiccy/open-apis')
const { shortText } = require("limit-text-js")
const CEP = require('cep-address-finder')
const scraper = require('./base de dados/MULTI_IMDb.js')
const { rastrearEncomendas, dafontDownload, dafontSearch, xvideosPorno, pensador } = require(bla+"/base de dados/@api.js")      
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
var thiccysapi = require('textmaker-thiccy');
var { pinterest } = require('./base de dados/funções.js')
const { BrasileirãoFutebol, getNoticiasEsporte } = require("./base de dados/futebol.js")
const { download_Url } = require("./base de dados/function.js");
const mintake = require(bla + '/base de dados/modules/mintake');
const mumaker = require(bla + '/base de dados/modules/mumaker');
const { youtubedl, youtubedlv2 } = require(bla + "/base de dados/modules/sosmed")
const { PlayLinkMP3, PlayLinkMP4, PlayAudio, PlayVideo, ytSearch2 } = require("./base de dados/youtubev1.js");
const { tikmate, tiklydown } = require("./base de dados/tiktok.js")
var wiki = require("@dada513/wikipedia-search")
const ytdl = require("ytdl-core")
const tesseract = require("node-tesseract-ocr");
const NASA = require('@killovsky/nasa');
var trans = require('@vitalets/google-translate-api')
const SANIME = require('selfietoanime');
var Deezer = require("deezer-web-api");
var DeezerClient = new Deezer();
const {savefrom} = require('./base de dados/savefrom.js')
const Pokemon = require('pokemon.js');
const cors = require('cors')
const gabriell = require("./base de dados/listdl.js")
const testing = require("./base de dados/listdl2.js")
const BitlyClient = require('bitly').BitlyClient
const TinyURL = require('tinyurl');
const { createWorker } = require("tesseract.js")
const unfetch = require('isomorphic-unfetch');
const { wikimedia } = require("./base de dados/scraper/wikimedia.js")
const { wall } = require("./base de dados/scraper/scraper.js")
var { color } = require('./base de dados/color.js')
const { Mp3Download, Mp4Download } = require("./base de dados/y2mate.js")
var { ytMp3, ytMp4, ytPlay, ytPlayMp4, ytSearch, ytVideosSearch } = require('./base de dados/yt.js')
const { fbdown } = require("./base de dados/facebook.js")
const { saveig, saveig_reels, getmyfb } = require("./base de dados/sociais.js");
const { ytDonlodMp3_3, ytDonlodMp4_3, ytPlayMp3_3, ytPlayMp4_3, ytSearch_3 } = require("./base de dados/youtubev3");
const {  facebook } = require('./base de dados/downloader.js')
const { gis } = require('./base de dados/gimage.js')
var { ytMp3_2, ytMp4_2, ytPlay_2 } = require('./base de dados/youtubev2.js')
var { nerding, gpwhatsapp, apkmody, pornhubsrc, igstalk, soundl, playstore, manga, anime, hentaistube, pornogratis, filme, wattpad } = require('./base de dados/scraper2.js')
var { pensadorSearch, wallpaper2 } = require('./base de dados/scrapper-api.js')
var { tiktok2, FacebookMp4 } = require('./base de dados/downloader.js')
var { PlayStoreSearch, MercadoLivreSearch, AmazonSearch, AmericanasSearch, SubmarinoSearch, Horoscopo, Dicionario } = require('./base de dados/scraper/pesquisas.js');
var { pinterestVideoV2 } = require('./base de dados/pinterest.js');
var { kwai } = require('./base de dados/kwai.js')
var { InArtificial, CorretorOpenAi } = require('./base de dados/scrapper-vip.js');
var { getVideosPlaylist } = require('./base de dados/playlist.js');
const scrapper = require("./base de dados/scrapper.js")
var { G1, Poder360, JovemPan, Uol, CNNBrasil, Estadao } = require('./base de dados/scraper/noticias.js')
const path = require("path");
const { dirname } = require('path');
var __dirname = dirname(__filename);
var { memesDroid } = require('./base de dados/scraper/aleacrapper.js')
var { iFunny } = require("./base de dados/ifunny.js")
var { ringtone } = require('./base de dados/scraper/ringtone.js')
var { lirik } = require('./base de dados/sab_scraper.js')
const { AnimeWallpaper } = require("anime-wallpaper");
const BuscaWallpaper = new AnimeWallpaper();
const { snapsave } = require("@bochilteam/scraper")
var { facebookDownloader, instaVideoV1 } = require('./base de dados/scraper/downloaders.js')
var { LetradaMusica } = require('./base de dados/letraMusic.js')
var { igdl } = require('./base de dados/igdl.js')
const { comunismo, bolsonaro, bnw, blurr, affect, beautiful, circle, del, gay, lgbt, invert, facepalm, dither, jail, magik, pixelate, rip, sepia, rotate, trash, wanted, wasted, bobross, mms, karaba, WLCM, RankUser } = require('./base de dados/canvas.js')
const { happymodr } = require('./base de dados/happymod.js')
const { wikiSearch } = require('./base de dados/wikipediaBr.js');
const { randomGrupos } = require('./base de dados/groups-random.js');
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
const getRandom = (ext) => {
return `${Math.floor(Math.random() * 10000)}${ext}`;
};
//=>=>=>=>=>=>=>=[@]=<=<=<=<=<=<=<=<=//
async function getBuffer(url) {
he = await fetch(url)
.then(c => c.buffer())
return he
}

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\
 //==>==>===>===>[ tokenS ]<===<===<===\\
var key = JSON.parse(fs.readFileSync("./database/tokens.json"));
const usus_r = JSON.parse(fs.readFileSync("./database/usuarios.json"));

async function RegistrarUser(token, req) {
var i4 = key.map(i => i?.token)?.indexOf(token)
if(i4 >= 0) {
key[i4].request -= 1;
fs.writeFileSync("./database/tokens.json", JSON.stringify(key, null, 2));
var IP = req.headers['x-real-ip'] || req.connection.remoteAddress || 0;
var i3 = usus_r.map(i => i.key).indexOf(token);
if(i3 < 0 && !usus_r.map(i => i.IP).includes(IP?.split(":")[3])){
usus_r.push({key: token, IP: [IP?.split(":")[3]]})
fs.writeFileSync("./database/usuarios.json", JSON.stringify(usus_r, null, 2));
} else if(i3 >= 0 && !usus_r[i3]?.IP.includes(IP?.split(":")[3])) {
usus_r[i3].IP.push(IP?.split(":")[3])
fs.writeFileSync("./database/usuarios.json", JSON.stringify(usus_r, null, 2));
}}}

const genAI = new GoogleGenerativeAI('AIzaSyDFqUTT5a3dyHji5RQmdsZGFcE7yU0q8Ec');

//-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-\\

// ===[INÍCIO - KEYS ENCURTAR LINK]===== \\
apicuttly = ['4786cc6a0f19de9c67ea6a4282c494323c932','2038c1a7754b408aa8f9055282638c00e668e','89d73b3a07209177d0251e30d49d66bd669ac','e841147455d0fdfbf50f74aefe63b6728adc0','27f3aa3f45cb4460bcbac69b782ca470a4570','31a8df09d5a9d8d009790df0b5642e3d76919','09b4e764ff07b10eac1682e71aaf95a78f358','75fe576ce040b619176af22f5a718b2f574f5','e24ee36f9c1519c0a779667a5182a31fb7ccf','903869065d29e23455ddca922071f4bbeb133']
apibitly = ['6cfc18e9bfa554714fadc10a1f6aff7555642348','2243940c230ad0d748059aee58ddf126b65fd8e7','c71b6658a1d271ddaf2a5077de3dcb9d67f68025','cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43','7915c671fbd90eca96310e5c9442d761225a1080','e5dee46eb2d69fc9f4b0057266226a52a3555356','f09ab8db9cf778b37a1cf8bc406eee5063816dec','964080579f959c0cc3226b4b2053cd6520bb60ad','a4f429289bf8bf6291be4b1661df57dde5066525','3d48e2601f25800f375ba388c30266aad54544ae','4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa','d375cf1fafb3dc17e711870524ef4589995c4f69','43f58e789d57247b2cf285d7d24ab755ba383a28','971f6c6c2efe6cb5d278b4164acef11c5f21b637','ae128b3094c96bf5fd1a349e7ac03113e21d82c9','e65f2948f584ffd4c568bf248705eee2714abdd2','08425cf957368db9136484145aa6771e1171e232','dc4bec42a64749b0f23f1a8f525a69184227e301','0f9eb729a7a08ff5e73fe1860c6dc587cc523035','037c5017712c8f5f154ebbe6f91db1f82793c375']

// ===[FIM - KEYS ENCURTAR LINK]===== \\

const headers = {
'accept': '*/*',
'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53',
'Accept-Language': 'en-US,en;q=0.9,it;q=0.8,es;q=0.7',
'referer': 'https://www.google.com/',
'cookie': 'DSID=AAO-7r4OSkS76zbHUkiOpnI0kk-X19BLDFF53G8gbnd21VZV2iehu-w_2v14cxvRvrkd_NjIdBWX7wUiQ66f-D8kOkTKD1BhLVlqrFAaqDP3LodRK2I0NfrObmhV9HsedGE7-mQeJpwJifSxdchqf524IMh9piBflGqP0Lg0_xjGmLKEQ0F4Na6THgC06VhtUG5infEdqMQ9otlJENe3PmOQTC_UeTH5DnENYwWC8KXs-M4fWmDADmG414V0_X0TfjrYu01nDH2Dcf3TIOFbRDb993g8nOCswLMi92LwjoqhYnFdf1jzgK0'};

const router = express.Router();
var upload = multer()
var app = express()
 
app.use(cors())
app.set("json spaces",2)
app.use(express.static("public"))

function delFile(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const { UltimateTextToImage, registerFont } = require("ultimate-text-to-image");

const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;

ffmpeg.setFfmpegPath(ffmpegPath);

registerFont((__dirname + '/base de dados/fontes/NotoEmoji.ttf'), { family: 'Noto Emoji' });
registerFont(__dirname + '/base de dados/fontes/NotoSansMono.ttf', { family: 'Noto Sans Mono' });

let randomName = (ext) => uuid().split('-')[0] + (ext ? ext : '');

var cores = ['red','lime','yellow','magenta','cyan'];

async function ttp(text, color = '#ffffff', name = randomName('.png')) {
new UltimateTextToImage(text, {
width: 500,
height: 500,
fontFamily: "Noto Emoji, Noto Sans Mono",
fontColor: color,
fontSize: 300,
minFontSize: 10,
lineHeight: 50,
autoWrapLineHeightMultiplier: 1.2,
margin: 15,
//marginBottom: 40,
align: "center",
valign: "middle",
}).render().toFile(`./assets/Edições/${name}`);
return `./assets/Edições/${name}`;
}

async function attp(text) {
let nome = randomName('');
let lista = [
ttp(text, '#ff0000', `${nome}0.png`),
ttp(text, '#ffa600', `${nome}1.png`),
ttp(text, '#ffee00', `${nome}2.png`),
ttp(text, '#2bff00', `${nome}3.png`),
ttp(text, '#00ffea', `${nome}4.png`),
ttp(text, '#3700ff', `${nome}5.png`),
ttp(text, '#ff00ea', `${nome}6.png`),
];

return new Promise(function (resolve, reject) {
// gerar webp
ffmpeg().addInput((`./assets/Edições/${nome}`+"%d.png"))
.addOutputOptions(['-vcodec', 'libwebp', '-vf','scale=500:500:force_original_aspect_ratio=decrease,setsar=1, pad=500:500:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse', '-loop', '50', '-preset', 'default'])
//.outputFPS(15)
.toFormat('webp')
.on('end', () => {
for (let img = 0; img < lista.length; img++) {
delFile("*png");
}
resolve('./assets/Edições/'+nome+'.webp')}).on('error', (err) => {
for (let img = 0; img < lista.length; img++) {
delFile("*webp");
}
reject(('erro ffmpeg ' + err));
}).save(('./assets/Edições/'+nome+'.webp'));
});
}

class CvN  {
static async kiss(image1, image2, fundo, nmr1, nmr1_2, nmr1_3, nmr1_4, nmr2, nmr2_2, nmr2_3, nmr2_4, largura, altura) {
if (!image1) return res.json({msg: "image1"});
if (!image2) return res.json({msg: "image2"});
var canvas = Canvas.createCanvas(parseInt(largura), parseInt(altura));
var ctx = canvas.getContext("2d");
var background = await Canvas.loadImage(fundo);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
var avatar = await Canvas.loadImage(image1);
var avatar1 = await Canvas.loadImage(image2);
ctx.drawImage(avatar1, parseInt(nmr1), parseInt(nmr1_2), parseInt(nmr1_3), parseInt(nmr1_4));
ctx.drawImage(avatar, parseInt(nmr2), parseInt(nmr2_2), parseInt(nmr2_3), parseInt(nmr2_4));
return canvas.encode("png");
}
}

class DuEl {
static async duelo(url, nmr2, nmr2_2, nmr2_3, nmr2_4, largura, altura, fundo) {
if (!url) return res.json({msg: "url"});
var canvas = Canvas.createCanvas(parseInt(largura), parseInt(altura));
var ctx = canvas.getContext("2d");
var background = await Canvas.loadImage(fundo);
ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
var avatar = await Canvas.loadImage(url);
ctx.drawImage(avatar, parseInt(nmr2), parseInt(nmr2_2), parseInt(nmr2_3), parseInt(nmr2_4));
return canvas.encode("png");
}
}

////PAGINA INICIAL Q IRA REDIRECIONAR PRA /DOC
 
const Ddos = require('ddos')
var ddos = new Ddos({burst:4, limit:30, testmode:true, whitelist:['187.21.11.237']});
 
var blacklist = require('express-blacklist');
app.use(blacklist.blockRequests('blacklist.txt'));

app.get("/", (req,res,next) => {
console.log("Beep");
res.end("Boop");
})
app.use(router);
 
app.get('/moderador',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "moderador.html"))})

app.get('/planos',(req, res) => {
res.sendFile(path.join(__dirname, "./public/", "planos.html"))})

app.get('/add-key-sodono',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({message: "Faltando o and"})
var [token, senha, rq] = a.split("&")
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "Senha invalida.."})
if(!token) return res.json({message: "Cadê a key?"})
if(key.map(i => i.token).includes(token)) {
return res.json({message: "Essa key já está inclusa dentro do sistema.."})
} else {
key.push({token: token, request: rq})
fs.writeFileSync("./database/tokens.json", JSON.stringify(key))
return res.json({message: `token ${token} registrada com sucesso..`})
}
})

app.get('/tirar-key-sodono',(req, res) => {
a = req.query.a
if(!a.includes("&")) return res.json({message: "Faltando o and"})
var [token, senha] = a.split("&")
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "Senha invalida..."})
if(!token) return res.json({message: "Cadê a key?"})
if(!key.map(i => i.token).includes(token)) {
return res.json({message: "Essa key não está inclusa.."})
} else {
var i2 = key.map(i => i.token).indexOf(token)
key.splice(i2, 1)
fs.writeFileSync("./database/tokens.json", JSON.stringify(key))
return res.json({message: `token ${token} tirada com sucesso..`})
}
})

app.get('/db/adicionar-token',(req, res) => {
var { token, senha, request } = req.query
if(!request) return res.json({message: "Qual é a quantidade de request que você deseja por à token?"})
if(!token) return res.json({message: "Você esqueceu de preencher o nome que você deseja na token."})
if(!senha) return res.json({message: "A senha não foi preenchida, por segurança insira a senha que você criou."})
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "A senha digitada está inválida, verifique por favor."})
if(key.map(i => i.token).includes(token)) {
return res.json({message: "A token digitada já está inclusa dentro do sistema."})
} else {
key.push({token: token, request: request})
fs.writeFileSync("./database/tokens.json", JSON.stringify(key))
return res.json({message: `token ${token} registrada em meu sistema com sucesso..`})
}
})

app.get('/db/remover-token',(req, res) => {
var { token, senha } = req.query
if(!token) return res.json({message: "Você esqueceu de preencher o nome que você deseja na token."})
if(!senha) return res.json({message: "A senha não foi preenchida, por segurança insira a senha que você criou."})
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "A senha digitada está inválida, verifique por favor."})
if(!token) return res.json({message: "Qual é a token que você deseja remover?"})
if(!key.map(i => i.token).includes(token)) {
return res.json({message: "Essa token não está inclusa em minha base de dados.."})
} else {
var i2 = key.map(i => i.token).indexOf(token)
key.splice(i2, 1)
fs.writeFileSync("./database/tokens.json", JSON.stringify(key))
return res.json({message: `token ${token} removida da lista com sucesso..`})
}
})

app.get('/db/lista-tokens', async (req, res, next) => {
var senha = req.query.senha
if(!senha) return res.json({message: "A senha não foi preenchida, por segurança insira a senha que você criou."})
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "A senha digitada está inválida, verifique por favor."})
listTokens = JSON.parse(fs.readFileSync(bla +'/database/tokens.json').toString())
res.json(listTokens) 
})

app.get('/db/lista-ip', async (req, res, next) => {
var senha = req.query.senha
if(!senha) return res.json({message: "A senha não foi preenchida, por segurança insira a senha que você criou."})
var senhaofc = "ninjinha-lindo"
if(senha != senhaofc) return res.json({message: "A senha digitada está inválida, verifique por favor."})
listUsersIP = JSON.parse(fs.readFileSync(bla +'/database/usuarios.json').toString())
res.json(listUsersIP) 
})

app.get('/verificador',(req, res) => {
token = req.query.token;
var ITC = key.map(i => i?.token)?.indexOf(token);
if(ITC < 0) {
return res.json({resposta: 'Token inválido ou requests esgotados!'})
} else {
return res.json({status: true, resposta: "Token funcionando perfeitamente!", limite_de_request: key[ITC]?.request})
}
})

app.get('/canvas/welcome_and_goodbye', async (req, res) => {
  try {
    var {
      numero,
      ano,
      titulo,
      mensagem,
      contador,
      perfil,
      fundo,
      cor_borda,
      cor_caixa_numero,
      cor_caixa_ano,
      cor_borda_titulo,
      cor_caixa_mensagem,
      cor_numero,
      cor_ano,
      cor_titulo,
      cor_mensagem,
      cor_contador,
      cor_perfil,
      cor_hashtag
    } = req.query;
    
    const requiredParams = [
      'numero', 'ano', 'titulo', 'mensagem', 'contador', 'perfil',
      'fundo', 'cor_borda', 'cor_caixa_numero', 'cor_caixa_ano', 'cor_borda_titulo', 
      'cor_caixa_mensagem', 'cor_numero', 'cor_ano', 'cor_titulo',
      'cor_mensagem', 'cor_contador', 'cor_perfil', 'cor_hashtag'
    ];
    for (const param of requiredParams) {
      if (!req.query[param]) {
        return res.json({ status: 404, error: `Insira o parametro: ${param}` });
      }
    }

    let welcomer = await new canvasx.Welcome()
      .setUsername(numero)
      .setDiscriminator(ano)
      .setText("title", titulo)
      .setText("message", mensagem)
      .setText("member-count", contador)
      .setAvatar(perfil)
      .setBackground(fundo)
      .setColor('border', "#"+cor_borda)
      .setColor('username-box', "#"+cor_caixa_numero)
      .setColor('discriminator-box', "#"+cor_caixa_ano)
      .setColor('title-border', "#"+cor_borda_titulo)
      .setColor('message-box', "#"+cor_caixa_mensagem)
      .setColor('username', "#"+cor_numero)
      .setColor('discriminator', "#"+cor_ano)
      .setColor('title', "#"+cor_titulo)
      .setColor('message', "#"+cor_mensagem)
      .setColor('member-count', "#"+cor_contador)
      .setColor('avatar', "#"+cor_perfil)
      .setColor('hashtag', "#"+cor_hashtag)
      .toAttachment();

    const outputPath = path.join(__dirname, 'assets/Tempo/welkom.png');
    fs.writeFileSync(outputPath, welcomer.toBuffer());

    res.sendFile(outputPath);
  } catch (error) {
    console.error('Error generating welcome image:', error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
});

app.get('/canvas/perfil', async (req, res) => {
  try {
 if(!req.query.usuario) return res.json({message: "Faltando o parâmetro senha"})
 if(!req.query.perfil) return res.json({message: "Faltando o parâmetro perfil"})
 if(!req.query.fundo) return res.json({message: "Faltando o parâmetro fundo"})
  if(!req.query.cash) return res.json({message: "Faltando o parâmetro cash"})
   if(!req.query.nivel) return res.json({message: "Faltando o parâmetro nivel"})
    if(!req.query.patente) return res.json({message: "Faltando o parâmetro patente"})
    if(!req.query.xp_atual) return res.json({message: "Faltando o parâmetro xp_atual"})
   if(!req.query.proximo_xp) return res.json({message: "Faltando o parâmetro proximo_xp"})
    if(!req.query.posicao) return res.json({message: "Faltando o parâmetro posicao"})

    let currentXP = req.query.xp_atual;
    let neededXP = req.query.proximo_xp;
    let xpText = `${currentXP}/${neededXP} para o próximo nível`;

    let perfil = await new canvasx.RankCard()
      .setAddon("xp", false)
      .setAddon("rank", false)
      .setAvatar(req.query.perfil)
      .setRank(req.query.posicao)
      .setRankName(req.query.patente)
      .setUsername(req.query.usuario)
      .setText("reputation", req.query.cash)
      .setText("level", req.query.nivel)
      .setXP("current", currentXP)
      .setXP("needed", neededXP)
      .setText("needed-xp", xpText)
      .setBadge(1, "gold")
      .setBadge(3, "diamond")
      .setBadge(5, "silver")
      .setBadge(6, "bronze")
      .setBackground(req.query.fundo)
      .toAttachment();

    const outputPath = path.join(__dirname, 'assets/Tempo/perfil.png');
    fs.writeFileSync(outputPath, perfil.toBuffer());

    console.log('Image written to', outputPath);

    res.sendFile(outputPath);
  } catch (error) {
    console.error('Error generating profile image:', error);
  }
});

app.get('/canvas/duelo', async(req, res) => {
var { foto1, foto2, fundo } = req.query
if (!foto1) return res.status(408).send({status: 408, message: 'Coloque o foto1 no parâmetro.'})
if (!foto2) return res.status(408).send({ status: 408, message: 'Coloque o foto2 no parâmetro.'})
res.type('jpg')
res.send(await CvN.kiss(foto1, foto2, fundo, 595, 102, 157, 157, 117, 100, 150, 150, 870, 360))
})

router.get('/canvas/rank', RankUser)  
router.get('/canvas/welcomev2', WLCM)

app.get('/shota', (req, res) => {
(async() => {
json = JSON.parse(fs.readFileSync(bla+'/base de dados/shotas.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.type('jpg')
res.send(await getBuffer(random))
})()
})

app.get('/animes/aleatorio/metadinha', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
json = JSON.parse(fs.readFileSync(bla +'/base de dados/metadinha.json').toString())
random = json[Math.floor(Math.random() * json.length)]
res.json(random) 
})

app.get('/downloaders/facebook', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if (!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RegistrarUser(token, req);
FacebookMp4(url).then(data => {
res.json({
status: true,
código: 999,
resultado: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/celular', async(req, res) => {
try {
celular = req.query.celular
if(!celular)return res.json({status:false, motivo:'Coloque o parâmetro: celular'})
token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
axios(`https://www.techtudo.com.br/busca/?q=`+celular, Headers={headers}).then(rs => {
var $ = cheerio.load(rs.data)
const DFN_UR = $(".widget--navigational__title").text().toLowerCase()
axios(`https://www.techtudo.com.br/tudo-sobre/${DFN_UR.replace(new RegExp(" ", "gi"), "-")}/`, Headers={headers}).then(rsp => {
var $ = cheerio.load(rsp.data)  
var RST = []
var titulo = $("h1").text()
var BT = $("div").find(".content-row").text()
var BT2 = $("div").find(".all-about").text()
res.json({status: true, código: 999, criador: `@VictorGabriel`, resultado: { nomeCelular: titulo, informações: BT2.trim(), resumoExtra: BT.trim().replace(new RegExp("  ", "gi"), "\n\n")}})}).catch(e => {res.json({message: "Error"})})}).catch(e => {res.json({message: "Error"})})} catch {return res.json({message: "Erro...Aguarde ou fale com algum administrador.."})}})

app.get('/outros/htmlsite', async (req, res) => {
token = req.query.token
url = req.query.url
if(!url) return res.json({message: "Faltando o parametro url"})
if(!token)return res.json({message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getsi = await axios.get(query)
res.json({status: 200, resultado: getsi})
})

app.get('/outros/horoscopo', async (req, res) => {
try {
token = req.query.token
signo = req.query.signo
if(!signo) return res.json({message: "Faltando o parametro signo"})
if(!token)return res.json({message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
DFN_SG = signo.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!JSON.stringify(["aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]).includes(DFN_SG)) return res.json({message: "Este signo não existe, os signos existentes são: Áries, Touro, Gêmeos, Câncer, Leão, Virgem, Libra, Escorpião, Sagitário, Capricórnio, Aquário e Peixes."})
var { horoshoje } = require("./base de dados/horoscopo.js");
RegistrarUser(token, req);
await horoshoje(DFN_SG).then(signo => {
res.json({status: 200, resultado: signo})
}).catch(e => {
return res.json({message: "Erro.."})
})
} catch (e) {
return res.json({message: "Erro.."})
}
})

app.get('/pesquisas/wikipedia',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
wikiSearch(query)
.then(hasil => {
res.json({
status:true,
resultado: hasil
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/pensador',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
pensadorSearch(query)
.then(dados => {
res.json({
status:true,
resultado: dados
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/wallpaper',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: QUERY'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
wallpaper2(query)
.then(result => {
res.json({
status:true,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/youtube',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cadê o parâmetro: url'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
ytDonlodMp3_3(url).then(result => {
res.json({
status:true,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/tiktok', async(req, res, next) => {
token = req.query.token;
url = req.query.url
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RegistrarUser(token, req);
testing.musically(url).then(data => {
res.json({
status: true,
código: 999,
resultado: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/letrasdemusica',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: query?'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
const VagalumeToken = [
  'ccc9079cf3c27172d5411aa9e20ce058',
  'dc7df8eef97c82470a3b5e8d560aa473', 
  'e31555154b3650beb5f61303dd5933ea'
]
let selected = VagalumeToken[Math.floor(Math.random() * VagalumeToken.length)]
console.log("• Token escolhido: " + selected)
const vagalume = new Vagalume(selected);
vagalume.search(query).then(data => {
res.json({
status:true,
resultado: data
})
}).catch(e => {
console.log(e)
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/figurinhas/emoji/mix', async (req, res, next) => {
	var emoji1 = req.query.emoji1
	var emoji2 = req.query.emoji2
	token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
	if (!emoji1) return res.json({ status : false, message : "[!] parâmetros de entrada  emoji1"})
	if (!emoji2) return res.json({ status : false, message : "[!] parâmetros de entrada  emoji2"})  
	RegistrarUser(token, req);
	let data = await Kibar(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
	let jadi = data.results[Math.floor(Math.random() * data.results.length)]
	if (!jadi ) return res.json({erro: "Erro no Servidor Interno."})
	for (let ress of data.results) {
	resul = await getBuffer(ress.url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
}
})

app.get('/pesquisas/filme', async(req, res, next) => {
token = req.query.token;
q = req.query.q
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RegistrarUser(token, req);
filme(q).then(resultado => {
res.json({
status: true,
criador: `${criador}`,
code_by: `@Gabriel`,
pesquisa: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/nsfw/pornogratis', async(req, res, next) => {
token = req.query.token;
q = req.query.q
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RegistrarUser(token, req);
 pornogratis(q).then(resultado => {
res.json({
status: true,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/nsfw/:tipoplaq:', async(req, res, next) => {
token = req.query.token;
query = req.query.query
plaquinha = [plaq1, plaq2, plaq3, plaq4, plaq5, plaq6, plaq7, plaq8, plaq9, plaq10, plaq11, plaq12, plaq13]
tipoplaq = req.query.tipoplaq
if(tipoplaq.includes(plaquinha)) {
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
 RegistrarUser(token, req);
if(tipoplaq == plaq1) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/Torcedora-da-sele%C3%A7%C3%A3o-brasileira-nua-mostrando-a-bunda-236x300.jpg?text.0.text=${query}&text.0.position.x=-64%25&text.0.position.y=-39%25&text.0.size=25&text.0.color=1b1a1a&text.0.font.family=Architects%20Daughter`)
} else if(tipoplaq == plaq2) {
imgplaq = await getBuffer(`https://raptibef.sirv.com/images.jpeg?profile=Zanga%203.0&text.0.text=${query}&text.0.outline.blur=63`)
} else if(tipoplaq == plaq3) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${query}&text.0.position.x=-4%25&text.0.position.y=-6%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
} else if(tipoplaq == plaq4) {
imgplaq = await getBuffer(`https://clutamac.sirv.com/1011b781-bab1-49e3-89db-ee2c064868fa%20(1).jpg?text.0.text=${query}&text.0.position.gravity=northwest&text.0.position.x=22%25&text.0.position.y=60%25&text.0.size=12&text.0.color=000000&text.0.opacity=47&text.0.font.family=Roboto%20Mono&text.0.font.style=italic`)
} else if(tipoplaq == plaq5) {
imgplaq = await getBuffer(`https://blackzin.sirv.com/Plaq18/20220212_213215.jpg?text.0.text=${texto}&text.0.position.gravity=northwest&text.0.position.x=43%25&text.0.position.y=18%25&text.0.size=15&text.0.color=000000&text.0.opacity=57&text.0.font.family=Vollkorn&text.0.font.weight=800&text.0.font.style=italic&text.0.background.color=000000&text.0.outline.blur=32&text.0.outline.opacity=46&text.1.text=${query}%3F&text.1.position.gravity=center&text.1.position.x=10%25&text.1.position.y=30%25&text.1.size=20&text.1.color=000000&text.1.opacity=59&text.1.font.family=Playball&text.1.font.weight=700&text.1.outline.opacity=0`)
} else if(tipoplaq == plaq6) {
imgplaq = await getBuffer(`https://ubbornag.sirv.com/Screenshot_20210513-151821.png?text.0.text=${query}&text.0.position.x=-40%25&text.0.position.y=-65%25&text.0.size=30&text.0.color=000000&text.0.opacity=53&text.0.font.family=Shadows%20Into%20Light20Two&text.0.outline.blur=15`)
} else if(tipoplaq == plaq7) {
imgplaq = await getBuffer(`https://lculitas.sirv.com/ETw3FRnXgAI3Up_.jpg?text.0.text=${query}&text.0.position.gravity=center&text.0.align=left&text.0.size=46&text.0.color=221b1b&text.0.opacity=47&text.0.font.family=Architects%20Daughter&text.0.background.color=783852&text.0.background.opacity=5&text.0.outline.blur=58`)
} else if(tipoplaq == plaq8) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/fotobundatop.jpg?text.0.text=${query}&text.0.position.x=-61%25&text.0.position.y=-8%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700`)
} else if(tipoplaq == plaq9) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/BUNDA1.jpg?text.0.text=${query}&text.0.position.x=-20%25&text.0.position.y=-20%25&text.0.size=18&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.background.opacity=65`)
} else if(tipoplaq == plaq10) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/bunda3.jpg?text.0.text=${query}&text.0.position.gravity=center&text.0.position.x=-25%25&text.0.position.y=-17%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=700&text.0.font.style=italic`)
} else if(tipoplaq == plaq11) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/peito1.jpg?text.0.text=${query}&text.0.position.x=-48%25&text.0.position.y=-68%25&text.0.size=14&text.0.color=000000&text.0.font.family=Shadows%20Into%20Light&text.0.font.weight=700`)
} else if(tipoplaq == plaq12) {
imgplaq = await getBuffer(`https://umethroo.sirv.com/9152e7a9-7d49-48ef-b8ac-2e6149fda0b2.jpg?text.0.text=${query}&text.0.position.x=-70%25&text.0.position.y=-23%25&text.0.size=17&text.0.color=000000&text.0.font.family=Architects%20Daughter&text.0.font.weight=300`)
} else if(tipoplaq == plaq13) {
imgplaq = await getBuffer(`https://rsymenti.sirv.com/images%20(10).jpeg?text.0.text=${query}&text.0.position.gravity=south&text.0.position.x=4%25&text.0.position.y=-32%25&text.0.align=left&text.0.size=34&text.0.color=000000&text.0.opacity=78&text.0.background.opacity=78&text.0.outline.blur=72&text.0.outline.opacity=74`)
}
res.type('jpg')
res.send(imgplaq)
}
})

app.get('/nerding', async(req, res, next) => {
token = req.query.token;
q = req.query.q
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RegistrarUser(token, req);
 nerding(q).then(resultado => {
res.json({status: true, código: 200, criador: `${criador}`, resultado: resultado})
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/pesquisas/playstore', async(req, res, next) => {
token = req.query.token;
nome = req.query.nome
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RegistrarUser(token, req);
PlayStoreSearch(nome).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`,
erro: `${e}`
})})})

app.get('/pesquisas/mercadolivre', async(req, res, next) => {
token = req.query.token;
nome = req.query.nome
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RegistrarUser(token, req);
MercadoLivreSearch(nome).then(data => {
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`,
erro: `${e}`
})})})

app.get('/pesquisas/amazon', async(req, res, next) => {
token = req.query.token;
nome = req.query.nome
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RegistrarUser(token, req);
AmazonSearch(nome).then(data => {
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`,
erro: `${e}`
})})})

app.get('/pesquisas/americanas', async(req, res, next) => {
token = req.query.token;
nome = req.query.nome
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RegistrarUser(token, req);
AmericanasSearch(nome).then(data => {
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`,
erro: `${e}`
})})})

app.get('/pesquisas/dicionario', async(req, res, next) => {
token = req.query.token;
q = req.query.q
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RegistrarUser(token, req);
Dicionario(q).then(data => {
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`,
erro: `${e}`
})})})

app.get('/pesquisas/pinterest/video', async(req, res, next) => {
token = req.query.token;
url = req.query.url
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RegistrarUser(token, req);
pinterestVideoV2(url).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/youtube/playlist', async(req, res, next) => {
token = req.query.token;
url = req.query.url
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RegistrarUser(token, req);
getVideosPlaylist(url).then(resJson => {
res.json({
status: 200,
resultado: resJson
})
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})
})
})

app.get('/pesquisas/submarino', async(req, res, next) => {
token = req.query.token;
nome = req.query.nome
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!nome) return res.json({ status : false,  message: "Coloque o parametro: nome"})
 RegistrarUser(token, req);
SubmarinoSearch(nome).then(dados => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})


app.get('/outros/horoscopo', async(req, res, next) => {
token = req.query.token;
signo = req.query.signo
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!signo) return res.json({ status : false,  message: "Coloque o parametro: signo"})
 RegistrarUser(token, req);
Horoscopo(signo).then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/randomgp', async(req, res, next) => {
token = req.query.token;
categoria = req.query.categoria
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!categoria) return res.json({ status : false,  message: "Coloque o parametro: categoria"})
 RegistrarUser(token, req);
randomGrupos(categoria).then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/downloaders/kwai', async(req, res, next) => {
token = req.query.token;
url = req.query.url
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
 RegistrarUser(token, req);
kwai(url).then(hasil => {
res.json(hasil)}).catch(e => {
console.log(e)
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/outros/corretor', async(req, res, next) => {
token = req.query.token;
texto = req.query.texto
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!texto) return res.json({ status : false,  message: "Coloque o parametro: texto"})
 RegistrarUser(token, req);
CorretorOpenAi(texto).then(hasil => {
res.json({
status: 200,
resultado: hasil
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/memedroid', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
memesDroid().then(dados => {
res.json({
pesquisa: dados
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/ifunny', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
iFunny().then(dados => {
res.json(dados)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/ringtone', async(req, res, next) => {
query = req.query.query
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
  if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
  RegistrarUser(token, req);
ringtone(query).then(hasil => {
res.json({
status: 200,
resultado: hasil
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/g1', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
G1().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/jovempannews', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
JovemPan().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/poder360', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
Poder360().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/uol', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
Uol().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/estadao', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
Estadao().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/noticias/cnnbrasil', async(req, res, next) => {
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
CNNBrasil().then(data => {
res.json({
pesquisa: data
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/gruposdewhatsapp', async(req, res, next) => {
q = req.query.q;
token = req.query.token;
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
  if(!q)return res.json({status:false,message:'Cadê o parâmetro q?'})
  RegistrarUser(token, req);
 gpwhatsapp(q).then(resultado => {
res.json({
status: true,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

router.all('/pesquisas/itunes', async (req, res) => {
musica = req.query.musica
if(!musica)return res.json({
status:false,
motivo:'Coloque o parâmetro: musica'
})
token = req.query.token;
if(!token)return res.json({status:false,message:'Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
auu = await Kibar(`https://api.popcat.xyz/itunes?q=${musica}`)
res.json({
status: true,
código: 999,
resultado: {
linkAcesso: `${auu.url}`,
nomeMusic: `${auu.name}`,
nomeArtista: `${auu.artist}`,
nomeAlbum: `${auu.album}`,
lançamento: `${auu.release_date}`,
preço: `${auu.price}`,
segundos: `${auu.length}`,
gênero: `${auu.genre}`,
thumbnail: `${auu.thumbnail}`
}
})
})

app.get('/downloaders/pinterest', (req, res) => {
(async() => {
token = req.query.token
text = req.query.text
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message : "Cade o parametro text?"})
RegistrarUser(token, req);
pin = await pinterest(text)
ac = pin[Math.floor(Math.random() * pin.length)]
res.type('jpg')
res.send(await getBuffer(ac))
})()
})

app.get("/ia/DALL-E", async(req, res, next) => {
async function PRGT2() {
try {
var { Configuration, OpenAIApi } = require("openai") //precisa baixar o módulo (npm i openai)
var { q, TOKEN_GPT } = req.query
var configopen = new Configuration({ token: TOKEN_GPT.trim()}); //coloca sua key aqui
var openai = new OpenAIApi(configopen); //configuração do openai (sincronização da sua key)
 if(!q) return res.json({resultado: 'Em que posso te ajudar? Peça algo, como: hulk com raiva 🙂'})
 if(!TOKEN_GPT) return res.json({message: `Faltando definir o token: &TOKEN_GPT=SEU
 TOKEN`})
 var respimg = await openai.createImage({
 prompt: q, //o que deseja
 n: 1, //quantidade de imagem
 size: "1024x1024", //tamanho (aceita apenas: 256x256, 512x512, e 1024x1024)
 });
res.type("jpeg")
res.send(await getBuffer(respimg.data.data[0].url))
} catch {
return res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
}
}
PRGT2().catch(async() => {
return res.json({resultado: "Erro / Talvez seu token expirou, espere um tempo para tentar novamente."})
})
})

app.get('/figurinhas/attp', async (req, res) => {
try {
texto = req.query.texto
token = req.query.token
if(!texto) return res.json({message: "Faltando o parametro texto"})
if(!token)return res.json({message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
await attp(texto).then(img => {
res.sendFile(img, { root: __dirname})
}).catch(e => {
return res.json({message: "Erro.. "+e})
})
} catch (e) {
return res.json({message: "Erro.. "+e})
}
})

router.get('/outros/printweb', async (req, res, next) => {
      var link = req.query.link
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
      if(!link)return res.json({status:false, motivo:'Cadê o parâmetro link?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
gabriell.ssweb(link).then((data) => { 
		if (!data) return res.json({erro: `ERROR 404`})
		res.set({'Content-Type': 'image/png'})
		res.send(data) 
		}).catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

router.get('/ia/bard', async (req, res, next) => {
var { query, token } = req.query;
if(!query)return res.json({status:false, motivo:'Cadê o parâmetro query?'})
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
if(key.map(i => i.token)?.includes(token)){
const response = await init("eQgbFhEZfhZseSC5lJxrGx7MHrxTqtv1-FyWd-ponhiih4hbpdEYRvDDmXYGcfnp5_hQ9Q.");
const resultado = await askAI(query);
res.json({status: 'Online', resultado});
} else {
res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/ia/bing', async(req, res) => {
try {
token = req.query.token
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RegistrarUser(token, req);
url = `https://www.bing.com/search?q=${query}&setmkt=pt-BR&PC=EMMX01&form=LWS002&scope=web`;
axios(url).then(response => {
var $ = cheerio.load(response.data);
const Rst = [];
$("div > p").each(function(){
const TTL = $(this).text();
if(TTL.length > 10)
Rst.push({TTL});
});
let bla = ''
for (let i of Rst) {
bla += `${i.TTL.replace(new RegExp("Web", "gi"), "")}\n\n`
}
res.json({resultado: bla})
}).catch(e => {
return res.json({resultado: "Erro, digite algo que queira pesquisar.."})
})
} catch (e) {
return res.json({resultado: `${e}`})
}
})

app.get('/ia/chatgpt', async(req, res, next) => {
token = req.query.token
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RegistrarUser(token, req);
try {
chatgpt = await fetchJson(`https://aemt.me/gpt4?text=${query}`)
             res.json({
                 criador: `Ninja Spmc`,
                 resultado: `${chatgpt.result}`
             })
      } catch (error) {
    res.json({ error: error });
  }
})

app.get('/ia/gemini/text', async(req, res, next) => {
token = req.query.token
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RegistrarUser(token, req);
try {
const { response } = await genAI.getGenerativeModel({ model: 'gemini-pro' }).generateContent(`$${encodeURIComponent(query)}`)
const textogem = response.text()
             res.json({
                 criador: `Ninja Spmc`,
                 resultado: `${textogem}`
             })
      } catch (error) {
    res.json({ error: error });
  }
})

app.get('/ia/gemini/image', async(req, res, next) => {
var { url, query, token } = req.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"}) 
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
try {
const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });
let imageGem = await getBuffer(url)
imageData = {
inlineData: {
data: imageGem.toString('base64'),
mimeType: "image/png",
},
};
const result = await model.generateContent([query, imageData]);
const textogen = result.response.text();
             res.json({
                 criador: `Ninja Spmc`,
                 resultado: `${textogen}`
             })
      } catch (error) {
    res.json({ error: `${error}` });
    console.log(error)
  }
})

app.get('/pesquisas/pesquisaagora', async(req, res, next) => {
token = req.query.token
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"}) 
RegistrarUser(token, req);
  if(key.map(i => i.token)?.includes(token)){
    fetch(encodeURI(`https://api.bronxyshost.com/api-bronxys/pesquisa_agora?pesq=${query}&apikey=sigma22`))
    .then(response => response.json())
        .then(hasil => {
             res.json({
                 status: 200,
                 message: `${hasil.msg}`
             })
         })
         .catch(e => {
         	res.json({erro:'Erro no Servidor Interno'})
})
} else {
  res.json({erro:'Erro no Servidor Interno'})
}
})

app.get('/outros/fazernick', async (req, res) => {
token = req.query.token  
let nome = req.query.nome || res.json({message: 'insira o parâmetro: ?nome='})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
await gerarnick(nome)
.then(nicks => {
res.send(nicks) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/mediafire', async (req, res, next) => {
token = req.query.token
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RegistrarUser(token, req);
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/noticias/ge', async (req, res) => {
var { token, esporte } = req.query
DFN_NTC = esporte.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!JSON.stringify(['futebol', 'basquete', 'volei', 'tenis', 'atletismo', 'natacao', 'ciclismo', 'boxe', 'beisebol', 'judo', 'ginastica-artistica', 'futebol-americano', 'futsal', 'golfe', 'surfe', 'skate', 'formula-1']).includes(DFN_NTC)) return res.json({
    status: 400, 
    message: "De acordo com o esporte selecionado, não é possível encontrar resultados exatos sobre. Por favor, verifique o tipos disponíveis abaixo para obter resultados exatos sobre o esporte!",
    esportes: ['futebol', 'basquete', 'volei', 'tenis', 'atletismo', 'natacao', 'ciclismo', 'boxe', 'beisebol', 'judo', 'ginastica-artistica', 'futebol-americano', 'futsal', 'golfe', 'surfe', 'skate', 'formula-1']
  })
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getNoticiasEsporte(DFN_NTC)
.then(esporteData => {
res.json({
    status: 200,
    noticia_esporte: esporte,
    resultado: esporteData
 }) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/noticias/e-sports', async (req, res) => {
var { token, query } = req.query
if(!JSON.stringify(["esports", "cod", "csgo", "fifa", "fortnite", "freefire", "gamexp", "pes", "pokemon", "rainbow-6", "valorant", "tcg"]).includes(query)) return res.json({
    status: 400, 
    message: "De acordo com o jogo selecionado, não é possível encontrar resultados exatos sobre. Por favor, verifique o tipos disponíveis abaixo para obter resultados exatos sobre o jogo!",
    jogos: ["esports", "cod", "csgo", "fifa", "fortnite", "freefire", "gamexp", "pes", "pokemon", "rainbow-6", "valorant", "tcg"]
  })
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getNoticiasEsporte(query)
.then(esporteData => {
res.json({
    status: 200,
    jogo_noticia: query,
    resultado: esporteData
 }) 
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/mediafire', async (req, res, next) => {
token = req.query.token
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RegistrarUser(token, req);
mediafireDl(url)
.then(data => {
var resultado = data;
res.json({
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/wikimedia', async (req, res, next) => {
token = req.query.token
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"})
RegistrarUser(token, req);
wikimedia(query)
.then(hasil => {
var resultado = hasil;
res.json({
status: 200,
resultado
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/googleimage',(req,res) => {
token = req.query.token
txt = req.query.txt
if(!txt) return res.json({message: "Faltando o parametro txt"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
GOOGLE_IMG_SCRAP({
search: txt, query: { EXTENSION: GOOGLE_QUERY.EXTENSION.JPG }, limit: 5, domains: ["alamy.com", "istockphoto.com", "vecteezy.com", "pinterest.com", "google.com"], excludeWords: ["black", "white"], custom: "name=content&name2=content2", safeSearch: false }).then(data => {
res.json(data)
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
}) 
})

app.get('/pesquisas/googlesearch',(req,res) => {
token = req.query.token
query = req.query.query
if(!query) return res.json({message: "Faltando o parametro query"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
GOOGLE_IMG_SCRAP({search: query})
.then(data => {
res.json(data)
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
}) 
})

app.get('/wattpad',  async (req, res, next) => {
token = req.query.token
query = req.query.query
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
wattpad(query).then(result => {
res.json({
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/animetv/search',  async (req, res, next) => {
token = req.query.token
query = req.query.query
if (!query) return res.json({ status : false,  message : "Cade o parametro query?"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getInfo.animeTv.search(query).then(result => {
res.json({
status: 200,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/animetv/info',  async (req, res, next) => {
token = req.query.token
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getInfo.animeTv.list(url).then(result => {
res.json({
status: 200,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/consultas/operadora',  async (req, res, next) => {
token = req.query.token
numero = req.query.numero
if (!numero) return res.json({ status : false,  message : "Cade o parametro numero?"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
getInfo.qualOperadora(numero).then(result => {
res.json({
status: 200,
resultado: result
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/instagram/reels', async (req, res, next) => {
token = req.query.token
url = req.query.url
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
saveig_reels(url).then(data => {
res.json(data)
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

// LOGOS 2 TEXTO

app.get('/logos/marvel', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/3ddragon', async (req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-3d-dragon-scale-text-effect-online-1127.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/cartoon', async (req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-cartoon-text-effect-generator-online-1123.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/deepsea', async (req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/thorstyle', async (req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto)return res.json({status:false,message:'cade o parametro texto'})
if(!texto2)return res.json({status:false,message:'cade o parametro texto2'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-thor-logo-style-text-effect-online-1064.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/hologram', async (req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/hologram-color-3d-text-effect-generator-online-1117.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/pornhub', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/space',  async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!texto2) return res.json({status:false,message:'cade o parametro texto2'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/stone', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-stone-text-effect-online-982.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/steel', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-steel-text-effect-877.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/grafity', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/glitch3', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/america', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-captain-america-text-effect-free-online-1039.html", [`${texto}`,`${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


// LOGOS 1 TEXTO

router.get('/logos/brilhante', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-hieu-ung-chu-phat-sang-online-834.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/blur', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/hieu-ung-viet-chu-len-cua-kinh-mua-tam-trang-dep-682.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/goldt', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-vang-moi-271.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/tela', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/hieu-ung-chu/hieu-ung-chu-tren-vai-62.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/vietnam', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-hieu-ung-chu-quoc-ky-viet-nam-truc-tuyen-884.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/seta', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-hieu-ung-mui-ten-dinh-kem-chu-ky-nhieu-mau-846.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/grafite', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
nome2 = req.query.texto2;
if (nome === undefined || nome2 === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & texto2 & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/viet-chu-graffiti-nghe-thuat-tren-tuong-day-mau-sac-792.html", [nome, nome2]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.set({'Content-Type': 'image/png'})
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/pubgv', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-avatar-video-pubg-phong-cach-nhieu-song-glitch-627.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.type('mp4')
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/anonovo', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-thiep-video-new-year-countdown-2022-888.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.type('mp4')
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/natalmsg', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/tao-thiep-video-giang-sinh-dep-va-an-tuong-danh-tang-ban-be-va-nguoi-than-885.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.type('mp4')
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

router.get('/logos/trigrev', async (req, res) => {
token = req.query.token;
nome = req.query.texto;
if (nome === undefined || token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro texto & token`});
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
mumaker.ephoto("https://ephoto360.com/hieu-ung-video-logo-con-ho-ky-thuat-so-862.html", [nome]).then(async(daynsdata) => {
resul = await getBuffer(daynsdata)
res.type('mp4')
res.send(resul)
}).catch((e) => {
res.json({erro:'Erro no Servidor Interno'})
})
});

// LOGOS - PHOTOOXY

router.get('/logos/photooxy/flaming', async (req, res, next) => {
var text1 = req.query.texto
if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/shadow-sky', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/metallic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/naruto', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/pubg', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var Texto2 = req.query.texto2
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/under-grass', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})    
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/harry-potter', async (req, res, next) => {
	var text1 = req.query.texto
    if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
    var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/flower-typography', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/art-effects/flower-typography-text-effect-164.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/picture-of-love', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/coffee-cup', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/butterfly', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/night-sky', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/write-stars-text-on-the-night-sky-200.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/carved-wood', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/photooxy/illuminated-metallic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/photooxy/sweet-candy', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);  
gabriell.photooxy("https://photooxy.com/logo-and-text-effects/sweet-andy-text-online-168.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/1917', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/robotr2', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/robot-r2-d2-text-effect-903.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/purpleshiny', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/purple-shiny-glass-text-effect-906.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/rock', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/rock-text-effect-online-915.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/1917', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/peridot-stone-text-effect-916.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/ninjalogo', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"}) 
	var text2 = req.query.texto
	if (!text2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1, text2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/toxic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/captain', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/captain-america-text-effect-905.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/stargreen', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/decorate-green-text-effect-918.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/denimtext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/denim-text-effect-online-919.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/ultragloss', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/ultra-gloss-text-effect-online-920.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/goldfoil', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/gold-foil-balloon-text-effect-922.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/steeltext', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/steel-text-effect-online-921.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/wicker', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/wicker-text-effect-online-932.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/joker', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-logo-joker-online-934.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/metaldark', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/darkgold', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-online-939.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/halloweenfire', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/fabric', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/firework', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/firework-sparkle-text-effect-930.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/glossycarbon', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/deluxe', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/deluxe-silver-text-effect-970.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/deluxegold', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/deluxe-gold-text-effect-966.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/holographic', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/horrorgift', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/horror-gift-text-effect-866.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/minion', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/galaxystyle', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/glossyblue', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/dark', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/metal-dark-gold-text-effect-984.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/sandsummer', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/sandengraved', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/sand-engraved-3d-text-effect-989.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/sandwriting', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/winter', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/technology', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/scifi', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/americanflag', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-american-flag-3d-text-effect-online-1051.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/drug', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/plastic-bag-drug-text-effect-867.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/3ddeep', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/retro', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!texto3) return res.json({message: "Cade o parametro texto3"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
Maker().TextPro("https://textpro.me/80-s-retro-neon-text-effect-online-979.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

router.get('/logos/naturalleaves', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/multicolor', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/merrychristmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/christmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/holiday', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/candycane', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-christmas-candy-cane-text-effect-1056.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/generator', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/glue', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/wonderful', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/watercolor', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/glitch', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/blackpink', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/berry', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/neonlight', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/neon', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/neon-text-effect-online-963.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/logobear', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req); 
	mumaker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/3dchristmas', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/3d-christmas-text-effect-by-Name-1055.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/thunder', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/3dbox', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})


router.get('/logos/glitch', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/glitchtiktok', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/video-game-classic', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);	
	mumaker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/marvel-studios', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);	
	mumaker.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/ninja-logo', async (req, res, next) => {
	var text1 = req.query.texto
	var Texto2 = req.query.texto2
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
	if (!Texto2) return res.json({ status : false, message: "[!] Digite o parâmetro de texto2"}) 
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,Texto2])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/green-horror', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);   
	mumaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/magma', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/3d-neon-light', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/3d-orange-juice', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})  
	 	var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/chocolate-cake', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

router.get('/logos/strawberry', async (req, res, next) => {
	var text1 = req.query.texto
	if (!text1) return res.json({ status : false, message: "[!] Digite o parâmetro de texto"})   
		var token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	mumaker.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/angelwing', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-colorful-angel-wing-avatars-731.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/hackneon', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-anonymous-hacker-avatars-cyan-neon-677.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/fpsmascote', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/free-gaming-logo-maker-for-fps-game-team-546.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/equipemascote', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/make-team-logo-online-free-432.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/txtquadrinhos', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/boom-text-comic-style-text-effect-675.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/3dsilver', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-glossy-silver-3d-text-effect-online-802.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/frozen', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-frozen-christmas-text-effect-online-792.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/goldtext', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/gold-text-effect-158.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/starballons', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/beautiful-3d-foil-balloon-effects-for-holidays-and-birthday-803.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/ffavatar', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-free-fire-avatar-online-572.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/ffbanner', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/make-your-own-free-fire-youtube-banner-online-free-562.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/mascotegame', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-gaming-mascot-logo-free-560.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/logos/mascoteavatar', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-avatar-mascot-style-364.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/wingeffect', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/the-effect-of-galaxy-angel-wings-289.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/angelglx', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/wings-galaxy-206.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/gizquadro', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/writing-chalk-on-the-blackboard-30.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/blackpink', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-a-blackpink-neon-logo-text-effect-online-710.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/girlmascote', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-cute-girl-gamer-mascot-logo-online-687.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/logogame', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().Ephoto360("https://en.ephoto360.com/create-logo-team-logo-gaming-assassin-style-574.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/romantic', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/romantic-messages-for-your-loved-one-391.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/fire', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/realistic-flaming-text-effect-online-197.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/smoke', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/create-an-easy-smoke-type-effect-390.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/papel', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/write-text-on-burn-paper-388.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/narutologo', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/manga-and-anime/make-naruto-banner-online-free-378.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/lovemsg', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-picture-of-love-message-377.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/lovemsg2', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-quotes-under-grass-376.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/lovemsg3', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/love-text-effect-372.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/coffecup', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/coffecup2', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/florwooden', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/writing-on-wooden-boards-368.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/madeira', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/carved-wood-effect-online-171.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/gameplay', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/8-bit-text-on-arcade-rift-175.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/googlesg', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
texto3 = req.query.texto3;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!texto2) return res.json({message: "Cade o parametro texto2"})
if(!texto3) return res.json({message: "Cade o parametro texto3"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/make-google-suggestion-photos-238.html", [`${texto}`, `${texto2}`, `${texto3}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neon2', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/illuminated-metallic-effect-177.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/lobometal', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-a-wolf-metal-text-effect-365.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/harryp', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/create-harry-potter-text-on-horror-background-178.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/cup', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/put-text-on-the-cup-387.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/txtborboleta', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/butterfly-text-with-reflection-effect-183.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/shadow', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/shadow-text-effect-in-the-sky-394.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/cemiterio', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/text-on-scary-cemetery-gate-172.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/metalgold', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/other-design/create-metallic-text-glow-online-188.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/efeitoneon', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({message: "Cade o parametro texto"})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
new Maker().PhotoOxy("https://photooxy.com/logo-and-text-effects/make-smoky-neon-glow-effect-343.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/transformer', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/narutologo2', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/3dstone', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/fiction', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-science-fiction-text-effect-online-free-1038.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/esmeralda', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-luxury-3d-emerald-text-effects-online-1126.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/cattxt', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neondevil', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/demonfire', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/colaq', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/luxury', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/berry', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/matrix', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/horror', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/horror-blood-text-effect-online-883.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/nuvem', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neon3', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neve', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/xmas-cards-3d-online-942.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/areia', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/write-in-sand-summer-beach-free-online-991.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/vidro', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/dropwater-text-effect-872.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/style', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/1917-style-text-effect-online-980.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/blood', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/blood-text-on-the-frosted-glass-941.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/pink', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/carbon', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/glossy-carbon-text-effect-965.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/metalblue', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/glossy-blue-metal-text-effect-967.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/jeans', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/denim-text-effect-online-919.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/jokerlogo', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-logo-joker-online-934.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/natal', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-christmas-holiday-snow-text-effect-1007.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/ossos', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/skeleton-text-effect-online-929.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/asfalto', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/road-warning-text-effect-878.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/break', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/break-wall-text-effect-871.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/glitch2', async(req, res, next) => {
texto = req.query.texto;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/glitch', async(req, res, next) => {
texto = req.query.texto;
texto2 = req.query.texto2;
token = req.query.token
if(!texto) return res.json({status:false,message:'cade o parametro texto'})
if(!texto2) return res.json({status:false,message:'cade o parametro texto2'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [`${texto}`, `${texto2}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})


app.get('/logos/lapis', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/3dgold', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/halloween', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/lava', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/lava-text-effect-online-914.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/toxic', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/demongreen', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/metalfire', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/hot-metal-text-effect-843.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/thunder', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/thunderv2', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neongreen', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/green-neon-text-effect-874.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neon', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neon1', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/free-advanced-glow-text-effect-873.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/neon3d', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/rainbow', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

app.get('/logos/gelo', async(req, res) => {
texto = req.query.texto;
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
mumaker.textpro("https://textpro.me/ice-cold-text-effect-862.html", [`${texto}`])
.then((data) => { res.json({
status: true,
resultado: data
})})
.catch((err) =>
console.log("ERROR"));
})

// FIM LOGOS

app.get('/pokemon-search', async(req, res, next) => {
token = req.query.token;
name = req.query.name
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!name) return res.json({ status : false,  message: "Coloque o parametro: name"})
RegistrarUser(token, req);
Pokemon.setLanguage('portuguese');
Pokemon.getPokemon(name).then((data) => { 
res.json(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/pesquisas/nasaphoto', async(req, res, next) => {
 token = req.query.token;
 data = req.query.data
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!data) return res.json({ status : false,  message: "Coloque o parametro: data > Exemplo: 19-10-2007"})
RegistrarUser(token, req);
NASA.APOD('DEMO_KEY', `${data}`, false, false).then((data) => {
 res.json(data)
console.log(data)
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/senhaterminaldrex', async(req, res, next) => {
token = req.query.token;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
    RegistrarUser(token, req);
res.json({ senha: 'ninja-10' })
})

app.get('/consultas/basic/nome', async(req, res, next) => {
query = req.query.query
token = req.query.token;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
    if (!query) return res.json({ status: false, message: "Preencha ou adicione o parâmetro query" });
    RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/basic/nome/${query}`)
resultado = `• Total de Resultados: ${auu.data.length}`
for (const item of auu.data) {
  resultado += `\n\n• CPF: ${item.cpf}\n• Nome: ${item.nome}\n• Sexo: ${item.sexo}\n• Data de Nascimento: ${item.nascimento}\n\n`;
}
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
return res.status(404).json({ resultado: "O banco de dados das consulta está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/full/nome', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/full/nome/${query}`);
resultado = `• Total de Resultados: ${auu.data.length}\n\n`;

for (const data of auu.data) {

  if (data.basic) {
  resultado += `• CPF: ${data.basic.cpf}\n• Nome: ${data.basic.nome}\n• Sexo: ${data.basic.sexo}\n• Data de Nascimento: ${data.basic.nascimento}\n\n`
 }
  
 if (data.datasus) {
 resultado += `• Pai: ${data.datasus.pai}\n• Mãe:( ${data.datasus.mae}\n• Local de Nascimento: ${data.datasus.muniNasc}\n• Município: ${data.datasus.municipio}\n• Logradouro: ${data.datasus.logradouro}\n• Número: ${data.datasus.numero}\n• Bairro: ${data.datasus.bairro}\n• CEP: ${data.datasus.cep}\n• Número do RG: ${data.datasus.rgNumero}\n• Órgão Emissor do RG: ${data.datasus.rgEmissora}\n• UF de Emissão do RG: ${data.datasus.rgUf}\n• Data de emissão do RG: ${data.datasus.rgDataEmissao}\n• CNS: ${data.datasus.cns}\n• Telefone: ${data.datasus.telefone}\n• Outros telefones: ${data.datasus.telefones}\n\n`;
 }

  if (data.claro) {
    resultado += `*Claro*\n\n• CPF: ${data.claro.cpf}\n• Nome: ${data.claro.nome}\n• Pessoa: ${data.claro.pessoa}\n• DDD: ${data.claro.ddd}\n• Telefone: ${data.claro.fone}\n• Instalação: ${data.claro.inst}\n\n`;
  }
  
  if(data.oi) {
resultado += `*Oi*\n\n• DDD: ${data.oi.ddd}\n• Telefone: ${data.oi.telefone}\n• Tipo Documento: ${data.oi.tipoDoc}\n• Documento: ${data.oi.documento}\n• Endereço: ${data.oi.endereco}\n• Bairro: ${data.oi.bairro}\n• Cidade: ${data.oi.cidade}\n• UF: ${data.oi.uf}\n• CEP: ${data.oi.cep}\n• Tipo Linha: ${data.oi.tipoLinha}\n• Status Linha: ${data.oi.statusLinha}\n• Unidade Negócio: ${data.oi.unidadeNegocio}\n• Data Ativação: ${data.oi.dataAtiv}\n• Data Contrato: ${data.oi.dataContrato}\n\n`
}

  if (data.vivoPrePos) {
    resultado += `*Vivo Pré-Pós*\n\n• Telefone: ${data.vivoPrePos.telefone}\n• Primeira Recarga: ${data.vivoPrePos.dtPrmrRcrgLnha}\n• Última Recarga: ${data.vivoPrePos.dtUltmRcrgLnha}\n• Plataforma: ${data.vivoPrePos.dsPltf}\n• UF: ${data.vivoPrePos.idUf}\n• Tipo Pessoa: ${data.vivoPrePos.tipoPessoa}\n• Data Instalação: ${data.vivoPrePos.dataInstalacao}\n• Telefone Anterior: ${data.vivoPrePos.telefoneAnterior}\n• Estado Linha: ${data.vivoPrePos.dsEstdLnha}\n• Produto: ${data.vivoPrePos.dsPrdt}\n• Nome Assinante: ${data.vivoPrePos.nomeAssinante}\n• CPF/CNPJ: ${data.vivoPrePos.cpfCnpj}\n• E-mail: ${data.vivoPrePos.dsEmil}\n• Tipo Endereço: ${data.vivoPrePos.idTipoEndr}\n• Data Vigência Inclusão: ${data.vivoPrePos.dtVgncIncl}\n• Endereço: ${data.vivoPrePos.endereco}\n• Número: ${data.vivoPrePos.numero}\n• Complemento: ${data.vivoPrePos.complemento}\n• Bairro: ${data.vivoPrePos.bairro}\n• CEP: ${data.vivoPrePos.cep}\n• Maior Atraso: ${data.vivoPrePos.maiorAtraso}\n• Menor Atraso: ${data.vivoPrePos.menorAtraso}\n• Flag Dívida: ${data.vivoPrePos.flgDivida}\n• Ano Mês Conta: ${data.vivoPrePos.anoMesCnta}\n• Valor Fatura: ${data.vivoPrePos.vlFatura}\n\n`;
  }
if (data.vivoFixo) {
  resultado += `*Vivo Fixo*\n\n• Telefone: ${data.vivoFixo.telefone}\n• Data de Ativação: ${data.vivoFixo.dataAtivacao}\n• Data de Retirada: ${data.vivoFixo.dataRetirada}\n• Status do Produto: ${data.vivoFixo.statusProduto}\n• Tecnologia: ${data.vivoFixo.tecnologia}\n• Tecnologia de Banda: ${data.vivoFixo.tecnologiaBanda}\n• Número do Documento: ${data.vivoFixo.documento}\n• Tipo de Documento: ${data.vivoFixo.tipoDocumento}\n• Nome do Cliente: ${data.vivoFixo.nomeCliente}\n• Tipo de Cliente: ${data.vivoFixo.tipoCliente}\n• Tipo de Endereço: ${data.vivoFixo.tipoEndereco}\n• Endereço: ${data.vivoFixo.endereco}\n• Número do Endereço: ${data.vivoFixo.numeroEndereco}\n• Complemento do Endereço: ${data.vivoFixo.complEndereco}\n• CEP: ${data.vivoFixo.cep}\n• Celular de Contato: ${data.vivoFixo.celContato}\n• Fixo de Contato: ${data.vivoFixo.fixoContato}\n• E-mail: ${data.vivoFixo.email}\n• UF: ${data.vivoFixo.uf}\n• Região: ${data.vivoFixo.regiao}\n• Bairro: ${data.vivoFixo.bairro}\n\n`;
 }
  if (data.tim) {
    resultado += `*TIM*\n\n• Tipo de Documento: ${data.tim.tdoc}\n• Número do Documento: ${data.tim.doc}\n• Nome: ${data.tim.nome}\n• Tipo de Logradouro: ${data.tim.tpLog}\n• Logradouro: ${data.tim.lograd}\n• Número: ${data.tim.num}\n• Complemento: ${data.tim.compl}\n• Bairro: ${data.tim.bairro}\n• Cidade: ${data.tim.cidade}\n• Estado: ${data.tim.uf}\n• CEP: ${data.tim.cep}\n• DDD: ${data.tim.ddd}\n• Número de Telefone: ${data.tim.tel}\n• Operadora: ${data.tim.operadora}\n\n`;
  }
}
res.json({
    criador: `Ninja Spmc`,
    resultado: `${resultado.toUpperCase()}`
  });
} catch (error) {
  return res.status(500).json({ resultado: "O banco de dados das consulta está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/basic/cpf', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/datasus/cpf/${query}`)
resultado = `• CPF: ${auu.data.cpf}\n• Pai: ${auu.data.pai}\n• Mãe: ${auu.data.mae}\n• Local de Nascimento: ${auu.data.muniNasc}\n• Residência: ${auu.data.municipio}\n• Logradouro: ${auu.data.logradouro}\n• Número: ${auu.data.numero}\n• Bairro: ${auu.data.bairro}\n• CEP: ${auu.data.cep}\n• RG: ${auu.data.rgNumero}\n• Órgão Emissor: ${auu.data.rgEmissora}\n• UF Emissão: ${auu.data.rgUf}\n• Data Emissão: ${auu.data.rgDataEmissao}\n• CNS: ${auu.data.cns}\n• Telefone: ${auu.data.telefone}\n• Outros telefones: ${auu.data.telefones}`
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
return res.status(404).json({ resultado: "O banco de dados das consulta está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/full/cpf', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
let resultado = ""
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/full/cpf/${query}`)
if (auu.data[0].basic) {
resultado += `• CPF: ${auu.data[0].basic.cpf}\n• Nome: ${auu.data[0].basic.nome}\n• Sexo: ${auu.data[0].basic.sexo}\n• Nascimento: ${auu.data[0].basic.nascimento}\n\n`
}
 if (auu.data[0].datasus) {
 resultado += `\n\n• Pai: ${auu.data[0].datasus.pai}\n• Mãe: ${auu.data[0].datasus.mae}\n• Local de Nascimento: ${auu.data[0].datasus.muniNasc}\n• Município: ${auu.data[0].datasus.municipio}\n• Logradouro: ${auu.data[0].datasus.logradouro}\n• Número: ${auu.data[0].datasus.numero}\n• Bairro: ${auu.data[0].datasus.bairro}\n• CEP: ${auu.data[0].datasus.cep}\n• Número do RG: ${auu.data[0].datasus.rgNumero}\n• Órgão Emissor do RG: ${auu.data[0].datasus.rgEmissora}\n• UF de Emissão do RG: ${auu.data[0].datasus.rgUf}\n• Data de emissão do RG: ${auu.data[0].datasus.rgDataEmissao}\n• CNS: ${auu.data[0].datasus.cns}\n• Telefone: ${auu.data[0].datasus.telefone}\n• Outros telefones: ${auu.data[0].datasus.telefones}`;
 }

  if (auu.data[0].claro) {
    resultado += `\n\n*Claro*\n\n• CPF: ${auu.data[0].claro.cpf}\n• Nome: ${auu.data[0].claro.nome}\n• Pessoa: ${auu.data[0].claro.pessoa}\n• DDD: ${auu.data[0].claro.ddd}\n• Telefone: ${auu.data[0].claro.fone}\n• Instalação: ${auu.data[0].claro.inst}`;
  }
  
  if(auu.data[0].oi) {
resultado += `\n\n*Oi*\n\n• DDD: ${auu.data[0].oi.ddd}\n• Telefone: ${auu.data[0].oi.telefone}\n• Tipo Documento: ${auu.data[0].oi.tipoDoc}\n• Documento: ${auu.data[0].oi.documento}\n• Endereço: ${auu.data[0].oi.endereco}\n• Bairro: ${auu.data[0].oi.bairro}\n• Cidade: ${auu.data[0].oi.cidade}\n• UF: ${auu.data[0].oi.uf}\n• CEP: ${auu.data[0].oi.cep}\n• Tipo Linha: ${auu.data[0].oi.tipoLinha}\n• Status Linha: ${auu.data[0].oi.statusLinha}\n• Unidade Negócio: ${auu.data[0].oi.unidadeNegocio}\n• Data Ativação: ${auu.data[0].oi.dataAtiv}\n• Data Contrato: ${auu.data[0].oi.dataContrato}`
}

  if (auu.data[0].vivoPrePos) {
    resultado += `\n\n*Vivo Pré-Pós*\n\n• Telefone: ${auu.data[0].vivoPrePos.telefone}\n• Primeira Recarga: ${auu.data[0].vivoPrePos.dtPrmrRcrgLnha}\n• Última Recarga: ${auu.data[0].vivoPrePos.dtUltmRcrgLnha}\n• Plataforma: ${auu.data[0].vivoPrePos.dsPltf}\n• UF: ${auu.data[0].vivoPrePos.idUf}\n• Tipo Pessoa: ${auu.data[0].vivoPrePos.tipoPessoa}\n• Data Instalação: ${auu.data[0].vivoPrePos.dataInstalacao}\n• Telefone Anterior: ${auu.data[0].vivoPrePos.telefoneAnterior}\n• Estado Linha: ${auu.data[0].vivoPrePos.dsEstdLnha}\n• Produto: ${auu.data[0].vivoPrePos.dsPrdt}\n• Nome Assinante: ${auu.data[0].vivoPrePos.nomeAssinante}\n• CPF/CNPJ: ${auu.data[0].vivoPrePos.cpfCnpj}\n• E-mail: ${auu.data[0].vivoPrePos.dsEmil}\n• Tipo Endereço: ${auu.data[0].vivoPrePos.idTipoEndr}\n• Data Vigência Inclusão: ${auu.data[0].vivoPrePos.dtVgncIncl}\n• Endereço: ${auu.data[0].vivoPrePos.endereco}\n• Número: ${auu.data[0].vivoPrePos.numero}\n• Complemento: ${auu.data[0].vivoPrePos.complemento}\n• Bairro: ${auu.data[0].vivoPrePos.bairro}\n• CEP: ${auu.data[0].vivoPrePos.cep}\n• Maior Atraso: ${auu.data[0].vivoPrePos.maiorAtraso}\n• Menor Atraso: ${auu.data[0].vivoPrePos.menorAtraso}\n• Flag Dívida: ${auu.data[0].vivoPrePos.flgDivida}\n• Ano Mês Conta: ${auu.data[0].vivoPrePos.anoMesCnta}\n• Valor Fatura: ${auu.data[0].vivoPrePos.vlFatura}`;
  }
if (auu.data[0].vivoFixo) {
  resultado += `\n\n*Vivo Fixo*\n\n• Telefone: ${auu.data[0].vivoFixo.telefone}\n• Data de Ativação: ${auu.data[0].vivoFixo.dataAtivacao}\n• Data de Retirada: ${auu.data[0].vivoFixo.dataRetirada}\n• Status do Produto: ${auu.data[0].vivoFixo.statusProduto}\n• Tecnologia: ${auu.data[0].vivoFixo.tecnologia}\n• Tecnologia de Banda: ${auu.data[0].vivoFixo.tecnologiaBanda}\n• Número do Documento: ${auu.data[0].vivoFixo.documento}\n• Tipo de Documento: ${auu.data[0].vivoFixo.tipoDocumento}\n• Nome do Cliente: ${auu.data[0].vivoFixo.nomeCliente}\n• Tipo de Cliente: ${auu.data[0].vivoFixo.tipoCliente}\n• Tipo de Endereço: ${auu.data[0].vivoFixo.tipoEndereco}\n• Endereço: ${auu.data[0].vivoFixo.endereco}\n• Número do Endereço: ${auu.data[0].vivoFixo.numeroEndereco}\n• Complemento do Endereço: ${auu.data[0].vivoFixo.complEndereco}\n• CEP: ${auu.data[0].vivoFixo.cep}\n• Celular de Contato: ${auu.data[0].vivoFixo.celContato}\n• Fixo de Contato: ${auu.data[0].vivoFixo.fixoContato}\n• E-mail: ${auu.data[0].vivoFixo.email}\n• UF: ${auu.data[0].vivoFixo.uf}\n• Região: ${auu.data[0].vivoFixo.regiao}\n• Bairro: ${auu.data[0].vivoFixo.bairro}`;
 }
  if (auu.data[0].tim) {
    resultado += `\n\n*TIM*\n\n• Tipo de Documento: ${auu.data[0].tim.tdoc}\n• Número do Documento: ${auu.data[0].tim.doc}\n• Nome: ${auu.data[0].tim.nome}\n• Tipo de Logradouro: ${auu.data[0].tim.tpLog}\n• Logradouro: ${auu.data[0].tim.lograd}\n• Número: ${auu.data[0].tim.num}\n• Complemento: ${auu.data[0].tim.compl}\n• Bairro: ${auu.data[0].tim.bairro}\n• Cidade: ${auu.data[0].tim.cidade}\n• Estado: ${auu.data[0].tim.uf}\n• CEP: ${auu.data[0].tim.cep}\n• DDD: ${auu.data[0].tim.ddd}\n• Número de Telefone: ${auu.data[0].tim.tel}\n• Operadora: ${auu.data[0].tim.operadora}`;
  }
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
console.log(error)
return res.status(404).json({ resultado: "O banco de dados das consulta está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/telefone', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/full/telefone/${query}`)
let resultado = '';
if(auu.errorMessage || auu.data.length === 0) {
resultado = `${auu.errorMessage? auu.errorMessage.error : "Nenhum resultado encontrado!"}`
} else {
if (auu.data[0].basic) {
resultado = `• CPF: ${auu.data[0].basic.cpf}\n• Nome: ${auu.data[0].basic.nome}\n• Sexo: ${auu.data[0].basic.sexo}\n• Nascimento: ${auu.data[0].basic.nascimento}\n\n`
}
 if (auu.data[0].datasus) {
 resultado += `\n\n• Pai: ${auu.data[0].datasus.pai}\n• Mãe: ${auu.data[0].datasus.mae}\n• Local de Nascimento: ${auu.data[0].datasus.muniNasc}\n• Município: ${auu.data[0].datasus.municipio}\n• Logradouro: ${auu.data[0].datasus.logradouro}\n• Número: ${auu.data[0].datasus.numero}\n• Bairro: ${auu.data[0].datasus.bairro}\n• CEP: ${auu.data[0].datasus.cep}\n• Número do RG: ${auu.data[0].datasus.rgNumero}\n• Órgão Emissor do RG: ${auu.data[0].datasus.rgEmissora}\n• UF de Emissão do RG: ${auu.data[0].datasus.rgUf}\n• Data de emissão do RG: ${auu.data[0].datasus.rgDataEmissao}\n• CNS: ${auu.data[0].datasus.cns}\n• Telefone: ${auu.data[0].datasus.telefone}\n• Outros telefones: ${auu.data[0].datasus.telefones}`;
 }

  if (auu.data[0].claro) {
    resultado += `\n\n*Claro*\n\n• CPF: ${auu.data[0].claro.cpf}\n• Nome: ${auu.data[0].claro.nome}\n• Pessoa: ${auu.data[0].claro.pessoa}\n• DDD: ${auu.data[0].claro.ddd}\n• Telefone: ${auu.data[0].claro.fone}\n• Instalação: ${auu.data[0].claro.inst}`;
  }
  
  if(auu.data[0].oi) {
resultado += `\n\n*Oi*\n\n• DDD: ${auu.data[0].oi.ddd}\n• Telefone: ${auu.data[0].oi.telefone}\n• Tipo Documento: ${auu.data[0].oi.tipoDoc}\n• Documento: ${auu.data[0].oi.documento}\n• Endereço: ${auu.data[0].oi.endereco}\n• Bairro: ${auu.data[0].oi.bairro}\n• Cidade: ${auu.data[0].oi.cidade}\n• UF: ${auu.data[0].oi.uf}\n• CEP: ${auu.data[0].oi.cep}\n• Tipo Linha: ${auu.data[0].oi.tipoLinha}\n• Status Linha: ${auu.data[0].oi.statusLinha}\n• Unidade Negócio: ${auu.data[0].oi.unidadeNegocio}\n• Data Ativação: ${auu.data[0].oi.dataAtiv}\n• Data Contrato: ${auu.data[0].oi.dataContrato}`
}

  if (auu.data[0].vivoPrePos) {
    resultado += `\n\n*Vivo Pré-Pós*\n\n• Telefone: ${auu.data[0].vivoPrePos.telefone}\n• Primeira Recarga: ${auu.data[0].vivoPrePos.dtPrmrRcrgLnha}\n• Última Recarga: ${auu.data[0].vivoPrePos.dtUltmRcrgLnha}\n• Plataforma: ${auu.data[0].vivoPrePos.dsPltf}\n• UF: ${auu.data[0].vivoPrePos.idUf}\n• Tipo Pessoa: ${auu.data[0].vivoPrePos.tipoPessoa}\n• Data Instalação: ${auu.data[0].vivoPrePos.dataInstalacao}\n• Telefone Anterior: ${auu.data[0].vivoPrePos.telefoneAnterior}\n• Estado Linha: ${auu.data[0].vivoPrePos.dsEstdLnha}\n• Produto: ${auu.data[0].vivoPrePos.dsPrdt}\n• Nome Assinante: ${auu.data[0].vivoPrePos.nomeAssinante}\n• CPF/CNPJ: ${auu.data[0].vivoPrePos.cpfCnpj}\n• E-mail: ${auu.data[0].vivoPrePos.dsEmil}\n• Tipo Endereço: ${auu.data[0].vivoPrePos.idTipoEndr}\n• Data Vigência Inclusão: ${auu.data[0].vivoPrePos.dtVgncIncl}\n• Endereço: ${auu.data[0].vivoPrePos.endereco}\n• Número: ${auu.data[0].vivoPrePos.numero}\n• Complemento: ${auu.data[0].vivoPrePos.complemento}\n• Bairro: ${auu.data[0].vivoPrePos.bairro}\n• CEP: ${auu.data[0].vivoPrePos.cep}\n• Maior Atraso: ${auu.data[0].vivoPrePos.maiorAtraso}\n• Menor Atraso: ${auu.data[0].vivoPrePos.menorAtraso}\n• Flag Dívida: ${auu.data[0].vivoPrePos.flgDivida}\n• Ano Mês Conta: ${auu.data[0].vivoPrePos.anoMesCnta}\n• Valor Fatura: ${auu.data[0].vivoPrePos.vlFatura}`;
  }
if (auu.data[0].vivoFixo) {
  resultado += `\n\n*Vivo Fixo*\n\n• Telefone: ${auu.data[0].vivoFixo.telefone}\n• Data de Ativação: ${auu.data[0].vivoFixo.dataAtivacao}\n• Data de Retirada: ${auu.data[0].vivoFixo.dataRetirada}\n• Status do Produto: ${auu.data[0].vivoFixo.statusProduto}\n• Tecnologia: ${auu.data[0].vivoFixo.tecnologia}\n• Tecnologia de Banda: ${auu.data[0].vivoFixo.tecnologiaBanda}\n• Número do Documento: ${auu.data[0].vivoFixo.documento}\n• Tipo de Documento: ${auu.data[0].vivoFixo.tipoDocumento}\n• Nome do Cliente: ${auu.data[0].vivoFixo.nomeCliente}\n• Tipo de Cliente: ${auu.data[0].vivoFixo.tipoCliente}\n• Tipo de Endereço: ${auu.data[0].vivoFixo.tipoEndereco}\n• Endereço: ${auu.data[0].vivoFixo.endereco}\n• Número do Endereço: ${auu.data[0].vivoFixo.numeroEndereco}\n• Complemento do Endereço: ${auu.data[0].vivoFixo.complEndereco}\n• CEP: ${auu.data[0].vivoFixo.cep}\n• Celular de Contato: ${auu.data[0].vivoFixo.celContato}\n• Fixo de Contato: ${auu.data[0].vivoFixo.fixoContato}\n• E-mail: ${auu.data[0].vivoFixo.email}\n• UF: ${auu.data[0].vivoFixo.uf}\n• Região: ${auu.data[0].vivoFixo.regiao}\n• Bairro: ${auu.data[0].vivoFixo.bairro}`;
 }
  if (auu.data[0].tim) {
    resultado += `\n\n*TIM*\n\n• Tipo de Documento: ${auu.data[0].tim.tdoc}\n• Número do Documento: ${auu.data[0].tim.doc}\n• Nome: ${auu.data[0].tim.nome}\n• Tipo de Logradouro: ${auu.data[0].tim.tpLog}\n• Logradouro: ${auu.data[0].tim.lograd}\n• Número: ${auu.data[0].tim.num}\n• Complemento: ${auu.data[0].tim.compl}\n• Bairro: ${auu.data[0].tim.bairro}\n• Cidade: ${auu.data[0].tim.cidade}\n• Estado: ${auu.data[0].tim.uf}\n• CEP: ${auu.data[0].tim.cep}\n• DDD: ${auu.data[0].tim.ddd}\n• Número de Telefone: ${auu.data[0].tim.tel}\n• Operadora: ${auu.data[0].tim.operadora}`;
  }
  }
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
console.log(error)
return res.status(404).json({ resultado: `${error}`, status: 500 });
}
})

app.get('/consultas/placa', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/vehicle/placa/${query}`)
resultado = `• ID: ${auu.data.id}\n• Data de Atualização: ${auu.data.data_atualiacao}\n• Chassi: ${auu.data.chassi}\n• Placa: ${auu.data.placa}\n• Faturado: ${auu.data.faturado}\n• Ano de Fabricação: ${auu.data.ano_fabricacao}\n• Município: ${auu.data.municipio}\n• UF da Placa: ${auu.data.uf_placa}\n• Marca e Modelo: ${auu.data.marca_modelo}\n• Combustível: ${auu.data.combustivel}\n• Potência: ${auu.data.potencia}\n• Capacidade de Carga: ${auu.data.capacidade_carga}\n• Nacionalidade: ${auu.data.nacionalidade}\n• Linha: ${auu.data.linha}\n• Carroceria: ${auu.data.carroceria}\n• Caixa de Câmbio: ${auu.data.caixa_cambio}\n• Eixo Traseiro Diferencial: ${auu.data.eixo_traseiro_dif}\n• Terceiro Eixo: ${auu.data.terceiro_eixo}\n• Motor: ${auu.data.motor}\n• Tipo de Documento Faturado: ${auu.data.tipo_doc_faturado}\n• UF do Faturado: ${auu.data.uf_faturado}\n• Tipo de Documento do Proprietário: ${auu.data.tipo_doc_prop}\n• Ano do Modelo: ${auu.data.ano_modelo}\n• Tipo de Veículo: ${auu.data.tipo_veiculo}\n• Espécie do Veículo: ${auu.data.especie_veiculo}\n• Tipo de Carroceria: ${auu.data.tipo_carroceria}\n• Cor do Veículo: ${auu.data.cor_veiculo}\n• Quantidade de Passageiros: ${auu.data.quantidade_passageiro}\n• Situação do Chassi: ${auu.data.situacao_chassi}\n• Eixos: ${auu.data.eixos}\n• Tipo de Montagem: ${auu.data.tipo_montagem}\n• Tipo de Documento da Importadora: ${auu.data.tipo_doc_importadora}\n• Identificação da Importadora: ${auu.data.ident_importadora}\n• DI: ${auu.data.di}\n• Registro DI: ${auu.data.registro_di}\n• Unidade Local SRF: ${auu.data.unidade_local_srf}\n• Última Atualização: ${auu.data.ultima_atualizacao}\n• Restrição 1: ${auu.data.restricao_1}\n• Restrição 2: ${auu.data.restricao_2}\n• Restrição 3: ${auu.data.restricao_3}\n• Restrição 4: ${auu.data.restricao_4}\n• Limite Restrição Tributária: ${auu.data.limite_restricao_trib}\n• Cilindradas: ${auu.data.cilindradas}\n• Capacidade Máxima de Tração: ${auu.data.cap_maxima_tracao}\n• Peso Bruto Total: ${auu.data.peso_bruto_total}\n• Situação do Veículo: ${auu.data.situacao_veiculo}\n• Placa Modelo Antigo: ${auu.data.placa_modelo_antigo}\n• Placa Modelo Novo: ${auu.data.placa_modelo_novo}\n• Placa Nova: ${auu.data.placa_nova}`;
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
console.log(error)
return res.status(404).json({ resultado: "O banco de dados das consultas está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/ip', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`http://ip-api.com/json/${query}`)
resultado = `• País: ${auu.country}\n• Código do País: ${auu.countryCode}\n• Região: ${auu.region}\n• Nome da Região: ${auu.regionName}\n• Cidade: ${auu.city}\n• CEP: ${auu.zip}\n• Latitude: ${auu.lat}\n• Longitude: ${auu.lon}\n• Fuso Horário: ${auu.timezone}\n• ISP: ${auu.isp}\n• Organização: ${auu.org}\n• AS: ${auu.as}\n• Endereço de IP: ${auu.query}`;
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
return res.status(404).json({ resultado: "O banco de dados das consultas está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/rg', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/datasus/rg/${query}`)
resultado = `• CPF: ${auu.data[1].basic.cpf}\n• Nome: ${auu.data[1].basic.name}\n• Gênero: ${auu.data[1].basic.gender}\n• Data de Nascimento: ${auu.data[1].basic.birthdate}\n• RG: ${auu.data[1].basic.rg}\n• Órgão Emissor do RG: ${auu.data[1].basic.rgIssuer}\n• UF do RG: ${auu.data[1].basic.rgState}\n• Data de Emissão do RG: ${auu.data[1].basic.rgIssueDate}\n• CNS: ${auu.data[1].basic.cns}\n• Mãe: ${auu.data[1].basic.mother}\n• Pai: ${auu.data[1].basic.father}\n\n• Logradouro: ${auu.data[1].address.street}\n• Número: ${auu.data[1].address.number}\n• Bairro: ${auu.data[1].address.neighborhood}\n• CEP: ${auu.data[1].address.postalCode}\n• Cidade: ${auu.data[1].address.city}\n• Cidade de Nascimento: ${auu.data[1].address.birthCity}\n\n• Telefone: ${auu.data[1].phones.phone}\n• Outros Telefones: ${auu.data[1].phones.phones}`
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
return res.status(404).json({ resultado: "O banco de dados das consultas está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/consultas/cns', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Preencha ou adicione o parâmetro query"})
RegistrarUser(token, req);
try {
auu = await fetchJson(`https://datahunter.enigmaweb.com.br/api/datasus/cns/${query}`)
resultado = `• CPF: ${auu.data.basic.cpf}\n• Nome: ${auu.data.basic.name}\n• Gênero: ${auu.data.basic.gender}\n• Data de Nascimento: ${auu.data.basic.birthdate}\n• RG: ${auu.data.basic.rg}\n• Órgão Emissor do RG: ${auu.data.basic.rgIssuer}\n• UF do RG: ${auu.data.basic.rgState}\n• Data de Emissão do RG: ${auu.data.basic.rgIssueDate}\n• CNS: ${auu.data.basic.cns}\n• Mãe: ${auu.data.basic.mother}\n• Pai: ${auu.data.basic.father}\n\n• Logradouro: ${auu.data.address.street}\n• Número: ${auu.data.address.number}\n• Bairro: ${auu.data.address.neighborhood}\n• CEP: ${auu.data.address.postalCode}\n• Cidade: ${auu.data.address.city}\n• Cidade de Nascimento: ${auu.data.address.birthCity}\n\n• Telefone: ${auu.data.phones.phone}\n• Outros Telefones: ${auu.data.phones.phones}`
res.json({
        criador: `Ninja Spmc`,
        resultado: `${resultado.toUpperCase()}`
    });
} catch (error) {
return res.status(404).json({ resultado: "O banco de dados das consultas está em manutenção! Tente novamente mais tarde!", status: 500 });
}
})

app.get('/downloaders/instagram', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "cade o parametro url?"})
RegistrarUser(token, req);
igdl(url).then(data => {
res.json(data)
}).catch(e => {
res.json({status: false, código: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/nsfw/pornhub', async(req, res, next) => {
token = req.query.token;
q = req.query.q
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
 if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
 RegistrarUser(token, req);
 pornhubsrc(q).then(resultado => {
res.json({
status: true,
criador: `${criador}`,
resultado: resultado
})}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})})})

app.get('/tinder/registro',(req, res) => {
  var { usuario, rg, token } = req.query
  if(!token) return res.json({message: "Faltando paramento token"})
  if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
  if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Token inválido ou requests esgotados!"})
  if(!usuario) return res.json({message: "Faltando paramento usuario"})
  if(!JSON.stringify(tinder).includes(usuario)) {
    tinder.push({id: usuario, nome: 0, idade: 0, gene: 0, sexualidade: 0, filtro: 0, bio: 0, foto: 0, dataRG: 0, horaRG: 0})
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
  }
  AB = tinder.map(i => i.id).indexOf(usuario)
  if(tinder[AB].nome != 0 && tinder[AB].idade != 0 && tinder[AB].gene != 0 && tinder[AB].filtro != 0 && tinder[AB].bio != 0 && tinder[AB].foto != 0) return res.json({message: "❗ Você já está registrado! Digite \`#p#tinder\` para navegar pelo #nomebot2# Tinder!"})
  if(!rg) {
    if(tinder[AB].nome == 0) return res.json({semft: false, message: "Você precisa inserir o seu nome ao lado do comando."})
    if(tinder[AB].idade == 0) return res.json({semft: false, message: "Você precisa inserir a sua idade ao lado do comando."})
    if(tinder[AB].gene == 0) return res.json({semft: false, message: "Você precisa inserir o seu gênero ao lado do comando."})
    if(tinder[AB].sexualidade == 0) return res.json({semft: false, message: "Você precisa inserir a sua sexualidade (exemplos: heterossexual, homossexual, bissexual, assexual, pansexual) ao lado do comando."})
    if(tinder[AB].filtro == 0) return res.json({semft: false, message: "Você precisa inserir o filtro de busca sendo *1* para mulheres, *2* para homens ou *3* para todos ao lado do comando."})
    if(tinder[AB].bio == 0) return res.json({semft: false, message: "Você precisa inserir a sua biografia ao lado do comando."})
    if(tinder[AB].foto == 0) return res.json({semft: true, message: "Você precisa marcar uma imagem com o comando para a sua foto de perfil."})
  }
  if(!token) return res.json({message: "Faltando o parâmetro token"})
  if(tinder[AB].nome == 0) {
    tinder[AB].nome = rg
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ O nome foi registrado para o seu perfil!\n\nDigite o comando novamente e insira a sua idade ao lado dele como parâmetro seguindo a forma de uso: \`#pc# <sua idade>\`."})
  }
  if(tinder[AB].idade == 0) {
    if(!Number(rg)) return res.json({message: "❗ Sua idade só pode conter números!"})
    if(Number(rg) < 12) return res.json({message: "❗ Você precisa ter no mínimo 12 anos para se registrar no #nomebot2# Tinder!"})
    if(Number(rg) > 70) return res.json({message: "❗ Não é permitido usuários acima de 70 anos no #nomebot2# Tinder!"})
    if(rg.includes(".")) return res.json({message: "❗ Sua idade está incorreta! Você usou números decimais!"})
    tinder[AB].idade = rg
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ A idade foi registrada para o seu perfil!\n\nDigite o comando novamente e insira o seu gênero ao lado dele como parâmetro com uma das opções aceitas *masculino*, *feminino* e *ocultar* seguindo a forma de uso: \`#pc# <seu gênero>\`."})
  }
  if(tinder[AB].gene == 0) {
    if(rg.toLowerCase() != "masculino" && rg.toLowerCase() != "feminino" && rg.toLowerCase() != "ocultar") return res.json({semft: false, message: "❗ O gênero informado é inválido! Certifique-se de inserir *masculino*, *feminino* ou *ocultar* ao lado do comando!"})
    tinder[AB].gene = rg
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ O gênero foi registrado para o seu perfil!\n\nDigite o comando novamente e insira a sua identidade de gênero ao lado dele como parâmetro (exemplos: heterossexual, homossexual, bissexual, assexual, pansexual) seguindo a forma de uso: \`#pc# <sua identidade de gênero>\`."})
  }
  if(tinder[AB].sexualidade == 0) {
    tinder[AB].sexualidade = rg
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ A identidade de gênero foi registrada para o seu perfil!\n\nDigite o comando novamente e insira um filtro de busca ao lado dele como parâmetro sendo *1* para mulheres, *2* para homens e *3* para todos seguindo a forma de uso: \`#pc# <filtro de busca>\`."})
  }
  if(tinder[AB].filtro == 0) {
    if(Number(rg) < 1 && Number(rg) > 3) return res.json({semft: false, message: "❗ O filtro de busca é inválido! Certifique-se de inserir *1* para homens, *2* para mulheres ou *3* para todos ao lado do comando!"})
    tinder[AB].filtro = Number(rg)
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ O filtro de busca foi adicionado!\n\nDigite o comando novamente e insira a sua biografia ao lado dele como parâmetro seguindo a forma de uso: \`#pc# <sua biografia>\`."})
  }
  if(tinder[AB].bio == 0) {
    tinder[AB].bio = rg
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ A biografia foi registrada para o seu perfil!\n\nPara finalizar, marque uma imagem com o comando #pc# para ser a sua foto de perfil."})
  }
  if(tinder[AB].foto == 0) {
    sla = `${moment.tz('America/Sao_Paulo').format('HH')} hora${Number(moment.tz('America/Sao_Paulo').format('HH')) !== 1 ? "s" : ""}, ${moment.tz('America/Sao_Paulo').format('mm')} minuto${Number(moment.tz('America/Sao_Paulo').format('mm')) !== 1 ? "s" : ""} e ${moment.tz('America/Sao_Paulo').format('ss')} segundo${Number(moment.tz('America/Sao_Paulo').format('ss')) !== 1 ? "s" : ""}`
    tinder[AB].foto = rg
    tinder[AB].dataRG = moment.tz('America/Sao_Paulo').format('DD/MM/20YY')
    tinder[AB].horaRG = sla
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    RegistrarUser(token, req);
    return res.json({message: `✅ Seu registro foi finalizado!\n\nSeja bem-vind${tinder[AB].gene == "masculino" ? 'o' : tinder[AB].gene == "feminino" ? 'a' : 'x'} ao #nomebot2# Tinder ${tinder[AB].nome}! 😝

💌 Comece a navegar, digitando \`#p#tinder\`.

🗑️️ Sair do #nomebot2# Tinder: \`#p#sairtinder\`.`})
  }
})

app.get('/tinder/find', async (req, res) => {
usuario = req.query.usuario
token = req.query.token
if(tinder.length <= 0) return res.json({message: "Nenhum usuário registrado..."})
if(!usuario) return res.json({message: "Faltando o parâmetro usuario"})
if(!token) return res.json({message: "Faltando o parâmetro token"})
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Token inválido ou requests esgotados!"})
AB = tinder.map(i => i.id).indexOf(usuario)
if(!JSON.stringify(tinder).includes(usuario)) return res.json({message: "❗ Você não está registrado no #nomebot2# Tinder! Digite \`#p#rgtinder\` para se registrar!"})
if(tinder[AB].nome == 0 || tinder[AB].idade == 0 || tinder[AB].gene == 0 || tinder[AB].sexualidade == 0 || tinder[AB].filtro == 0 || tinder[AB].bio == 0 || tinder[AB].foto == 0) return res.json({nome: tinder[AB].nome, idade: tinder[AB].idade, gene: tinder[AB].gene, sexualidade: tinder[AB].sexualidade, filtro: tinder[AB].filtro, bio: tinder[AB].bio, nmr: tinder[AB].id.split('@')[0], foto: tinder[AB].foto, message: "❗ Algum campo do seu registro não foi preenchido! Digite \`#p#rgtinder\` para saber o qual é!"})
RegistrarUser(token, req);
caixa = []
for(i = 0; i < tinder.length; i++) {
  //filtro de busca por homens
  if(tinder[AB].filtro == 1 && tinder[i].gene == "masculino") caixa.push({nome: tinder[i].nome, idade: tinder[i].idade, gene: tinder[i].gene, sexualidade: tinder[i].sexualidade, filtro: tinder[i].filtro, bio: tinder[i].bio, nmr: tinder[i].id.split('@')[0], foto: tinder[i].foto})
  //filtro de busca por mulheres
  if(tinder[AB].filtro == 2 && tinder[i].gene == "feminino") caixa.push({nome: tinder[i].nome, idade: tinder[i].idade, gene: tinder[i].gene, sexualidade: tinder[i].sexualidade, filtro: tinder[i].filtro, bio: tinder[i].bio, nmr: tinder[i].id.split('@')[0], foto: tinder[i].foto})
  //filtro de busca sem preferência
  if(tinder[AB].filtro == 3) caixa.push({nome: tinder[i].nome, idade: tinder[i].idade, gene: tinder[i].gene, sexualidade: tinder[i].sexualidade, filtro: tinder[i].filtro, bio: tinder[i].bio, nmr: tinder[i].id.split('@')[0], foto: tinder[i].foto})
}
if(caixa.length <= 0) return res.json({message: "❗ Nenhum usuário foi encontrado com esse filtro de busca! Podes trocar o filtro no comando \`#p#setfiltro\`!"})
BC = Math.floor(Math.random()*caixa.length)
res.json({criador: "Ninja Spmc", dados: [{id: BC+1, total: caixa.length, nome: caixa[BC].nome, idade: caixa[BC].idade, gene: caixa[BC].gene, sexualidade: caixa[BC].sexualidade, bio: caixa[BC].bio, nmr: caixa[BC].nmr, foto: caixa[BC].foto}]})
})

app.get('/tinder/config', async (req, res) => {
var { usuario, mod, q, token } = req.query
if(!usuario) return res.json({message: "Faltando o parâmetro usuario"})
if(!mod) return res.json({message: "Faltando o parâmetro mod"})
if(!q) {
  if(mod == "setnometinder") return res.json({message: "Você precisa inserir o novo nome ao lado do comando."})
  if(mod == "setidadetinder") return res.json({message: "Você precisa inserir a nova idade ao lado do comando."})
  if(mod == "setbiotinder") return res.json({message: "Você precisa inserir a nova biografia ao lado do comando."})
  if(mod == "setfototinder") return res.json({message: "Você precisa marcar uma imagem com o comando para a sua nova foto de perfil."})
  if(mod == "setgenerotinder") return res.json({message: "Você precisa inserir o novo gênero ao lado do comando."})
  if(mod == "setsexualidadetinder") return res.json({message: "Você precisa inserir a nova identidade de gênero (exemplos: heterossexual, homossexual, bissexual, assexual, pansexual) ao lado do comando."})
  if(mod == "setfiltrotinder") return res.json({message: "Você precisa inserir o filtro de busca sendo *1* para mulheres, *2* para homens ou *3* para todos ao lado do comando."})
  }
if(!token) return res.json({message: "Faltando o parâmetro token"})
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Token inválido ou requests esgotados!"})
if(!JSON.stringify(tinder).includes(usuario)) return res.json({message: "❗ Você não está registrado no #nomebot2# Tinder! Digite \`#p#rgtinder\` para se registrar!"})
AB = tinder.map(i => i.id).indexOf(usuario)
if(tinder[AB].nome == 0 || tinder[AB].idade == 0 || tinder[AB].gene == 0 || tinder[AB].sexualidade == 0 || tinder[AB].filtro == 0 || tinder[AB].bio == 0 || tinder[AB].foto == 0) return res.json({nome: tinder[AB].nome, idade: tinder[AB].idade, gene: tinder[AB].gene, sexualidade: tinder[AB].sexualidade, filtro: tinder[AB].filtro, bio: tinder[AB].bio, nmr: tinder[AB].id.split('@')[0], foto: tinder[AB].foto, message: "❗ Algum campo do seu registro não foi preenchido! Digite \`#p#rgtinder\` para saber o qual é!"})
RegistrarUser(token, req);
  if(mod == "tindernome") {
    tinder[AB].nome = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({message: "✅ O novo nome foi atualizado para o seu perfil!"})
  }
  if(mod == "tinderidade") {
    if(!Number(q)) return res.json({message: "❗ Sua idade só pode conter números!"})
    if(Number(q) < 12) return res.json({message: "❗ Você precisa ter no mínimo 12 anos para usar o #nomebot2# Tinder!"})
    if(Number(q) > 70) return res.json({message: "❗ Não é permitido Usuários com mais de 70 anos no #nomebot2# Tinder!"})
    if(q.includes(".")) return res.json({message: "❗ Sua idade está incorreta! Você usou números decimais!"})
    tinder[AB].idade = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({semft: false, message: "✅ A nova idade foi atualizada para o seu perfil!"})
  }
  if(mod == "setgene") {
    if(q.toLowerCase() != "masculino" && q.toLowerCase() != "feminino" && q.toLowerCase() != "ocultar") return res.json({message: "❗ O gênero informado é inválido! Certifique-se de inserir *masculino*, *feminino* ou *ocultar* ao lado do comando!"})
    tinder[AB].gene = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({message: "✅ O novo gênero foi atualizado para o seu perfil!"})
  }
  if(mod == "setsex") {
    tinder[AB].gene = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({message: "✅ A nova identidade de gênero foi atualizada para o seu perfil!"})
  }
  if(mod == "setfiltro") {
    if(Number(q) < 1 && Number(q) > 3) return res.json({semft: false, message: "❗ O filtro de busca é inválido! Certifique-se de inserir *1* para homens, *2* para mulheres ou *3* para todos ao lado do comando!"})
    tinder[AB].filtro = Number(q)
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
return res.json({message: `✅ O filtro de busca foi atualizado! Agora buscarei ${Number(q) === 3 ? `por todos os usuários!` : `apenas por ${Number(q) === 1 ? "homens!" : "mulheres!"}`}`})
  }
  if(mod == "tinderbio") {
    tinder[AB].bio = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({message: "✅ A nova biografia foi atualizada para o seu perfil!"})
  }
  if(mod == "tinderfoto") {
    tinder[AB].foto = q
    fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
    return res.json({message: "✅ A nova foto foi atualizada para o seu perfil!"})
  }
})

app.get('/tinder/perfil', async (req, res) => {
var { usuario, token } = req.query
if(!usuario) return res.json({message: "Faltando o parâmetro usuario"})
if(!token) return res.json({message: "Faltando o parâmetro token"})
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Token inválido ou requests esgotados!"})
if(!JSON.stringify(tinder).includes(usuario)) return res.json({message: "ID do usuário não encontrado ou inexistente..."})
AB = tinder.map(i => i.id).indexOf(usuario)
if(tinder[AB].nome == 0 || tinder[AB].idade == 0 || tinder[AB].gene == 0 || tinder[AB].sexualidade == 0 || tinder[AB].filtro == 0 || tinder[AB].bio == 0 || tinder[AB].foto == 0) return res.json({nome: tinder[AB].nome, idade: tinder[AB].idade, gene: tinder[AB].gene, sexualidade: tinder[AB].sexualidade, filtro: tinder[AB].filtro, bio: tinder[AB].bio, nmr: tinder[AB].id.split('@')[0], foto: tinder[AB].foto, message: "❗ Algum campo do seu registro não foi preenchido! Digite \`#p#rgtinder\` para saber o qual é!"})
RegistrarUser(token, req);
return res.json({criador: "Ninja Spmc", dados: [{nome: tinder[AB].nome, idade: tinder[AB].idade, gene: tinder[AB].gene, sexualidade: tinder[AB].sexualidade, filtro: tinder[AB].filtro, bio: tinder[AB].bio, nmr: tinder[AB].id.split('@')[0], foto: tinder[AB].foto, registro: [tinder[AB].dataRG, tinder[AB].horaRG]}]})
})

app.get('/tinder/delete', async (req, res) => {
try {
var { usuario, token } = req.query
if(!usuario) return res.json({message: "Faltando o parâmetro usuario"})
if(!token) return res.json({message: "Faltando o parâmetro token"})
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Token inválido ou requests esgotados!"})
if(!JSON.stringify(tinder).includes(usuario)) return res.json({message: "ID do usuário não encontrado ou inexistente..."})
AB = tinder.map(i => i.id).indexOf(usuario)
tinder.splice(AB, 1)
fs.writeFileSync("./database/tinder.json", JSON.stringify(tinder))
RegistrarUser(token, req);
return res.json({message: "✅ Seu registro no #nomebot# foi apagado! Volte sempre! 😉"})
} catch(e) {
console.log(e)
}
})

router.all('/cartoon', async (req, res) => {
token = req.query.token;
img = req.query.img;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!img)return res.json({status:false,message:'- Cadê o parâmetro img?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
auu = await Kibar(`https://xzn.wtf/api/aitoonme?url=${img}&token=darkzy_7`)
res.json({
status: true,
resultado: {
url_imagem: `${auu.url}`
}
})
})

router.get('/figurinhas/emoji/apple', async (req, res, next) => {
token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	var emj = req.query.emj	
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada emj"})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[0].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/google', async (req, res, next) => {
token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
	RegistrarUser(token, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[1].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/samsung', async (req, res, next) => {
		var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[2].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/microsoft', async (req, res, next) => {
		var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj)
    .then(async emoji => {
	resul = await getBuffer(emoji.images[3].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/whatsapp', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
	token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[4].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/x', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[5].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/facebook', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[6].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/figurinhas/emoji/skype', async (req, res, next) => {
	var emj = req.query.emj
	if (!emj) return res.json({ status : false, message : "[!] parâmetros de entrada  emj"})
		token = req.query.token
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
	if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	emoji.get(emj) 
    .then(async emoji => {
	resul = await getBuffer(emoji.images[7].url)
	res.set({'Content-Type': 'image/png'})
	res.send(resul)
	})
	.catch(error => {
		res.json(loghandler.emoji)
	})
})

router.get('/canvas/comunismo', comunismo) 
router.get('/canvas/bolsonaro', bolsonaro) 
router.get('/canvas/bnw', bnw) 
router.get('/canvas/affect', affect) 
router.get('/canvas/blur', blurr) 
router.get('/canvas/beautiful', beautiful)   
router.get('/canvas/circle', circle) 
router.get('/canvas/del', del) 
router.get('/canvas/invert', invert) 
router.get('/canvas/gay', gay) 
router.get('/canvas/lgbt', lgbt) 
router.get('/canvas/facepalm', facepalm)    
router.get('/canvas/dither', dither) 
router.get('/canvas/jail', jail) 
router.get('/canvas/magik', magik) 
router.get('/canvas/rip', rip)   
router.get('/canvas/sepia', sepia) 
router.get('/canvas/rotate', rotate) 
router.get('/canvas/pixelate', pixelate) 
router.get('/canvas/trash', trash) 
router.get('/canvas/wasted', wasted)
router.get('/canvas/wanted', wanted)
router.get('/canvas/bobross', bobross)
router.get('/canvas/karaba', bobross)
router.get('/canvas/mms', mms)
router.get('/happymod', happymodr)

app.get('/about',(req, res) => {
res.json({
status:true,
message:'Projeto em beta'
})
})

app.get('/outros/antiporno',async (req,res,next) => {
url = req.query.url
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
fetch(`https://nsfw-demo.sashido.io/api/image/classify?url=${url}`).then(e => {
res.json(e)
})
})

router.get('/outros/printweb', async (req, res, next) => {
url = req.query.url
if(!url)return res.json({status:false, motivo:'Cadê o parâmetro url?'})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    hasil = `https://api.popcat.xyz/screenshot?url=${url}`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/asupan.jpg', data)
        res.sendFile(bla + '/assets/Tempo/asupan.jpg')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/emoji', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 102)
hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/emoji/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_emoji.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_emoji.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/flork', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 102)
hasil = `https://raw.githubusercontent.com/Scheyot2/anya-bot/master/Figurinhas/figu_flork/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_flork.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_flork.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/memes', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/meme/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_memes.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_memes.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/anime', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/anime/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_anime.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_anime.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/coreana', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 43)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/coreana/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_coreana.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_coreana.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/bebe', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 17)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figbebe/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_bebe.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_bebe.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/desenho', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 109)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/desenho/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_desenho.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_desenho.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/animais', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 46)
    hasil = `https://raw.githubusercontent.com/badDevelopper/Apis/master/pack/figanimais/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_animais.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_animais.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('api/figurinhas/pack/engracado', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 25)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/engracadas/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_engracada.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_engracada.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/raiva', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 29)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/raiva/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_raiva.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_raiva.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/figurinhas/pack/roblox', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
var rnd = Math.floor(Math.random() * 21)
    hasil = `https://raw.githubusercontent.com/Scheyot2/media/master/packs/roblox/${rnd}.webp`
	  data = await fetch(hasil).then(v => v.buffer())   
         await fs.writeFileSync(bla + '/assets/Tempo/figu_roblox.webp', data)
        res.sendFile(bla + '/assets/Tempo/figu_roblox.webp')
         } else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

router.get('/nsfw/ahegao', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ahegao = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ahegao.json'));
    const randahegao = ahegao[Math.floor(Math.random() * ahegao.length)];
    data = await fetch(randahegao).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ahegao.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ahegao.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ass', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ass = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ass.json'));
    const randass = ass[Math.floor(Math.random() * ass.length)];
    data = await fetch(randass).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ass.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ass.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/bdsm', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const bdsm = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/bdsm.json'));
    const randbdsm = bdsm[Math.floor(Math.random() * bdsm.length)];
    data = await fetch(randbdsm).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/bdsm.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/bdsm.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/blowjob', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const blowjob = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/blowjob.json'));
    const randblowjob = blowjob[Math.floor(Math.random() * blowjob.length)];
    data = await fetch(randblowjob).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/blowjob.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/blowjob.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cuckold', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const cuckold = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cuckold.json'));
    const randcuckold = cuckold[Math.floor(Math.random() * cuckold.length)];
    data = await fetch(randcuckold).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/cuckold.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/cuckold.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/cum', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const cum = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cum.json'));
    const randcum = cum[Math.floor(Math.random() * cum.length)];
    data = await fetch(randcum).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/cum.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/cum.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/ero', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ero = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ero.json'));
    const randero = ero[Math.floor(Math.random() * ero.length)];
    data = await fetch(randero).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ero.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ero.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/femdom', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const femdom = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/femdom.json'));
    const randfemdom = femdom[Math.floor(Math.random() * femdom.length)];
    data = await fetch(randfemdom).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/femdom.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/femdom.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/foot', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const foot = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/foot.json'));
    const randfoot = foot[Math.floor(Math.random() * foot.length)];
    data = await fetch(randfoot).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/foot.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/foot.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gangbang', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const gangbang = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gangbang.json'));
    const randgangbang = gangbang[Math.floor(Math.random() * gangbang.length)];
    data = await fetch(randgangbang).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/gangbang.jpg', data)
    res.sendFile(bla + '/assets/Tempo/gangbang.jpg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/glasses', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const glasses = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/glasses.json'));
    const randglasses = glasses[Math.floor(Math.random() * glasses.length)];
    data = await fetch(randglasses).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/glasses.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/glasses.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/hentai', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const hentai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hentai.json'));
    const randhentai = hentai[Math.floor(Math.random() * hentai.length)];
    data = await fetch(randhentai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/hentai.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/hentai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/gifs', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gifs.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/gifs.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/gifs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/stickera', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const gifs = JSON.parse(fs.readFileSync(bla + '/base de dados/figurinhas.json'));
    const randgifs = gifs[Math.floor(Math.random() * gifs.length)];
    data = await fetch(randgifs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/stickera.webp', data)
    res.sendFile(bla + '/assets/Tempo/stickera.webp')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/jahy', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const jahy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/jahy.json'));
    const randjahy = jahy[Math.floor(Math.random() * jahy.length)];
    data = await fetch(randjahy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/jahy.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/jahy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/manga', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const manga = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/manga.json'));
    const randmanga = manga[Math.floor(Math.random() * manga.length)];
    data = await fetch(randmanga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/manga.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/manga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/masturbation', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const masturbation = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/masturbation.json'));
    const randmasturbation = masturbation[Math.floor(Math.random() * masturbation.length)];
    data = await fetch(randmasturbation).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/masturbation.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/masturbation.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const neko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/neko.json'));
    const randneko = neko[Math.floor(Math.random() * neko.length)];
    data = await fetch(randneko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/neko.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/neko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/orgy', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const orgy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/orgy.json'));
    const randorgy = orgy[Math.floor(Math.random() * orgy.length)];
    data = await fetch(randorgy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/orgy.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/orgy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/panties', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const panties = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/panties.json'));
    const randpanties = panties[Math.floor(Math.random() * panties.length)];
    data = await fetch(randpanties).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/panties.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/panties.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/pussy', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const pussy = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pussy.json'));
    const randpussy = pussy[Math.floor(Math.random() * pussy.length)];
    data = await fetch(randpussy).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/pussy.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/pussy.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/neko2', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const neko2 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/neko2.json'));
    const randneko2 = neko2[Math.floor(Math.random() * neko2.length)];
    data = await fetch(randneko2).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/neko2.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/neko2.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/tentacles', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const tentacles = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tentacles.json'));
    const randtentacles = tentacles[Math.floor(Math.random() * tentacles.length)];
    data = await fetch(randtentacles).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/tentacles.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/tentacles.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/thighs', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const thighs = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/thighs.json'));
    const randthighs = thighs[Math.floor(Math.random() * thighs.length)];
    data = await fetch(randthighs).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/thighs.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/thighs.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/yuri', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const yuri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuri.json'));
    const randyuri = yuri[Math.floor(Math.random() * yuri.length)];
    data = await fetch(randyuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/yuri.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/zettai', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const zettai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/zettai.json'));
    const randzettai = zettai[Math.floor(Math.random() * zettai.length)];
    data = await fetch(randzettai).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/zettai.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/zettai.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/keneki', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const keneki = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/keneki.json'));
    const randkeneki = keneki[Math.floor(Math.random() * keneki.length)];
    data = await fetch(randkeneki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/keneki.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/keneki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/megumin', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const megumin = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/megumin.json'));
    const randmegumin = megumin[Math.floor(Math.random() * megumin.length)];
    data = await fetch(randmegumin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/megumin.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/megumin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/yotsuba', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const yotsuba = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yotsuba.json'));
    const randyotsuba = yotsuba[Math.floor(Math.random() * yotsuba.length)];
    data = await fetch(randyotsuba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/yotsuba.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/yotsuba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/shinomiya', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const shinomiya = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shinomiya.json'));
    const randshinomiya = shinomiya[Math.floor(Math.random() * shinomiya.length)];
    data = await fetch(randshinomiya).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/shinomiya.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/shinomiya.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/yumeko', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const yumeko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yumeko.json'));
    const randyumeko = yumeko[Math.floor(Math.random() * yumeko.length)];
    data = await fetch(randyumeko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/yumeko.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/yumeko.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/tejina', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const tejina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tejina.json'));
    const randtejina = tejina[Math.floor(Math.random() * tejina.length)];
    data = await fetch(randtejina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/tejina.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/tejina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/chiho', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const chiho = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/chiho.json'));
    const randchiho = chiho[Math.floor(Math.random() * chiho.length)];
    data = await fetch(randchiho).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/chiho.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/chiho.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/cyberspace', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const cyberspace = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/CyberSpace.json'));
    const randcyberspace = cyberspace[Math.floor(Math.random() * cyberspace.length)];
    data = await fetch(randcyberspace).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/cyberspace.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/cyberspace.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/gaming', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const gaming = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/GameWallp.json'));
    const randgaming = gaming[Math.floor(Math.random() * gaming.length)];
    data = await fetch(randgaming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/gaming.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/gaming.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/programing', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const programing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Programming.json'));
    const randprograming = programing[Math.floor(Math.random() * programing.length)];
    data = await fetch(randprograming).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/programing.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/programing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/wallpapertec', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const teknologi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Technology.json'));
    const randteknologi = teknologi[Math.floor(Math.random() * teknologi.length)];
    data = await fetch(randteknologi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/teknologi.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/teknologi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/mountain', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const mountain = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/Mountain.json'));
    const randmountain = mountain[Math.floor(Math.random() * mountain.length)];
    data = await fetch(randmountain).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/mountain.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/mountain.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/animes/toukachan', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const toukachan = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/toukachan.json'));
    const randtoukachan = toukachan[Math.floor(Math.random() * toukachan.length)];
    data = await fetch(randtoukachan).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/toukachan.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/toukachan.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/akira', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const akira = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/akira.json'));
    const randakira = akira[Math.floor(Math.random() * akira.length)];
    data = await fetch(randakira).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/akira.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/akira.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/itori', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const itori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/itori.json'));
    const randitori = itori[Math.floor(Math.random() * itori.length)];
    data = await fetch(randitori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/itori.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/itori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kurumi', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const kurumi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kurumi.json'));
    const randkurumi = kurumi[Math.floor(Math.random() * kurumi.length)];
    data = await fetch(randkurumi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kurumi.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kurumi.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/miku', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const miku = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/miku.json'));
    const randmiku = miku[Math.floor(Math.random() * miku.length)];
    data = await fetch(randmiku).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/miku.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/miku.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/pokemon', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const pokemon = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pokemon.json'));
    const randpokemon = pokemon[Math.floor(Math.random() * pokemon.length)];
    data = await fetch(randpokemon).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/pokemon.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/pokemon.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/ryujin', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ryujin = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ryujin.json'));
    const randryujin = ryujin[Math.floor(Math.random() * ryujin.length)];
    data = await fetch(randryujin).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ryujin.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ryujin.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/rose', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const rose = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/rose.json'));
    const randrose = rose[Math.floor(Math.random() * rose.length)];
    data = await fetch(randrose).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/rose.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/rose.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kaori', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const kaori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kaori.json'));
    const randkaori = kaori[Math.floor(Math.random() * kaori.length)];
    data = await fetch(randkaori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kaori.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kaori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/shizuka', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const shizuka = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shizuka.json'));
    const randshizuka = shizuka[Math.floor(Math.random() * shizuka.length)];
    data = await fetch(randshizuka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/shizuka.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/shizuka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kaga', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const kaga = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kaga.json'));
    const randkaga = kaga[Math.floor(Math.random() * kaga.length)];
    data = await fetch(randkaga).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kaga.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kaga.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kotori', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const kotori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kotori.json'));
    const randkotori = kotori[Math.floor(Math.random() * kotori.length)];
    data = await fetch(randkotori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kotori.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kotori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/mikasa', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const mikasa = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/mikasa.json'));
    const randmikasa = mikasa[Math.floor(Math.random() * mikasa.length)];
    data = await fetch(randmikasa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/mikasa.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/mikasa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/akiyama', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const akiyama = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/akiyama.json'));
    const randakiyama = akiyama[Math.floor(Math.random() * akiyama.length)];
    data = await fetch(randakiyama).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/akiyama.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/akiyama.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/gremory', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const gremory = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/gremory.json'));
    const randgremory = gremory[Math.floor(Math.random() * gremory.length)];
    data = await fetch(randgremory).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/gremory.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/gremory.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/isuzu', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const isuzu = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/isuzu.json'));
    const randisuzu = isuzu[Math.floor(Math.random() * isuzu.length)];
    data = await fetch(randisuzu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/isuzu.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/isuzu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/cosplay', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const cosplay = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cosplay.json'));
    const randcosplay = cosplay[Math.floor(Math.random() * cosplay.length)];
    data = await fetch(randcosplay).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/cosplay.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/cosplay.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/shina', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const shina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shina.json'));
    const randshina = shina[Math.floor(Math.random() * shina.length)];
    data = await fetch(randshina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/shina.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/shina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kagura', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const kagura = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kagura.json'));
    const randkagura = kagura[Math.floor(Math.random() * kagura.length)];
    data = await fetch(randkagura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kagura.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kagura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/shinka', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const shinka = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shinka.json'));
    const randshinka = shinka[Math.floor(Math.random() * shinka.length)];
    data = await fetch(randshinka).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/shinka.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/shinka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/eba', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const eba = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/eba.json'));
    const randeba = eba[Math.floor(Math.random() * eba.length)];
    data = await fetch(randeba).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/eba.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/eba.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/deidara', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
if(key.map(i => i.token)?.includes(token)){    
const Deidara = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/deidara.json'));
const randDeidara = Deidara[Math.floor(Math.random() * Deidara.length)];
data = await fetch(randDeidara).then(v => v.buffer())
await fs.writeFileSync(bla + '/assets/Tempo/deidara.jpeg', data)
res.sendFile(bla + '/assets/Tempo/deidara.jpeg')
} else {
res.json({erro:'Erro no Servidor Interno'})
}
})



router.get('/animes/jeni', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const jeni = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/jeni.json'));
    const randjeni = jeni[Math.floor(Math.random() * jeni.length)];
    data = await fetch(randjeni).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/jeni.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/jeni.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/meme', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const meme = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/meme.json'));
    const randmeme = meme[Math.floor(Math.random() * meme.length)];
    data = await fetch(randmeme).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/meme.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/meme.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/satanic', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const satanic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/satanic.json'));
    const randsatanic = satanic[Math.floor(Math.random() * satanic.length)];
    data = await fetch(randsatanic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/satanic.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/satanic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/animes/itachi', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Itachi = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/itachi.json'));
    const randItachi = Itachi[Math.floor(Math.random() * Itachi.length)];
    data = await fetch(randItachi).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ita.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ita.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/madara', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Madara = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/madara.json'));
    const randMadara = Madara[Math.floor(Math.random() * Madara.length)];
    data = await fetch(randMadara).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/madara.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/madara.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/yuki', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Yuki = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuki.json'));
    const randYuki = Yuki[Math.floor(Math.random() * Yuki.length)];
    data = await fetch(randYuki).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/yuki.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/yuki.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/asuna', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const asuna = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/asuna.json'));
    const randasuna = asuna[Math.floor(Math.random() * asuna.length)];
    data = await fetch(randasuna).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/asuna.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/asuna.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/ayuzawa', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ayuzawa = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ayuzawa.json'));
    const randayuzawa = ayuzawa[Math.floor(Math.random() * ayuzawa.length)];
    data = await fetch(randayuzawa).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ayuzawa.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ayuzawa.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/chitoge', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const chitoge = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/chitoge.json'));
    const randchitoge = chitoge[Math.floor(Math.random() * chitoge.length)];
    data = await fetch(randchitoge).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/chitoge.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/chitoge.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/emilia', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const emilia = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/emilia.json'));
    const randemilia = emilia[Math.floor(Math.random() * emilia.length)];
    data = await fetch(randemilia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/emilia.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/emilia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/hestia', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const hestia = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hestia.json'));
    const randhestia = hestia[Math.floor(Math.random() * hestia.length)];
    data = await fetch(randhestia).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/hestia.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/hestia.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/inori', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const inori = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/inori.json'));
    const randinori = inori[Math.floor(Math.random() * inori.length)];
    data = await fetch(randinori).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/inori.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/inori.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/ana', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const ana = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/ana.json'));
    const randana = ana[Math.floor(Math.random() * ana.length)];
    data = await fetch(randana).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ana.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ana.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/boruto', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Boruto = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/boruto.json'));
    const randBoruto = Boruto[Math.floor(Math.random() * Boruto.length)];
    data = await fetch(randBoruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/bor.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/bor.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/erza', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Erza = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/erza.json'));
    const randErza = Erza[Math.floor(Math.random() * Erza.length)];
    data = await fetch(randErza).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/erza.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/erza.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kakashi', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Kakasih = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kakasih.json'));
    const randKakasih = Kakasih[Math.floor(Math.random() * Kakasih.length)];
    data = await fetch(randKakasih).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ka.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ka.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/sagiri', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/sagiri.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/minato', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Minato = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/minato.json'));
    const randMinato = Minato[Math.floor(Math.random() * Minato.length)];
    data = await fetch(randMinato).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/minato.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/minato.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/naruto', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Naruto = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/naruto.json'));
    const randNaruto = Naruto[Math.floor(Math.random() * Naruto.length)];
    data = await fetch(randNaruto).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/naruto.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/naruto.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/nezuko', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Nezuko = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/nezuko.json'));
    const randNezuko = Nezuko[Math.floor(Math.random() * Nezuko.length)];
    data = await fetch(randNezuko).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/nezu.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/nezu.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/onepiece', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Pic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/onepiece.json'));
    const randPic = Pic[Math.floor(Math.random() * Pic.length)];
    data = await fetch(randPic).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/pic.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/pic.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/rize', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Rize = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/rize.json'));
    const randRize = Rize[Math.floor(Math.random() * Rize.length)];
    data = await fetch(randRize).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/rize.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/rize.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/sakura', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Sakura = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sakura.json'));
    const randSakura = Sakura[Math.floor(Math.random() * Sakura.length)];
    data = await fetch(randSakura).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/sakura.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/sakura.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/sasuke', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Sasuke = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sasuke.json'));
    const randSasuke = Sasuke[Math.floor(Math.random() * Sasuke.length)];
    data = await fetch(randSasuke).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/sasuke.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/sasuke.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/tsunade', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Su = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/tsunade.json'));
    const randSu = Su[Math.floor(Math.random() * Su.length)];
    data = await fetch(randSu).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/su.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/su.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/montor', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Mon = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/montor.json'));
    const randMon = Mon[Math.floor(Math.random() * Mon.length)];
    data = await fetch(randMon).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/montor.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/montor.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/mobil', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Mob = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/mobil.json'));
    const randMob = Mob[Math.floor(Math.random() * Mob.length)];
    data = await fetch(randMob).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/mobil.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/mobil.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/anime', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Wai23 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/wallhp2.json'));
    const randWai23 = Wai23[Math.floor(Math.random() * Wai23.length)];
    data = await fetch(randWai23).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/wallhp2.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/wallhp2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/wallhp', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Wai22 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/wallhp.json'));
    const randWai22 = Wai22[Math.floor(Math.random() * Wai22.length)];
    data = await fetch(randWai22).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/wallhp.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/wallhp.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/waifu2', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Wai2 = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/waifu2.json'));
    const randWai2 = Wai2[Math.floor(Math.random() * Wai2.length)];
    data = await fetch(randWai2).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/wibu2.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/wibu2.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/waifu', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Wai = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/waifu.json'));
    const randWai = Wai[Math.floor(Math.random() * Wai.length)];
    data = await fetch(randWai).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/wibu.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/wibu.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/hekel', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Hekel = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hekel.json'));
    const randHekel = Hekel[Math.floor(Math.random() * Hekel.length)]
    data = await fetch(randHekel).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/hek.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/hek.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/kucing', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Kucing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/kucing.json'));
    const randKucing = Kucing[Math.floor(Math.random() * Kucing.length)]
    data = await fetch(randKucing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/kucing.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/kucing.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/pubg', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Pubg = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/pubg.json'));
    const randPubg = Pubg[Math.floor(Math.random() * Pubg.length)]
    data = await fetch(randPubg).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/pubg.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/pubg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/ppcouple', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Pp = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/profil.json'));
    const randPp = Pp[Math.floor(Math.random() * Pp.length)]
    data = await fetch(randPp).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/pp.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/pp.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/wallpaper/anjing', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Anjing = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/anjing.json'));
    const randAnjing = Anjing[Math.floor(Math.random() * Anjing.length)]
    data = await fetch(randAnjing).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/ajg.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/ajg.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/doraemon', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    Dora = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/doraemon.json'));
    const randDora = Dora[Math.floor(Math.random() * Dora.length)]
    data = await fetch(randDora).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/dora.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/dora.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/elaina', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const Elaina = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/elaina.json'))
    const randElaina = Elaina[Math.floor(Math.random() * Elaina.length)]
    //tansole.log(randLoli)
    data = await fetch(randElaina).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/elaina.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/elaina.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/loli', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const Loli = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/loli.json'))
    const randLoli = Loli[Math.floor(Math.random() * Loli.length)]
    //tansole.log(randLoli)
    data = await fetch(randLoli).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/loli.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/loli.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/yuri', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const Yuri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/yuri.json'))
    const randYuri = Yuri[Math.floor(Math.random() * Yuri.length)]
    //tansole.log(randTech)
    data = await fetch(randYuri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/Yuri.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/Yuri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/animes/cecan', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const cecan = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/cecan.json'));
    const randCecan = cecan[Math.floor(Math.random() * cecan.length)];
    data = await fetch(randCecan).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/cecan.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/cecan.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})


router.get('/wallpaper/aesthetic', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Aesthetic = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/aesthetic.json'));
    const randAesthetic = Aesthetic[Math.floor(Math.random() * Aesthetic.length)];
    data = await fetch(randAesthetic).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/aesthetic.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/aesthetic.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})



router.get('/animes/sagiri', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Sagiri = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/sagiri.json'));
    const randSagiri = Sagiri[Math.floor(Math.random() * Sagiri.length)];
    data = await fetch(randSagiri).then(v => v.buffer())
    await fs.writeFileSync(bla + '/assets/Tempo/sagiri.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/sagiri.jpeg')
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/animes/shota', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    

    const Shota = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/shota.json'));
    const randShota = Shota[Math.floor(Math.random() * Shota.length)];
    data = await fetch(randShota).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/shota.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/shota.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

router.get('/nsfw/hinata', async (req, res, next) => {
      var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
	if(key.map(i => i.token)?.includes(token)){    
    const Hinata = JSON.parse(fs.readFileSync(bla + '/base de dados/random/ANIMES-HENTAI/hinata.json'));
    const randHin = Hinata[Math.floor(Math.random() * Hinata.length)];
    data = await fetch(randHin).then(v => v.buffer());
    await fs.writeFileSync(bla + '/assets/Tempo/Hinata.jpeg', data)
    res.sendFile(bla + '/assets/Tempo/Hinata.jpeg');
  } else {
  res.json({erro:'Erro no Servidor Interno'})
  }
})

 app.get('/downloaders/soundcloud', async(req, res, next) => {
 token = req.query.token;
 url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RegistrarUser(token, req);
soundl(url).then((resultado) => {
 res.json({
 status: true,
  resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/nsfw/manga', async(req, res, next) => {
 token = req.query.token;
q = req.query.q
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RegistrarUser(token, req);
manga(q).then((resultado) => {
 res.json({
 status: true,
  resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

 app.get('/nsfw/hentaistube', async(req, res, next) => {
 token = req.query.token;
q = req.query.q
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!q) return res.json({ status : false,  message: "Coloque o parametro: q"})
RegistrarUser(token, req);
hentaistube(q).then((resultado) => {
 res.json({
 status: true,
  resultado: resultado
 })}).catch(e => {
res.json({
 message: `Erro no Servidor Interno`
 })})})

app.get('/icms', async(req, res, next) => {
var { token, valor, ddd } = req.query
if(!token) return res.json({status:false,message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!valor) return res.json({ status : false,  message: "Coloque o parametro: valor"})
if (!ddd) return res.json({ status : false,  message: "Coloque o parametro: ddd"})
RegistrarUser(token, req);
icms(valor, ddd).then((data) => {
res.json({status: 200, credits: "Crap Ethern-Bot </Dev>", resultado: data})
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})
})
})

app.get('/noticias/brasileirao', async(req, res, next) => {
var { token } = req.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
BrasileirãoFutebol().then((data) => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})
})
})

app.get('/figurinhas/ttp',  async (req, res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
cor = ["f702ff","ff0202","00ff2e","efff00","00ecff","3100ff","ffb400","ff00b0","00ff95","efff00"] //CORES COLOQUE QUALQUER UMA MAS EM CODE
fonte = ["Days%20One","Domine","Exo","Fredoka%20One","Gentium%20Basic","Gloria%20Hallelujah","Great%20Vibes","Orbitron","PT%20Serif","Pacifico"]//FONTS NÃO MEXA
cores = cor[Math.floor(Math.random() * (cor.length))]	 				 
fontes = fonte[Math.floor(Math.random() * (fonte.length))]	 		
sitee = `https://huratera.sirv.com/PicsArt_08-01-10.00.42.png?profile=Example-Text&text.0.text=${texto}&text.0.outline.color=000000&text.0.outline.blur=0&text.0.outline.opacity=55&text.0.color=${cores}&text.0.font.family=${fontes}&text.0.background.color=ff0000`
res.type('jpg')
res.send(await getBuffer(sitee))
})

app.get('/fbdown',(req,res) => {
url = req.query.url
if(!url)return res.json({
status:false,
message:'Cade o parametro url??'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
down.fbdown(url)
.then(e => {
res.json({
status:true,
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/photooxy',(req,res) => {
url = req.query.url
text = req.query.text
if(!url)return res.json({
status:false,
message:'Cade o parametro url??'
})
if(!text)return res.json({
status:false,
message:'Cade o parametro text??'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
photooxy(url, text)
.then(e => {
res.json({
status:true,
resultado: e})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/wallpaperanime',(req,res) => {
token = req.query.token
q = 'Wallpaper anime'
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
gis(q, async (error, results) => {
if (error) {
console.log(error)
res.json({
status:false,
message:'Não encontrei imagem'
})
} else {
bala = await getBuffer(results[1].url)
res.type('jpg')
res.send(bala)
}
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get("/google-img", async(req, res) => {
try {
token = req.query.token
nome = req.query.nome
if(!nome) return res.json({message: "Faltando o parametro nome"})
if(!token)return res.json({message:'cade o parametro token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
await gis(nome, logResults);
function logResults(error, results) {
if (error) {
console.log(error);
return res.json({message: "Erro.."})
} else {
return res.send(results)
}
}
} catch (e) {
return res.json({message: "Erro.."})
}
})

app.get('/avatar',(req,res,next) => {
fetch(encodeURI(`https://nekos.life/api/v2/img/avatar`))
.then(response => response.json())
.then(async (data) => {
resultado =  data
bala = await getBuffer(resultado.url)
res.type('jpg')
res.send(bala)
})
.catch(e => {
res.json({erro:'erro'})
})
})

app.get('/legenda',async (req,res,next) => {
url = req.query.url
texto1 = req.query.texto1
texto2 = req.query.texto2
if(!url)return res.json({
status:false,
motivo:'nao_tem_url'
})
if(!texto1)return res.json({
status:false,
motivo:'nao_tem_texto_1'
})
if(!texto2)return res.json({
status:false,
motivo:'nao_tem_texto_2'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
bala = await getBuffer(`https://api.memegen.link/images/custom/${texto1}/${texto2}.png?background=${url}`)
res.type('jpg')
res.send(bala)
})

app.get('/github',(req,res,next) => {
pessoa = req.query.usuario
if(!pessoa)return res.json({
status:false,
motivo:'cade_o_usuario'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
fetch(encodeURI(`https://api.github.com/users/`+pessoa))
.then(response => response.json())
.then(date => {
gitData =  date;
res.json({
criador:"Vitinho ツ",
status:true,
resultado:{
username: gitData.login,
id: gitData.id,
Node_ID: gitData.node_id,
url: gitData.html_url,
local: (gitData.location == null) ? 'não_tem' : gitData.location,
bio: (gitData.bio == null) ? 'não_tem' : gitData.bio,
twitter:  (gitData.twitter_username == null) ? 'não_tem' : gitData.twitter_username,
seguidores: gitData.followers,
seguindo: gitData.following,
criado: gitData.created_at,
atualizado: gitData.updated_at,
procura_trabalho: (gitData.hireable == null) ? 'Não' : gitData.hireable,
Site: (gitData.blog == "") ? 'Não' : gitData.blog,
repositorios: gitData.public_repos,
admin_de_Site: (gitData.site_admin == false) ? 'Não' : gitData.site_admin,
tipo: gitData.type,
empresa: (gitData.company == null) ? 'Não' : gitData.company,
email: (gitData.email == null) ? 'Não' : gitData.email
} 
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/wiki',(req,res) => {
texto = req.query.texto
if(!texto)return res.json({
status:false,
message:'Cade o parametro texto??'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
wiki.search(`${texto}`, 'pt')
.then(async (wikip) => {
const wikis = await axiosapp.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip[0].pageid}`)
const getData = Object.keys(wikis.data.query.pages)

res.json({
status:true,
resultado:wikis.data.query.pages[getData].extract
    })
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/twitter2',(req,res) => {
url = req.query.url
if(!url)return res.json({status:false, message:'Cade o parametro url??'})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
fetchTwitterMedia(url).then(data => {
res.json({status:true, resultado: data})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/youtube',(req,res) => {
q = req.query.q
if(!q)return res.json({
status:false,
message:'Cade o parametro q??'
})
token = req.query.token
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
ytSearch(q)
.then(e => {
res.json({
status:true,
resultado:e
})
}).catch(e => {
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/downloaders/youtube/play', async(req, res, next) => {
token = req.query.token;
text = req.query.query
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "Coloque o parametro: query"})
var searchYoutube = await yts(text)
var puxarResult = searchYoutube.videos[0]
var mp3 = await Mp3Download(puxarResult.url)
var mp4 = await Mp4Download(puxarResult.url)
if (!mp4 || !mp3) return res.json({erro: "Está faltando o url para realizar o download."})
RegistrarUser(token, req);
res.json({
     status: 200, 
     resultado: {
         titulo: mp4.title, 
         descrição: mp4.desc, 
         thumb: mp4.thumb, 
         visualizações: mp4.views, 
         canal: puxarResult.author,
         publicado_desde: puxarResult.ago, 
         tempo: puxarResult.timestamp, 
         publicado: mp4.uploadDate         
            }, 
         mp3: {
            dl_link: mp3.result, 
            size: mp3.size
             }, 
         mp4: {
           dl_link: mp4.result, 
           size: mp4.size, 
           quality: mp4.quality
        }
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})
})
})

app.get('/downloaders/ytdl', async(req, res, next) => {
token = req.query.token;
text = req.query.url
 if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "Coloque o parametro: url"})
var mp3 = await Mp3Download(text)
var mp4 = await Mp4Download(text)
if (!mp4 || !mp3) return res.json({erro: "Está faltando o url para realizar o download."})
RegistrarUser(token, req);
res.json({
     status: 200, 
     resultado: {
         titulo: mp4.title, 
         descrição: mp4.desc, 
         thumb: mp4.thumb, 
         visualizações: mp4.views, 
         publicado: mp4.uploadDate         
            }, 
         mp3: {
            dl_link: mp3.result, 
            size: mp3.size
             }, 
         mp4: {
           dl_link: mp4.result, 
           size: mp4.size, 
           quality: mp4.quality
        }
}).catch(e => {
res.json({
message: `Erro no Servidor Interno`
})
})
})

router.get('/ia/midjourney', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
var query = req.query.query;
if(!query)return res.json({status:false,message:'- Cadê o parâmetro query?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
if(key.map(i => i.token)?.includes(token)){    
hasil = `https://vihangayt.me/tools/midjourney?q=${query}`
data = await fetch(hasil).then(v => v.buffer())   
await fs.writeFileSync(bla + '/assets/Tempo/gostosinha.jpg', data)
res.sendFile(bla + '/assets/Tempo/gostosinha.jpg')
} else {
  res.json({erro:'Erro no Servidor Interno'})
}    
})

app.get('/ia/toanime', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
scrapper.toAnime(link).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/ia/tozombie', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
scrapper.toZombie(link).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/ia/remini', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
scrapper.EditRemini(link).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/ia/removebg', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
scrapper.RemoveBG(link).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

router.get('/outros/encurtador/tinyurl', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
var link = req.query.link;
if(!link)return res.json({status:false,message:'- Cadê o parâmetro link?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
TinyURL.shorten(link, function(link, err) {
if (!err) return res.json({erro: "Erro no Servidor Interno"})
RegistrarUser(token, req);
res.json({status: true, result: link})
});	
})
	
router.get('/outros/encurtador/cuttly', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
var link = req.query.link;
if(!link)return res.json({status:false,message:'- Cadê o parâmetro link?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
let randomapicuttly = apicuttly[Math.floor(Math.random() * apicuttly.length)]
var hasil = await fetchJson(`https://cutt.ly/api/api.php?key=${randomapicuttly}&short=${link}`)
if (!hasil.url.shortLink) return  res.json({erro: "Erro no Servidor Interno"})
RegistrarUser(token, req);
res.json({status: true, Criador: `@VictorGabriel`,result: hasil.url.shortLink})
});


router.get('/outros/encurtador/bitly', async (req, res, next) => {
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
var link = req.query.link;
if(!link)return res.json({status:false,message:'- Cadê o parâmetro link?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira uma url válido"})  
let randomapibitly = apibitly[Math.floor(Math.random() * apibitly.length)]
const bitly = new BitlyClient(randomapibitly)
RegistrarUser(token, req);
bitly.shorten(link).then(function(result) {
res.json({status: true, criador: `@VictorGabriel`, result : result.link})
}).catch(function(error) {
 res.json({erro: "Erro no Servidor Interno"})
});
})

router.get('/outros/encurtador/tinyurl', async (req, res, next) => {
var link = req.query.link
var alias = req.query.alias
var token = req.query.token;
if(!token)return res.json({status:false,message:'- Cadê o parâmetro token?'})
if(!alias)return res.json({status:false,message:'- Cadê o parâmetro alias?'})
if(!link)return res.json({status:false,message:'- Cadê o parâmetro link?'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
var islink = isUrl(link)
if (!islink) return res.json({ status : false, message : "[!] insira parâmetros de URL"})  
TinyURL.shortenWithAlias({url: link, alias: shortText(alias, 30)}).then(function(link)  {	
if (link == "Error") return res.json({erro: "Erro no Servidor Interno"})
RegistrarUser(token, req);
res.json({status: true, criador: `@VictorGabriel`, result: link})
})
})

router.get('/ia/googletradutor', async (req, res, next) => {
text = req.query.texto
ling = req.query.ling
token = req.query.token;
if (token === undefined) return res.status(404).send({status: 404, message: `insira o parâmetro token`});
	if (!text ) return res.json({ status : false, message : "digite o parâmetro de texto."})  
	if (!ling ) return res.json({ status : false, message : "parâmetro de entrada: ling. Você pode ver a lista de idiomas em https://cloud.google.com/translate/docs/languages"})  
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
defaultLang = 'en'
tld = 'pt'
let result
try {
result = await translate(`${text}`, {
tld,
to: ling,
})
} catch (e) {
result = await translate(`${text}`, {
tld,
to: defaultLang,
})
} finally {
res.json({
status: true,
result: result[0]
})}})

app.get('/animes/edits/video', async(req, res, next) => {
var { token, categoria } = req.query
if (!categoria) return res.json({ status : false,  message : "cade o parametro categoria"}) 
var EDT_ALEATORIOS = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/ALEATORIOS.json").toString())
var EDT_BLEACH = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/BLEACH.json").toString())
var EDT_CHAINSAW = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/CHAINSAW.json").toString())
var EDT_DEMON_SLAYER = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/DEMON_SLAYER.json").toString())
var EDT_DRAGONBALL = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/DRAGONBALL.json").toString())
var EDT_HUNTER_X = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/HUNTER_X.json").toString())
var EDT_JUJUTSU_KAISEN = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/JUJUTSU_KAISEN.json").toString())
var EDT_NARUTO = JSON.parse(fs.readFileSync("./base de dados/random/EDIT-ANIMES/NARUTO.json").toString())
RST_CTRG = [
{NAME: "aleatorios", RANDOM: EDT_ALEATORIOS[Math.floor(Math.random() * EDT_ALEATORIOS.length)]}, 
{NAME: "bleach", RANDOM: EDT_BLEACH[Math.floor(Math.random() * EDT_BLEACH.length)]},
{NAME: "chainsaw", RANDOM: EDT_CHAINSAW[Math.floor(Math.random() * EDT_CHAINSAW.length)]},
{NAME: "demon_slayer", RANDOM: EDT_DEMON_SLAYER[Math.floor(Math.random() * EDT_DEMON_SLAYER.length)]},
{NAME: "dragonball", RANDOM: EDT_DRAGONBALL[Math.floor(Math.random() * EDT_DRAGONBALL.length)]},
{NAME: "hunters", RANDOM: EDT_HUNTER_X[Math.floor(Math.random() * EDT_HUNTER_X.length)]},
{NAME: "jujutsu_kaisen", RANDOM: EDT_JUJUTSU_KAISEN[Math.floor(Math.random() * EDT_JUJUTSU_KAISEN.length)]},
{NAME: "naruto", RANDOM: EDT_NARUTO[Math.floor(Math.random() * EDT_NARUTO.length)]}
]
var EDT = RST_CTRG.map(i => i.NAME).indexOf(categoria)
if(EDT < 0) return res.json({message: "categoria indisponível."})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
if(key.map(i => i.token)?.includes(token)){
await getBuffer(RST_CTRG[EDT].RANDOM).then(editRest => {
res.type('mp4')
res.send(editRest)
}).catch(e => {
res.json({status: false, resultado:'❌️ Nenhuma resposta retornada ao servidor!️'})
})
} else {
res.json({status: false, resultado:'⏳️ Tempo de resposta esgotado!'})
}
})

app.get('/downloaders/youtube/audio', async (req, res, next) => {
token = req.query.token
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RegistrarUser(token, req);
try {
const down = await youtubedl(url);
const audio = await down.audio['128kbps'].download();
data = await fetch(audio).then(v => v.buffer())
await fs.writeFileSync(bla + '/assets/Tempo/Cache-EnviarPlay.mp3', data)
res.sendFile(bla + '/assets/Tempo/Cache-EnviarPlay.mp3')
} catch (err) {
console.log(err)
};
});

app.get('/downloaders/youtube/video', async (req, res, next) => {
token = req.query.token
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
RegistrarUser(token, req);
try {
const down = await youtubedl(url);
const video = await down.video['360p'].download();
data = await fetch(video).then(v => v.buffer())
await fs.writeFileSync(bla + '/assets/Tempo/Cache-EnviarPlay.mp4', data)
res.sendFile(bla + '/assets/Tempo/Cache-EnviarPlay.mp4')
} catch (err) {
console.log(err)
};
});

app.get('/downloaders/y2bs', (req, res) => {
var { token, url, type } = req.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if (!type) return res.json({ status : false,  message : "Cade o parametro type?"})
RegistrarUser(token, req);
y2bs(url, type).then(async(data) => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({erro: "Erro: "+e})
})
})

app.get('/downloaders/savefrom', (req, res) => {
var { token, url, type } = req.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message : "Cade o parametro url?"})
if (!type) return res.json({ status : false,  message : "Cade o parametro type?"})
RegistrarUser(token, req);
savef(url, type).then(async(data) => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({erro: "Erro: "+e})
})
})

app.get('/downloaders/audiomeme', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
RegistrarUser(token, req);
audioMeme.myinstants(query).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/tuna', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "Coloque o parametro: query"})
RegistrarUser(token, req);
audioMeme.tuna(query).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/drive', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RegistrarUser(token, req);
GDriveDl(url).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/mediafire', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "Coloque o parametro: url"})
RegistrarUser(token, req);
mediafiredl__(url).then(data => {
res.json({resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/instagram/story', async(req, res, next) => {
token = req.query.token;
usuario = req.query.usuario
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!usuario) return res.json({ status : false,  message: "cade o parametro usuario?"})
RegistrarUser(token, req);
instagramStoryUser(usuario).then(data => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/downloaders/multidownload', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "cade o parametro url?"})
RegistrarUser(token, req);
scraper.MultiDownload(url).then(data => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/pesquisas/imdb/busca', async(req, res, next) => {
token = req.query.token;
query = req.query.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "cade o parametro query?"})
RegistrarUser(token, req);
scraper.IMDb.searchFilm(query).then(data => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/pesquisas/imdb/info', async(req, res, next) => {
token = req.query.token;
url = req.query.url
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "cade o parametro url?"})
RegistrarUser(token, req);
scraper.IMDb.infoFilm(url).then(data => {
res.json({status: 200, resultado: data})
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno`})
})
})

app.get('/outros/rastreio', async(req, res, next) => {
var { token, code } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!code) return res.json({ status : false,  message: "faltando o parametro: code"})
RegistrarUser(token, req);
rastrearEncomendas(code)
.then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/pesquisas/pensador', async(req, res, next) => {
var { token, text } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
RegistrarUser(token, req);
pensador(text)
.then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/pesquisas/spotify', async(req, res, next) => {
var { token, query } = req.query
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "faltando o parametro: query"})
searchSpotify(query).then((resolve) => { 
res.json({status: 200, resultado: resolve})
}).catch(e => {
res.json({message: "Erro no Servidor Interno"})
})
})

app.get('/downloaders/spotify', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token)) return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
scrapper.SpotifyDL(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/capcut', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
scrapper.CapcutDL(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/threads', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
scrapper.ThreadsDL(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/downloaders/x', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
scrapper.TwitterDL(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/ia/simih', async(req, res, next) => {
var { text, language, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
RegistrarUser(token, req);
axios.post('https://api.simsimi.vn/v2/simtalk', new URLSearchParams({'text': text, 'lc': language})).then(async ({data: {message, status}}) => {
res.json({status: 200, resultado: message});
}).catch(error => {
res.json({status: 404, resultado: "Não entendi, por favor me ensine!"});
});
})

app.get('/consultas/ddd', async(req, res, next) => {
var { ddd, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!Number(ddd)) return res.json({ status : false, message: "faltando o parametro: ddd"})
RegistrarUser(token, req);
axios.get("https://brasilapi.com.br/api/ddd/v1/"+ddd).then(dataCities => {
res.json({status: 200, resultado: dataCities.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/ddi', async (req, res, next) => {
  const { ddi, token } = req.query;
  try {
    if (!key.map(i => i.token)?.includes(token)) {
      return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"));
    }
    if (key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) {
      return res.json({ message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções." });
    }
    if (!Number(ddi)) {
      return res.json({ status: false, message: "Faltando o parâmetro: ddi" });
    }
    const dadosPaises = await fetchJson("https://api-paises.pages.dev/paises.json");
    const paisesEncontrados = Object.values(dadosPaises).filter(pais => pais.ddi === Number(ddi));
    if (paisesEncontrados.length > 0) {
      const nomesPaises = paisesEncontrados.map(pais => pais.pais);
      return res.json({ resultado: nomesPaises });
    } else {
      return res.json({ resultado: `DDI +${ddi} não encontrado.` });
    }
  } catch (error) {
    return res.json({ status: 404, message: error.message });
  }
});

app.get('/pesquisas/cybercook/info', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
cyberCook.infoReceita(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/pesquisas/cybercook/busca', async(req, res, next) => {
var { token, query } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "faltando o parametro: query"})
RegistrarUser(token, req);
cyberCook.searchReceitas(query).then(data => {
res.json({status: 200, resultado: data});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/pesquisas/uptodown/info', async(req, res, next) => {
var { token, url } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!url) return res.json({ status : false,  message: "faltando o parametro: url"})
RegistrarUser(token, req);
uptodown.infoUptodown(url).then(response => {
res.json({status: 200, resultado: response});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/pesquisas/uptodown/busca', async(req, res, next) => {p
var { token, query } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "faltando o parametro: query"})
RegistrarUser(token, req);
uptodown.searchUptodown(query).then(data => {
res.json({status: 200, resultado: data});
}).catch(e => {
res.json({status: 404, message: `Erro no Servidor Interno.`})
})
})

app.get('/consultas/cnpj', async(req, res, next) => {
var { cnpj, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!cnpj) return res.json({ status : false, message: "faltando o parametro: cnpj"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`).then(dat => {
res.json({status: 200, resultado: dat.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/feriados', async(req, res, next) => {
var { ano, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!Number(ano)) return res.json({ status : false, message: "faltando o parametro: ano"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/feriados/v1/${ano}`).then(dataFeriados => {
res.json({status: 200, resultado: dataFeriados.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/municipios', async(req, res, next) => {
var { sigla_uf, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!sigla_uf) return res.json({ status : false, message: "faltando o parametro: sigla_uf"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/ibge/municipios/v1/${sigla_uf}?providers=dados-abertos-br,gov`).then(dataMunicipios => {
res.json({status: 200, resultado: dataMunicipios.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/dominio', async(req, res, next) => {
var { domain, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!domain) return res.json({ status : false, message: "faltando o parametro: domain"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/registrobr/v1/${domain}`).then(sDomain => {
res.json({status: 200, resultado: sDomain.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/ispb', async(req, res, next) => {
var { code, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!code) return res.json({ status : false, message: "faltando o parametro: code"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/banks/v1/${code}`).then(bankCode => {
res.json({status: 200, resultado: bankCode.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/bancos', async(req, res, next) => {
var { token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/banks/v1`).then(bankList => {
res.json({status: 200, resultado: bankList.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/consultas/cep', async(req, res, next) => {
var { code, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"));
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!code) return res.json({ status : false, message: "faltando o parametro: code"})
RegistrarUser(token, req);
axios.get(`https://brasilapi.com.br/api/cep/v2/${code}`).then(bankCode => {
res.json({status: 200, resultado: bankCode.data})
}).catch(error => {
res.json({status: 404, message: error})
})
})

app.get('/pesquisas/stalker/instagram', async(req, res, next) => {
var { usuario, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!usuario) return res.json({ status : false, message: "faltando o parametro: usuario"})
RegistrarUser(token, req);
try {
info = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${usuario}?apikey=GataDios`)
res.json({
status: true,
código: 200,
criador: `Ninja Spmc`, 
resultado: {
foto_perfil: info.result.photo_profile,
username: info.result.username,
nomefull: info.result.fullName,
posts: info.result.posts,
seguidores: info.result.followers,
seguindo: info.result.following,
biografia: info.result.bio
}
})
} catch (err) {
res.json({resultado: `${msgerro}`})
};
})

app.get('/pesquisas/stalker/tiktok', async(req, res, next) => {
var { usuario, token } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!usuario) return res.json({ status : false, message: "faltando o parametro: usuario"})
RegistrarUser(token, req);
try {
info = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${usuario}?apikey=GataDios`)
res.json({
status: true,
código: 200,
criador: `${criador}`, 
resultado: {
foto_perfil: info.result.user_picture,
username: info.result.username,
nickperfil: info.result.nickname,
seguidores: info.result.followers,
seguindo: info.result.following,
biografia: info.result.bio,
likes: info.result.likes,
videos: info.result.video
}
}) 
} catch (err) {
res.json({resultado: `${msgerro}`})
};
})

app.get('/pesquisas/letrasdemusicas',(req,res) => {
query = req.query.query
if(!query)return res.json({
status:false,
message:'Cadê o parâmetro: query'
})
token = req.query.token
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
const ly = new Lyrics(query)
ly.get().then(hasil => {
res.json({status:true, resultado: hasil})
}).catch(e => {
console.error(e)
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/outros/rastreio/aliexpress',(req,res) => {
var { id, token } = req.query
if(!id)return res.json({status:false, message:'Cadê o parâmetro: id'})
if(!token)return res.json({status:false,message:'Cadê o parâmetro: token'})
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
RegistrarUser(token, req);
aliexpress(id).then(hasil => {
res.json({status:true, resultado: hasil})
}).catch(e => {
console.error(e)
res.json({erro:'Erro no Servidor Interno'})
})
})

app.get('/pesquisas/stickerly', async(req, res, next) => {
var { token, text } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
RegistrarUser(token, req);
scrapper.SearchStickerLy(text)
   .then(response => {
       res.json({
         status: 200, 
         resultado: response
       });
   }).catch(e => {
     res.json({status: 404, message: `Erro no Servidor Interno.`})
  })
})

// Codei por cima da Bronxys? Sim! Achei interessante, meu primeiro código puxando por cima de uma api.
// Desde já, não faça spam de solicitações.
app.get('/pesquisas/grupos', async(req, res, next) => {
var { token, text } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
RegistrarUser(token, req);
randomK = ["sigma22", "sigma23", "sigma24"]
keySel = randomK[Math.floor(Math.random() * randomK.length)]
console.log("[SABAPIS] | Rota: [ /api/grupos ] - Usando a token: " + keySel)
axios.get(`https://api.bronxyshost.com.br/api-bronxys/grupos?apikey=${keySel}&q=${text}`)
.then((resultado) => {
return res.json(resultado.data)
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/ia/ocr', async(req, res, next) => {
var { token, image } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!image) return res.json({ status : false,  message: "faltando o parametro: image"})
RegistrarUser(token, req);
createWorker('eng').then(async(worker) => {
worker.recognize(image).then(async(e) => {
res.json({status: 200, resultado: e.data.text});
await worker.terminate();
})
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/nsfw/xvideos/pesquisa', async(req, res, next) => {
var { token, query } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "faltando o parametro: query"})
RegistrarUser(token, req);
xvideosSearch(query).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/nsfw/xnxx/pesquisa', async(req, res, next) => {
var { token, query } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!query) return res.json({ status : false,  message: "faltando o parametro: query"})
RegistrarUser(token, req);
xnxxSearch(query).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/nsfw/xnxx/download', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
xnxxdl(link).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/nsfw/xvideos/download', async(req, res, next) => {
var { token, link } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!link) return res.json({ status : false,  message: "faltando o parametro: link"})
RegistrarUser(token, req);
xvideosdl(link).then(async(e) => {
res.json({status: 200, resultado: e});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar os resultados, contrate o adminstrador."})
})
})

app.get('/ia/langdetect', async(req, res, next) => {
var { token, text } = req.query;
if(!key.map(i => i.token)?.includes(token))return res.sendFile(path.join(__dirname, "./public/", "token-invalido.html"))
if(key[key.map(i => i?.token)?.indexOf(token)]?.request <= 0) return res.json({message: "Parece que suas requisições acabaram, recarregue e comece a usar novamente sem interrupções."})
if (!text) return res.json({ status : false,  message: "faltando o parametro: text"})
RegistrarUser(token, req);
axios.get(`https://vihangayt.me/tools/langdetect?q=${text}`).then(async(e) => {
res.json({status: 200, resultado: {language_detected: e.data.data.lang || "Não foi possível detectar a língua."}});
}).catch((error) => {
res.json({error: "Ocorreu um erro ao filtrar o resultado, contrate o adminstrador."})
})
})
         
app.listen(PORT, () => {
console.log('Aplicativo aberto na porta: ' + PORT)
})

module.exports = app;