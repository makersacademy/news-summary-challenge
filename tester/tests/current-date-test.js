'use strict';

// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>DATE TESTS</b></p>";

// Test current date is is format yyyy-mm-dd
function testCurrentDate() {
  document.getElementById("result").innerHTML += "Test Date Format // Date is returned like yyyy-mm-dd:</br>";
  let testDate = (new Date()).toISOString().slice(0, 10);
  let today = new TodayDate();
  console.log(today);
  test.isEqual(testDate === today.dateToday);
};

testCurrentDate();
