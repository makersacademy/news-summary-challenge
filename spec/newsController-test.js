function DoubleApi() {

  DoubleApi.prototype.data = function () {
    return doubleApiData;
  }
}

function Testgetdata() {
  var controller = new Controller(new DoubleApi)
  var describe = "#getData - Returns api data"
  assert.isEqual(describe, controller.getData(), doubleApiData )
}

Testgetdata();
