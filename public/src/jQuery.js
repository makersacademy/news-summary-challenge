$(document).ready(function() {


  function getGuardianInfo() {
    $.get("https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9", function(data) {
      $("#guardianInfo").html(data);
    }).fail(function() {
      $('#guardianInfo').html(('Information not found'))
    })
  }

  getGuardianInfo();
});


var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9');
xhr.onload = function() {
    if (xhr.status === 200) {
        alert('User\'s name is ' + xhr.responseText);
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();
