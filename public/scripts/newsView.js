"use strict";

(function(exports) {
  function NewsView(doc) {
    this.doc = doc;
  };

  NewsView.prototype = {
    renderStructure: function() {
    this.doc.body.innerHTML += `
      <div class = "firstPage">

        <header class="mainNav">
          <link rel="shortcut icon" href="">
          <div class="logo">
            <img src="images/newspaper.jpg"  height="60" width="60">
          </div>
          <div class="boxText"> 
            News on the go: "for the busy politician"  
          </div>
        </header>

        <div class "articles">
          <h2> Headlines </h2>
          <ul class ="articlesList"></div>
        </div>

        <div class='modal'>
          <div class='window'></div>
        </div>
      </div>`;
    },

    renderNewsList: function(articles) {
      var articleList = document.querySelector('.articlesList');
      if (typeof articles[0] !== 'undefined') {
        articleList.innerHTML = '';

        articles.forEach(function(article) {
          articleList.innerHTML += `
            <li class='listItem' id='${article.id}'>
              ${article.title}
            </li>
          `;
        })
      }
    },

    renderShowArticle: function(article) {
      var showArticle = document.querySelector('.window');
      showArticle.innerHTML = `
          <div class="modal-content">
            <div class="modal-header">
              ${article.id} : ${article.title}
            </div>
            <div class="modal-body">
              ${article.text}
            </div>
            <div class=modal-footer>
              <button class="close" id="closeWindow">Close</button>
            </div>
          </div>
        `;
      var modal = document.querySelector('.modal');
      modal.style.display = 'block';
	  },

	  renderCloseArticle: function() {
      var modal = document.querySelector('.modal');
      modal.style.display = 'none';
	  }
}
  
  exports.NewsView = NewsView;
})(this);
