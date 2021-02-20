// Varialbles
newsList = document.getElementById("newsWrapper");
newsBank = []

// Model functions
function addNews(headline, body) {
  story = [headline, body]
  newsBank.push(story);
  index = newsBank.indexOf(story);
  console.log("index")
  console.log(index)
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
  aNode.id = `story${index}`;
}

function openModal(note = "") {
  let modal = document.getElementById("modalWrapper");
  let para = document.getElementById("newsText");
  modal.style.display = "block";
  para.innerHTML = note;
}

// API
