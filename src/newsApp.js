'use strict'

function importJSFile(filename){
  let imported = document.createElement('script');
  imported.src = filename;
  document.head.appendChild(imported);
}

importJSFile("./src/guardianAPI.js");
importJSFile("./src/article.js");
importJSFile("./src/articleView.js");
importJSFile("./src/articleListView.js");
importJSFile("./src/articleListController.js");

function startNewsApp() {
  showArticles(document.getElementById("container"));
}