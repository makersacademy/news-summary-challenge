(function (exports) {

    function Title(text) {
        this.text = text;
    };

    Title.prototype.returnText = function () {
        return this.text;
    };

    exports.Title = Title;

})(this);
