resultJSON = {
  "id": "uk-news/2021/mar/19/patrick-vallance-adviser-scientific-truth-to-power",
  "type": "article",
  "sectionId": "uk-news",
  "sectionName": "UK news",
  "webPublicationDate": "2021-03-19T13:37:05Z",
  "webTitle": "Patrick Vallance: the adviser who spoke scientific truth to power",
  "webUrl": "https://www.theguardian.com/uk-news/2021/mar/19/patrick-vallance-adviser-scientific-truth-to-power",
  "apiUrl": "https://content.guardianapis.com/uk-news/2021/mar/19/patrick-vallance-adviser-scientific-truth-to-power",
  "fields": {
      "body": "Sir Patrick Vallance spent his 60th birthday at a podium in Downing Street, flanking Boris Johnson.",
      "thumbnail": "https://media.guim.co.uk/c84406b08ef86e3403a895041161050b9b44bf90/27_689_2177_1306/500.jpg"
  },
  "isHosted": false,
  "pillarId": "pillar/news",
  "pillarName": "News"
}

let story = new Story(1,resultJSON)

describe("Story Class should format API JSON data", function() {
  it("should have an id", function() {
    expect(story.id).toEqual(1)
  })
  it("should have a section", function() {
    expect(story.section).toEqual("News > UK news")
  })
  it("should have a date", function() {
    expect(story.date).toEqual("19/03/2021")
  })
  it("should have a time", function() {
    expect(story.time).toEqual('13:37')
  })
  it("should have a url", function() {
    expect(story.url).toEqual("https://www.theguardian.com/uk-news/2021/mar/19/patrick-vallance-adviser-scientific-truth-to-power")
  })
  it("should have a headline", function() {
    expect(story.headline).toEqual("Patrick Vallance: the adviser who spoke scientific truth to power")
  })
  it("should have text", function() {
    expect(story.text).toEqual("Sir Patrick Vallance spent his 60th birthday at a podium in Downing Street, flanking Boris Johnson.")
  })
  it("should have a thumbnail", function() {
    expect(story.thumbnail).toEqual("https://media.guim.co.uk/c84406b08ef86e3403a895041161050b9b44bf90/27_689_2177_1306/500.jpg")
  })
})
