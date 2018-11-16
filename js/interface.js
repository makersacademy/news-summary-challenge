var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.response);
    var news = data.response.results
    for (i = 0; i < news.length; i++) {
      var div = document.createElement("div")
      div.setAttribute("id", "headline_" + i)
      document.getElementById("headlines").appendChild(div);
      var img = document.createElement("img");
      img.setAttribute("src", news[i].fields.thumbnail);
      img.setAttribute("id", "thumbnail_" + i)
      img.setAttribute("class", "thumbnail");
      document.getElementById("headline_" + i).appendChild(img);
      var heading = document.createElement("h2")
      heading.setAttribute("class", "heading");
      heading.setAttribute("id", "heading_" + i);
      heading.innerHTML += news[i].webTitle;
      document.getElementById("headline_" + i).appendChild(heading);
    }

    var headingclass = document.getElementsByClassName("heading");
    var thumbnailclass = document.getElementsByClassName("thumbnail");

    var getIDfromClick = function() {
        var attribute = this.getAttribute("id");
        var itemclass = this.getAttribute("class");
        id = attribute.replace(itemclass+"_","")
        showArticle(id)
    };

    var showArticle = function(id) {
      console.log(id)
      document.getElementById("headlines").style.display = "none"
      document.getElementById("article").style.display = "block"
    }

    for (var i = 0; i < headingclass.length; i++) {
        headingclass[i].addEventListener('click', getIDfromClick, false);
    }
    for (var i = 0; i < thumbnailclass.length; i++) {
        thumbnailclass[i].addEventListener('click', getIDfromClick, false);
    }
  }
};
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail", true);
xhttp.send();
