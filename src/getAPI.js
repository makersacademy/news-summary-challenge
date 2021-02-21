getNewsData = () => {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
    response.json().then(newsStory => {
      storyData = newsStory.response.content
      headlinesSection = document.querySelector('.stories')
      headlinesSection.innerHTML = `<h1> <a href='${storyData.webUrl}'>${storyData.webTitle} </a></h1>`
    })
  ])
}

getNewsSummary = () =>{
  fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html").then(response => {
    response.json().then(summary => {
      newsSummary = summary.sentences.join(' ')
      headlinesSection = document.querySelector('.stories')
      headlinesSection.innerHTML += newsSummary
    })
  })
}
