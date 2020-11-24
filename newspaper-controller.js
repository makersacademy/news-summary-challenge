(function(exports) {
  function NewspaperController(paper){
    this.paper = paper;
    this.newspaperview = new NewspaperView(paper)
    this.listenForHashChange();
  }

  NewspaperController.prototype = (function(){
    function newspaper() {
      return this.paper
    };
    
    function view() {
      return this.newspaperview
    };

    function renderHTML() {
      document.getElementById('app').innerHTML = this.view().returnHTML();
    };

    function listenForHashChange() {
      let newspaper = this.newspaper();
      window.addEventListener('hashchange', function() {
        id = parseInt(getIDFromUrl(), 10);
        new ArticleDisplay(newspaper, id);
      });
    };

    function getIDFromUrl() {
      return window.location.hash.split("#articles/")[1];
    };

    return {
      newspaper,
      view,
      renderHTML,
      listenForHashChange
    }
  })()
  exports.NewspaperController = NewspaperController;
})(this)
