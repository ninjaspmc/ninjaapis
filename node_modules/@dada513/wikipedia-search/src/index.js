import http from 'axios'
import htmlToText from 'html-to-text'

/**
 * A wikipedia article
 * @typedef {Object} WikiArticle
 * @property {string} url - The URL of the article
 * @property {string} textSnippet - A summary of the article, in plain text
 * @property {string} htmlSnippet - A description of the article, in HTML
 * @property {string} timestamp - Article last updated
 * @property {number} pageid - The ID of the page
 * @property {number} wordcount - The number of words in the article
 * @property {number} size - The size of the article
 */

/**
 * Searches Wikipedia
 * @method
 * @param {string} keyword - The search query
 * @param {string} language - The wikipedia language code
 * @returns {WikiArticle[]} - The article list
 * @example
 * const wikipedia = require("@dada513/wikipedia-search");
 *
 * async function app() {
 *   const res = await wikipedia.search("Hello, world", "en");
 *   console.log(res);
 * }
 *
 * app();
 */
export const search = async (keyword, language) => {
  const axios = http.create({
    baseURL: `https://${language || 'en'}.wikipedia.org`
  })
  const res = await axios.get('/w/api.php', {
    params: {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: keyword,
      prop: 'info',
      inprop: 'url'
    }
  })
  const results = []
  res.data.query.search.forEach((result) => {
    result.textSnippet = htmlToText.fromString(result.snippet)
    result.url = `${axios.defaults.baseURL}/wiki/${result.title.replace(
      ' ',
      '_'
    )}`
    result.htmlSnippet = result.snippet
    results.push(result)
  })
  return results
}
