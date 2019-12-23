document.getElementById('get-news').addEventListener('click', fetchNewsData);

function fetchNewsData(){
  let guardianAPI = 'https://content.guardianapis.com/search?api-key=f4eb11b1-0a1b-4793-8122-376a8dde0093'
  let aylienAPI = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
  fetch(guardianAPI)
  .then(response => response.json())
  .then(articles => articles.response.results)
  .then(articles => {
    let headlines = articles.forEach(function(article) {
      article.webTitle
    })
    let readMore = articles.forEach(function(article) {
      `|  <a href="${article.webUrl}">Read article</a><br>
      </li><br>`
    })
    let output = '<h2>Headlines</h2>';
    output += '<ul>';
    output += headlines;
    output += readMore;
    output += '</ul>'
    document.getElementById("news").innerHTML = output;
  })

};
