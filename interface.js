
fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test')
.then(response => {
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new TypeError("Oops, we haven't got JSON!");
    }
    return response.json();
})
.then(data => {
  let newsContainer = document.getElementById('news-summary');
  let newsArray = data.response.results
  for(let i = 0; i < 10; i++) {
    let newsStory = `<div>${newsArray[i].webTitle}</div>`
    newsContainer.innerHTML += newsStory
  }
})
.catch(error => console.error(error));




