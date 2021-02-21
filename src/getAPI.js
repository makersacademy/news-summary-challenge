getNewsData = () => {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body").then(response => [
    response.json().then(newsStory => {
      console.log(newsStory.response.content)
      headlinesSection = document.querySelector('.stories')
      headlinesSection.innerHTML = `<h1> <a href='${newsStory.response.content.webUrl}'>${newsStory.response.content.webTitle} </a></h1>`
      // return newsStory.response.content.webTitle
    })
  ])
}
