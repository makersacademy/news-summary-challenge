let headlines = document.querySelector('#headlines');

getHeadlines().then(response => {
  response.json().then(headlineData => {
    headlineData.response.results.forEach(function(x, index) {
      headlines.innerHTML += `<a href=#${index + 1}>` + x.webTitle + "</a><br>";
      // function getSummary() {
      if(true === false)
        { return fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${x.webUrl}").then(response => {
          response.json().then(summaryText => {
            showSummary(result.summary.text)
          })
        })
      } else { return fetch("https://content.guardianapis.com/search?api-key=67705412-dcf4-4ba7-8bb3-7a2595b2280a")}
      })
    })
  })

getHeadlines()

// getImages().then(response => {
//   response.json().then(imageData => {
//     // console.log(imageData)
//   })
// })
//
// getImages();
