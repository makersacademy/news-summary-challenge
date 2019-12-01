const APIURL = 'http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search'

const getNewsData = () => {
  return fetch(APIURL)
    .then(res => res.json())
}

window.getNewsData = getNewsData

