(function(exports) {

    function ArticleListView(articleListModel){
        this.articleList = articleListModel

    }

    ArticleListView.prototype.returnListViewHTML = function() {
        let articlesIn = this.articleList.getArticles();
        console.log(articlesIn);
        let articlesHTMLOut = [];

         if (articlesIn.length === 0)
             return null;
         for (let i = 0; i < articlesIn.length; i++) {
             articlesHTMLOut.push(`<div id="${articlesIn[i].id}"><img src="${articlesIn[i].img}">${articlesIn[i].title}</div>`);
         }

         console.log(articlesHTMLOut);
         return `<div>${articlesHTMLOut.join("")}</div>`

    };


    exports.ArticleListView = ArticleListView;

})(this);
