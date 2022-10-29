
const url = 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2020-02-20&api-key=c0cfe07c-acda-4fd8-8a6b-1a24f21528d3'

fetch(url)
.then(response => {
    return response.json();
})
.then(data => {
  let newsContainer = document.getElementById('newsTitle');
  let newsArray = data.response.results
  for(let i = 0; i < newsArray.length; i++) {
    let newsStory = `<a class='title' data-newsID="${i}" href="${newsArray[i].webUrl}">${newsArray[i].webTitle}</a></br>`
    newsContainer.innerHTML += newsStory
  }
})
.catch(error => console.error(error));

let newsTitles = document.getElementById('title');
console.log(newsTitles);
newsTitles.addEventListener('click', (e) => {
  const singleNews = e.path.find(item)
});