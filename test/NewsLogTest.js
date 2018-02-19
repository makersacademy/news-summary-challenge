var apiRequestResponse = {
  response: {
    results: [
    { webTitle: "2018 Winter Olympics: day nine from Pyeongchang – live!",
      webUrl: "https://www.theguardian.com/sport/live/2018/feb/18/winter-olympics-2018-day-nine-from-pyeongchang-live",
    }]
  }
}

var successfulHttpRequest = {
    readyState: 4,
    status: 200,
    responseText: JSON.stringify(apiRequestResponse),
    open: function() {},
    send: function() { this.onreadystatechange()}
  }

var unsuccessfulHttpRequest = {
    readyState: 4,
    status: 404,
    responseText: JSON.stringify(apiRequestResponse),
    open: function() {},
    send: function() { this.onreadystatechange()}
  }

function callback(){}



it('instantiates with an empty array', function(){
  var newslog = new NewsLog();
  return assert.isTrue(newslog.articles.length === 0)
});

it('stores headlines returns from api apiRequestResponse to articles',function(){
  var newslog = new NewsLog();
  newslog._addArticles(apiRequestResponse)
  return assert.equals(newslog.articles[0].headline, "2018 Winter Olympics: day nine from Pyeongchang – live!")
})

it('stores Url returns from api apiRequestResponse to articles',function(){
  var newslog = new NewsLog();
  newslog._addArticles(apiRequestResponse)
  return assert.equals(newslog.articles[0].url, "https://www.theguardian.com/sport/live/2018/feb/18/winter-olympics-2018-day-nine-from-pyeongchang-live")
})

it('sends response from api request to addArticles methods if status code 200 and readyState 4', function(){
  var newslog = new NewsLog();
  newslog.getArticles(callback, successfulHttpRequest)
  return assert.equals(newslog.articles[0].headline, "2018 Winter Olympics: day nine from Pyeongchang – live!")

})

it('does not pass a response from api if status code is not 200 or ready state is not 4', function(){
  var newslog = new NewsLog();
  newslog.getArticles(callback, unsuccessfulHttpRequest)
  return assert.isTrue(newslog.articles.length === 0)
})
