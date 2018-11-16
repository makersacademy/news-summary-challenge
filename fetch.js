
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

function fakeFetch(url) {
  res =
  {
    response:
    {
      results:
      [
        {
          "id": "1",
          "webTitle": "this is headline 1"
        },
        {
          "id": "2",
          "webTitle": "this is headline 2"
        }
      ]
    }
  }
  return new Promise(function(resolve, reject) {
    resolve(res)
  });
}

window.fetch = fakeFetch
