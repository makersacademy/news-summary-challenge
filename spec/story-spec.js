describe('Story', function () {
  it("can be instantiated with a headline, link", function () {
    let story = new Story('Virus defeated', "news/health-54873105")
    expect(story.getHeadline()).toEqual('Virus defeated')
    expect(story.getLink()).toEqual('news/health-54873105')
  })

  it("is instantiated with a autoincrementing ID", function () {
    let story1 = new Story('Virus defeated', "news/health-54873105")
    let story2 = new Story('Trump defeated', 'https://www.bbc.co.uk/news/election-us-2020-54836636')
    expect(story1.getId()).toEqual(1)
    expect(story2.getId()).toEqual(2)
  })
})