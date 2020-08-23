(function(exports) {

    function NewspaperController(newspaper) {
        this.newspaper = newspaper
        this.newspaperView = new NewspaperView(newspaper);
    }

    NewspaperController.prototype = (function() {

        function newspaperView() {
            return this.newspaperView
        };
        
        function displayNewspaper() {
            var html = newspaperView().wrapInHTML(); 
            document.getElementById("app").innerHTML = html
        };

        function watchUrl() {
            window.addEventListener("hashchange", showArticle.bind(this));
        };

        function showArticle() {
            id = parseInt(getArticleFromUrl(), 10);
            let article = this.newspaper.getList()[id]
            let singleArticleView = new SingleArticleView(article);
            document.getElementById("app").innerHTML = singleNoteView.divHTML();
        };

        function getArticleFromUrl() {
            location = window.location
            return location.hash.split("#articles/")[1];
        };          
        
    return {
        newspaperView,
        displayNewspaper,
        watchUrl,
    }

})();

    exports.NewspaperController = NewspaperController;

})(this);