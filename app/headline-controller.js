// (function(exports) {
//   function ArticleController(articleList = new ArticleList()) {
//     this.content = new Content()
//     this.headline = new Headline();
//     this.articleList = new ArticleList(this.headline);
//   }
//
//   ArticleController.prototype.insertArticleIntoHTML = function() {
//   var element = document.getElementById("headline")
//   return element.innerHTML = this.htmlConverter();
//   }
//
//   ArticleController.prototype.htmlConverter = function(list) {
//     var convert = "";
//     for (var i = 0; i < list.length; i++) {
//       convert += '<li><div>' + list[i] + '</div></li>';
//     }
//     return '<ul>' + convert + '</ul>';
//   };
//
// exports.NoteController = NoteController;
//
// })(this)
// }
