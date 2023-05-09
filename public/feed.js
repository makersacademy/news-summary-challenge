const ul = document.getElementById('article-list');
const list = document.createDocumentFragment();
const url = 'http://content.guardianapis.com';

const search_box = document.getElementById('search-box')
const search_button = document.getElementById('search-button')

if (document.getElementById('introvert-name')) {
  console.log("Loaded const")
  const introvert_button = document.getElementById('introvert-button')
  const introvert_name = document.getElementById('introvert-name')

  introvert_button.addEventListener('click', () => {
  ul.innerHTML = ""
  const term = introvert_name.innerHTML
  fetchSearched(term, renderArticles)
})
}

search_button.addEventListener('click', () => {
  ul.innerHTML = ""
  const term = search_box.value
  fetchSearched(term, renderArticles)
})


const summeriseText = (text) => {
  const url = 'https://api.aylien.com/api/v1/summarize';
  const headers = {
    /*
    'mode': 'no-cors',
    'Access-Control-Allow-Origin': '*',
    */
    'Content-Type': 'application/json',
    'X-AYLIEN-NewsAPI-Application-ID': '',
    'X-AYLIEN-NewsAPI-Application-Key': ''
  };

  const sumText = text

  fetch(`${url}?text=${sumText}&sentences_number=5`, { method: 'GET', headers })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error));
}

const renderArticles = (results) => {
  results.map(function(article) {
    let li = document.createElement('li')
    let artCont = document.createElement('div')
    artCont.className = 'article-container'
    let artHead = document.createElement('div')
    artHead.className = 'article-header'
    let artTitle = document.createElement('div')
    artTitle.className = 'article-title'
    let artDeet = document.createElement('div')
    artDeet.className = 'article-details'
    let artSect = document.createElement('div')
    artSect.className = 'article-section'
    let artPubDate = document.createElement('div')
    artPubDate.className = 'article-pub-date'
    let artBody = document.createElement('div')
    artBody.className = 'article-body'
    let imgCont = document.createElement('img')
    imgCont.className = 'image-container'
    imgCont.alt = "Thumbnail Missing"
    let summaryCont = document.createElement('div')
    summaryCont.className = "summaryCont"

    const pubDate = new Date(article.webPublicationDate) 
    const pubDateFrmd = `${pubDate.getDate()}-${pubDate.getMonth()}-${pubDate.getFullYear()}`

    artTitle.innerHTML = `<a href=${article.webUrl} target="_blank">${article.webTitle}</a>`
    artSect.innerHTML = `${article.sectionName}`
    artPubDate.innerHTML = `${pubDateFrmd}`
    imgCont.src = `${article.fields.thumbnail}`
    // summeriseText(article.fields.bodyText)
    
    artBody.appendChild(imgCont)
    artBody.appendChild(summaryCont)

    artDeet.appendChild(artSect)
    artDeet.appendChild(artPubDate)

    artHead.appendChild(artTitle)
    artHead.appendChild(artDeet)

    artCont.appendChild(artHead)
    artCont.appendChild(artBody)

    li.appendChild(artCont)
    
    list.appendChild(li)
  });
  ul.appendChild(list);
}

const fetchHeadlines = (callback) => {
  fetch(`${url}/search?order-by=newest&show-fields=bodyText,thumbnail&api-key=test`)
  .then((response) => {
    return response.json()
  }).then((data) => {
    const results = data.response.results
    callback(results)
  });
}

const fetchSearched = (term, callback) => {
  console.log(term)
  fetch(`${url}/search?q=${term}&show-fields=bodyText,thumbnail&api-key=test`)
  .then((response) => {
    return response.json()
  }).then((data) => {
    const results = data.response.results
    callback(results)
  });
}

fetchHeadlines(renderArticles)

// AYLIEN API KEY: 