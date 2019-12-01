const BASEURL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/'

const createURL = (articleID) => BASEURL + articleID

const getSummary = (articleID) => {
  return fetch(createURL(articleID))
    .then(res => res.json())
}

window.getSummary = getSummary

