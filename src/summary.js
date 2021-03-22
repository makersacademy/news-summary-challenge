function summarize(news) {
  url = news[0].webUrl;
  title = news[0].title;
  queryString = "&title=";
  summarize =
    "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=";
  const endpoint = summarize + url + queryString + title;
  fetch(endpoint)
    .then((response) => {
      return response.json();
    })
    .then((jsonresponse) => {
      document.getElementById("news-summary").innerHTML = 
      `
      <h2>${news[0].title}</h2>
      <img src="${news[0].imageLink}">
      </br>
      <div id="news-summary">${jsonresponse.sentences}</div>
      </br>
      <a href="${news[0].webUrl}">Read the full article on The Guardian</a>
      </br>
      </br>
      <a href=""><input type="button" value="Back to Headlines" /></a>
      `;
    });
}
