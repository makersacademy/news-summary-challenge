articleList = document.getElementById("articles-list")
singleArticle = document.getElementById("single-article")

const apisource =
    fetch("https://content.guardianapis.com/search?api-key=test&show-fields=thumbnail&show-blocks=all")
    .then(response => response.json())
    .then(data => { 
        return data.response.results });

printArticles = function(articles){ 
    for(article of articles){
        let imgURL = article.fields.thumbnail
        let headlineText = article.webTitle
        let id = article.id
        let summary = "lorem ipsum"
        let link = document.createElement("a")
        link.setAttribute("href", "#")
        let articleSection = document.createElement("div")
        let imgSection = document.createElement("img")
        let headlineSection = document.createElement("h2")
        imgSection.setAttribute("src", imgURL)
        headlineSection.textContent = headlineText
        link.setAttribute("id", id)
        articleSection.appendChild(imgSection)
        link.appendChild(headlineSection)
        articleSection.appendChild(link)
        articleList.appendChild(articleSection) 
        
        link.addEventListener("click", function(event){
            event.preventDefault();
            showArticle(imgURL, headlineText, summary);
        })
    }
}

const getArticles = () => { 
    apisource.then((articles) => {
      printArticles(articles);
    });
  };

showArticle = function(imgURL, headline, summary){
    articleImage = document.getElementById("article-pic");
    articleHeadline = document.getElementById("article-headline");
    articleSummary = document.getElementById("article-summary");
    articleImage.setAttribute("src", imgURL);
    articleHeadline.textContent = headline;
    articleSummary.textContent = summary;
    toggleDisplays();
}

toggleDisplays = function(){
    let style = getComputedStyle(singleArticle, "display")
    if (style.display === "none") {
        singleArticle.style.display = "block";
        articleList.style.display = "none";
    } else {
        singleArticle.style.display = "none";
        articleList.style.display = "block";
    }
}

document.getElementById("back-to-list").addEventListener("click", function(event){
    toggleDisplays();
})

getArticles()