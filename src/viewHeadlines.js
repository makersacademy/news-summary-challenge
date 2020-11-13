(function (exports) {
  let headlinesDiv = document.getElementById('headlines')
  let guardianBaseUrl = 'https://www.theguardian.com'

  function viewHeadlines(stories) {
    htmlList = ''
    stories.forEach(story => {
      htmlList += `<a href="#story=${story.getId()}"><div class='${cssClass(story)}' >${story.getHeadline()}</div></a>`
    })
    headlinesDiv.innerHTML = htmlList
  }

  function cssClass(story) {
    if (story.isSelected()) {
      return 'headline-selected'
    } else {
      return 'headline'
    }
  }

  exports.viewHeadlines = viewHeadlines
})(this)