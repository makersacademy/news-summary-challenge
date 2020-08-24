(function (exports) { 
    function News(headlines) {
        this.headlines = headlines
    };

    News.prototype.showHeadlines = function () {
        return this.headlines;
    }
    exports.News = News; 
})(this);