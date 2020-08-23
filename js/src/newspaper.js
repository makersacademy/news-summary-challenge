(function(exports) {

    function Newspaper() {
        this.list = []
        this.accumulator = 0
    }

    Newspaper.prototype = (function() {

        function getList() {
            return this.list
        }
        
        function addArticle(article) {
            article.id = this.accumulator
            this.list.push(article)
            ++this.accumulator
        }

    return {
        getList,
        addArticle,
    }

})();

    exports.Newspaper = Newspaper;

})(this);