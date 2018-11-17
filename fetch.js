
function get() {
  fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics?show-fields=thumbnail"
  )
  .then(function (res) {
    console.log(res);
    console.log(res.headers);
    if (res.headers !== undefined) {
      return res.json()
    } else {
      return res
    }


  })
  .then(function (res) {
  console.log(res.response);
  res.response.results.forEach(function (article) {
    console.log(article.webTitle);
  })
  })
}
