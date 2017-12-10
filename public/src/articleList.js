(function(exports) {

  function ArticleList() {

  }

  ArticleList.prototype.showHeadArticles = function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9');
    xhr.onload = function() {
        if (xhr.status === 200) {
            // alert('User\'s name is ' + xhr.responseText);
            document.getElementById("guardianInfo").innerHTML = xhr.responseText
        }
        else {
            alert('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();

  };

  exports.ArticleList = ArticleList;
})(this);

articlelist = new ArticleList();

articlelist.showHeadArticles();
