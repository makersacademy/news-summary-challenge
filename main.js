// responsibility to get or fetch the data

//console.log("hello")

const guardianApi = "https://content.guardianapis.com/search?show-fields=thumbnail&page=1&api-key=045214ab-cf22-4ee0-be1d-da3f2edcc534";
const aylienApi = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=";

async function getThumbnail() {
  const response = await fetch(guardianApi)
  const data = await response.json()
  thumbnails = data.response.results
  console.log(thumbnails)
  createThumbnails(thumbnails)
}

async function getHeadline() {
  const response = await fetch(guardianApi)
  const data = await response.json()
  //console.log(data.response.results)
  results = data.response.results
  createHeadlines(results)
}

async function getArticlePage() {
  const response = await fetch(guardianApi)
  const data = await response.json()
  array = data.response.results
  console.log(data.response.results[0].webUrl)
  createObject(array)
};

// code not working

// function createObject(articles) {
//   console.log(articles)
//   urls = articles.forEach((article) => {
//     return { index: article.webUrl }
//   });
//   console.log(urls);
// }

//createClass(articleObject);


async function getSummary(webUrl) {
  const response = await fetch(aylienApi + webUrl)
  const data = await response.json()
  summary = data.text
  console.log(data.text)
  // createSummary(summary)
}

getArticlePage()
//getSummary()
//getHeadline()
//getThumbnail() // calling our function here!

// function createSummaryLink(summaryLink) {
//   document.getElementById("article").setAttribute("href", `${summaryLink}`)
// }

function createSummary(summary) {
  document.getElementById("summary").innerHTML = summary;
}

function createHeadlines(results) {
  results.forEach(element)
  function element(result, index) {
    let headline = document.createElement("a")
    headline.innerHTML = result.webTitle;
    headline.setAttribute("id", `#headline${index}`)
    headline.setAttribute("href", `#summary${index}`)
    document.getElementById("headlines").appendChild(headline)
    let br = document.createElement("br")
    document.getElementById("headlines").appendChild(br);
  }
}
//document.getElementById("article").innerHTML = headline;

function createThumbnails(thumbnails) {
  thumbnails.forEach(element)
  function element(picture, index) {
    let photo = document.createElement("img")
    //console.log(picture.fields)
    photo.setAttribute("src", `${picture.fields.thumbnail}`)
    photo.setAttribute("id", `#thumbnail${index}`)
    document.getElementById("thumbnails").appendChild(photo)
    let br = document.createElement("br")
    document.getElementById("thumbnails").appendChild(br);
  }
}

makeUrlChangeForSummary();

function makeUrlChangeForSummary() {
  window.addEventListener("hashchange", showSummaryForCurrentPage);
};

function showSummaryForCurrentPage() {
  showSummary(getArticleFromUrl(window.location));
};

function getArticleFromUrl(location) {
  return location.hash.split("#")[1];
};

function showSummary(article) {
  hideNonSummaryElements()
  document.getElementById("summary").innerHTML = article;
};

function hideNonSummaryElements() {
  document.getElementById("headlines").style.display = "none";
  document.getElementById("thumbnails").style.display = "none";
  // document.getElementById("allNote-button").style.display = "block";
};

function showAllHeadlines() {
  document.getElementById("title").addEventListener("click", function () {
    console.log("clicked");
    document.getElementById("headlines").style.display = "block";
    document.getElementById("thumbnails").style.display = "block";
  })
}

showAllHeadlines()

// personal guardian API key 
