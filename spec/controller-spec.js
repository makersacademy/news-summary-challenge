
function testReturnArticles(){

  var fakeXHR = function(){
    var url = 'http://test.com'
    var fakeResponse =
        {
        "response":{
        "status":"ok",
        "userTier":"developer",
        "total":431691,
        "startIndex":1,
        "pageSize":10,
        "currentPage":1,
        "pages":43170,
        "orderBy":"relevance",
        "results":[
           {
              "id":"travel/2018/jan/11/10-best-winter-escapes-hotels-pubs-bed-and-breakfast",
              "type":"article",
              "sectionId":"travel",
              "sectionName":"Travel",
              "webPublicationDate":"2018-01-11T06:30:13Z",
              "webTitle":"10 of the best UK winter escapes",
              "webUrl":"https://www.theguardian.com/travel/2018/jan/11/10-best-winter-escapes-hotels-pubs-bed-and-breakfast",
              "apiUrl":"https://content.guardianapis.com/travel/2018/jan/11/10-best-winter-escapes-hotels-pubs-bed-and-breakfast",
              "isHosted":false,
              "pillarId":"pillar/lifestyle",
              "pillarName":"Lifestyle"
           }
         }
       }

       var myList = fakeResponse
       FakeXHR.prototype.open = function('GET', url){
         return myList
       };

       FakeXHR.prototype.onload = function(){
         return myList
       };
     };

  assert.isEqual(), "Checks that article is returned in HTML format")
}
testReturnArticles()
