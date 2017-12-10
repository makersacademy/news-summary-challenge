(function(exports) {

  function ArticleList() {

  }

  ArticleList.prototype.showHeadArticles = function () {

    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live?show-fields=body&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9');
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



//   function ArticleList(){
//     this.list = []
//   };
//
//   ArticleList.prototype.addArticle = function(article){
//     this.list.push(article)
//   }
//
//   ArticleList.prototype.getData = function(){
//     var request
//     var dieu = this
//     var getback
//     request = new XMLHttpRequest();
//     request.open('GET', 'https://content.guardianapis.com/search?api-key=b7f045b7-75c0-44af-9f61-f7d188b6261d', true);
//     request.onreadystatechange = function(){
//       if(this.readyState == 4 && this.status == 200){
//         document.getElementById("guardianInfo").innerHTML = request.responseText
//         console.log(JSON.parse(this.response).response.results)
//         console.log(JSON.parse(request.responseText))
//         getback = JSON.parse(this.response).response.results
//       };
//     };
//   request.send()
//  };
//
// articlelist = new ArticleList();
// articlelist.getData();
