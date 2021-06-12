const makersApi = 'https://news-summary-api.herokuapp.com';
const guardianRequest = '/guardian?apiRequestUrl=';
const AylienRequest = '/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=';

function formatDate(date) {
	year = date.getFullYear();
	month = (date.getMonth() + 1).toString().padStart(2, '0');
	day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}

class Client {
	fetchHeadlines() {
		const headlineRequest = `http://content.guardianapis.com/search?show-fields=thumbnail&from-date=${formatDate(
			new Date()
		)}&order-by=newest`;
		const url = makersApi + guardianRequest + headlineRequest;
		return this.fetchData(url);
	}

	// fetchArticle(articleUrl) {
	// 	const url = makersApi + guardianRequest + articleUrl.replace('https', 'http') + '?show-fields=body';
	// 	return this.fetchData(url);
	// }

	fetchSummary(articleURL) {
		const url = makersApi + AylienRequest + articleURL;
		return this.fetchData(url);
	}

	async fetchData(url) {
		const response = await fetch(url);
		return response.json();
	}
}
