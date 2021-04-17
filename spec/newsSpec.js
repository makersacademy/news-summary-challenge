document.addEventListener("DOMContentLoaded", function() {
  test = new Testing;
  let errors = [];

  let newsList = new News();

  try {
    test.saveTest("1 -  News has a list of headlines", test.isInstance(newsList.headlines, Array));

    newsList.add("Test headline");
    test.saveTest("2 - News adds a new headline to the array", test.isEqual(newsList.headlines[0], "Test headline"));

          newsList.headlines = [];
          console.log(newsList.headlines);
          console.log(newsList.headlines.length);
          test.saveTest("**clearing array**", test.isEqual(newsList.headlines.length, 0 ));


  } catch (err) {
    console.log(err);
    errors.push(err);
  }

// Prints Tests
  let result = test.printTests();
  document.getElementById("id2").innerHTML = result;
  document.getElementById("error2").innerHTML = errors.toString().replaceAll(',','');
});
