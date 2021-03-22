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

let stories_test = new Stories
stories_test.addStory(resultJSON)
stories_test.addPage([resultJSON,resultJSON,resultJSON])

describe("Stories Class should store Story Objects", function() {
  it("should store an array of stories", function() {
    expect(stories_test.currentList).toBeA(Array)
    expect(stories_test.currentList[0]).toBeA(Story)
  })
  it("should be able to add multiple stories and give them ids", function() {
    expect(stories_test.currentList.length).toEqual(4)
    for(i = 0; i < 4; i++) {
      expect(stories_test.currentList[i].id).toEqual(i)
    }
  })
})


