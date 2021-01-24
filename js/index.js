
const articles = {
  article1: {img: "https://via.placeholder.com/100x50.png?text=Image+1", headline: "Headline 1"},
  article2: {img: "https://via.placeholder.com/100x50.png?text=Image+2", headline: "Headline 3"},
  article3: {img: "https://via.placeholder.com/100x50.png?text=Image+3", headline: "Headline 3"}
};

function getGuardianData() {
  getData().then(guardian => {
    let results = guardian.response.results;
    displayHeadlines(results);
  })
}

function displayHeadlines(results) {
  var gridContainer = document.getElementsByClassName('grid-container')

  results.forEach(function (value) {
    let headline = createHeadline(value.webTitle)
    let article = createArticle(headline)

    gridContainer[0].appendChild(article)
  });
}

function createImage(img) {
  let image = document.createElement('img')
  image.setAttribute("src", img)
  image.setAttribute("style", "width:100%")
  return image
}

function createHeadline(headline_text) {
  let headline = document.createElement('h4')
  headline.innerText = headline_text
  return headline
}

function createArticle(headline) {
  let article = document.createElement('div')
  article.setAttribute("class", "card")
  article.appendChild(headline)
  return article
}

function getData(text) {

  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&from-date=2021-01-24&to-date=2021-01-24", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response.json()
    });
}


getGuardianData();
