var api_key = process.env.GUARDIAN_API_KEY;
var articles = "Nothing"
fetch('https://content.guardianapis.com/search?api-key=' + apiKey)
.then(
  function(response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status)
      return
    }
    response.json().then(function(data) {
      console.log("all good")
      articles = data;
    });
  }
)
.catch(function(err) {
  console.log('Fetch Error :-S', err);
});
