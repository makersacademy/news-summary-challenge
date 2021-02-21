let i = 1;
let story = new newsStory();

getNewsData = (storyUrl) => {
  // fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/' + storyUrl + '?show-fields=body').then(response => {
    response.json().then(newsStory => {
      i++
      storyData = newsStory.response.content
      newsStoryUrl = storyData.webUrl
      story.addHeadline(storyData.webTitle);
      story.addUrl(storyData.webUrl);
      console.log(story)
      // headlinesSection = document.querySelector('.stories')
      // headlinesSection.innerHTML += `<div><h1>
      //   <a href='${storyData.webUrl}'>${storyData.webTitle} </a>
      //   <button id=${i} value=${storyData.webUrl}>Read More</button>
      // </h1></div>`
      // individualWebUrl = document.getElementById(`${i}`)
    })
  })
}



getNewsSummary = () =>{
  fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html").then(response => {
    response.json().then(summary => {
      newsSummary = summary.sentences.join(' ')
      story.addSummary(newsSummary)

      // headlinesSection = document.querySelector('.stories')
      // headlinesSection.innerHTML += newsSummary
    })
  })
}
