(function(exports) {
 function Article(title, articleUrl, pubDate){
   this.title = title;
   this.articleUrl = articleUrl;
   this.pubDate = pubDate;
 };

 Article.prototype.returnTitle = function () {
   return this.title;
 };


 Article.prototype.returnArticleBody = function () {

 var url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + API_KEY;

 function setup() {
   noCanvas();
   loadJSON(url, gotData);
 }

 function gotData(data) {
   var articles = data.response.docs;

   for (var i = 0; i < articles.length; i++) {
       createElement('articleBody'), articles[i].headline.main;
       createP(articles[i].snippet);
 }
 }


 exports.Article = Article;
})(this);
