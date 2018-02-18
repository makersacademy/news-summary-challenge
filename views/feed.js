(function(exports) {
  function addNews(articles){
    counter = 1;
   articles.forEach(function(article){
     var line = document.createElement('li')
     var headline = document.createElement('li')
     headline.innerHTML = article.headline
     var link = document.createElement('a')
     link.innerHTML = 'see guardian site for full article'
     link.id = `link${counter}`
     link.href = article.link
     line.appendChild(headline)
     line.appendChild(link)
     document.getElementById('newsFeed').appendChild(line)
     counter += 1
   })
  }


  exports.addNews = addNews
})(this)


// this is essentially the printer class...
