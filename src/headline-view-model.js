(function(exports) {
  function HeadlineView(headlineList) {
    this.headlineList = headlineList
  }

  // HeadlineView.prototype.textTruncate = function(str, length, ending) {
  //   if (length == null) {
  //     length = 55;
  //   }
  //   if (ending == null) {
  //     ending = '...';
  //   }
  //   if (str.length > length) {
  //     return str.substring(0, length) + ending;
  //   } else {
  //     return str;
  //   }
  // };

  HeadlineView.prototype.returnHTML = function() {
    var aStringOfHTML = []

    for (var i = 0; i < this.headlineList.array.length; i++) {
      aStringOfHTML.push("<li><div>" + this.headlineList.array[i].title + "<br></br>" + this.headlineList.array[i].article + "<br></br>" + this.headlineList.array[i].image + "</div></li><br></br>")
    };

    aStringOfHTML.unshift("<ul>")
    aStringOfHTML.push("</ul>")

    return aStringOfHTML.join("");
  }

  exports.HeadlineView = HeadlineView;
})(this);
