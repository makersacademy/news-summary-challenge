"use strict";

(function() {
  window.addEventListener("load", function() {

  var content = document.getElementById("content");
  var xhttp = new XMLHttpRequest();
  var controller = new Controller(content, new ArticleList(), xhttp);

  });
})();
