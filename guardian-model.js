(function(exports){
  function TheGuardian(){
    this.guardiannews = {
      "response": {
          "status": "ok",
          "userTier": "free",
          "total": 1,
          "startIndex": 1,
          "pageSize": 10,
          "currentPage": 1,
          "pages": 1,
          "orderBy": "newest",
          "results": [
              {
                  "id": "politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
                  "sectionId": "politics",
                  "sectionName": "Politics",
                  "webPublicationDate": "2014-02-17T12:05:47Z",
                  "webTitle": "Alex Salmond speech – first minister hits back over Scottish independence – live",
                  "webUrl": "https://www.theguardian.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live",
                  "apiUrl": "https://content.guardianapis.com/politics/blog/2014/feb/17/alex-salmond-speech-first-minister-scottish-independence-eu-currency-live"
              }
          ]
      }
  }


  }

  TheGuardian.prototype = (function (){
    function loadinng(){
      return this.guardiannews;
    };
    
  })();

  exports.TheGuardian = TheGuardian;
})(this);