'use strict'

function testForShowingHeadlines(){
  var headlines = new Headlines();
  headlines.show('tests/testHeadline.txt');
  console.log(document.getElementById("headlineList").innerHTML)
  assert.isTrue(document.getElementById("headlineList").innerHTML == "<ul><li>Exeter carry the English standard but French clubs look a real force | Robert Kitson</li></ul>");
};

testForShowingHeadlines();
