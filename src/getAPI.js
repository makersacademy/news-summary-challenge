getNewsData = () => {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
    response.json().then(newsStory => {
      console.log(newsStory.response.content.webTitle)
      console.log(newsStory.response.content.webUrl)
    })
  ])
}
