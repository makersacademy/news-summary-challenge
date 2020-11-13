describe('Story', function () {
  it("can be instantiated with a headline and link", function () {
    let story = new Story('Virus defeated', "https://www.bbc.co.uk/news/health-54873105")
    expect(story.getHeadline()).toEqual('Virus defeated')
    expect(story.getLink()).toEqual('https://www.bbc.co.uk/news/health-54873105')
  })
})