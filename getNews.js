getNews = () => {
  fetch(
    "https://content.guardianapis.com/search?use-date=newspaper-edition&show-fields=all&q=headlines&api-key=test"
  )
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      news = jsonData.response.results
      console.log(news)
      news.forEach(element => {
        newDiv = document.createElement("div");
        newDiv.innerHTML = `<img src="${element.fields.thumbnail}"><br>
        <h2> ${element.webTitle} </h2><br>
        <h3>${element.fields.bodyText.substring(0,100)}...</h3>`;
        document.body.append(newDiv)
      });
    });
};

module.exports = getNews;
