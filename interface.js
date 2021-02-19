"use strict";

let selectedArticleData = []

function getSectionTitles() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-elements=image&page-size=20&show-fields=thumbnail")
    .then( (response) => {
      return response.json()
    })
}

getSectionTitles()
  .then( (response) => {
    let selectedData = renderTitles(response);

    let titlesHTML = renderTitlesHTML(selectedData).join("<br/>")
    document.getElementById("headlines").innerHTML = titlesHTML
  })

function renderTitles(data) {
  // console.log(data);
  // console.log(data.response.results);
  let results = data.response.results
  // console.log(articles.length);

  for ( let i = 0; i < results.length; i++ ) {
    let selected = {
      apiUrl: results[i].apiUrl,
      webTitle: results[i].webTitle,
      body: `body for article ${i}`
    }
    selectedArticleData.push(selected)
  }
  return selectedArticleData
}

function renderTitlesHTML (data) {
  let titles = []
  for ( let i = 0; i < data.length; i++ ) {
    let title = data[i].webTitle
    let titleHTML = `<p class="title" data-titleID="${i}">${title}<span class="article-body" id="body${i}"></span></p>`
    titles.push(titleHTML)
  }
  return titles
}

let headlines = document.getElementById("headlines");

headlines.addEventListener("click", (event) => {
  let singleHeadline = event.path.find( (item) => {
    console.log("hhhhhh");
    if (item.classList) {
        return item.classList.contains('title');
    } else {
        return false;
    }
    });
    if (singleHeadline) {
      console.log("hello");
      let titleID = singleHeadline.getAttribute('data-titleID');
      let bodyHTML = selectedArticleData[titleID].body
      document.getElementById(`body${titleID}`).insertAdjacentHTML("afterend", `<br/>${bodyHTML}`)
  }
})

