var myKey = config.MY_KEY; 
var url = "https://content.guardianapis.com/search?api-key=" + myKey;

function getNewsTitle() {
  fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((Json) => {
    console.log(Json)
    var titles = Json.response.results;
    console.log(titles)
    var headlineView = new HeadlineView(titles);
    document.getElementById("title").innerHTML = headlineView.getHTML();

    console.log(headlineView.getHTML())
  })
};

getNewsTitle();
