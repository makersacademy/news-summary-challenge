const app = document.getElementById("app");
const container = document.createElement("div");
app.appendChild(container);

var request = new XMLHttpRequest();
request.open(
  "GET",
  "https://content.guardianapis.com/world?api-key=test&format=json",
  true
);
request.onload = function() {
  var headlineList = new HeadlineList();
  var data = JSON.parse(this.response);
  var results = data.response.results;
  if (request.status >= 200 && request.status < 400) {
    results.forEach(result => {
      headlineList.add(result);
    });
    controller = new HeadlineController(headlineList);
    document.getElementById("app").innerHTML = controller.updateHTML();
  } else {
    console.log("error");
  }
};
request.send();

headlineList.forEach(function(headline) {
  console.log(headline);
  var summary = new XMLHttpRequest();
  var sentences = [];
  request.open(
    "GET",
    `http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=${
      headline.headline.webUrl
    }`,
    true
  );
  request.onload = function() {
    var data = JSON.parse(this.response);
    // sentences.push(data.sentences);
    // headlineList.addSummary(sentences);
  };
  // console.log(sentences);
  request.send();
});
