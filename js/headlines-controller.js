(function(exports) {
  class HeadlinesController {
    constructor(api, view) {
      this.api = api;
      this.view = view;
    }

    showHeadlines() {
      this.api.getHeadlines(function(response) {
        let html = this.view.returnHTMLString(response);
        let obj = document.getElementById("headlines");
        this.view.insertHTMLString(obj, html);
      }.bind(this));
    }
  }

  exports.HeadlinesController = HeadlinesController;
})(this);