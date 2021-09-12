function getHeadline(url) {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}`)
    .then(response => response.json())
    .then((text) => {
      console.log(text.response.content.webTitle)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function getSummary(url) {
  fetch(`http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=${url}`)
    .then(response => response.json())
    .then((text) => {
      console.log(text.response.content.webTitle)
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}