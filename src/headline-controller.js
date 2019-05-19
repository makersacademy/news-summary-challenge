(function(exports) {
  function HeadlineController(headlineList) {
    this.headlineListView = new HeadlineListView(headlineList);
  }

  HeadlineController.prototype = {
    updateHTML: function(list) {
      var html = this.headlineListView.render(list);
      return html;
    }
  };

  exports.HeadlineController = HeadlineController;
})(this);

// window.onload = function() {
//   var headlineList = new HeadlineList();
//   headlineList.add("World says Hello");
//   headlineList.add("Hello says World");
//   var controller = new HeadlineController(headlineList);
// document.getElementById("headlines").innerHTML = controller.updateHTML()
// };
