

describe("Getting story from API", function() {

  var storyHash = {
    id: "commentisfree/2017/nov/09/the-guardian-view-on-data-protection-privacy-is-not-enough",
    type: "article",
    sectionId: "commentisfree",
    sectionName: "Opinion",
    webPublicationDate: "2017-11-09T19:25:47Z",
    webTitle: "The Guardian view on data protection: privacy is not enough | Editorial",
    webUrl: "https://www.theguardian.com/commentisfree/2017/nov/09/the-guardian-view-on-data-protection-privacy-is-not-enough",
    apiUrl: "https://content.guardianapis.com/commentisfree/2017/nov/09/the-guardian-view-on-data-protection-privacy-is-not-enough",
    isHosted: false,
    pillarId: "pillar/opinion",
    pillarName: "Opinion"
  };
  var story = new Story(storyHash);

  it('has a headline', function() {
    expect(story.showHeadline()).toEqual("The Guardian view on data protection: privacy is not enough | Editorial")
  })

})
