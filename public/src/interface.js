news = new AllNews();
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))
news.add(new NewsArticle('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqxVhjttLBd99r1ieH70XW9vRLCWEsxYW4c0yWZGKv6oAEEocrSQ', 'Description', 'Summary', 'TITLE'))

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

     var descElement = document.createElement("p");
     var desc = newsArray[i].desc()
     var descContent = document.createTextNode(desc);
     descElement.appendChild(descContent);
     newArticleDiv.appendChild(descElement);

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
