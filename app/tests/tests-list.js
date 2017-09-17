(function(exports) {
  function testsList() {

    var assert = new Assert();
    var list = new List();

    function testInput () {
      list.input("Hello World!");

      console.log(list.list);

      var pass = (list.list[0]) === "Hello World!";
      testOutputter('testInput', pass);
    }

    testInput();
    }
  testsList();
})(this);
