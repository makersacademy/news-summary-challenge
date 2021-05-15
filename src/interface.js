const guardianInfo = fetch("https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail&show-blocks=all")
                     .then(response => response.json())
                     .then(data => {
                        return data.response.results
                     });




getArticles = (articles) => {
  
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
    document.getElementById("article-index").appendChild(articleSection)

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
    console.log(data)
    console.log(data.sentences)
  });
};


getSingleArticle = (articleId, thumbnail, headline) => {
  articleThumbnail = document.getElementById("article-thumbnail")
  articleHeadline = document.getElementById("article-headline")
  articleSummary = document.getElementById("article-body")
  articleLink = document.getElementById("article-link") 

  articleLink.setAttribute("href", articleId)
  articleHeadline.textContent = headline
  articleThumbnail.setAttribute('src', thumbnail)

  getSummary(articleSummary, articleId)
  // toggleVisibility();
};




