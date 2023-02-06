const ArticlesClient = require('./articlesClient');

require('jest-fetch-mock').enableMocks();

describe('Articles Client', () => {
  it('returns the latest articles from the guardian api', () => {
    const client = new ArticlesClient();
    mockResponse = {
      "response":{
         "status":"ok",
         "userTier":"developer",
         "total":2324223,
         "startIndex":1,
         "pageSize":10,
         "currentPage":1,
         "pages":232423,
         "orderBy":"newest",
         "results":[
            {
               "id":"sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
               "type":"article",
               "sectionId":"sport",
               "sectionName":"Sport",
               "webPublicationDate":"2022-02-02T14:42:43Z",
               "webTitle":"At last, the inventors of modern skiing have something to cheer: Dave Ryding | Andy Bull",
               "webUrl":"https://www.theguardian.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
               "apiUrl":"https://content.guardianapis.com/sport/blog/2022/feb/02/at-last-the-inventors-of-modern-skiing-have-something-to-cheer-dave-ryding",
               "fields":{
                  "headline":"At last, the inventors of modern skiing have something to cheer: Dave Ryding ",
                  "byline":"Andy Bull",
                  "thumbnail":"https://media.guim.co.uk/1e2ab1ced5da6ecf8d7fcca9f87d5398c1d22336/0_119_6480_3888/500.jpg"
               },
               "isHosted":false,
               "pillarId":"pillar/sport",
               "pillarName":"Sport"
            },
            {
               "id":"business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
               "type":"liveblog",
               "sectionId":"business",
               "sectionName":"Business",
               "webPublicationDate":"2022-02-02T14:41:49Z",
               "webTitle":"Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
               "webUrl":"https://www.theguardian.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
               "apiUrl":"https://content.guardianapis.com/business/live/2022/feb/02/oil-prices-climb-seven-year-highs-opec-meeting-markets-await-eurozone-inflation",
               "fields":{
                  "headline":"Ofgem to unveil new household energy bill price cap on Thursday morning – business live",
                  "byline":"Julia Kollewe",
                  "thumbnail":"https://media.guim.co.uk/aee3b3b05ea2a37acdadc91095c163fd381eba4a/0_24_3500_2100/500.jpg"
               },
               "isHosted":false,
               "pillarId":"pillar/news",
               "pillarName":"News"
            },
            // ...
         ]
      }
   }
    fetch.mockResponseOnce(JSON.stringify(mockResponse))
      
    client.loadArticles().then((articles) => {
      expect(articles).toEqual(mockResponse)
    })
  })

  it('returns selected articles based on phrase', () => {
    const client = new ArticlesClient();
    mockResponse = {article1 : 'Sports Article'}

    fetch.mockResponseOnce(JSON.stringify(mockResponse))

    client.searchArticles('Sports').then((articles) => {
      expect(articles).toEqual(mockResponse)
    })
  })
})