const getFeed = (feedUrl, callback) => {
  fetch(`${feedUrl}`)
  .then((response) => response.json())
  .then((jsonResponse) => {
    console.log(jsonResponse);
    callback(jsonResponse["response"]["results"]);
  });
};

module.exports = { getFeed };