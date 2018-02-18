(function(exports) {

   function createListElement(text) {
     let list = document.createElement('li');
     list.innerHTML = text
     return list
   }

  function createLink(id, href) {
    let link = document.createElement('a')
    link.innerHTML = 'see guardian site for full article'
    link.id = id
    link.href = href
    return link
  }
  function addNews(articles){
  counter = 1
   articles.forEach(function(article){
     let line = createListElement(`News Iten ${counter}`)
     let headline = createListElement(article.headline)
     let link = createLink(`link${counter}`, article.link)
     line.appendChild(headline)
     line.appendChild(link)
     document.getElementById('newsFeed').appendChild(line)
     counter += 1
   })
  }


  exports.addNews = addNews
})(this)


// this is essentially the printer class...
