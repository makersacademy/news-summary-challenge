// Initialise page

if (test === false) {
  getNews();
  }

//event listeners
newsList.addEventListener("click", function (e){
  e.preventDefault();
  openStory(e.target.id);
});

// modal.addEventListener("click", function (e){
//   gotoStory();
// })

// Model functions
function addNews(headline, body, url) {
  story = [headline, body, url]
  newsBank.push(story);
  index = newsBank.indexOf(story);
  createNewsItem(headline, index);
}

function createNewsItem(headline, index) {
  let liNode = document.createElement("li");
  let aNode = document.createElement("a");
  let textNode = document.createTextNode(headline);
  aNode.appendChild(textNode);
  liNode.appendChild(aNode);
  newsList.appendChild(liNode);
  addAttributes(aNode, index);
}

function addAttributes(aNode, index) {
  aNode.href = `${index}`;
  aNode.id = `${index}`;
}

function openStory(id) {
  let text = newsBank[id][1];
  let url = newsBank[id][2];
  openModal(text, url);
};

function openModal(text = "", url) {
  let para = document.getElementById("newsText");
  modal.style.display = "block";
  storylink.href = url;
  para.innerHTML = text;
}


function closeModal() {
  modal.style.display = "none";
}
// API - untested

function getNews() {
  data = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=occult&api-key=test")
    .then((response) => response.json())
    .then((data) => {
    news.push(data)
    console.log("The news is in")
    extractNews(news)
  })
    .catch((error) => {
    console.error("Error:", error);
  });
}

function extractNews(news) {
  let storyCount = news[0].response.results.length;
  let newsItem = 0;
  while (newsItem < storyCount) {
    title = news[0].response.results[newsItem].webTitle
    url = news[0].response.results[newsItem].webUrl
    addNews(title, "This is a test", url)
    newsItem += 1;
  }
}
