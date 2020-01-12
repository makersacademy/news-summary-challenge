(function(exports) {
  function GuardianApi() {};

  GuardianApi.prototype = {
    getHeadlines(callback){
      const data = {
        "response": {
          "status":"ok",
          "userTier":"developer",
          "total":8,
          "startIndex":1,
          "pageSize":10,
          "currentPage":1,
          "pages":1,
          "orderBy":"newest",
          "results":[{
            "id":"uk-news/2020/jan/12/extinction-rebellion-guidance-raises-fresh-concerns-over-prevent",
            "type":"article",
            "sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T18:50:44Z",
            "webTitle":"Extinction Rebellion guidance raises fresh concerns over Prevent",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/extinction-rebellion-guidance-raises-fresh-concerns-over-prevent",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/extinction-rebellion-guidance-raises-fresh-concerns-over-prevent",
            "fields":{
              "headline":"Extinction Rebellion guidance raises fresh concerns over Prevent",
              "thumbnail":"https://media.guim.co.uk/3cf7fa7877d4fa2ac41b75b9e8e686a716fcafdb/449_174_4192_2516/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/ex-prevent-chief-criticises-terror-lists-inclusion-extinction-rebellion-sir-peter-fahy-",
            "type":"article","sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T18:47:22Z",
            "webTitle":"Ex-Prevent chief pans terror list's inclusion of Extinction Rebellion",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/ex-prevent-chief-criticises-terror-lists-inclusion-extinction-rebellion-sir-peter-fahy-",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/ex-prevent-chief-criticises-terror-lists-inclusion-extinction-rebellion-sir-peter-fahy-",
            "fields":{
              "headline":"Ex-Prevent chief pans terror list's inclusion of Extinction Rebellion",
              "thumbnail":"https://media.guim.co.uk/40754c5ff869aab4f0aae93b28831b8456ec9f7a/0_342_5126_3075/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/storm-brendan-gales-forecast-uk",
            "type":"article",
            "sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T17:07:23Z",
            "webTitle":"Storm Brendan: gales of up to 80mph forecast for UK",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/storm-brendan-gales-forecast-uk",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/storm-brendan-gales-forecast-uk",
            "fields": {
              "headline":"Storm Brendan: gales of up to 80mph forecast for UK",
              "thumbnail":"https://media.guim.co.uk/9413f00f6de7e01d88b1c501c847413f069c34bf/0_394_5906_3543/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/harry-and-meghan-seek-global-trademark-sussex-royal-brand",
            "type":"article","sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T14:59:10Z",
            "webTitle":"Harry and Meghan seek global trademark for 'Sussex Royal' brand",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/harry-and-meghan-seek-global-trademark-sussex-royal-brand",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/harry-and-meghan-seek-global-trademark-sussex-royal-brand",
            "fields":{
              "headline":"Harry and Meghan seek global trademark for 'Sussex Royal' brand",
              "thumbnail":"https://media.guim.co.uk/009ead9ae11d4c5d56bd8684d5559b4b51adf0da/0_319_4783_2870/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/mother-worst-serial-rapist-didnt-know-gay-reynhard-sinaga",
            "type":"article","sectionId":"uk-news",
            "sectionName":"UK news","webPublicationDate":"2020-01-12T14:02:12Z",
            "webTitle":"Mother of UK's worst serial rapist 'didn't know he was gay'",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/mother-worst-serial-rapist-didnt-know-gay-reynhard-sinaga",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/mother-worst-serial-rapist-didnt-know-gay-reynhard-sinaga",
            "fields": {
              "headline":"Mother of UK's worst serial rapist 'didn't know he was gay'",
              "thumbnail":"https://media.guim.co.uk/46293c494c42e3ed1ea32492cc3564529a9ad48f/0_208_960_576/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          },{
            "id":"uk-news/2020/jan/12/prince-william-harry-and-i-are-now-separate-entities",
            "type":"article",
            "sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T10:09:48Z",
            "webTitle":"Prince William: Harry and I are now separate entities",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/prince-william-harry-and-i-are-now-separate-entities",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/prince-william-harry-and-i-are-now-separate-entities",
            "fields": {
              "headline":"Prince William: Harry and I are now separate entities",
              "thumbnail":"https://media.guim.co.uk/585caa141274bfd3fa3c9d34f080ced659f3ca12/121_92_1677_1006/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/beyond-cambridge-spires-most-unequal-city-tackles-poverty",
            "type":"article",
            "sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T09:07:30Z",
            "webTitle":"Beyond Cambridge’s colleges, UK’s most unequal city battles poverty",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/beyond-cambridge-spires-most-unequal-city-tackles-poverty",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/beyond-cambridge-spires-most-unequal-city-tackles-poverty",
            "fields": {
              "headline":"Beyond Cambridge’s colleges, UK’s most unequal city battles poverty",
              "thumbnail":"https://media.guim.co.uk/f3f997f82a21aaffa358df987f3c0e877b5aa02d/0_340_5095_3057/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }, {
            "id":"uk-news/2020/jan/12/prince-harry-meghan-markle-conscious-uncoupling-royal-family-cut-ties-windsor",
            "type":"article",
            "sectionId":"uk-news",
            "sectionName":"UK news",
            "webPublicationDate":"2020-01-12T08:43:30Z",
            "webTitle":"Harry and Meghan’s conscious uncoupling from the royal family",
            "webUrl":"https://www.theguardian.com/uk-news/2020/jan/12/prince-harry-meghan-markle-conscious-uncoupling-royal-family-cut-ties-windsor",
            "apiUrl":"https://content.guardianapis.com/uk-news/2020/jan/12/prince-harry-meghan-markle-conscious-uncoupling-royal-family-cut-ties-windsor",
            "fields": {
              "headline":"Harry and Meghan’s conscious uncoupling from the royal family",
              "thumbnail":"https://media.guim.co.uk/614a9bd82d924bc1c8b8e005166fe8717ef73f04/179_50_2381_1428/500.jpg"
            },
            "isHosted":false,
            "pillarId":"pillar/news",
            "pillarName":"News"
          }]
        }}
      callback(data);
    }
  };

  exports.GuardingApi = GuarianApi;

})(this);
