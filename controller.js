(function(exports){
  function Controller() {
    this.view = new ArticleView()
  }
  exports.Controller = Controller
  })(this);

Controller.prototype.summaryView = function() {
  var el = document.getElementById("summary")
  el.innerHTML = this.view.render()
}

