// Newsmanager class, stores news items.
// Displays either one of them or the whole list of hedlines.
// Accesses the Guardian API class to create a list of notes.

function NewsManager(){
  this.newsItems = [];
  this.api = new API()
  this.NewsClass = News
}

NewsManager.prototype = {

  getArticles: function() {
    const self = this
    this.api.fetchData();
    setTimeout(function(){


      for (i = 0; i < 10; i++) {
        self.newsItems.push(
          new self.NewsClass(
            self.api.getHeadline(i),
            self.api.getBody(i),
            self.api.getImage(i)
          )
        )
      }
    }, 400)
  },

  displayArticles: function() {
    var newsItems = this.newsItems
    setTimeout(function(){
      var newsDiv = document.createElement('div')
      for (i = 0; i < 10; i++) {
        newsDiv.appendChild(newsItems[i].displayHeadline())
        newsDiv.appendChild(newsItems[i].displayImage())
      }
      console.log(newsDiv)
      this.articlesDiv = newsDiv
    }, 1000)
  }

}