const axios = require("axios");
const cheerio = require("cheerio");

const getZahwazein = "zenzkey_6e1fb91336"
const getLolhuman = "GataDios"

function instagramStoryUser(user) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://api.zahwazein.xyz/downloader/instagram/story?apikey=${getZahwazein}&username=${user}`)
      .then((res) => {
         resolve(res.data.result)
     })    
      } catch(e) {
       reject(e)
     }
   })
}

function igProfileStalk(user) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://api.lolhuman.xyz/api/stalkig/${user}?apikey=${getLolhuman}`)
      .then((res) => {
      axios.get(`https://api.zahwazein.xyz/stalker/ig?username=${user}&apikey=${getZahwazein}`)
      .then((data) => {
         resolve({
         profile_photo: data.data.result.hd_profile_pic_url_info.url, 
         username: res.data.result.username, 
         fullname: res.data.result.fullname, 
         is_private: data.data.result.is_private, 
         posts: res.data.result.posts, 
         followers: res.data.result.followers, 
         following: res.data.result.following, 
         biography: res.data.result.bio,
         is_music_on_profile: data.data.result.has_music_on_profile,
         is_business: data.data.result.is_business,
         is_verified: data.data.result.is_verified,
         is_highlight: data.data.result.has_highlight_reels
         })
        })
     })
    } catch(e) {
    resolve({status: false, message: e.message})
    }
  })
}

function unsplashSearch(query) {
  return new Promise((resolve, reject) => {
    try {
      axios.get(`https://vihangayt.me/search/unsplash?q=${query}`)
      .then((res) => {
         resolve(res.data.data)
     })    
      } catch(e) {
       reject(e)
     }
   })
}

module.exports = { 
     instagramStoryUser,
     igProfileStalk,
     unsplashSearch
} 