var url = 'http://content.guardianapis.com/world?format=json&api-key='+key

console.log(url);
apiCall();

// Call API
function apiCall() {
  fetch(url)
// Await Response
  .then(
    function(response) {
      console.log(response.status)
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
// Receive JSON back
      console.log("We have got to fetch")
      response.json().then(function(data) {
        console.log(data)

// Map results with:
//  id
//  title
//  date
//  image
        data.response.results.map((newsitem) => {
          console.log(newsitem.id)
          console.log(newsitem.webTitle)
          console.log(newsitem.webPublicationDate)
        })
      })
  })
  // 
}


// Map results with:
//  id
//  title
//  date
//  image