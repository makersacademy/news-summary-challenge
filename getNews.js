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
        <h2> ${element.webTitle} </h2>
        <a href = ${element.webUrl}><h3>${element.fields.bodyText.substring(0,100)}...</h3></a>`;
        newDiv.addEventListener("click", () => {
            document.body.innerHTML = element.fields.body
        })
        
        document.body.append(newDiv)
        
      });
    });
};

module.exports = getNews;
