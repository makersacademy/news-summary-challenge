(function (exports) {
  let headlinesDiv = document.getElementById('headlines')
  let guardianBaseUrl = 'https://www.theguardian.com'

  function viewHeadlines(stories) {
    let htmlList = '<ul>'
    stories.forEach(story => {
      htmlList += `<li><a href="#article=${story.getLink()}">${story.getHeadline()}</a></li>`
    })
    htmlList += '</ul>'
    headlinesDiv.innerHTML = htmlList
  }

  exports.viewHeadlines = viewHeadlines
})(this)