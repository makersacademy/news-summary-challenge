'use strict';

(function(exports) {

  function Controller(newsArticleListModel, newsArticleListView, NewsArticleView) {
    this.newsArticleListModel = newsArticleListModel;
    this.newsArticleListView = newsArticleListView;
    this.NewsArticleView = NewsArticleView;

    this._setUp();
  }

  Controller.prototype = {

    updateDOM: function(html) {
      document.getElementById('app').innerHTML = html;
    },

    _listenForHashChange: function() {
      var self = this;
      window.addEventListener('hashchange', function(event) {
        event.preventDefault();
        if (window.location.href.includes('#home')) {
          self.loadArticleList();
        } else {
          var articleId = window.location.hash.split("article/")[1];
          var article = self.newsArticleListModel.findByArticleId(articleId);
          var html = new self.NewsArticleView(article).render();
          self._updateDOM(html);
        }
      })
    }
  }

  exports.Controller = Controller;
})(this);


_setup: function() {
  var self = this;
  window.addEventListener('submit', function(event) {
    event.preventDefault();
    self.notesList.createNote(event.target[0].value);
    var html = self.notesListView.render();
    self.render(html);
    self._listenForHashChange();
  })
},


  _listenForHashChange: function() {
    var self = this;
    window.addEventListener('hashchange', function() {
    var id = window.location.hash.split("note/")[1];
    var note = self.notesList.findById(id);
    var html = new self.NotesView(note).render();
    self.render(html);
  })
},

render: function(html) {
  document.getElementById('app').innerHTML = html;
}
