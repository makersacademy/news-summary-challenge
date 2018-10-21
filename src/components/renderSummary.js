(function(exports){
  var summary_div = document.getElementById('summary')

  function renderSummary(article,summary) {
      summary_div.innerHTML += '<div class="headline"><a target="_blank" href=' + article.link + '>'+ article.headline +'</a></div>'
      summary_div.innerHTML += '<img class="thumbnail" src="' + article.thumbnail + '"></img>'
      summary_div.innerHTML += '<div class="summary">' + summary + '</div>'
      summary_div.innerHTML += '<button onclick="goBack()"> Go Back </button>'
    }

  exports.renderSummary = renderSummary
})(this)
