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
        newLine = document.createElement('br')
        newsDiv.appendChild(newsItems[i].displayImage())
        newsDiv.appendChild(newLine)
        newsDiv.appendChild(newsItems[i].displayLink(i))
      }
      newsDiv.setAttribute('id', 'fullList')
      this.articlesDiv = newsDiv
    }, 1000)
  },

  displayStories: function() {
    var newsItems = this.newsItems
    setTimeout(function(){
      var fullArticlesDiv = document.createElement('div')
      for (i = 0; i < 10; i++) {
        var fullArticleDiv = document.createElement('div')
        fullArticleDiv.setAttribute('id', `article-${i}`)
        fullArticleDiv.setAttribute('hidden', 'hidden')
        fullArticleDiv.appendChild(newsItems[i].displayHeadline())
        fullArticleDiv.appendChild(newsItems[i].displayImage())
        fullArticleDiv.appendChild(newsItems[i].displayStory())
        var returnLink = document.createElement('a')
        returnLink.textContent = "RETURN TO MAIN PAGE!"
        
        returnLink.addEventListener('click', function() {
          hideArticle("article-0")
          showFullList();
        })
        fullArticleDiv.appendChild(returnLink)
        fullArticlesDiv.appendChild(fullArticleDiv)
      }
      this.fullArticlesDiv = fullArticlesDiv
    }, 1000)
  },

}