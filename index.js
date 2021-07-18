const webNews = document.querySelector('.news')

const api_url = "https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test"

async function getNews() {
	const response = await fetch(api_url);
  const data = await response.json();
	// console.log(data.response.results[1])
	return data;
}

getNews();

(async () => {
	for(let i = 0; i < 10; i++) {

		data = (await getNews()).response.results[i];

		const title = document.createElement('h2');
		title.innerText = data.webTitle;
		webNews.appendChild(title);

		const url = document.createElement('a');
  	url.href = data.webUrl;
		url.innerText = 'Original article';

		webNews.appendChild(url);

		const img = document.createElement('img');
		img.src = data.fields.thumbnail;
		webNews.appendChild(img);
	}
})()


