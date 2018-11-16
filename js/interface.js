document.addEventListener("DOMContentLoaded", function(event) {
var newsFeed = new NewsFeed
newsFeed.getFeed()

setTimeout(displayHeadlines, 1000);

function createHTMLObject(type, attr, appendTo) {
  var obj = document.createElement(type)
  for (i = 0; i < attr.length; i++) {
  obj.setAttribute(attr[i].attr, attr[i].val)
}
  document.getElementById(appendTo).appendChild(obj);
}

function displayHeadlines () {

  for (i = 0; i < newsFeed.news_articles.length; i++) {

    createHTMLObject("div", [{attr: "id", val: "headline_"+i}],"headlines")
    createHTMLObject("img", [{attr: "id", val: "thumbnail_" + i},{attr: "class", val: "thumbnail"},{attr: "src", val: newsFeed.news_articles[i].thumbnail}],"headline_"+i)
    createHTMLObject("h2", [{attr: "class", val: "heading"},{attr: "id", val: "heading_"+i}],"headline_" + i)
    document.getElementById("heading_" + i).innerHTML += newsFeed.news_articles[i].webTitle;
    createHTMLObject("p", [{attr: "class", val: "link_container"},{attr: "id", val: "link_container_"+i}],"headline_" + i)
    createHTMLObject("a", [{attr: "class", val: "link"},{attr: "id", val: "link_"+i},{attr: "href", val: newsFeed.news_articles[i].webUrl},{attr: "target", val: "_blank"}],"link_container_" + i)
    document.getElementById("link_" + i).innerHTML = "View link on guardian site"
    createHTMLObject("img", [{attr: "src", val: "images/new_window.png"}],"link_container_"+i)
    createHTMLObject("hr", [],"headline_"+i)
  }

  var headingclass = document.getElementsByClassName("heading");
  var thumbnailclass = document.getElementsByClassName("thumbnail");

  var getIDfromClick = function() {
    console.log(this.getAttribute("class"))
    var attribute = this.getAttribute("id");
    var itemclass = this.getAttribute("class");
    id = attribute.replace(itemclass + "_", "")
    // showArticle(id)
    showArticleTEST(id)
  };

  function showArticleTEST(id) {
    console.log("abc")
    var url = newsFeed.news_articles[id].webUrl
    newsFeed.getArticle(url)
    setTimeout(articleprinter, 1000);

  }

  function articleprinter() {
    console.log(newsFeed.article)
    document.getElementById("headlines").style.display = "none"
    document.getElementById("article").style.display = "block"
    document.getElementById("article").innerHTML = ""
    var img = document.createElement("img")
    img.setAttribute("src", newsFeed.news_articles[id].thumbnail);
    img.setAttribute("id", "thumbnail_" + id)
    document.getElementById("article").appendChild(img);
    var heading = document.createElement("h2")
    heading.setAttribute("id", "heading_" + id);
    heading.innerHTML += newsFeed.news_articles[id].webTitle;
    document.getElementById("article").appendChild(heading);
    for (i = 0; i < newsFeed.article.length; i++) {
      var sentence = document.createElement("p")
      sentence.setAttribute("class", "sentence");
      sentence.setAttribute("id", "sentence_" + i);
      sentence.innerHTML = newsFeed.article[i];
      document.getElementById("article").appendChild(sentence);
    }

    var backbutton = document.createElement("button")
    backbutton.setAttribute("class", "backbutton");
    backbutton.setAttribute("id", "backbutton");
    backbutton.setAttribute("value", "Back");
    backbutton.innerHTML = "Back to headlines"
    document.getElementById("article").appendChild(backbutton);
    document.getElementById("backbutton").addEventListener("click", function() {
      document.getElementById("headlines").style.display = "block"
      document.getElementById("article").style.display = "none"
})
  }

  for (var i = 0; i < headingclass.length; i++) {
    headingclass[i].addEventListener('click', getIDfromClick, false);
  }
  for (var i = 0; i < thumbnailclass.length; i++) {
    thumbnailclass[i].addEventListener('click', getIDfromClick, false);
  }

};

})
