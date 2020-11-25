var request = fetch("", {
  credentials: "same-origin"
})
var newsModel = new NewsModel(request);
var newsListModel = new NewsListModel();

// var url = "https://content.guardianapis.com/search?";
// var token = "api-key=6e4c23d9-11ca-4d78-8240-fa61dfa161f9";
//   $.get(url + token + units, function(data) {
//     $("#current-temperature").text(data.main.temp);
//   })
