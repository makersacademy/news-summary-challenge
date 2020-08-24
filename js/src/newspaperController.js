(function(exports) {

    function NewspaperController() {
    }

    NewspaperController.prototype = (function() {
       
        function getArticles() {
            const xhr = new XMLHttpRequest(),
                method = "GET",
                url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/sport?show-fields=body";
            xhr.open(method, url, true);
            xhr.onreadystatechange = function () { 
                if(xhr.readyState === XMLHttpRequest.DONE) {
                    var status = xhr.status;
                    if(status === 0 || (status >= 200 && status < 400)){
                        createArticles(xhr.responseText)
                    }
                };
            };
            xhr.send();
        };

        function createArticles(jsonData) {
            var array = JSON.parse(jsonData).response.results
            this.newspaper = new Newspaper(); 
            array.forEach(function(item) {
               this.newspaper.list.push(new Article(item.webTitle))
            })
            displayNewspaper(this.newspaper)
        }
        
        function displayNewspaper() {
            this.newspaperView = new NewspaperView(this.newspaper)
            var html = this.newspaperView.wrapInHTML(); 
            document.getElementById("app").innerHTML = html
        };

        function watchUrl() {
            window.addEventListener("hashchange", showArticle.bind(this));
        };

        function showArticle() {
            id = parseInt(getArticleFromUrl(), 10);
            let article = this.newspaper.getList()[id]
            let singleArticleView = new SingleArticleView(article);
            document.getElementById("app").innerHTML = singleArticleView.returnSingleArticle();
        };

        function getArticleFromUrl() {
            location = window.location
            return location.hash.split("#articles/")[1];
        };
        
        
    return {
        getArticles,
        createArticles,
        displayNewspaper,
        watchUrl,
    }

})();

    exports.NewspaperController = NewspaperController;

})(this);