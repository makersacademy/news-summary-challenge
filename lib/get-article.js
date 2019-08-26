;(function getArticle() {
  // Get all the URL query parameters from the current URL
  const urlParams = new URLSearchParams(window.location.search)
  // get the articleUrl param value
  const articleUrl = urlParams.get('articleUrl')
  // get the articleTitle param value
  const articleTitle = urlParams.get('articleTitle')
  return (
    fetch(
      `https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
    )
      .then(response => response.json())
      .then(data => {
        document.querySelector('.js-article').innerHTML = [
          `<h1>${articleTitle}</h1>`,
          data.sentences.map(sentence => `<p>${sentence}</p>`).join('')
        ].join('')
      })
  )
})()
