/* Scrapper - Créditos à AtroxDev & Vitinho. */

const getTwitterMedia = require('get-twitter-media'); // Módulo que baixa do Twitter

async function fetchTwitterMedia(url) {
var returnUrl = url.replace("x.com", "twitter.com") 
// Realiza a substituição do url que estiver com "x.com" para "twitter.com" e realiza o envio.
  try {
      const media = await getTwitterMedia(returnUrl, {text: true}); // Const necessária para executar a função.
    if (media.found) {
      if (media.type === 'image' && media.media.length > 0) {
        return(media) // Retorna o resultado.
      } else if (media.type === 'video' && media.media.length > 0) {
        return(media) // Retornar o resultado.
      } else {
        return {erro: 'Tipo de mídia não suportado ou mídia vazia.'}
      }
    } else {
      return {erro: 'Mídia não encontrada.'} 
      // Retorna o erro que a mídia não foi encontrada.
    }
  } catch (error) {
      return {erro: "Erro ao obter mídia do Twitter ou erro no Módulo: " + error}  
    // Retorna o erro identificado ao executar a função.
  }
}

module.exports = { fetchTwitterMedia }