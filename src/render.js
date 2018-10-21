(function(exports){
  var headlines_div = document.getElementById('headlines')

  function render(formattedArticles) {
    formattedArticles.forEach(function(formattedArticle) {
      headlines_div.innerHTML += '<a style="display: block" href=' + formattedArticle.link + '>'+ formattedArticle.headline +'</div>'
      headlines_div.innerHTML += '<img style="display: block" src="' + formattedArticle.thumbnail + '"></img>'
      headlines_div.innerHTML += '<div style="display: block">' + formattedArticle.summary + '</div>'
    })
  }

  exports.render = render
})(this)
