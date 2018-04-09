var newslist = new NewsList();

function addNews () {
    console.log(newslist.all());
    var picture = '<img src="https://wallpaperscraft.com/image/newspaper_coffee_cup_spoon_sunglasses_news_cup_holder_84893_602x339.jpg">'
    var body = getFormInput();
    newslist.add(new News(body, picture));
    clearTextBox();
    drawList();
}

function getFormInput () {
    return document.getElementById("news_input").value;
}

function drawList() {
  emptyList();

  var allnewss = newslist.all();
  for(i=0; i<allnewss.length; i++ ) {
    var text = allnewss[i].abbrBody();
    var newsId = `news_${i}`;
    var newListElement = document.createElement("li");
    var newContent = document.createTextNode(text);
    newListElement.id = newsId;
    newListElement.appendChild(newContent);
    document.getElementById("news_list").appendChild(newListElement)
    document.getElementById(newsId).onclick = function() {showBigNews(this.id)};
  }
}

function emptyList() {
  var list = document.getElementById("news_list");
  while(list.firstChild) {
    list.removeChild(list.firstChild);
  };
};

function showBigNews(newsId) {
  console.log(newsId)
  var bigNews = document.getElementById('big_news')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNews.style.display = "block";
  formDiv.style.display = "none";
  listDiv.style.display = "none";
  setBigNewsText(newsId);
};

function showFormDiv() {
  console.log("showformdiv")
  var bigNews = document.getElementById('big_news')
  var formDiv = document.getElementById('form_div')
  var listDiv = document.getElementById('list_div')
  bigNews.style.display = "none";
  formDiv.style.display = "block";
  listDiv.style.display = "block";
  };

  function clearTextBox() {
    document.getElementById('news_input').value = '';
};

function setBigNewsText(newsId) {
  var i = parseInt(newsId.split("_")[1]);
  var text = newslist.all()[i].getBody();
  document.getElementById("news_body_text").innerHTML = text;
}
