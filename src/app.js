
  var allnews = new ArticleList()
  fetch("http://content.guardianapis.com/search?show-fields=all&q=uk&page-size=12&api-key=fc20c2bc-137d-4f7b-a6c3-3c4efb09563d")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    var interface = data.response.results
    for(var i = 0; i < interface.length; i++) {
      allnews.save(interface[i].webTitle, interface[i].fields.body, interface[i].webUrl, interface[i].webPublicationDate, interface[i].fields.thumbnail, interface[i].fields.main)
    }
    console.log(allnews._articles);
    buildGrid(allnews._articles);
  })
  .catch(function() {
    console.log("Something went wrong!");
  });

  function buildGrid(articles) {
    var root = document.getElementById("root");
    root.innerHTML = "<h1>Ame News</h1>";
    var thumbs = document.createElement("div");
    root.appendChild(thumbs);
    thumbs.setAttribute("class","thumbs");
    thumbs.setAttribute("id","thumbs");

    articles.forEach(function(item, index) {
      var newDiv = document.createElement("div");
      newDiv.setAttribute("class","thumb");
      var divCont = "<img src='" + item.thumbImage() + "' alt=''><h2 data-id='"+ item.id() +"'>" + item.headline() + "</h2>";
      //headline, content, addr, date, thumbImage, mainImage
      newDiv.innerHTML = divCont;
      thumbs.appendChild(newDiv);
    });
  }
