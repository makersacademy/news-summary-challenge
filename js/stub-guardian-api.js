(function(exports) {
  class GuardianApi {
    constructor() {}

    getHeadlines(callback) {
      const data = {
        "response": {
            "status": "ok",
            "userTier": "developer",
            "total": 7,
            "startIndex": 1,
            "pageSize": 10,
            "currentPage": 1,
            "pages": 1,
            "orderBy": "newest",
            "results": [{
                "id": "uk-news/2019/oct/06/flood-warnings-as-uk-braces-for-more-wet-weather",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T16:13:24Z",
                "webTitle": "Flood warnings as UK braces for more wet weather",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/flood-warnings-as-uk-braces-for-more-wet-weather",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/flood-warnings-as-uk-braces-for-more-wet-weather",
                "fields": {
                    "headline": "Flood warnings as UK braces for more wet weather",
                    "thumbnail": "https://media.guim.co.uk/37091499698a625817b71e073176215604bff0ea/0_346_3500_2100/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/teenager-stabbed-friend-death-named-joshua-molnar",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T16:13:04Z",
                "webTitle": "Teenager who stabbed friend to death named as Joshua Molnar",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/teenager-stabbed-friend-death-named-joshua-molnar",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/teenager-stabbed-friend-death-named-joshua-molnar",
                "fields": {
                    "headline": "Teenager who stabbed friend to death named as Joshua Molnar",
                    "thumbnail": "https://media.guim.co.uk/6a082efb0d1dbf6773e35ed7a53d16abcf9d184e/523_198_1373_824/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/boris-johnson-filthy-piece-of-toerag-video-critic-goes-viral",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T15:06:44Z",
                "webTitle": "'Filthy piece of toerag' video of Boris Johnson critic goes viral",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/boris-johnson-filthy-piece-of-toerag-video-critic-goes-viral",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/boris-johnson-filthy-piece-of-toerag-video-critic-goes-viral",
                "fields": {
                    "headline": "'Filthy piece of toerag' video of Boris Johnson critic goes viral",
                    "thumbnail": "https://media.guim.co.uk/7e03f3a87ea9e8ffd5085561161e41f47e84e84a/60_54_1710_1026/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/magistrates-call-for-close-monitoring-of-defence-claims-by-county-lines-victims",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T14:58:44Z",
                "webTitle": "Magistrates call for close monitoring of defence claims by county lines victims",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/magistrates-call-for-close-monitoring-of-defence-claims-by-county-lines-victims",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/magistrates-call-for-close-monitoring-of-defence-claims-by-county-lines-victims",
                "fields": {
                    "headline": "Magistrates call for close monitoring of defence claims by county lines victims",
                    "thumbnail": "https://media.guim.co.uk/9fb5bcb4763eeeb24f5aed992a53c22d3c8558d7/0_374_5616_3370/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/devoted-windrush-sisters-face-separation-birth-dates",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T12:12:17Z",
                "webTitle": "'Devoted' Windrush sisters face separation because of birth dates",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/devoted-windrush-sisters-face-separation-birth-dates",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/devoted-windrush-sisters-face-separation-birth-dates",
                "fields": {
                    "headline": "'Devoted' Windrush sisters face separation because of birth dates",
                    "thumbnail": "https://media.guim.co.uk/8ea2ac36aab3229900ef6940a29414b02290d74c/26_0_600_360/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/helena-bonham-carter-sought-princess-margaret-blessing-through-psychic-the-crown",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T09:08:36Z",
                "webTitle": "Helena Bonham Carter sought Princess Margaret's blessing through psychic",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/helena-bonham-carter-sought-princess-margaret-blessing-through-psychic-the-crown",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/helena-bonham-carter-sought-princess-margaret-blessing-through-psychic-the-crown",
                "fields": {
                    "headline": "Helena Bonham Carter sought Princess Margaret's blessing through psychic",
                    "thumbnail": "https://media.guim.co.uk/1318397e9f00ebf5123e9445df7cb503bc32a0cc/0_70_3600_2160/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }, {
                "id": "uk-news/2019/oct/06/boris-johnson-brexit-proposals-border-northern-ireland-fermanagh",
                "type": "article",
                "sectionId": "uk-news",
                "sectionName": "UK news",
                "webPublicationDate": "2019-10-06T08:47:01Z",
                "webTitle": "Brexit: border talk stirs up bad memories in Northern Ireland",
                "webUrl": "https://www.theguardian.com/uk-news/2019/oct/06/boris-johnson-brexit-proposals-border-northern-ireland-fermanagh",
                "apiUrl": "https://content.guardianapis.com/uk-news/2019/oct/06/boris-johnson-brexit-proposals-border-northern-ireland-fermanagh",
                "fields": {
                    "headline": "Brexit: border talk stirs up bad memories in Northern Ireland",
                    "thumbnail": "https://media.guim.co.uk/51d3590cd0cb05d326e6339d154de7136f670423/0_166_8424_5052/500.jpg"
                },
                "isHosted": false,
                "pillarId": "pillar/news",
                "pillarName": "News"
            }]
        }
      }      
      callback(data);
    }
  }

  exports.GuardianApi = GuardianApi;
})(this);