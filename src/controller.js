(function (exports) {
  function Controller(headlinesListView) {
    this.view = headlinesListView;
  }

  Controller.prototype.insertView = function () {
    let element = document.getElementById('headlines');
    element.innerHTML = this.view.addHTMLTags();
  };

  Controller.prototype.changeToHeadlinePage = function () {
    let self = this;
    window.addEventListener('hashchange', function () {
      let id = window.location.hash.split('#headlines/')[1];
      let headline = self.view.list.headlines[id];
      let headlineView = new HeadlineView(headline);

      console.log(headline);

      document.getElementById('summary').innerHTML = headlineView.addHTMLTags();
    }, false);
  }

  exports.Controller = Controller;
})(this);
