const BASEURL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='

const createURL = (articleURL) => BASEURL + articleURL

const getSummary = (articleURL) => {
  return fetch(createURL(articleURL))
    .then(res => res.json())
}

window.getSummary = getSummary

