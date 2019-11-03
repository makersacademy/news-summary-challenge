(function(exports) {
  function View(APIHeadline) {
    this.API = APIHeadline
  }

  View.prototype.headlinesToHTML = function () {
    let images = this.API.allimages()
    let urls = this.API.allUrls()
    var HTMLHeadlines = "<ul>"
    this.API.allHeadlines().forEach(function(headline, index) {
      HTMLHeadlines += 
      `<li><div><a href="#${index}"><img src="${images[index]}" width="150" height="100"><br>${headline}</div></li>`})
    return HTMLHeadlines += "</ul>"
    }
    exports.View = View
})(this)
