var url = 'http://content.guardianapis.com/world?format=json&api-key='+key

console.log(url);
apiCall();

// Call API
function apiCall() {
  fetch(url)

  .then(
    function(response) {
    console.log(response.status)
  })
  // console.log("We have got to fetch")
  // var result = await request.response.json();
  // console.log('We have a response:'+ result)
  // console.log(result)
}
// Await Response
// Receive JSON back
// Map results with:
//  id
//  title
//  date
//  image