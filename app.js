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
      // const card = document.createElement("div");
      // const h1 = document.createElement("h1");
      // h1.textContent = result.webTitle;
      // container.appendChild(card);
      // card.appendChild(h1);
    });
    controller = new HeadlineController(headlineList);
    console.log(headlineList);
    document.getElementById("app").innerHTML = controller.updateHTML();
  } else {
    console.log("error");
  }
};
request.send();
