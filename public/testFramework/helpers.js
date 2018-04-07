(exports => {
  const helpers = {
    fillInForm(id, content) {
      document.getElementById(id).value = content;
    },
    clickObject(id) {
      document.getElementById(id).click();
    }
  };

  exports.helpers = helpers;
})(this);
