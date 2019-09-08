console.log("WOHO-STARTING");
fetch('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-elements=[\'image\']')
  .then(function (response) {
    return response.json()
  }).then(function (json) {
    return json.response.results
  }).then(data => {
    const container = document.getElementById("root");
    console.log(data)
    for (let i of data) {
      const title = i.webTitle;
      const p = document.createElement("p");
      container.append(title, p);
    }
    console.log(container.childNodes)
  })
