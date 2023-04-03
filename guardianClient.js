const apiKey = require ('./api_key');
const fetch = require ('node-fetch');

class GuardianClient {
    async fetchNewsData(search_text) {
        try {
            const response = await fetch(`https://content.guardianapis.com/search?q=${search_text}&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=${apiKey}`)
            const data = await response.json();
            if (!data || !data.response || !data.response.results || data.response.results.length === 0) {
                return {};
            }
            return data.response.results.map(result => ({
                headline: result.fields.headline,
                link: result.webUrl,
                thumbnail: result.fields.thumbnail,
            }));
        } catch (error) {
            console.error(error);
            return {};
        }
    }

};

module.exports = GuardianClient;