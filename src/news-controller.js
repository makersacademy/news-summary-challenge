(function(exports) {
  function NewsController() {

  }

  NewsController.prototype.renderPage = function() {  
    const promise = this.getJSON('http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html')
    promise
      .then((val) => {
        const element = document.getElementById('app')
        element.innerHTML = val.text
      })
  }

  NewsController.prototype.getJSON = function(url) {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url)
      xhr.onload = () => {
        if(xhr.status === 200) {
          let data = JSON.parse(xhr.responseText);
          resolve(data);
        } else {
          reject(Error('data not retrieved from server'))
        }
      };
      xhr.send();
    })
  }

  exports.NewsController = NewsController

})(this)
