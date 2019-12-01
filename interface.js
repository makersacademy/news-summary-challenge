const renderItems = (html) => {
  document
    .getElementById('headlines')
    .innerHTML = html;
};

const createNewsItems = (articleData) => {
  const items = articleData.response.results
  console.log(items)
  let itemsHtml = '<ul>'
  itemsHtml += items.map(x => `<li><div>${x.webTitle} <a href='${x.webUrl}'>Go to article</a></div></li>`).join('')
  itemsHtml += '</ul>'
  console.log(itemsHtml)
  return itemsHtml
}

const getHeadlinesAndRender = () => {
  window.getNewsData()
    .then(articleData => createNewsItems(articleData))
    .then(html => renderItems(html))
}

document
  .getElementById('noozeButton')
  .onclick = getHeadlinesAndRender

