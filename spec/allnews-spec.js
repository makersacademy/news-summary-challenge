describe('returns html string of titles', function(){
  var allNews = new AllNews()
  console.log(testData.response.results)
  console.log(allNews.putInElements(testData))
  return assert.isTrue(allNews.putInElements(testData) === "<ul><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li><li><div>Millennial railcard: a fare deal or quick fix that fails to deliver?</div></li></ul>")
});

describe('renders the text string to the page', function(){
  var allNews = new AllNews()
  allNews.renderHTML("<ul><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li></ul>")
  console.log(document.getElementById('newsfeed').innerHTML)
  return assert.isTrue(document.getElementById('newsfeed').innerHTML === "<ul><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li></ul>")
});
