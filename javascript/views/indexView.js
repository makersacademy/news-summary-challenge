(function(exports){

    function IndexView(data) {
       this.data = data;
    };

    IndexView.prototype.render = function() {
        var html = "<ul>";
        for (var i = 0; i < this.data.length; i++) {
            var item = this.data[i];
            html += `<li>${item.title}</li>`;
        }
        html += "</ul>";

        return html;
    };

    exports.IndexView = IndexView;

})(this);