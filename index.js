const webNews = document.querySelector('.news')

const apiNews = "https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test"

// function urlApi(url) {
// 	const sum = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${url}`;
// 	return sum
// }



async function getNews() {
	const response = await fetch(apiNews);
  const data = await response.json();
	return data;
}


(async () => {
	for(let i = 0; i < 10; i++) {

		data = (await getNews()).response.results[i];

		thisUrl = data.webUrl;
		const img = document.createElement('img');
		img.src = data.fields.thumbnail;
		webNews.appendChild(img);

		const title = document.createElement('h2');
		title.innerText = data.webTitle;
		webNews.appendChild(title);

		const url = document.createElement('a');
  	url.href = data.webUrl;
		url.innerText = 'Original article';

		webNews.appendChild(url);

		// title.addEventListener('click', {
			
		// })


		const newUrl = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${data.webUrl}`

		async function getSum() {
			const response = await fetch(newUrl);
			const data = await response.json();
			return data;
		}

		(async () => {
			data = await getSum()
			console.log(data.sentences.join())
		})()
	}
})()




