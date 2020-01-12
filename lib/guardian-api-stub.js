(function(exports) {
  function GuardianApi() {};

  GuardianApi.prototype = {
    getHeadlines: function(){
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
        }
      }
      return data;
    }
  }

  exports.GuardianApi = GuardianApi;

})(this);
