// var newsController = new NewsController(newsModel, newsView(doc))

// describe('NewsController to be instatiated', expect(newsController).toBeA(NewsController))

var fakeURL = {
  response: {
  status: "ok",
  userTier: "developer",
  total: 26241,
  startIndex: 1,
  pageSize: 10,
  currentPage: 1,
  pages: 2625,
  orderBy: "relevance",
  results: [
  {
  id: "us-news/2020/feb/01/bloomberg-democratic-debates-rule-changes-funding",
  type: "article",
  sectionId: "us-news",
  sectionName: "US news",
  webPublicationDate: "2020-02-01T16:30:17Z",
  webTitle: "Bloomberg may make it to Democratic debates following rule changes",
  webUrl: "https://www.theguardian.com/us-news/2020/feb/01/bloomberg-democratic-debates-rule-changes-funding",
  apiUrl: "https://content.guardianapis.com/us-news/2020/feb/01/bloomberg-democratic-debates-rule-changes-funding",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/2019/nov/26/brexit-weekly-briefing-heated-debates-and-pledges-to-splash-cash",
  type: "article",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-11-26T07:00:15Z",
  webTitle: "Brexit weekly briefing: heated debates and pledges to splash cash",
  webUrl: "https://www.theguardian.com/politics/2019/nov/26/brexit-weekly-briefing-heated-debates-and-pledges-to-splash-cash",
  apiUrl: "https://content.guardianapis.com/politics/2019/nov/26/brexit-weekly-briefing-heated-debates-and-pledges-to-splash-cash",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/2019/nov/04/tv-election-debates-must-include-the-lib-dems-leader",
  type: "article",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-11-04T17:52:51Z",
  webTitle: "TV election debates must include the Lib Dems’ leader | Letters",
  webUrl: "https://www.theguardian.com/politics/2019/nov/04/tv-election-debates-must-include-the-lib-dems-leader",
  apiUrl: "https://content.guardianapis.com/politics/2019/nov/04/tv-election-debates-must-include-the-lib-dems-leader",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/2019/oct/30/liberal-democrats-face-being-frozen-out-of-live-tv-debates-general-election",
  type: "article",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-10-30T19:00:46Z",
  webTitle: "Lib Dems face being frozen out of any live TV debates",
  webUrl: "https://www.theguardian.com/politics/2019/oct/30/liberal-democrats-face-being-frozen-out-of-live-tv-debates-general-election",
  apiUrl: "https://content.guardianapis.com/politics/2019/oct/30/liberal-democrats-face-being-frozen-out-of-live-tv-debates-general-election",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/live/2019/oct/30/lords-to-debate-boris-johnsons-early-election-bill-after-brexit-deadlock-live",
  type: "liveblog",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-10-30T18:04:01Z",
  webTitle: "General election: Corbyn challenges Johnson to TV debates - as it happened",
  webUrl: "https://www.theguardian.com/politics/live/2019/oct/30/lords-to-debate-boris-johnsons-early-election-bill-after-brexit-deadlock-live",
  apiUrl: "https://content.guardianapis.com/politics/live/2019/oct/30/lords-to-debate-boris-johnsons-early-election-bill-after-brexit-deadlock-live",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/live/2019/nov/16/general-election-labour-meet-decide-manifesto-clause-v-live-news",
  type: "liveblog",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-11-16T18:02:26Z",
  webTitle: "General election: focus on freedom of movement as Labour debates manifesto – live news",
  webUrl: "https://www.theguardian.com/politics/live/2019/nov/16/general-election-labour-meet-decide-manifesto-clause-v-live-news",
  apiUrl: "https://content.guardianapis.com/politics/live/2019/nov/16/general-election-labour-meet-decide-manifesto-clause-v-live-news",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "world/2019/sep/24/france-debates-law-lesbians-single-women-ivf",
  type: "article",
  sectionId: "world",
  sectionName: "World news",
  webPublicationDate: "2019-09-24T16:11:10Z",
  webTitle: "France debates law to let lesbians and single women have IVF",
  webUrl: "https://www.theguardian.com/world/2019/sep/24/france-debates-law-lesbians-single-women-ivf",
  apiUrl: "https://content.guardianapis.com/world/2019/sep/24/france-debates-law-lesbians-single-women-ivf",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "us-news/2019/jun/26/democratic-debate-2019-watch-2020-election-when-where-who",
  type: "article",
  sectionId: "us-news",
  sectionName: "US news",
  webPublicationDate: "2019-06-27T20:23:02Z",
  webTitle: "Democratic debates 2019: everything you need to know",
  webUrl: "https://www.theguardian.com/us-news/2019/jun/26/democratic-debate-2019-watch-2020-election-when-where-who",
  apiUrl: "https://content.guardianapis.com/us-news/2019/jun/26/democratic-debate-2019-watch-2020-election-when-where-who",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/2019/nov/13/girly-swot-jo-swinson-fights-for-more-than-a-ringside-seat-in-itv-debates",
  type: "article",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-11-13T15:12:22Z",
  webTitle: "'Girly swot' Jo Swinson fights for more than a ringside seat in ITV debates | Marina Hyde",
  webUrl: "https://www.theguardian.com/politics/2019/nov/13/girly-swot-jo-swinson-fights-for-more-than-a-ringside-seat-in-itv-debates",
  apiUrl: "https://content.guardianapis.com/politics/2019/nov/13/girly-swot-jo-swinson-fights-for-more-than-a-ringside-seat-in-itv-debates",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  },
  {
  id: "politics/2019/nov/16/corbyn-counts-on-tv-debates-to-close-the-gap-as-tories-poll-lead-increases",
  type: "article",
  sectionId: "politics",
  sectionName: "Politics",
  webPublicationDate: "2019-11-16T19:03:51Z",
  webTitle: "Corbyn counts on TV debates to close the gap as Tories’ poll lead increases",
  webUrl: "https://www.theguardian.com/politics/2019/nov/16/corbyn-counts-on-tv-debates-to-close-the-gap-as-tories-poll-lead-increases",
  apiUrl: "https://content.guardianapis.com/politics/2019/nov/16/corbyn-counts-on-tv-debates-to-close-the-gap-as-tories-poll-lead-increases",
  isHosted: false,
  pillarId: "pillar/news",
  pillarName: "News"
  }
  ]
  }
  }

for (var i = 0; i < fakeURL.response.results.length; i++) {
  this.newsModel.addArticle(fakeURL.response.results[i].webTitle, 'fakeURL.response.results[i].')
  // console.log(i, fakeURL.response.results[i].webTitle)
}

// describe('adds multiple news articles to models array', expect(newsController.getAllArticles(fakeURL).contains('')))
