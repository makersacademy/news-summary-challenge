//this is when not all the style sheed has been loaded
document.addEventListener('DOMContentLoaded', function(event) {
  articleLog = new ArticleLog(mockResponse)
  addNews(articleLog.headlines());
})

//this is when the page is fullyloaded
window.onload = function() {
  featureTest();
}
