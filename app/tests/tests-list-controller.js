(function(exports) {
  function testsListController() {

    var list = new List();
    var listController = new ListController(list);

    function testChangeElement () {
      list.input("Hello World!");
      listController.changeElement();

      var pass = (document.getElementById('headlines').innerHTML) === "Hello World!";
      testOutputter('testChangesElement', pass);
    }

    testChangeElement();
    }
  testsListController();
})(this);
