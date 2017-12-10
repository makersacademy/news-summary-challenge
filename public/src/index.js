"use strict";

window.addEventListener("load", function() {
  var content
  var controller

  content = document.getElementById("content")
  controller = new Controller(content, new HeadlineList())
})
