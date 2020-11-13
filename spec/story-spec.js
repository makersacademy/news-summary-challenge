describe('Story', function () {
  let story1 = new Story('Virus defeated', "news/health-54873105")
  let story2 = new Story('Trump defeated', 'https://www.bbc.co.uk/news/election-us-2020-54836636')

  it("can be instantiated with a headline, link", function () {
    expect(story1.getHeadline()).toEqual('Virus defeated')
    expect(story1.getLink()).toEqual('news/health-54873105')
  })

  it("is instantiated with a autoincrementing ID", function () {
    expect(story1.getId()).toEqual(0)
    expect(story2.getId()).toEqual(1)
  })

  describe("isSelected", function () {
    it("Starts as false for a new story", function () {
      expect(story1.isSelected()).toEqual(false)
    })

    it("Can be set as true", function () {
      story1.select()
      expect(story1.isSelected()).toEqual(true)
    })

    it("can be set as false", function () {
      story1.select()
      story1.deselect()
      expect(story1.isSelected()).toEqual(false)
    })
  })
})