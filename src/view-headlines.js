(function (exports) {

  function formattedHeadlines(stories) {
    let htmlList = ''
    stories.forEach(story => {
      htmlList += `<a href="#story=${story.getId()}"><div class='${cssClass(story)}' >${story.getHeadline()}</div></a>`
    })
    return htmlList
  }

  function cssClass(story) {
    if (story.isSelected()) {
      return 'headline-selected'
    } else {
      return 'headline'
    }
  }

  exports.formattedHeadlines = formattedHeadlines
})(this)