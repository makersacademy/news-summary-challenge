describe('Story', function () {
  it("can be instantiated with a headline, link", function () {
    let story = new Story('Virus defeated', "news/health-54873105")
    expect(story.getHeadline()).toEqual('Virus defeated')
    expect(story.getLink()).toEqual('news/health-54873105')
  })
})