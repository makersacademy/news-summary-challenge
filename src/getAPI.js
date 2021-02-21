let stories = []

getNewsData = () => {
  // fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest').then(response => {
    response.json().then(newsData => {
      newsStories = newsData.response.results
      for(let i = 0; i < newsStories.length; i++){
        let story = new newsStory();
        story.addHeadline(newsStories[i].webTitle)
        story.addUrl(newsStories[i].webUrl)
        stories.push(story)

      };
      showArticles()
      // storyData = newsStory.response.content
      // console.log(storyData)
      //
      // newsStoryUrl = storyData.webUrl
      // story.addHeadline(storyData.webTitle);
      // story.addUrl(storyData.webUrl);
      // console.log(story)
      // headlinesSection = document.querySelector('.stories')
      // headlinesSection.innerHTML += `<div><h1>
      //   <a href='${storyData.webUrl}'>${storyData.webTitle} </a>
      //   <button id=${i} value=${storyData.webUrl}>Read More</button>
      // </h1></div>`
      // individualWebUrl = document.getElementById(`${i}`)
    })
  })
}



getNewsSummary = (heroku, bodyUrl) =>{
  fetch(heroku + bodyUrl).then(response => {
    response.json().then(summary => {
      newsSummary = summary.sentences.join(' ')
      story.addSummary(newsSummary)

      // headlinesSection = document.querySelector('.stories')
      // headlinesSection.innerHTML += newsSummary
    })
  })
}
