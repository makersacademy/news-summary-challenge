let stories = []
const herokuAylien = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='


getNewsData = () => {
  // fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest').then(response => {
    response.json().then(newsData => {
      newsStories = newsData.response.results
      for(let i = 0; i < newsStories.length; i++){
        let story = new newsStory();
        story.addHeadline(newsStories[i].webTitle)
        story.addUrl(newsStories[i].webUrl)
        story.addImage(`https://picsum.photos/${getRandom()}/300`)
        stories.push(story)
      };
      getNewsSummary()
      showArticles()
    })
  })
}



getNewsSummary = () =>{
  for (let n = 0; n < stories.length; n++){
    fetch(herokuAylien + stories[n].showUrl()).then(response => {
      response.json().then(summary => {
        stories[n].addSummary(summary.sentences.join(','))
      })
    })
  }
}


getRandom = () => Math.floor((Math.random() * (10 - 3) + 3) * 100);
