(function (exports) {
  let headlinesDiv = document.getElementById('headlines')

  function viewHeadlines(headlines) {
    headlinesDiv.innerHTML = '<ul>'
    headlines.forEach(headline => {
      headlinesDiv.innerHTML += `<ul>${headline}</ul>`
    })
    headlinesDiv.innerHTML += '</ul>'
  }

  exports.viewHeadlines = viewHeadlines
})(this)