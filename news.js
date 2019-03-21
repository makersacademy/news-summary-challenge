 // need to insert callback to controller
function insertNewsIntoPage(news) {
  console.log(news)
  return news
  //  make
  // some code to insert news into page
}

var newAPICall = new GetAPIData()
var thisnewsData = newAPICall.makeRequest(insertNewsIntoPage)
console.log(thisnewsData);
