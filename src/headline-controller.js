(function(exports) {
  function HeadlineController(headlineList) {
    this.headlineListView = new HeadlineListView(headlineList);
  }

  HeadlineController.prototype = {
    updateHTML: function() {
      var html = this.headlineListView.render();
      return html;
    }
  };

  exports.HeadlineController = HeadlineController;
})(this);

// var request = new XMLHttpRequest();
//
// // Open a new connection, using the GET request on the URL endpoint
// request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
//
// request.onload = function() {
//   // Begin accessing JSON data here
// };
//
// // Send request
// request.send();

window.onload = function() {
  var headlineList = new HeadlineList();
  headlineList.add("World says Hello");
  headlineList.add("Hello says World");
  var controller = new HeadlineController(headlineList);
  document.getElementById("headlines").innerHTML = controller.updateHTML();
};
