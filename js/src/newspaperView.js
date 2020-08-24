(function(exports) {

    function NewspaperView(newspaper) {
        this.newspaper = newspaper
    }

    NewspaperView.prototype = (function() {
        
        function wrapInHTML() {
            array = this.newspaper.getList().map(article => "<a href='#articles/" + article.id + "'>" + 
            article.getContent().substring(0, 40) + "</a>");
            return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>";
        }; 

    return {
        wrapInHTML,
    };

})();


    exports.NewspaperView = NewspaperView;

})(this);