var newslist = new NewsList()
fetch("https://content.guardianapis.com/search?show-fields=all&q=uk&api-key=10f6396d-558a-48e2-aa01-07dc1423f8b8")
.then(function(response) {
  return response.json();
})
.then(function(data) {
  var datalist = data.response.results
  for(var i = 0; i < datalist.length; i++) {
    newslist.save(datalist[i].webTitle, datalist[i].webUrl, datalist[i].webPublicationDate, datalist[i].fields.body, datalist[i].fields.thumbnail, datalist[i].fields.main, datalist[i].fields.standfirst)
  }
})
