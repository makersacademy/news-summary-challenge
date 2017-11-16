(function (exports) {

  exports.Display = function (assertionType) {
    this.div = null;

    function printMessage(message) {
      var testDiv = document.getElementById("test-display")
      this.div = document.createElement("div");
      this.div.setAttribute('class', assertionType);
      var text = document.createTextNode(message);
      this.div.appendChild(text);
      testDiv.appendChild(this.div);
    }

    function addStyle(type) {
      assertionType += " " + type;
      this.div.setAttribute('class', assertionType);
    }

    return {
      printMessage: printMessage,
      addStyle: addStyle
    }
  }

})(this);