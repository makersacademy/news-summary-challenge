const storyUrlOne = 'world/2021/feb/20/ban-on-outside-sport-can-end-top-scientist-urges-johnson'
const storyUrlTwo = 'sport/2021/jan/17/gerwyn-price-i-care-what-people-think-but-im-out-there-to-do-a-job'

const summaryUrlOne = 'http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'

const herokuGuardian = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/'
let headlines = []


document.addEventListener("DOMContentLoaded", () => {
getNewsData()

  showArticles = () => {
    for (let i = 0; i < stories.length; i++) {
      headlines = headlines +  `<div class='story'><img src=${stories[i].showImage()}><a href=${stories[i].showUrl()}><h2> ${stories[i].showHeadline()} </h2></a></div>`
    }

    document.querySelector('.stories').innerHTML = headlines
  }

})
