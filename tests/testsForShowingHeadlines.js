'use strict'

function testForShowingHeadlines(){
  var headlines = new Headlines();
  headlines.show('tests/testHeadline.txt');
  console.log(document.getElementById("headlineList").innerHTML)
  assert.isTrue(document.getElementById("headlineList").innerHTML == '<ul><li><div><a href="https://www.theguardian.com/sport/2020/jan/12/european-champions-cup-rugby">Exeter carry the English standard but French clubs look a real force | Robert Kitson</a></div></li></ul>');
};

testForShowingHeadlines();
