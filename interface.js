function getNewsData() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail").then(response => {
    return response.json();
  })
}

function renderArticle(articleData, index) {
  let articleHeadlineHTML = `<h3><a href=#${index}>${articleData.webTitle}</a></h3>`;
  let articleThumbnail = `<img src='${articleData.fields.thumbnail}'>`
  return {
    "headline": `${articleHeadlineHTML}`,
    "thumbnail": `${articleThumbnail}`
  };
}

function displayAll(articles) {
  articles.forEach((article, index) => {
    let rendered = renderArticle(article, index);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', `<br>`);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', rendered.thumbnail);
    document.getElementById("headlines").insertAdjacentHTML('beforeend', rendered.headline);
  })
}

getNewsData().then(news => {
  let newsData = news.response.results
  displayAll(newsData)
});

function hashChanged() {
  console.log("Hash has been changed")
}

window.addEventListener('hashchange', hashChanged, false)

// Get the modal
var modal = document.getElementById("articleModal");

// Get the button that opens the modal
var btn = document.getElementById("selectArticle");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
