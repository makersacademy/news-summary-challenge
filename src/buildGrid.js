function buildGrid(articles) {
  var root = document.getElementById("root");
  var thumbs = document.createElement("div");
  root.innerHTML = "<h1>Ame News</h1>";

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

    newDiv.addEventListener('click', function() {
      document.location.hash = item._id;
    });
  });
}
