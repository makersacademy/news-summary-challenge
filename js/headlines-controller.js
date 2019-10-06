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

    registerListeners() {
      window.addEventListener(
        "hashchange", this.handleHashChange.bind(this)
      );
    }

    handleHashChange(){
      let id = window.location.hash.split('/')[1];
      
    }

  }

  exports.HeadlinesController = HeadlinesController;
})(this);