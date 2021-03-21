articleList = document.getElementById("articles-list")

const apisource =
    fetch("https://content.guardianapis.com/search?api-key=test")
    .then(response => response.json())
    .then(data => { 
        return data.response.results });

printArticles = function(articles){
    for(article of articles){
        let headlineText = article.webTitle
        let id = article.id
        let articleSection = document.createElement("DIV")
        let headlineSection = document.createElement("h2")
        headlineSection.setAttribute("class", "headline")
        headlineSection.textContent = headlineText
        articleSection.setAttribute("id", id)
        articleSection.appendChild(headlineSection)
        articleList.appendChild(articleSection)   
    }
}

const getArticles = () => { 
    apisource.then((articles) => {
      printArticles(articles);
    });
  };

  getArticles()