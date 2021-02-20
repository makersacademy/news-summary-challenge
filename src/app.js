
function getNewsTitles() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail")
    .then( (response) => {
      console.log(response.json())
      return response.json()
    })
}
