describe('Article', () => {
  describe('.showContent()', () => {
    it('returns content', () => {
      article = new Article('content');
      expect(article.showContent()).toEq('content')
    })
  })

  describe('.showSummary()', () => {
    it('returns summary', () => {
      article = new Article('summary');
      expect(article.showSummary()).toEq('summary')
    })
  })
})

// {"response":{"status":"ok","userTier":"developer","total":414411,"startIndex":1,"pageSize":10,"currentPage":1,"pages":41442,"orderBy":"relevance",
// "results":[
//   {"id":"sport/2020/feb/11/uk-sport-launches-review-into-uk-athletics",
//   "type":"article",
//   "sectionId": "sport",
//   "sectionName":"Sport",
//   "webPublicationDate":"2020-02-11T18:04:37Z",
//   "webTitle":"UK Sport launches review into ailing UK Athletics amid ‘major concerns’",
//   "webUrl":"https://www.theguardian.com/sport/2020/feb/11/uk-sport-launches-review-into-uk-athletics",
//   "apiUrl":"https://content.guardianapis.com/sport/2020/feb/11/uk-sport-launches-review-into-uk-athletics",
//   "isHosted":false,
//   "pillarId":"pillar/sport",
//   "pillarName":"Sport"},
  