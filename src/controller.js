var controller = {};
(function(exports){
  function renderHeading(){
    html.home();
    html.heading(model.title());
  }
  function renderBody(){
    html.body();
    html.showBody();
    html.hideBody()
  }

  exports.renderHeading = renderHeading
  exports.renderBody = renderBody
})(controller)
