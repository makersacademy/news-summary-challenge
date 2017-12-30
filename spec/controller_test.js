
function setup(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=http://worrydream.com/MediaForThinkingTheUnthinkable/note.html', sentences_number: 3);
  xhr.onload = function() {
    if (xhr.status === 200) {
      var data = JSON.parse(xhr.responseText)
      var div = document.getElementById('app')
      div.innerHTML = data.text
    }
    else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }

  };
  xhr.send();
}

function getsNews(){
  setup();
  assert.isTrue("News on page",document.documentElement.innerText.indexOf('text') )
}

function newsHasLink(){
  setup();

}

setup();
getsNews();
