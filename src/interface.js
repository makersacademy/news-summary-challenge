const guardianInfo = fetch("https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail&show-blocks=all")
                     .then(response => response.json())
                     .then(data => {
                        return data.response.results
                     });

  articleIndex = document.getElementById("article-index")
  singleArticle = document.getElementById("show-single-article")


getArticles = (articles) => {
  toggleVisibility();
  
  renderArticle = (article) => {
    let articleId = article.webUrl
    let headline = article.webTitle
    let thumbnail = article.fields.thumbnail
    
    let link = document.createElement('a')
    link.setAttribute("href", "#")
    link.setAttribute("articleId", articleId)
    let headlineElement = document.createElement('h2')
    headlineElement.textContent = headline
    let imageElement = document.createElement('img')
    imageElement.setAttribute('src', thumbnail)
    let articleSection = document.createElement("div")

    link.appendChild(headlineElement)
    articleSection.appendChild(imageElement)
    articleSection.appendChild(link)
    articleIndex.appendChild(articleSection)

    link.addEventListener('click', function(event) {
      event.preventDefault();
      getSingleArticle(articleId, thumbnail, headline)
    });

  };

  articles.forEach(renderArticle)

};

getSummary = (targetElement, articleId) => {
  fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + articleId)
  .then(response => response.json())
  .then(data => {
    targetElement.textContent = data.sentences
  });
};


getSingleArticle = (articleId, thumbnail, headline) => {
  let articleThumbnail = document.getElementById("article-thumbnail")
  let articleHeadline = document.getElementById("article-headline")
  let articleSummary = document.getElementById("article-body")
  let articleLink = document.getElementById("article-link") 

  getSummary(articleSummary, articleId)

  articleLink.setAttribute("href", articleId)
  articleHeadline.textContent = headline
  articleThumbnail.setAttribute('src', thumbnail)

  let style = getComputedStyle(singleArticle, "display")
  toggleVisibility();
};


toggleVisibility = function(){
  let style = getComputedStyle(singleArticle, "display")
  if (style.display === "none") {
      singleArticle.style.display = "block";
      articleIndex.style.display = "none";
  } else {
      singleArticle.style.display = "none";
      articleIndex.style.display = "block";
  }
}

document.getElementById("return-to-index").addEventListener("click", function() {
  toggleVisibility();
});


findArticles = () => {
  guardianInfo.then((articles) => {
    getArticles(articles)
  });
};

findArticles();

