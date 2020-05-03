
var getApi = function(callback) {
  var api_key = thing['PERSONAL_API_KEY'];
fetch(`http://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail,headline,bodyText,shortUrl,thumbnail`, {
  method: "GET",
}).then(res => {
  return res.json()
}).then(res => {
  // console.log("Request complete! response:", res)
  if(callback){
    new callback(res);
  }
  return res.response.results;
})
}


var doesTheThingRight =function() {
  var api_key = thing['PERSONAL_API_KEY'];
  fetch(`http://content.guardianapis.com/search?api-key=${api_key}&show-fields=thumbnail,headline,bodyText,shortUrl,thumbnail`, {
    method: "GET",
  })
}