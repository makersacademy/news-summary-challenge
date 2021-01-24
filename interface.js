let newsFeed = new NewsFeed();

function getArticles() {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=all')
    .then(
      function(response) {
        response.json().then(function(data) {
          data.response.results.forEach(function(result) {
            let title = `${result.webTitle}`
            let text = `${result.fields.bodyText}`
            let thumbnail = `${result.fields.thumbnail}`
            let url = `${result.webUrl}`
            let newArticle = new Article(title, text, thumbnail, url);
            newsFeed.addNewArticle(newArticle);
            let articlesDiv = document.getElementById("article-list")
            articlesDiv.insertAdjacentHTML('beforeend', `<img class="${result.webUrl}"src="${result.fields.thumbnail}"><br>`)
            articlesDiv.insertAdjacentHTML('beforeend', `<a id="${result.webUrl}" href="#${result.webUrl}">${result.webTitle}</a><br>`)
          })
        });
      })
}
getArticles()

function addArticleToNewsFeed(article) {
  let newArticle = new Article(`"${article.webTitle}", "${article.bodyText}", "${article.id}", "${article.webUrl}"`);
  newsFeed.addNewArticle(newArticle);
}

window.addEventListener("hashchange", function() {
  hideMainFeed();
  displayBackButton();
  let currentHash = getCurrentHash();
  let article = newsFeed.articles.filter(function(article) {
    return article.url === currentHash;
  })
  let articlesDiv = document.getElementById("article-summary")
  articlesDiv.insertAdjacentHTML('beforeend', `<img src="${article[0].thumbnail}"><br>`)
  articlesDiv.insertAdjacentHTML('beforeend', `<a target="_blank" rel="noopener noreferrer" href="${article[0].url}">${article[0].headline}</a><br>`)
  articlesDiv.insertAdjacentHTML('beforeend', `<p>${article[0].textBody}</p><br>`)
})

let backButton = document.getElementById('back-button')
backButton.addEventListener("click", function() {
    history.replaceState(null, null, " ");
    displayNewsFeed();
    document.getElementById('article-summary').innerHTML = "";
    hideBackButton()
})

function hideMainFeed() {
  var hidden = document.getElementById("article-list")
  hidden.style.display = "none";
}

function displayBackButton() {
  var homeButton = document.getElementById('back-button')
  homeButton.style.display = (status !== 'open') ? 'block' : 'none';
}

function getCurrentHash() {
  return window.location.hash.split("#")[1]
}

function displayNewsFeed() {
  var hidden = document.querySelector('#article-list');
  hidden.style.display = (status !== 'open') ? 'block' : 'none';
}

function hideBackButton() {
  var homeButton = document.getElementById('back-button')
  homeButton.style.display = (status === 'open') ? 'block' : 'none';
}

// fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${currentHash}`)
//   .then(
//     function(response) {
//       response.json().then(function(data) {
//         console.log("test")
//         let articlesDiv = document.getElementById("article-summary")
//         articlesDiv.insertAdjacentHTML('beforeend', `<p>${data.sentences.join(" ")}</p><br`)
//       });
//     })
