(function(exports){
  var headlines_div = document.getElementById('headlines')

  function renderHeadlines(formattedArticles) {
    formattedArticles.forEach(function(formattedArticle,i) {
      headlines_div.innerHTML += '<div class="headline"><a target="_blank" href=' + formattedArticle.link + '>'+ formattedArticle.headline +'</a></div>'
      headlines_div.innerHTML += '<img class="thumbnail" src="' + formattedArticle.thumbnail + '"></img>'
      headlines_div.innerHTML += '<button class="btn" onclick="clickSummaryBtn('+ i +')">Summary</button>'
    })
  }

  exports.renderHeadlines = renderHeadlines
})(this)
