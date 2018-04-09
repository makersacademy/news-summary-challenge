news = new AllNews();
articleRequest = new ArticleRequest()
articleRequest.getNews()

function loadArticles() {
  response = articleRequest.response
  for(i=0; i<response.length; i++ ) {
    var image = response[i].fields.thumbnail
    var title = response[i].webTitle
    var summary = 'summary'
    news.add(new NewsArticle(image, summary, title))
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
  var text = news.all()[Id].summary();
  document.getElementById("summary-text").innerHTML = text;
}
