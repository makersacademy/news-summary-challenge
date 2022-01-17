
const NewsAppModel = require("./newsAppModel");


describe("NewsAppModel", () => {
  it("should be able to add an article", () => {
    let model = new NewsAppModel();
    model.addArticle(mockArticle);
    expect(model.articles[0]).toEqual(mockArticle);
  })
  it("should be able to import an array of articles", () => {
    let model = new NewsAppModel();
    model.setArticles(mockResponse);
    expect(model.articles.length).toBe(10)
    expect(model.articles[0]).toEqual(mockArticle);
  })
  it("should be able to get a summary equal to the first two paragraphs of the article", () => {
    let model = new NewsAppModel();
    expect(model.getSummary(mockArticle)).toEqual(["Fake article","More fake text"]);
  })
})

const mockArticle = 
  {
      "id": "football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
      "type": "liveblog",
      "sectionId": "football",
      "sectionName": "Football",
      "webPublicationDate": "2022-01-14T20:06:50Z",
      "webTitle": "Brighton v Crystal Palace: Premier League – live!",
      "webUrl": "https://www.theguardian.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
      "apiUrl": "https://content.guardianapis.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
      "isHosted": false,
      "pillarId": "pillar/sport",
      "pillarName": "Sport",
      "fields": {
        "body": "<p>Fake article</p><p>More fake text</p><p>Even more fake text</p>",
        "thumbnail": "https://media.guim.co.uk/b896983b0dea0fd642b6fc945688da0cb050f4ca/0_97_828_497/500.jpg"
      }
  }

  const mockResponse = 
  [
      {
        "id": "football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
        "type": "liveblog",
        "sectionId": "football",
        "sectionName": "Football",
        "webPublicationDate": "2022-01-14T20:06:50Z",
        "webTitle": "Brighton v Crystal Palace: Premier League – live!",
        "webUrl": "https://www.theguardian.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
        "apiUrl": "https://content.guardianapis.com/football/live/2022/jan/14/brighton-v-crystal-palace-premier-league-live-updates",
        "isHosted": false,
        "pillarId": "pillar/sport",
        "pillarName": "Sport",
        "fields": {
          "body": "<p>Fake article</p><p>More fake text</p><p>Even more fake text</p>",
          "thumbnail": "https://media.guim.co.uk/b896983b0dea0fd642b6fc945688da0cb050f4ca/0_97_828_497/500.jpg"
        }
      },
      {
          "id": "us-news/live/2022/jan/14/biden-infrastructure-law-voting-rights-defeat-us-politics-latest",
          "type": "liveblog",
          "sectionId": "us-news",
          "sectionName": "US news",
          "webPublicationDate": "2022-01-14T20:05:22Z",
          "webTitle": "US ‘concerned’ Russia preparing for an invasion in Ukraine – live",
          "webUrl": "https://www.theguardian.com/us-news/live/2022/jan/14/biden-infrastructure-law-voting-rights-defeat-us-politics-latest",
          "apiUrl": "https://content.guardianapis.com/us-news/live/2022/jan/14/biden-infrastructure-law-voting-rights-defeat-us-politics-latest",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
      },
      {
          "id": "world/live/2022/jan/14/covid-live-news-poorer-nations-forced-to-reject-100m-near-expired-coronavirus-vaccines-spain-to-offer-fourth-dose-to-vulnerable",
          "type": "liveblog",
          "sectionId": "world",
          "sectionName": "World news",
          "webPublicationDate": "2022-01-14T19:54:59Z",
          "webTitle": "Covid live: Poland advisers quit over concerns government not following science; Netherlands to lift some curbs",
          "webUrl": "https://www.theguardian.com/world/live/2022/jan/14/covid-live-news-poorer-nations-forced-to-reject-100m-near-expired-coronavirus-vaccines-spain-to-offer-fourth-dose-to-vulnerable",
          "apiUrl": "https://content.guardianapis.com/world/live/2022/jan/14/covid-live-news-poorer-nations-forced-to-reject-100m-near-expired-coronavirus-vaccines-spain-to-offer-fourth-dose-to-vulnerable",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
      },
      {
          "id": "football/2022/jan/14/manchester-city-magic-ingredient-absence-of-stupidity",
          "type": "article",
          "sectionId": "football",
          "sectionName": "Football",
          "webPublicationDate": "2022-01-14T19:45:01Z",
          "webTitle": "Manchester City’s real magic ingredient? An absence of stupidity | Barney Ronay",
          "webUrl": "https://www.theguardian.com/football/2022/jan/14/manchester-city-magic-ingredient-absence-of-stupidity",
          "apiUrl": "https://content.guardianapis.com/football/2022/jan/14/manchester-city-magic-ingredient-absence-of-stupidity",
          "isHosted": false,
          "pillarId": "pillar/sport",
          "pillarName": "Sport"
      },
      {
          "id": "politics/live/2022/jan/14/boris-johnsons-former-aide-james-slack-apologises-downing-street-party-covid-omicron",
          "type": "liveblog",
          "sectionId": "politics",
          "sectionName": "Politics",
          "webPublicationDate": "2022-01-14T19:39:49Z",
          "webTitle": "Former Covid taskforce head ‘sorry’ for holding Cabinet Office leaving party ‘with drinks’ in December 2020 – as it happened",
          "webUrl": "https://www.theguardian.com/politics/live/2022/jan/14/boris-johnsons-former-aide-james-slack-apologises-downing-street-party-covid-omicron",
          "apiUrl": "https://content.guardianapis.com/politics/live/2022/jan/14/boris-johnsons-former-aide-james-slack-apologises-downing-street-party-covid-omicron",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
      },
      {
          "id": "sport/2022/jan/14/novak-djokovic-v-australia-is-a-grudge-match-for-our-polarised-age",
          "type": "article",
          "sectionId": "sport",
          "sectionName": "Sport",
          "webPublicationDate": "2022-01-14T19:16:31Z",
          "webTitle": "Novak Djokovic v Australia is a grudge match for our polarised age | Barney Ronay",
          "webUrl": "https://www.theguardian.com/sport/2022/jan/14/novak-djokovic-v-australia-is-a-grudge-match-for-our-polarised-age",
          "apiUrl": "https://content.guardianapis.com/sport/2022/jan/14/novak-djokovic-v-australia-is-a-grudge-match-for-our-polarised-age",
          "isHosted": false,
          "pillarId": "pillar/sport",
          "pillarName": "Sport"
      },
      {
          "id": "us-news/2022/jan/14/arizona-covid-aid-treasury-department",
          "type": "article",
          "sectionId": "us-news",
          "sectionName": "US news",
          "webPublicationDate": "2022-01-14T19:14:29Z",
          "webTitle": "Biden administration threatens to claw back Covid aid from Arizona over anti-mask policies",
          "webUrl": "https://www.theguardian.com/us-news/2022/jan/14/arizona-covid-aid-treasury-department",
          "apiUrl": "https://content.guardianapis.com/us-news/2022/jan/14/arizona-covid-aid-treasury-department",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
      },
      {
          "id": "world/2022/jan/14/ashling-murphy-vigils-across-ireland-teacher-killed-going-for-run",
          "type": "article",
          "sectionId": "world",
          "sectionName": "World news",
          "webPublicationDate": "2022-01-14T19:09:37Z",
          "webTitle": "Ashling Murphy: thousands attend vigil for Irish teacher killed going for run",
          "webUrl": "https://www.theguardian.com/world/2022/jan/14/ashling-murphy-vigils-across-ireland-teacher-killed-going-for-run",
          "apiUrl": "https://content.guardianapis.com/world/2022/jan/14/ashling-murphy-vigils-across-ireland-teacher-killed-going-for-run",
          "isHosted": false,
          "pillarId": "pillar/news",
          "pillarName": "News"
      },
      {
          "id": "sport/2022/jan/14/novak-djokovic-saga-leaves-australian-open-tatters-draw-in-turmoil-tennis",
          "type": "article",
          "sectionId": "sport",
          "sectionName": "Sport",
          "webPublicationDate": "2022-01-14T19:04:20Z",
          "webTitle": "Novak Djokovic saga leaves Australian Open in tatters with draw in turmoil | Tumaini Carayol",
          "webUrl": "https://www.theguardian.com/sport/2022/jan/14/novak-djokovic-saga-leaves-australian-open-tatters-draw-in-turmoil-tennis",
          "apiUrl": "https://content.guardianapis.com/sport/2022/jan/14/novak-djokovic-saga-leaves-australian-open-tatters-draw-in-turmoil-tennis",
          "isHosted": false,
          "pillarId": "pillar/sport",
          "pillarName": "Sport"
      },
      {
          "id": "stage/2022/jan/15/my-head-was-exploding-with-it-all-understudies-suddenly-thrust-into-the-spotlight",
          "type": "article",
          "sectionId": "stage",
          "sectionName": "Stage",
          "webPublicationDate": "2022-01-14T19:00:04Z",
          "webTitle": "‘My head was exploding with it all’: understudies suddenly thrust into the spotlight",
          "webUrl": "https://www.theguardian.com/stage/2022/jan/15/my-head-was-exploding-with-it-all-understudies-suddenly-thrust-into-the-spotlight",
          "apiUrl": "https://content.guardianapis.com/stage/2022/jan/15/my-head-was-exploding-with-it-all-understudies-suddenly-thrust-into-the-spotlight",
          "isHosted": false,
          "pillarId": "pillar/arts",
          "pillarName": "Arts"
      }
  ]