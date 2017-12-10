describe('returns html string of titles', function(){
  var allNews = new AllNews()
  console.log(allNews.putInElements(testData.response.results))
  return assert.isTrue(allNews.putInElements(testData.response.results) === '<ul><li><div><a href="https://www.theguardian.com/football/live/2017/dec/09/west-ham-united-v-chelsea-premier-league-live">West Ham United 1-0 Chelsea: Premier League – as it happened</a></div></li><li><div><a href="https://www.theguardian.com/money/2017/dec/09/millennial-railcard-young-workers-rail-fares">Millennial railcard: a fare deal or quick fix that fails to deliver?</a></div></li></ul>')
});

describe('renders the text string to the page', function(){
  var allNews = new AllNews()
  allNews.renderHTML("<ul><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li></ul>")
  return assert.isTrue(document.getElementById('newsfeed').innerHTML === "<ul><li><div>West Ham United 1-0 Chelsea: Premier League – as it happened</div></li></ul>")
});

var allNews = new AllNews()
allNews.makeRequest("http://192.168.0.15:8080/testdata.html", allNews.putInElementsRenderHTML)
setTimeout(function() {
  describe('checks that data is downloaded from the API', function(){
      return assert.isTrue(allNews._data instanceof Array)
  });
}, 5000);
