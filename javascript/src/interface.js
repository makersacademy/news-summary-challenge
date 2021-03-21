articleList = document.getElementById("articles-list")

const apisource =
    fetch("https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail")
    .then(response => response.json())
    .then(data => { 
        return data.response.results });

printArticles = function(articles){
    for(article of articles){
        let imgURL = article.fields.thumbnail
        let headlineText = article.webTitle
        let id = article.id
        let articleSection = document.createElement("div")
        let imgSection = document.createElement("img")
        let headlineSection = document.createElement("h2")
        imgSection.setAttribute("src", imgURL)
        headlineSection.textContent = headlineText
        articleSection.setAttribute("id", id)
        articleSection.appendChild(imgSection)
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