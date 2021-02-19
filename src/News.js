// document.getElementById("main").innerHTML = "headlines here soon"



function getSectionTitles() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&page-size=20&show-fields=thumbnail")
    .then( (response) => {
      return response.json()
    })
}

getSectionTitles()
  .then( (response) => {
    let selectedData = renderTitles(response);

    let titlesHTML = renderTitlesHTML(selectedData).join("")
    document.getElementById("main").innerHTML = titlesHTML
  })

function renderTitles(data) {
  // console.log(data);
  // console.log(data.response.results);
  let articles = data.response.results
  // console.log(articles.length);
  let selectedArticleData = []
  for ( let i = 0; i < articles.length; i++ ) {
    let selected = {
      apiUrl: articles[i].apiUrl,
      webTitle: articles[i].webTitle
    }
    selectedArticleData.push(selected)
  }
  return selectedArticleData
}

function renderTitlesHTML (data) {
  let titles = []
  for ( let i = 0; i < data.length; i++ ) {
    let title = data[i].webTitle
    let titleHTML = `<p class="title" data-titleID="title${i}">${title}</p>`
    titles.push(titleHTML)
  }
  return titles
}
