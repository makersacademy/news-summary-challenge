
(function(exports) {

function renderHeadlines(allHeadlines) {
  var html = "";
  allHeadlines.forEach(function(article) {
    html += `<li><div name='${article.id}'><a href='#articles/${article.id}'>${article.webTitle}</li>`
  })
  return html
}

exports.renderHeadlines = renderHeadlines

})(this)
