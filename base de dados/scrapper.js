/*  
  • Créditos: @Darkzy7 | @Vitinho | @SabAPIs
  • Usamos a documentação betabotz-tools, postado por Lann(BetaBotz) no NPMJS. 
  • Link do módulo: https://www.npmjs.com/package/betabotz-tools
*/

const axios = require('axios');
const FormData = require('form-data');
const Jimp = require('jimp');

const APIKEY__ = ["GfJvbnSm", "6EbqDVxp", "iuicJ7Dn", "P5zrBdRv", "3pXcz2ML", "xnd8ihxp", "XR3UAqFD", "XxuJnFNR"]
const BETA_APIKEY = APIKEY__[Math.floor(Math.random() * APIKEY__.length)]

class ScrapperData {

static async imageToZombie(url) {
   const image = await Jimp.read(url);
  const buffer = await new Promise((resolve, reject) => {
  image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
  if (err) {reject("Ocorreu um erro ao recuperar dados...")} else {resolve(buf)}})});
  const form = new FormData();
  form.append('image', buffer, {filename: 'tozombie.jpg'});
  try {
    const { data } = await axios.post("https://tools.betabotz.org/ai/tozombie", form, {headers: { ...form.getHeaders(), 'accept': 'application/json'}});
    return {imagem: data.result, tamanho: data.size};
  } catch (error) {
    console.error('Falha na identificação:', error);
    return {error:'Falha na identificação.'};
  }
}

static async imageToAnime(url) {
   const image = await Jimp.read(url);
  const buffer = await new Promise((resolve, reject) => {
  image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
  if (err) {reject("Ocorreu um erro ao recuperar dados...")} else {resolve(buf)}})});
  const form = new FormData();
  form.append('image', buffer, {filename: 'tozombie.jpg'});
  try {
    const { data } = await axios.post("https://tools.betabotz.org/ai/toanime", form, {headers: { ...form.getHeaders(), 'accept': 'application/json'}});
    return {imagem: data.result, tamanho: data.size};
  } catch (error) {
    console.error('Falha na identificação:', error);
    return {error:'Falha na identificação.'};
  }
}

static async EditRemini(url) {
   const image = await Jimp.read(url);
  const buffer = await new Promise((resolve, reject) => {
  image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
  if (err) {reject("Ocorreu um erro ao recuperar dados...")} else {resolve(buf)}})});
  const form = new FormData();
  form.append('image', buffer, {filename: 'tozombie.jpg'});
  try {
    const { data } = await axios.post("https://tools.betabotz.org/ai/remini", form, {headers: { ...form.getHeaders(), 'accept': 'application/json'}});
    return {imagem: data.result, tamanho: data.size};
  } catch (error) {
    console.error('Falha na identificação:', error);
    return {error:'Falha na identificação.'};
  }
}

static async RemoveBG(url) {
   const image = await Jimp.read(url);
  const buffer = await new Promise((resolve, reject) => {
  image.getBuffer(Jimp.MIME_JPEG, (err, buf) => {
  if (err) {reject("Ocorreu um erro ao recuperar dados...")} else {resolve(buf)}})});
  const form = new FormData();
  form.append('image', buffer, {filename: 'tozombie.jpg'});
  try {
    const { data } = await axios.post("https://tools.betabotz.org/ai/removebg", form, {headers: { ...form.getHeaders(), 'accept': 'application/json'}});
    return {imagem: data.result, tamanho: data.size};
  } catch (error) {
    console.error('Falha na identificação:', error);
    return {error:'Falha na identificação.'};
  }
}

static CapcutDownloader(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://tools.betabotz.org/tools/capcutdl?url=`+url).then((res) => {
         resolve({title: res.data.result.title, description: res.data.result.description, fullUse: res.data.result.digunakan, videoOriginal: res.data.result.video_ori, authorProfile: res.data.result.author_profile})
     })    
      } catch(e) {
       reject(e)
     }
   })
}

static ThreadsDownloader(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://tools.betabotz.org/tools/threadsdl?url=`+url).then((res) => {
         resolve(res.data.result)
     })    
      } catch(e) {
       reject(e)
     }
   })
}

static SpotifyDownloader(url) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://api.betabotz.org/api/download/spotify?url=${url}&apikey=${BETA_APIKEY}`).then((res) => {
         resolve(res.data.result.data)
     })    
      } catch(e) {
       reject(e)
     }
   })
}

static TwitterDownloader(url) {
  return new Promise((resolve, reject) => {
    try {
     axios.get(`https://api.lolhuman.xyz/api/twitter?apikey=gataDios&url=`+url).then((res) => {
         resolve(res.data.result)
     })    
      } catch(e) {
       reject(e)
     }
   })
}

static SearchStickerly(text) {
  return new Promise((resolve, reject) => {
    try {
     axios.get(`https://api.lolhuman.xyz/api/stickerwa?apikey=gataDios&query=${text}`).then((res) => {
         resolve(res.data.result)
     })
      } catch(e) {
       reject(e)
     }
   })
}   

}

module.exports = new Object({
   toZombie: (url) => ScrapperData.imageToZombie(url),
   toAnime: (url) => ScrapperData.imageToAnime(url),
   EditRemini: (url) => ScrapperData.EditRemini(url),
   RemoveBG: (url) => ScrapperData.RemoveBG(url),
   CapcutDL: (url) => ScrapperData.CapcutDownloader(url),
   ThreadsDL: (url) => ScrapperData.ThreadsDownloader(url),
   TwitterDL: (url) => ScrapperData.TwitterDownloader(url),
   SpotifyDL: (url) => ScrapperData.SpotifyDownloader(url),
   SearchStickerLy: (text) => ScrapperData.SearchStickerly(url)
})