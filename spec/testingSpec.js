document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let errors = [];
// Add tests here
//test.saveTest("Describe your test", test.?????(,))
  try {

    test.saveTest("Testing if 1 is 1", test.isEqual(1,1));
  } catch (err) {
    console.log(err);
    errors.push(err);
  }


// Prints Tests
  let result = test.printTests();

  document.getElementById("id").innerHTML = result;
  document.getElementById("error").innerHTML = errors.toString().replaceAll(',','');
});
