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
    var newsDiv = document.createElement('div')
    for (i = 0; i < 10; i++) {
      newLine = document.createElement('br')
      newsDiv.appendChild(newsItems[i].displayImage())
      newsDiv.appendChild(newLine)
      newsDiv.appendChild(newsItems[i].displayLink(i))
    }
    newsDiv.setAttribute('id', 'fullList')
    return newsDiv
  },

  displayStory: function(index) {
    var fullArticleDiv = document.createElement('div')
    fullArticleDiv.setAttribute('id', 'singleArticle')
    fullArticleDiv.appendChild(this.newsItems[index].displayHeadline())
    fullArticleDiv.appendChild(this.newsItems[index].displayImage())
    fullArticleDiv.appendChild(this.newsItems[index].displayStory())
    var returnLink = document.createElement('a')
    returnLink.textContent = "RETURN TO MAIN PAGE!"
    returnLink.addEventListener('click', function() {
      showFullList();
    })
    fullArticleDiv.appendChild(returnLink)
    console.log(fullArticleDiv)
    return fullArticleDiv
  },

}