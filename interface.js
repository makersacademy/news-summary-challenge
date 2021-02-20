"use strict";

let selectedArticleData = []

function getSectionTitles() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?order-by=newest&show-fields=body&show-elements=image&page-size=20&show-fields=thumbnail")
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
      webUrl: results[i].webUrl,
      webTitle: results[i].webTitle,
      // body: ""
    }
    selectedArticleData.push(selected)
  }
  console.log(selectedArticleData[0].webUrl)
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
      let summaryText = getSpecificArticleData(titleID)
      // console.log(summaryText);
      // let bodyHTML = selectedArticleData[titleID].body
      // console.log(bodyHTML);

      // document.getElementById(`body${titleID}`).insertAdjacentHTML("afterend", `<br/>${bodyHTML}`)
  }
})


// "https://content.guardianapis.com/us-news/live/2021/feb/19/texas-storm-latest-news-today-power-outages-ted-cruz-cancun-trip-backlash";

function getSpecificArticleData (articleIndex) {
  let webUrl = selectedArticleData[articleIndex].webUrl
  return fetch(`http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${webUrl}`)
    .then( (response) => {
      return response.json()
    })
  .then( (response) => {
    console.log(response);
    let summary = response.sentences.join(" ")
    selectedArticleData[articleIndex].body = summary
    console.log(selectedArticleData[articleIndex].body);
      let bodyHTML = selectedArticleData[articleIndex].body
      console.log(bodyHTML);

      document.getElementById(`body${articleIndex}`).insertAdjacentHTML("afterend", `<br/>${bodyHTML}`)

  })
}

// "https://www.theguardian.com/us-news/live/2021/feb/19/texas-storm-latest-news-today-power-outages-ted-cruz-cancun-trip-backlash"

