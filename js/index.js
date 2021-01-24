
var headlinesURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&from-date=2021-01-24&to-date=2021-01-24"

var articleURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/"

function getHeadlinesData() {
  getData(headlinesURL).then(guardian => {
    let headlines = new Headlines(guardian.response.results);

    getArticlesData(headlines)
  })
}

function getArticlesData(headlines) {
  var articles = new Articles()

  headlines.getArray().forEach(function (value, index, array) {
    let fullArticleURL = `${articleURL}${value.id}?show-fields=body`

    getData(fullArticleURL).then(guardian => {
      articles.add(guardian)
      if (articles.getArray().length === array.length) {
        displayHeadlines(articles);
        createModals(articles)
      }
    })
  });
}

function displayHeadlines(articles) {
  console.log(articles.getArray().length)
  var gridContainer = document.getElementsByClassName('grid-container')

  articles.getArray().forEach(function (article) {
    let headline = createHeadline(article)
    let image = createImage(article)
    let card = createCard(image, headline)

    gridContainer[0].appendChild(card)
  });
}

function createModals(articles) {
  console.log(articles.getArray().length)
  var gridContainer = document.getElementsByClassName('grid-container')

  articles.getArray().forEach(function (article) {
    let headline = createHeadline(article)
    let image = createImage(article)
    let body = createBody(article)
    let card = createCard(image, headline, body)
    card.setAttribute('class', 'modal')
    gridContainer[0].appendChild(card)
  });
}

function createImage(article) {
  let image = document.createElement('img')

  let body = article.response.content.fields.body;
  var el = document.createElement('body');
  el.innerHTML = body

  images = el.getElementsByTagName('img')
  if (images.length === 0) {
    img = ""
  }
  else {
    img = images[0].getAttribute('src')
  };
  image.setAttribute("src", img)
  image.setAttribute("style", "width:100%")
  return image
}

function createHeadline(article) {
  let headline = document.createElement('h4')
  headline.innerText = article.response.content.webTitle
  return headline
}

function createBody(article) {
  let body = article.response.content.fields.body;
  var el = document.createElement('body');
  el.innerHTML = body

  copy = el.querySelectorAll('p')
  return copy
}

function createCard(image, headline, body = [document.createElement('div')]) {
  let article = document.createElement('div')
  article.setAttribute("class", "card")
  article.appendChild(image)
  article.appendChild(headline)

  body.forEach(function(para) {
    article.appendChild(para)
  })

  return article
}
// "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?section=uk-news&from-date=2021-01-24&to-date=2021-01-24"

// "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body"

function getData(url) {

  return fetch(url, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => {
      return response.json()
    });
}




getHeadlinesData();
