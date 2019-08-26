// not sure if necessary after export-import refactor


;(function getFeed() {

  return (
    fetch(
      'https://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=tapes%20AND%20president&tag=politics/politics&from-date=2016-01-01?show-fields=body'
    )
      .then(response => response.json())
     
      .then(data => {
        const feedItem = item => `
        <li>
          <a href='article.html?articleUrl=${item.webUrl}&articleTitle=${item.webTitle}'>${item.webTitle}</a>
        </li>
      `
        return (document.querySelector(
          '.js-results'
        ).innerHTML = data.response.results.map(feedItem).join(''))
      })
  )
})()
