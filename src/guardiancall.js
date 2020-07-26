var url = 'http://content.guardianapis.com/world?format=json&api-key='+key+'&show-fields=thumbnail'

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
        data.response.results.map((newsitem, index) => {
          console.log(index)
          block_to_insert = document.createElement( 'div');
          block_to_insert.id = 'div'+index
          block_to_insert.classList.add('newsitem')
          document.getElementById('newsItemGuardian').appendChild(block_to_insert);
          var date = document.createElement("P");
          date.innerHTML = newsitem.webPublicationDate
          document.getElementById('div'+index).appendChild(date);
          var para = document.createElement("P");
          para.innerHTML = newsitem.webTitle
          document.getElementById('div'+index).appendChild(para);
          console.log(newsitem.id)
          // console.log(newsitem.webTitle)
          // console.log(newsitem.webPublicationDate)
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