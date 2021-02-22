// Initialise page

if (test === false) {
  // getNews();
  console.log("Using test news bank")
  while (testIndex < testBank.length) {
   addNews(testBank[testIndex][0], testBank[testIndex][1], testBank[testIndex][2])
    testIndex ++
  }
} else {
  // getNews();
}

//event listeners
newsList.addEventListener("click", function (e){
  e.preventDefault();
  console.log(`${e.target.id}`)
  openStory(e.target.id);
});

modalClose.addEventListener("click", function (e){
  closeModal();
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
  let pNode = document.createElement("p");
  let aNode = document.createElement("a");
  let textNode = document.createTextNode(headline);
  pNode.id = `${index}`
  pNode.appendChild(textNode);
  aNode.appendChild(pNode);
  liNode.appendChild(aNode);
  newsList.appendChild(liNode);
  addAttributes(aNode, index);
  addImage(aNode);
}

function addImage(aNode) {
  let i = 0
  imageID++
  for(i; i < 5; i++) {
    let imageNode = document.createElement("img")
    imageNode.style.width="9%"
    imageNode.style.height="auto"
    imageNode.style.align="center"
    imageNode.style.margin="30px"
    imageNode.id=`cone_${imageID}_${i}`
    imageNode.src="randomImage(imageNode)"
    aNode.appendChild(imageNode);
  }
}

function randomImage() {
  return Math.floor(Math.random() * 11)
}

function addAttributes(aNode, index) {
  aNode.href = `${index}`;
  aNode.id = `${index}`;
}

function openStory(id) {
  console.log(id)
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
  data = fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=ice%20cream%2C%20vanilla")
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
    let title = news[0].response.results[newsItem].webTitle
    let url = news[0].response.results[newsItem].webUrl
    getText(title, url)
    newsItem += 1;
  }
}

function getText(title, url) {
  let textSummary = []
  text = fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url)
    .then((response) => response.json())
    .then((data) => {
    console.log(data, "Success")
    textSummary.push(data)
    text = textSummary[0].sentences[0]
    addNews(title, text, url)
  })

}
