var apiRequestResponse = {
  response: {
    results: [
    {
    id: "sport/live/2018/feb/18/winter-olympics-2018-day-nine-from-pyeongchang-live",
    type: "liveblog",
    sectionId: "sport",
    sectionName: "Sport",
    webPublicationDate: "2018-02-18T11:18:30Z",
    webTitle: "2018 Winter Olympics: day nine from Pyeongchang – live!",
    webUrl: "https://www.theguardian.com/sport/live/2018/feb/18/winter-olympics-2018-day-nine-from-pyeongchang-live",
    apiUrl: "https://content.guardianapis.com/sport/live/2018/feb/18/winter-olympics-2018-day-nine-from-pyeongchang-live",
    isHosted: false,
    pillarId: "pillar/sport",
    pillarName: "Sport",
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


it('instantiates with an empty array', function(){
  var newslog = new NewsLog();
  return assert.isTrue(newslog.articles.length === 0)
});

it('stores headlines returns from api apiRequestResponse to articles',function(){
  var newslog = new NewsLog();
  newslog.addArticles(apiRequestResponse)
  return assert.equals(newslog.articles, "2018 Winter Olympics: day nine from Pyeongchang – live!")
})

it('sends response from api request to addArticles methods if status code 200 and readyState 4', function(){
  var newslog = new NewsLog();
  newslog.getArticles(successfulHttpRequest)
  return assert.equals(newslog.articles, "2018 Winter Olympics: day nine from Pyeongchang – live!")

})

it('does not pass a response from api if status code is not 200 or ready state is not 4', function(){
  var newslog = new NewsLog();
  newslog.getArticles(unsuccessfulHttpRequest)
  return assert.isTrue(newslog.articles.length === 0)
})
