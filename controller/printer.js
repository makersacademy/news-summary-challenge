(function(exports){
  function printer(data) {
    document.getElementById('app').innerHTML = new ViewAllStories(data).convertDataToHtml();
  }

  exports.printer = printer
})(this);
