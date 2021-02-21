const storyUrlOne = 'world/2021/feb/20/ban-on-outside-sport-can-end-top-scientist-urges-johnson'
const storyUrlTwo = 'sport/2021/jan/17/gerwyn-price-i-care-what-people-think-but-im-out-there-to-do-a-job'

const summaryUrlOne = 'http://worrydream.com/MediaForThinkingTheUnthinkable/note.html'

const herokuGuardian = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/'
const herokuAylien = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='
let headlines = []

// https://picsum.photos/200/300


document.addEventListener("DOMContentLoaded", () => {
getNewsData()

  showArticles = () => {
    for (let i = 0; i < stories.length; i++) {
      headlines = headlines +  `<div class='story'><h2> ${stories[i].showHeadline()} </h2></div>`
      console.log(stories[i])
    }

    document.querySelector('.stories').innerHTML = headlines
  }

  // showArticles()


  // if (document.getElementById(i))
  // individualWebUrl = document.getElementById(i)
  // individualWebUrl.addEventListener('click', () => {
  //   console.log(individualWebUrl.value)
  // })
});
