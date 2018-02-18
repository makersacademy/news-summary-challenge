(function(exports) {
  function addNews(headlines){
   headlines.forEach(function(headline){
     var line = document.createElement('li')
     line.innerHTML = headline
     document.getElementById('newsFeed').appendChild(line)
   })
  }


  exports.addNews = addNews
})(this)
