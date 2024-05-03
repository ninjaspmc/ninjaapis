const axios = require("axios")
const cheerio = require("cheerio")

function igdl(url) {
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
                //console.log(jsonData); 

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
                    
                    let bufferContent = result;

                    resolve({ status: true, bufferContent });

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

module.exports = { igdl }
