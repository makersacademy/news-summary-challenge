"use strict";

(function(exports) {
  function NewsView() {
  };

  NewsView.prototype. = {
    renderStructure: function() {
    document.body.innerHTML += `
      <div class = "firstPage">

        <header class="mainNav"> 
          <div class="logo">
            <img src="../images/newspaper.jpg"  height="60" width="60">
          </div>
          <div class="boxText"> 
            News on the go: "for the busy politician"  
          </div>
        </header>

        <div class "articles">
          <h2> Headlines </h2>
          <ul class ="articlesList"></div>
        </div>
      </div>`;
    },

    renderNewsList: function(articles) {
      var articleList = document.querySelector('.articleList');
      if (typeof articles[0] !== 'undefined') {
        articleList.innerHTML = '';
        articles.forEach(function(article) {
          articleList.innerHTML += `
            <li class='listItem' id='${article.id}'>
              ${article.title}
            </li>
          `;
        }
      }
    }
  }
  
  exports.NewsView = NewsView;
})(this);
