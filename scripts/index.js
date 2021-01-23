newsApi = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
guardian = "http://content.guardianapis.com/search?show-fields=all"
summaryApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url="

let guardianNews = newsApi + guardian;

fetch(guardianNews)
.then((res) => res.json())
.then((data) => {
  let content = data.response.results
  let output = ''
  content.forEach(function(news) {
    output += `
    <div class="news-item" id="${news.webUrl}"> 
      <h2>${news.webTitle}</h2>
      <img src="${news.fields.thumbnail}" class="thumbnail">
    </div>
    `;

    let summaryUrl = summaryApi + news.webUrl;
    fetch(summaryUrl)
    .then((res) => res.json())
    .then((data) => {
      let result = data.sentences;
      let summary = ''
      result.forEach(function(sentence) {
        summary += `
        <div id="summary-${news.webUrl}">
          <h1 a href="${news.webUrl}">${news.webTitle}</h1>
          <img src="${news.fields.thumbnail}" class="thumbnail">
          <p>${sentence}</p>
        </div>
        `
      })
    })
  })
  document.getElementById("news-feed").innerHTML = output;
  
})
.catch((err) => console.log(err))