(function(exports) {

var realStoryList = new StoryList;

  if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
      var httpRequest = new XMLHttpRequest();
  } else if (window.ActiveXObject) { // IE 6 and older
      var httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
  }

  httpRequest.onreadystatechange = processHttpResponse;


function makeHttpRequest() {
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/politics/2019/feb/24/theresa-may-dismisses-pressure-to-step-down-as-pm-after-brexit', true);
    httpRequest.send();
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=    https://www.theguardian.com/world/2019/feb/25/theresa-may-pledges-200m-to-help-victims-of-yemens-civil-war', true);
    httpRequest.send();
    httpRequest.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/politics/2019/feb/23/no-problems-austerity-jeremy-corbyn-hits-out-labour-splitter-mps', true);
    httpRequest.send();
}

function processHttpResponse() {
    console.log('HELLO')

    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      // Everything is good, the response was received.
        if (httpRequest.status === 200) {
            processResponseText(httpRequest.responseText)
        } else {
            console.log('There was a problem with the request. For example, the response may have a 404 (Not Found) or 500 (Internal Server Error) response code.')
        }
    } else {
        console.log('HTTP Response: Not ready yet.')
    }
}

function processResponseText(text) {
    var article = decodeIntoAssociativeArray(text)['text'];
    var sentences = decodeIntoAssociativeArray(text)['sentences'];
    var story = new Story('Headline', sentences[0], article, 'images/putin.jpg')
    realStoryList.addStory(story);
    console.log('got so far as here')
}

function decodeIntoAssociativeArray(string) {
    var afterText = string.split('"text": "')[1];
    var afterTextBeforeSentences = afterText.split('"')[0];
    var sentences = string.split('"sentences": ["')[1].split('", "');
    sentences[sentences.length-1] = sentences[sentences.length-1].slice(0, -4)
    var array = {
      'text': afterTextBeforeSentences,
      'sentences': sentences
    };
    return array;
}

  exports.realStoryList = realStoryList
  exports.makeHttpRequest = makeHttpRequest;

})(this)
