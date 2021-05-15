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
      displayArticle(articleId, thumbnail, headline)
    });

  };

  articles.forEach(renderArticle)

};