(function(exports) {

    function Newspaper() {
        this.list = []
    }

    Newspaper.prototype = (function() {

        function getList() {
            return this.list
        }
        
        function addArticle(article) {
            this.list.push(article)
        }

    return {
        getList,
        addArticle,
    }

})();

    exports.Newspaper = Newspaper;

})(this);