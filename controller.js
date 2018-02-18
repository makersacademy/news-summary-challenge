//this is when not all the style sheed has been loaded
document.addEventListener('DOMContentLoaded', function(event) {
  newsStore = new NewsStore(mockResponse)
  addNews(newsStore.headlines());
})

//this is when the page is fullyloaded
window.onload = function() {
  featureTest();
}
