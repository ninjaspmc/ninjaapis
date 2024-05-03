const fetch = require('node-fetch');
const axios = require('axios');
const cheerio = require('cheerio');

async function xvideosdl(url) {
   return new Promise((resolve, reject) => {
     fetch(`${url}`, {method: 'get'})
       .then(res => res.text())
       .then(res => {
    let $ = cheerio.load(res, {xmlMode: false});
      const title = $("meta[property='og:title']").attr("content")
      const keyword = $("meta[name='keywords']").attr("content")
      const views = $("div#video-tabs > div > div > div > div > strong.mobile-hide").text()+" views"
      const vote = $("div.rate-infos > span.rating-total-txt").text()
      const likes = $("span.rating-good-nbr").text()
      const deslikes = $("span.rating-bad-nbr").text()
      const thumb = $("meta[property='og:image']").attr("content")
      const url = $("#html5video > #html5video_base > div > a").attr("href")
         resolve({title, url, keyword, views, vote, likes, deslikes, thumb})
     })
  })
};

async function xvideosSearch(url) {
   return new Promise(async (resolve) => {
      await axios.request(`https://www.xvideos.com/?k=${url}&p=${Math.floor(Math.random() * 9) +1}`, {method: "get"}).then(async result => {
      let $ = cheerio.load(result.data, {xmlMod3: false});
        let title = [];
        let duration = [];
        let quality = [];
        let url = [];
        let thumb = [];
        let hasil = [];
           $("div.mozaique > div > div.thumb-under > p.title").each(function(a,b){
             title.push($(this).find("a").attr("title"));
             duration.push($(this).find("span.duration").text());
             url.push("https://www.xvideos.com"+$(this).find("a").attr("href"));
        });
           $("div.mozaique > div > div.thumb-under").each(function(a,b){
             quality.push($(this).find("span.video-hd-mark").text());
        });
           $("div.mozaique > div > div > div.thumb > a").each(function(a,b){
             thumb.push($(this).find("img").attr("data-src"));
        });
      for(let i = 0; i < title.length; i++) {
         hasil.push({title: title[i], duration: duration[i], quality: quality[i], thumb: thumb[i], url: url[i]});
     }
        resolve(hasil);
     })
  })
};  

async function xnxxdl(URL) {
  return new Promise((resolve, reject) => {
    fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = $('meta[property="og:title"]').attr('content');
      const duration = $('meta[property="og:duration"]').attr('content');
      const image = $('meta[property="og:image"]').attr('content');
      const videoType = $('meta[property="og:video:type"]').attr('content');
      const videoWidth = $('meta[property="og:video:width"]').attr('content');
      const videoHeight = $('meta[property="og:video:height"]').attr('content');
      const info = $('span.metadata').text();
      const videoScript = $('#video-player-bg > script:nth-child(6)').html();
      const files = {
        low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
        high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
        HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
        thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
        thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
        thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
        thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]};
      resolve({title, URL, duration, image, videoType, videoWidth, videoHeight, info, files});
    }).catch((err) => reject({code: 503, error: err}));
  });
};

async function xnxxSearch(query) {
  return new Promise((resolve, reject) => {
    const baseurl = 'https://www.xnxx.com';
    fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
      const $ = cheerio.load(res, {xmlMode: false});
      const title = [];
      const url = [];
      const desc = [];
      const results = [];
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb').each(function(c, d) {
          url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
        });
      });
      $('div.mozaique').each(function(a, b) {
        $(b).find('div.thumb-under').each(function(c, d) {
          desc.push($(d).find('p.metadata').text());
          $(d).find('a').each(function(e, f) {
            title.push($(f).attr('title'));
          });
        });
      });
      for (let i = 0; i < title.length; i++) {
        results.push({title: title[i], info: desc[i], link: url[i]});
      }
      resolve(results);
    }).catch((err) => reject({code: 503, status: false, result: err}));
  });
};

module.exports = { xvideosdl, xvideosSearch, xnxxSearch, xnxxdl }