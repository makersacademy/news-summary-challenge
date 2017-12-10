function getIDFromUrl() {
  return parseInt(window.location.hash.split("#")[1]);
};

function hashChangeEventListener(allnews){
  window.addEventListener('hashchange', function() {
    window.scroll(0,0);

    var hash = getIDFromUrl();
    if (hash)
      viewSingleArticle(allnews, hash);
    else {
      document.getElementById("expanded").remove();
      document.getElementById("thumbs").removeAttribute('style');
    }
  });
}

function viewSingleArticle(allnews, id) {
    hideArticles();
    addExpandedArticle(allnews.getArticleById(id));
}

function hideArticles() {
  document.getElementById("thumbs").setAttribute('style', 'display: none;');
}

function addExpandedArticle(article) {
  var expanded = document.getElementById("expanded");

  if(expanded)
  {
    var newDiv = expanded;
  }
  else
  {
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","expanded");
    newDiv.setAttribute("id","expanded");
    root.appendChild(newDiv);
  }

  newDiv.innerHTML ="<h3><a href='"+ article.addr() +"' target='_blank'>" + article.headline() + "</a></h3><time>" + article.date() + "</time>" + article.mainImage() +"<article>" + article.content()+"</article><a id='back' class='back'>×</a>";

  var back = document.getElementById('back');
  back.addEventListener('click', function() {
    window.location.hash = "";
  });
}
