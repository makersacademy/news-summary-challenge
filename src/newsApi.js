
class NewsApi{
	constructor(){
		this.apiKey = process.env.API_KEY
	}

	async fetchNews(){
		console.log('fetching the news...');
		let response = await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}`)
		let data = await response.json()
		console.log(data.response.results);
	}
}


module.exports = NewsApi;