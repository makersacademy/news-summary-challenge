(function(exports){
  var headlines_div = document.getElementById('headlines')

  function renderHeadlines(headlines) {
    headlines.forEach(function(headline) {

      headlines_div.innerHTML += '<div style="display: block">'+headline+'</div>'
    })
  }

  exports.renderHeadlines = renderHeadlines
})(this)
