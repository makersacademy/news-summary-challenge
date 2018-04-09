'use strict';

// Test section title
document.getElementById("result").innerHTML += "<p style='color:blue;'><b>HEADLINE MODEL TESTS</b></p>";

// Tests that daily top headlines are accessed via Guardian API are stored in topHeadlines array
function testDailyTopHeadlinesArray() {
  document.getElementById("result").innerHTML += "Test Top Headlines Array // Top headlines via Guardian API are in array:</br>";
  test.isEqual(noteController.noteview.notesToPrint[0] === "<a href=\"#note/8\">Checkmate 1-2 1-2!!</a>");
};
testDailyTopHeadlinesArray();


// STUB A FAKE XMLHttpRequest (SINON):
//
// Fake XMLHttpRequest
// While the preceding test shows off some nifty Sinon.JS tricks, it is too tightly coupled to the implementation. When testing Ajax, it is better to use Sinon.JS’ fake XMLHttpRequest:
//
// var xhr, requests;
//
// before(function () {
//     xhr = sinon.useFakeXMLHttpRequest();
//     requests = [];
//     xhr.onCreate = function (req) { requests.push(req); };
// });
//
// after(function () {
//     // Like before we must clean up when tampering with globals.
//     xhr.restore();
// });
//
// it("makes a GET request for todo items", function () {
//     getTodos(42, sinon.spy());
//
//     assert.equals(requests.length, 1);
//     assert.match(requests[0].url, "/todo/42/items");
// });
// Learn more about fake XMLHttpRequest.
