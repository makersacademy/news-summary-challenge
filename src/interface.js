let headlines = []


document.addEventListener("DOMContentLoaded", () => {
// getNewsData()

  showArticles = () => {
    for (let i = 0; i < stories.length; i++) {
      headlines = headlines +  `<div class='story'>
      <a href=#${i}>
        <img src=${stories[i].showImage()}>
      </a>
      <a href=${stories[i].showUrl()}>
        <h2> ${stories[i].showHeadline()} </h2>
      </a>
      </div>`
    }
    document.querySelector('.stories').innerHTML = headlines
  }

  showHighlightedStory = () => {
    let hightedStorySpace = document.getElementById('highlightedStory')
  }


})
