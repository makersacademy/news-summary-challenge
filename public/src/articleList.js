// (function(exports) {
//
//   function ArticleList() {
//
//   }
//
//   ArticleList.prototype.showHeadArticles = function () {
//
//     var xmlhttp = new XMLHttpRequest();
//     request.open('GET', 'https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9', true );
//     xmlhttp.onreadystatechange = function() {
//         if (this.readyState == 4 && this.status == 200) {
//             var myArr = JSON.parse(this.responseText);
//             document.getElementById("guardianInfo").innerHTML = myArr[0];
//         }
//     };
//     // xmlhttp.open("GET", "json_demo_array.txt", true);
//     // xmlhttp.send();
//
//   };
//
//   exports.ArticleList = ArticleList;
// })(this);
//
// articlelist = new ArticleList();
//
// articlelist.showHeadArticles();


//
// (function(exports) {
//
//   function ArticleList() {
//
//   }
//
//   ArticleList.prototype.showHeadArticles = function () {
//     var xhr = new XMLHttpRequest();
//     xhr.open('GET', 'https://content.guardianapis.com/search?q=debate%20AND%20economy&tag=politics/politics&from-date=2014-01-01&api-key=23e96999-b50f-46d0-8383-6d0cc64c08e9');
//     xhr.onload = function() {
//         if (xhr.status == 200) {
//
//             document.getElementById("guardianInfo").innerHTML = JSON.parse(xhr.responseText)
//
//             var getback = JSON.parse(xhr.responseText)
//             console.console.log(getback);
//         }
//         else {
//             alert('Request failed.  Returned status of ' + xhr.status);
//         }
//     };
//     xhr.send();
//
//   };
//
//   exports.ArticleList = ArticleList;
// })(this);
//
// articlelist = new ArticleList();
//
// articlelist.showHeadArticles();

(function(exports){

  function ArticleList(){
    this.list = []
  };

  ArticleList.prototype.addArticle = function(article){
    this.list.push(article)
  }

  ArticleList.prototype.getData = function(){
    var request
    var dieu = this
    var getback
    request = new XMLHttpRequest();
    request.open('GET', 'https://content.guardianapis.com/search?api-key=b7f045b7-75c0-44af-9f61-f7d188b6261d', true);
    request.onreadystatechange = function(){
      if(this.readyState == 4 && this.status == 200){
        getback = JSON.parse(this.response).response.results
        console.log(getback[0].id)
        getback.forEach(function(result){
          dieu.addArticle(new Headline(result.webTitle, result.webPublicationDate, result.webUrl));
        });
      };
    };
    request.send()
  };


  ArticleList.prototype.innerHtmlData = function () {
    this.list.forEach(function(article) {
      console.log(article)
      document.getElementById("guardianInfo").innerHTML += "<a href=" + "'" + article.url + "'" +  ">" + article.title + '</a> <br>'

    })

  };

  exports.ArticleList = ArticleList
})(this);

var articlelist = new ArticleList();
articlelist.getData();
articlelist.innerHtmlData();
articlelist.innerHtmlData();
