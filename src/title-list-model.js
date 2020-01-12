(function (exports) {

    function TitleList() {
        this.titles = [];
    };

    TitleList.prototype.addTitle = function (title) {
        this.titles.push(new Title(title))
    };

    TitleList.prototype.returnTitles = function () {
        return this.titles;
    };

    exports.TitleList = TitleList;

})(this);
