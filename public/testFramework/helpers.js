(function(exports) {

  const helpers = {
      fillInForm: function(id, content) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        frameDoc.getElementById(id).value = content;
      },
      clickObject: function(id) {
        var frameDoc = document.getElementById("pageUnderTest").contentDocument;
        frameDoc.getElementById(id).click();
      }
  };

  exports.helpers = helpers;
})(this);
