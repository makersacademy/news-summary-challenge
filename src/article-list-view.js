(function(exports) {

    function ArticleListView(articleListModel){
        this.articleList = articleListModel

    }

    ArticleListView.prototype.returnListViewHTML = function() {
        let articlesIn = this.articleList.getArticles();

        let articlesHTMLOut = [];

         if (articlesIn.length === 0)
             return null;
         for (let i = 0; i < articlesIn.length; i++) {
             articlesHTMLOut.push(`<div class="articles" id="${articlesIn[i].id}"><img src="${articlesIn[i].img}" id="${articlesIn[i].id}">${articlesIn[i].title}</div>`);
         }

         console.log(articlesHTMLOut);
         return `<div>${articlesHTMLOut.join("")}</div>`

    };

    ArticleListView.prototype.returnSingleViewHTML = function(id) {
        let articlesIn = this.articleList.getArticles();
        let articleOut = " ";

        for (let i = 0; i < articlesIn.length; i++) {
            if (articlesIn[i].id === id)
                articleOut = articlesIn[i].body;
        }

        console.log(articleOut);
        return(articleOut);
        // return `<div>${articlesHTMLOut.join("")}</div>`

    };



    exports.ArticleListView = ArticleListView;

})(this);
