fetch('https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2020-02-20&api-key=c0cfe07c-acda-4fd8-8a6b-1a24f21528d3')
.then(response => {
    const contentType = response.headers.get('content-type');
    if (!contentType ) {
      throw new TypeError("ERROR");
    }
    return response.json();
})
.then(data => {
  let newsContainer = document.getElementById('newsTitle');
  let newsArray = data.response.results
  for(let i = 0; i < 10; i++) {
    let newsStory = `<a href>${newsArray[i].webTitle}</a></br>`
    newsContainer.innerHTML += newsStory
    console.log(newsArray);
  }
})
.catch(error => console.error(error));