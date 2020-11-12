(function (exports) {
  let headlinesDiv = document.getElementById('headlines')

  function viewHeadlines(headlines) {
    let htmlList = '<ul>'
    headlines.forEach(headline => {
      htmlList += `<li>${headline}</li>`
    })
    htmlList += '</ul>'

    headlinesDiv.innerHTML = htmlList
  }

  exports.viewHeadlines = viewHeadlines
})(this)