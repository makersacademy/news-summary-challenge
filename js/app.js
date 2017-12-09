fetch("http://content.guardianapis.com/search?show-fields=all&q=uk&page-size=12&api-key=fc20c2bc-137d-4f7b-a6c3-3c4efb09563d").then(function(response) {
  return response.json();
}).then(function(data) {
  var articles = data.response.results;
  console.log(articles);
}).catch(function() {
  console.log("Something went wrong!");
});
