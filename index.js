const webNews = document.querySelector('.news')

const apiNews = "https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test"

// const apiSum = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${}`


async function getNews() {
	const response = await fetch(apiNews);
  const data = await response.json();
	console.log(data)
	return data;
}

getNews();

(async () => {
	for(let i = 0; i < 10; i++) {

		data = (await getNews()).response.results[i];

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

		// As a busy politician
		// I can click a news headline to see a summary and a photo of the news article
		// So that I can get an in depth understanding of a very important story
		
		title.addEventListener('click', () => {

		})

	}
})()


