var controller = {};
(function(exports){
  function renderHeading(){
    html.home();
    html.heading(model.titles());
  }
  function renderBody(){
    html.body();
    html.showBody(model.text());
    html.hideBody()
  }

  exports.renderHeading = renderHeading
  exports.renderBody = renderBody
})(controller)
