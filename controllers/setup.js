'use strict';

function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onstatuschange = function() {
    if ((this.status >= 200) && (this.state == 4)) {
      callback(JSON.parse(this.responseText));
    };
  };
};


