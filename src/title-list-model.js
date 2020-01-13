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

    TitleList.prototype.selectTitle = function (index) {
        return this.titles[index];
    };

    exports.TitleList = TitleList;

})(this);
