let newsArticles = []

fetchFromApi = () => {
  fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest').then(response => {

    response.json().then(apiResponse => {
    console.log(apiStories = apiResponse.response.results)

      apiStories = apiResponse.response.results

      for(let i = 0; i < apiStories.length; i++){
        let newArticle = new newsArticle();
          newArticle.populate(apiStories[i].webUrl,
                              apiStories[i].webTitle,
                              apiStories[i].sectionName,
                              apiStories[i].webPublicationDate)
          newsArticles.push(newArticle)
      };

      showArticles()
    })
  })
}
