(function (exports) {

  function describe(string, method) {
    elem = document.getElementById('tests')
    try {
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${string}</li>${method()}`
    }
    catch(error) {
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${string}</li>${error.message}`
    }
  }

  exports.describe = describe;
})(this);
