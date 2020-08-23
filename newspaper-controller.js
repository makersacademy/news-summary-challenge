(function(exports) {
  function NewspaperController(paper){
    this.paper = paper;
    this.newspaperview = new NewspaperView(paper)
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

    return {
      newspaper,
      view,
      renderHTML
    }
  })()
  exports.NewspaperController = NewspaperController;
})(this)
