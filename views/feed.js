(function(exports) {

   function createListElement(text) {
     let list = document.createElement('li');
     list.innerHTML = text
     return list
   }

   function createButton(id, content) {
     let button = document.createElement('button')
     button.id = id
     button.innerHTML = 'see summary below'
     button.addEventListener('click', function() {
       let text = content
       document.getElementById('summary').innerHTML = text
     });
     return button
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
     let summaryButton = createButton(`summary${counter}`, summary[counter-1].sentences[0])
     line.appendChild(headline)
     line.appendChild(link)
     line.appendChild(summaryButton)
     document.getElementById('newsFeed').appendChild(line)
     counter += 1
   })
  }


  exports.addNews = addNews
})(this)


// this is essentially the printer class...
