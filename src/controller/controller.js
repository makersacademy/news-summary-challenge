(function (exports) {

  function Controller(headlines) {
    this.headlines = headlines;
  }

  Controller.prototype.html = function(id) {
    headlinesView = new HeadlinesView(this.headlines)
    document.addEventListener("DOMContentLoaded", function() {
      document.getElementById(id).innerHTML = headlinesView.htmlString();
    })
  }

  exports.Controller = Controller;
})(this);
