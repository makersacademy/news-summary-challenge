(function(exports) {
  function NewsController() {
    this.url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
  }

  NewsController.prototype.renderPage = function() {  
    fetch(this.url)
      .then(response => response.json())
      .then(val => {
        const element = document.getElementById('app')
        element.innerHTML = val.text
      })
  }

  exports.NewsController = NewsController

})(this)
