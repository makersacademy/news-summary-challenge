(function(exports) {
  function HeadlineView(headlineList) {
    this.headlineList = headlineList
  }

  HeadlineView.prototype.returnHTML = function() {
    var aStringOfHTML = []

    for (var i = 0; i < this.headlineList.array.length; i++) {
      aStringOfHTML.push("<li><div>" + this.headlineList.array[i].title + ", " + this.headlineList.array[i].article + ", " + this.headlineList.array[i].imageLink + "</div></li>")
    };

    aStringOfHTML.unshift("<ul>")
    aStringOfHTML.push("</ul>")

    return aStringOfHTML.join("");
  }

  exports.HeadlineView = HeadlineView;
})(this);
