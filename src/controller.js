var controller = {};
(function(exports){
  function renderHeading(){
    html.heading("ciao");
  }
  function renderBody(){
    html.body("ciao");
  }

  exports.renderHeading = renderHeading
  exports.renderBody = renderBody
  // exports.renderHeading = renderHeading
})(controller)
