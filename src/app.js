let newsArticles = []

// this function fetches the api and returns a pending promise.
// calling the .json method on the response extracts the json content
function getNewsTitles() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail")
    .then( (response) => {
      return response.json()
    })
}

// this function goes into the json object and filters through the rewsponse, then the results
// the results returns a hash of news articles with key value pairs such as webUrl & webTitle
// loop through each result and assign each value of webTitle in the response object to an array of hashes - newsArticles
function extractTitles(dataObject) {
  let results = dataObject.response.results

  for ( let i = 0; i < results.length; i++ ) {
    let selected = {
      webTitle: results[i].webTitle,
    }
    newsArticles.push(selected)
  }
  return newsArticles
}


// this function loops through the array of hashes
// it sets the value of each webTitle key to the title variable
// so it can be called using interpolation in a seperate html paragraph
// with its index as its ID
// this HTML is then pushed into the headlines array and returned

function renderHTML(data){
  let headlines = []
  for ( let i = 0; i < data.length; i++ ){
    let title = data[i].webTitle
    let titleHTML = `<p data-titleID="${i}">${title}</p>`
    headlines.push(titleHTML)
  }
  return headlines
}

// we fetch the api and call another then to complete the promise
// we pass that response as an argument to extraTitles(response)
// the response objects (which is an array of hashes) is set to a variable
// that varibale is passed as an arugment to renderHTMl to be rendered in to HTML so it can be displayed on the web page
// then each HTML element is rendered from markdown into the selected div on the index.html file
  getNewsTitles()
    .then( (response) => {
    let titlesHash = extractTitles(response)

    let titlesHTML = renderHTML(titlesHash).join("<br/>")
    document.getElementById("headlines").innerHTML = titlesHTML
  })
