(function(exports){
  var content_div = document.getElementById('content')

  function render(formattedArticles) {
    formattedArticles.forEach(function(formattedArticle) {
      content_div.innerHTML += '</div class="headline"><a href=' + formattedArticle.link + '>'+ formattedArticle.headline +'</a></div>'
      content_div.innerHTML += '<img class="thumbnail" src="' + formattedArticle.thumbnail + '"></img>'
      content_div.innerHTML += '<div class="summary">' + formattedArticle.summary + '</div>'
    })
  }

  exports.render = render
})(this)
