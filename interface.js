const createNewsItems = (articleData) => {
  const items = articleData.response.results
  let itemsHtml = '<ul>'
  itemsHtml += items
    .map(x => `<li><div>${x.webTitle} 
      <a href='' id='${x.id}' class='summaryLink'>Summary</a> 
      <a href='${x.webUrl}'>Full article</a>
      </div></li>`)
    .join('')
  itemsHtml += '</ul>'
  return itemsHtml
}

const renderHeadlines = (html) => {
  document
    .getElementById('headlines')
    .innerHTML = html;
};

const createSummary = (summaryData) => {
  return summaryData.sentences.join(' ')
}

const renderSummary = (html, elementID) => {
  const node = document.createElement('DIV');
  const textNode = document.createTextNode(html)
  node.appendChild(textNode)
  document
    .getElementById(elementID)
    .appendChild(node)
}

const makeSummaryLinkClickShowSummary = () => {
  const links = document.getElementsByClassName('summaryLink')
  Array.from(links).forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      window.getSummary(element.id)
        .then(summaryData => createSummary(summaryData))
        .then(html => renderSummary(html, element.id))
    })
  })
}

const getHeadlinesAndRender = () => {
  window.getNewsData()
    .then(articleData => createNewsItems(articleData))
    .then(html => renderHeadlines(html))
    .then(x => makeSummaryLinkClickShowSummary())
}

document
  .getElementById('noozeButton')
  .onclick = getHeadlinesAndRender

