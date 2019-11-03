(function(exports) {
  function headlineController (headlineView = new View( new APIHeadline()) ) {
    this.view = headlineView
    this.view.API.getData()
  }

  controller = new headlineController()
  
  headlineController.prototype.insertHTML = function (doc = document) {
    var element = doc.getElementById('headlines')
    return element.innerHTML = this.view.headlinesToHTML()
  }

  headlineController.prototype.makeUrlChangeShowArticleForCurrentPage = function() {
    window.addEventListener("hashchange", this.showArticleForCurrentPage.bind(this))
  }
  headlineController.prototype.showArticleForCurrentPage = function() {
    console.log(this)
    this.showArticle(this.getArticleFromUrl(window.location));
  }
  headlineController.prototype.getArticleFromUrl = function(link) {
    return link.hash.split("#")[1];
  }
  headlineController.prototype.showArticle = function(articleNumber) {
    var url = `${this.view.API.allUrls()[articleNumber]}`
    console.log(url)
    this.view.API.textSummary(url)
    console.log(this.view.API.summary)
    // document
    //   .getElementById('headlines')  
    //   .innerHTML = `${this.view.API.summary}`
      
  }
  controller.makeUrlChangeShowArticleForCurrentPage();

  function listenForRefreshEvent() {
    document.getElementById('refresh').addEventListener('submit', function() {
      event.preventDefault();
      controller.insertHTML()
    });
  };

  listenForRefreshEvent()

  // headlineController.prototype.refresh = function () {
  //   let self = this
  //   self.view.API.getData()
  //     .then(function () {
  //       self.insertHTML()
  //     })
  // }
  exports.headlineController = headlineController
})(this)