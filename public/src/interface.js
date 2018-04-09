news = new AllNews();
articleRequest = new ArticleRequest()
summaryRequest = new SummaryRequest()
articleRequest.getNews()

function loadArticles() {
  response = articleRequest.response
  for(i=0; i<response.length; i++ ) {
    if (response[i].fields) {
      var image = response[i].fields.thumbnail
    } else {
      var image = 'https://developersushant.files.wordpress.com/2015/02/no-image-available.png'
    }
    var title = response[i].webTitle
    var website = response[i].webUrl
    news.add(new NewsArticle(image, website, title))
  }
}

function drawList() {
   emptyList();

   var newsArray = news.all();
   for(i=0; i<newsArray.length; i++ ) {
     var newArticleDiv = document.createElement("div");

     var titleElement = document.createElement("h1");
     var title = newsArray[i].title()
     var titleContent = document.createTextNode(title);
     titleElement.appendChild(titleContent);
     newArticleDiv.appendChild(titleElement);

     var imageElement = document.createElement("img");
     imageElement.src = newsArray[i].photo()
     imageElement.setAttribute("style", "height: 420px;");
     imageElement.setAttribute("style", "width: 700px;");
     newArticleDiv.appendChild(imageElement);

     var articleId = `${i}`;
     newArticleDiv.id = articleId;

     document.getElementById("stories").appendChild(newArticleDiv)
     document.getElementById(articleId).onclick = function() {showSummary(this.id)};
   }
}

function emptyList() {
  var newsArray = news.all();
  if (document.getElementById(0)) {
  for(i=0; i<newsArray.length; i++ ) {
    var div = document.getElementById(i)
    div.remove();
  }
  }
}

function showSummary(Id) {
  var bigSummary = document.getElementById('summary')
  var summaryDiv = document.getElementById('stories')
  bigSummary.style.display = "block";
  summaryDiv.style.display = "none";
  setSummary(Id);
};

function showAllNews(Id) {
  var bigSummary = document.getElementById('summary')
  var summaryDiv = document.getElementById('stories')
  bigSummary.style.display = "none";
  summaryDiv.style.display = "block";
};

function setSummary(Id) {
  var webUrl = news.all()[Id].webUrl();
  summaryRequest.getSummary(webUrl)
  var summary = summaryRequest.response
  document.getElementById("summary-text").innerHTML = summary;
}
