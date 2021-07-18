const webNews = document.querySelector('.news');
const apiNews = "https://content.guardianapis.com/politics?&show-fields=thumbnail&api-key=test";
const modal = document.querySelector('.modal')
const modalBg = document.querySelector('.modal-bg');
const fullImg = document.querySelector('.full-img');
const sumText = document.querySelector('.sum-text');
const sumTitle = document.querySelector('.sum-title');
const link = document.querySelector('.modal-a')

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
		
		const url = document.createElement('a')
		 url.href = data.webUrl;


		const newUrl = `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${data.webUrl}`

		async function getSum() {
			const response = await fetch(newUrl);
			const data = await response.json();
			return data;
		}
		
		title.addEventListener('click', function(){
			modalBg.classList.add('bg-active');
			fullImg.src = img.src;
			sumTitle.innerText = title.innerText;
			link.href = url.href;
			
		(async () => {
		  	data = await getSum();
				text = data.sentences.join();
				sumText.innerText = text;
			})()
		}
	);

		window.addEventListener('click', function(e){
			if (e.target == modalBg) {
			modalBg.classList.remove('bg-active');
		}
		});
	}
})()




