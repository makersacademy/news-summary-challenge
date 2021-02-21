function getHeadlines() {
    return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news")
}

// curl "https://content.guardianapis.com/search\?q\=12%20years%20a%20slave\&forma
// t\=json\&tag\=film/film,tone/reviews\&from-date\=2010-01-01\&show-tags\=contributor\&show-fields\=starRating,headline,th
// umbnail,short-url\&show-refinements\=all\&order-by\=relevance"

function geturl() {
  return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/uk-news/2021/feb/21/fewer-than-one-in-six-hostile-environment-raids-led-to-deportations")
}

// function getSummary() {
//   return fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/uk-news/2021/feb/21/fewer-than-one-in-six-hostile-environment-raids-led-to-deportations")
// }
