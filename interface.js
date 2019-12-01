const renderItems = (html) => {
  document
    .getElementById('headlines')
    .innerHTML = html;
};

const createNewsItems = (articleData) => {
  const items = articleData.response.results
  console.log(items)
  let itemsHtml = '<ul>'
  itemsHtml += items
    .map(x => `<li><div>${x.webTitle} 
      <a href='' id='${x.webUrl}' class='summaryLink'>Summary</a> 
      <a href='${x.webUrl}'>Full article</a>
      </div></li>`)
    .join('')
  itemsHtml += '</ul>'
  return itemsHtml
}

const makeSummaryLinkClickShowSummary = () => {
  const links = document.getElementsByClassName('summaryLink')
  Array.from(links).forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      console.log('default clickEvent prevented')
    })
  })
}

const getHeadlinesAndRender = () => {
  window.getNewsData()
    .then(articleData => createNewsItems(articleData))
    .then(html => renderItems(html))
    .then(x => makeSummaryLinkClickShowSummary())
}

document
  .getElementById('noozeButton')
  .onclick = getHeadlinesAndRender

