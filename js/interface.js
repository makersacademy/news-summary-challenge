var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var data = JSON.parse(this.response);
    var news = data.response.results
    console.log(news)
    for (i = 0; i < news.length; i++) {
      // for (i = 0; i < 8; i++) {
      var div = document.createElement("div")
      div.setAttribute("id", "headline_" + i)
      document.getElementById("headlines").appendChild(div);
      var img = document.createElement("img");
      // console.log(news[i].fields)
      // console.log(news[i].fields.thumbnail)
      img.setAttribute("src", news[i].fields.thumbnail);
      img.setAttribute("id", "thumbnail_" + i)
      img.setAttribute("class", "thumbnail");
      document.getElementById("headline_" + i).appendChild(img);
      var heading = document.createElement("h2")
      heading.setAttribute("class", "heading");
      heading.setAttribute("id", "heading_" + i);
      heading.innerHTML += news[i].webTitle;
      document.getElementById("headline_" + i).appendChild(heading);
      var link = document.createElement("a")
      link.setAttribute("class", "link");
      link.setAttribute("id", "link_" + i);
      link.setAttribute("href", news[i].webUrl);
      link.setAttribute("target", "_blank");
      link.innerHTML = "View link on guardian site"
      document.getElementById("headline_" + i).appendChild(link);
        var hr = document.createElement("hr")
        document.getElementById("headline_" + i).appendChild(hr);
    }

    var headingclass = document.getElementsByClassName("heading");
    var thumbnailclass = document.getElementsByClassName("thumbnail");

    var getIDfromClick = function() {
      var attribute = this.getAttribute("id");
      var itemclass = this.getAttribute("class");
      id = attribute.replace(itemclass + "_", "")
      showArticle(id)
    };

    var showArticle = function(id) {
      // console.log(id)
      document.getElementById("headlines").style.display = "none"
      document.getElementById("article").style.display = "block"
      var url = news[id].webUrl
      // console.log(url)
      var apiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + url + ""
      // console.log(apiUrl)
      // var apiUrl = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html"
      // console.log(apiUrl)
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("article").innerHTML = ""
          var data = JSON.parse(this.response);
          // console.log(data)
          var img = document.createElement("img")
          img.setAttribute("src", news[id].fields.thumbnail);
          img.setAttribute("id", "thumbnail_" + id)
          // img.setAttribute("class", "thumbnail");
          document.getElementById("article").appendChild(img);
          var heading = document.createElement("h2")
          // heading.setAttribute("class", "heading");
          heading.setAttribute("id", "heading_" + id);
          heading.innerHTML += news[id].webTitle;
          document.getElementById("article").appendChild(heading);
          var sentences = data.sentences
          for (i = 0; i < sentences.length; i++) {
            var sentence = document.createElement("p")
            sentence.setAttribute("class", "sentence");
            sentence.setAttribute("id", "sentence_" + i);
            sentence.innerHTML = data.sentences[i];
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

          });

        }
      }
      xhttp.open("GET", apiUrl, true);
      xhttp.send();
    }

    for (var i = 0; i < headingclass.length; i++) {
      headingclass[i].addEventListener('click', getIDfromClick, false);
    }
    for (var i = 0; i < thumbnailclass.length; i++) {
      thumbnailclass[i].addEventListener('click', getIDfromClick, false);
    }
  }
};
xhttp.open("GET", "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=thumbnail,headline,trailText,bodyText&show-tags=all", true);
xhttp.send();
