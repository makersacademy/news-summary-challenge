(function (exports) {
  let headlinesDiv = document.getElementById('headlines')
  let guardianBaseUrl = 'https://www.theguardian.com'

  function viewHeadlines(stories) {
    let htmlList = '<ul>'
    stories.forEach(story => {
      //htmlList += `<li><a href='${guardianBaseUrl}/${story.getLink()}' >${story.getHeadline()}</a></li>`
      htmlList += `<li><a href='#' onClick="api.getSummary('${story.getLink()}');event.preventDefault();">${story.getHeadline()}</a></li>`
    })
    htmlList += '</ul>'

    headlinesDiv.innerHTML = htmlList
  }

  exports.viewHeadlines = viewHeadlines
})(this)