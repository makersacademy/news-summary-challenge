newsList = document.getElementById("newswrapper");
newsBank = []

function addNews(story) {
  newsBank.push(story);
  index = newsBank.indexOf(story);
  createNewsItem(story, index);
}

function createNewsItem(story, index) {
  let liNode = document.createElement("li");
  let aNode = document.createElement("a");
  let textNode = document.createTextNode(story);
  aNode.appendChild(textNode);
  liNode.appendChild(aNode);
  newsList.appendChild(liNode);
  addAttributes(aNode, index);
}

function addAttributes(aNode, index) {
  aNode.href = `${index}`;
  aNode.id = `story${index}`;
}
