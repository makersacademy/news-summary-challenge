// Varialbles
let newsBank = []
let newsList = document.getElementById("newsWrapper");
let modal = document.getElementById("modalWrapper");


//event listeners
newsList.addEventListener("click", function (e){
  e.preventDefault();
  openStory(e.target.id);
});

modal.addEventListener("click", function (e){
  closeModal();
})

// Model functions
function addNews(headline, body) {
  story = [headline, body]
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
  text = newsBank[id][1];
  openModal(text);
};

function openModal(text = "") {
  let para = document.getElementById("newsText");
  modal.style.display = "block";
  para.innerHTML = text;
}

function closeModal() {
  modal.style.display = "none";
}
// API
