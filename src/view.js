(function(exports){

    function View() {

    };

    return {
        addToList: addToList,
    };

    View.prototype.addToList = function (title) {
        var list = document.getElementById('title-list');
        list.appendChild(createTitleHtml(title));
    };

    View.prototype.createTitleHtml = function (title) {
        var htmlElem = document.createElement('li');
        htmlElem.setAttribute('id', title.id);
        htmlElem.appendChild(createTitleLink(title));
        return htmlElem;

    };

    View.prototype.createTitleLink = function(title){
        var htmlElem = document.createElement('a');
        var linkText = document.createTextNode(title.title);
        htmlElem.setAttribute('href', title.url);
        htmlElem.appendChild(linkText);
        return htmlElem;

    };

    exports.View = View;
})(this);