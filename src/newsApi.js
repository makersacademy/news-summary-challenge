
class NewsApi{
	constructor(){
		this.apiKey = process.env.API_KEY
	}

	async fetchNews(callback){
		console.log('fetching the news...');
		try{
			let response = await fetch(`https://content.guardianapis.com/search?api-key=${this.apiKey}`)
			let data = await response.json()
			// console.log(data.response.results[0].webTitle);
			// console.log(data.response.results);
			callback(data)
		}catch(error){
			alert(error)
			process.exit(1)
		}
		
	}
}


module.exports = NewsApi;