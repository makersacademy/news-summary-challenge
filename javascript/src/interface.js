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
        let id = article.webUrl
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
            showArticle(imgURL, headlineText, id);
        })
    }
}

const getArticles = () => { 
    apisource.then((articles) => {
      printArticles(articles);
    });
  };

showArticle = function(imgURL, headline, id){
    articleImage = document.getElementById("article-pic");
    articleHeadline = document.getElementById("article-headline");
    articleSummary = document.getElementById("article-summary");
    articleLink = document.getElementById("article-link");
    articleLink.setAttribute("href", id)
    articleHeadline.textContent = headline;
    addSummary(articleSummary, id)
    articleImage.setAttribute("src", imgURL);
    toggleDisplays();
}

addSummary = function(element, id){
    fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + id)
    .then(response => response.json())
    .then(data => { 
        element.textContent = data.sentences});
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