class NewsApi{
	constructor(){
	
	}

	async fetchNews(){
		console.log('fetching the news...');
		let response = await fetch('https://content.guardianapis.com/search?api-key=7060cf70-7ba3-4c88-9143-af6ba88668ec')
		let data = await response.json()
		console.log(data.response.results);
		
	}
}

module.exports = NewsApi;