(function(exports) {
    
    function Article(content) {
        this.content = content
        this.id = 0
    }
    
    Article.prototype.getContent = function() {
        return this.content
    };


    exports.Article = Article;
})(this);