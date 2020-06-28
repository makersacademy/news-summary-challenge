(function(exports) {
  function NewsController() {
    this.url = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'
  }

  NewsController.prototype.renderPage = async function() {  
    const response = await fetch(this.url)
    const responseJSON = await response.json()
    document.getElementById('app').innerHTML = responseJSON.text
    // fetch(this.url)
    //   .then(response => response.json())
    //   .then(val => {
    //     const element = document.getElementById('app')
    //     element.innerHTML = val.text
    //   })
    //   .catch(err => console.log('unable to retrieve article', err))
    
  }

  exports.NewsController = NewsController

})(this)
