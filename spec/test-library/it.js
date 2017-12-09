(function (exports) {

  function it(description, test) {

    var elem = document.getElementById('tests')
    try {
      test()
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${description}</li>` +
      `<p style='color: green; font-weight: bold'> Test Passed </p>`
    }
    catch(error) {
      elem.innerHTML += `<li style="font-weight: bold; font-size: 15px">${description}</li>` +
      `<p style='color: red; font-weight: bold'> ${error.message} </p>`
    }
  }
  exports.it = it;
})(this);
