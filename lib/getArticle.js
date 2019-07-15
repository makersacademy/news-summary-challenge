;(function getArticle() {
  // Get all the URL query parameters from the current URL
  const urlParams = new URLSearchParams(window.location.search)
  // get the articleUrl param value
  const articleUrl = urlParams.get('articleUrl')
  // get the articleTitle param value
  const articleTitle = urlParams.get('articleTitle')
  // Make a request to the Aylien endpoint with the apiRequestUrl's url param set as our articleUrl
  return (
    fetch(
      `https://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${articleUrl}`
    )
      .then(response => response.json())
      // Render an H1 with the articleTitle
      // and the summary sentences split into paragraph tags
      .then(data => {
        document.querySelector('.js-article').innerHTML = [
          `<h1>${articleTitle}</h1>`,
          data.sentences.map(sentence => `<p>${sentence}</p>`).join('')
        ].join('')
      })
  )
})()
