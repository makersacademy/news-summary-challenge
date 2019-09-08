console.log("WOHO-STARTING");
fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search')
  .then(function (response) {
    return response.json()
  }).then(res => {
    console.log("something ->", res)
  })
