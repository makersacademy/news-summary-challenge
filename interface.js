const createNewsItems = (articleData) => {
  const items = articleData.response.results
  let itemsHtml = '<ul>'
  itemsHtml += items
    .map(x => `<li><div class='newsItem'>
      <p class='articleHeadline'>${x.webTitle}</p>
      <a href='' id='${x.id}' class='summaryLink'>Summary </a>
      <a href='${x.webUrl}'> |  Full article</a>
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

const addHideLink = (elementID) => {
  let newLink = document.createElement('a');
  newLink.setAttribute('class', 'hide');
  newLink.appendChild(document.createTextNode('Hide summary'));
  newLink.addEventListener('click', (event) => {
    event.preventDefault();
    document
      .getElementById(elementID)
      .parentNode
      .getElementsByClassName('summaryText')[0]
      .style
      .display = 'none'
    document
      .getElementById(elementID)
      .parentNode
      .getElementsByClassName('hide')[0]
      .remove()
  })
  document
    .getElementById(elementID)
    .parentNode
    .appendChild(newLink)
}

const renderSummary = (summaryText, elementID) => {
  const node = document.createElement('DIV');
  node.setAttribute('class', 'summaryText')
  const textNode = document.createTextNode(summaryText)
  node.appendChild(textNode)
  document
    .getElementById(elementID)
    .parentNode
    .appendChild(node)
  addHideLink(elementID)
}

const makeSummaryLinkClickShowSummary = () => {
  const links = document.getElementsByClassName('summaryLink')
  Array.from(links).forEach(element => {
    element.addEventListener('click', (event) => {
      event.preventDefault()
      window.getSummary(element.id)
        .then(summaryData => createSummary(summaryData))
        .then(summaryText => renderSummary(summaryText, element.id))
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

