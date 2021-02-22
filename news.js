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
recipeWrapper.addEventListener("click", function (e){
  e.preventDefault();
  openStory(e.target.id);
});

modalClose.addEventListener("click", function (e){
  closeModal();
});

setInterval(function(){
  let id1 = Math.floor(Math.random() * imageID)
  image = document.getElementById(`${id1}`);
  console.log(`cone${id1}`);
  image.src=`images/${randomImage()}.png` }, 100);


// Model functions
function addNews(headline, body, url) {
  story = [headline, body, url]
  newsBank.push(story);
  index = newsBank.indexOf(story);
  createNewsItem(index);
}

function createNewsItem(index) {
  let tableCell = document.createElement("div");
  tableCell.class="grid-item"
  let aNode = document.createElement("a");
  addImage(aNode, index);
  tableCell.appendChild(aNode);
  recipeWrapper.appendChild(tableCell);
  addAttributes(aNode, index);
}

function addImage(aNode, index) {
  let imageNode = document.createElement("img")
  imageNode.style.width="30%"
  imageNode.style.height="auto"
  imageNode.style.align="center"
  imageNode.style.margin="5px"
  imageNode.id=`${index}`
  imageNode.src=`images/${randomImage()}.png`;
  aNode.appendChild(imageNode);
  imageID++
}

function randomImage() {
  console.log("randomiser")
  return Math.floor(Math.random() * 10)
}

function addAttributes(aNode, index) {
  aNode.href = `${index}`;
  aNode.id = `cone${index}`;
}

function openStory(id) {
  let header = newsBank[id][0];
  let text = newsBank[id][1];
  let url = newsBank[id][2];
  openModal(header, text, url);
};

function openModal(header, text = "", url) {
  modal.style.display = "block";
  storylink.href = url;
  head.innerHTML = header;
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
