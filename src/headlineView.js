(function(exports) {
  function View(APIHeadline) {
    this.API = APIHeadline
  }

  View.prototype.headlinesToHTML = function () {
    var HTMLHeadlines = "<ul>"
    this.API.allHeadlines().forEach(function(headline) {
      HTMLHeadlines += `<li><div>${headline}</div></li>`
    })
    return HTMLHeadlines += "</ul>"
    }
    exports.View = View
})(this)
