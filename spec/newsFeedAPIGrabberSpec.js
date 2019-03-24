//
console.log('newsFeedAPIGrabber...');

var grabber = new NewsFeedAPIGrabber();
var response = grabber.getFeed();
console.log('DATA RETURNED: ' + response);
assert.areNotEqual(response, '[error getting feed]');