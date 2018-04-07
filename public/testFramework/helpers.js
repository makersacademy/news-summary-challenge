(function(exports) {

  const helpers = {
      fillInForm: function(id, content) {
        document.getElementById(id).value = content;
      },
      clickObject: function(id) {
        document.getElementById(id).click();
      }
  };

  exports.helpers = helpers;
})(this);
