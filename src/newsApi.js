const axios = require("axios")

class NewsApi{
	constructor(){
		this.apiKey = process.env.API_KEY
	}

	fetchNews(callback){
		console.log('fetching the news...');
		axios.get(`https://content.guardianapis.com/search?page-size=12&show-fields=thumbnail&api-key=${
			this.apiKey}`)
		.then(res => res.data)
		.then(data => {
			callback(data.response.results)
			console.log(data.response);
			console.log(data.response.results[0].fields.thumbnail);
		})
		.catch(err => null)
	}
}


module.exports = NewsApi;