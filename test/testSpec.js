describe("toEqual tester", function () {
  it("returns true when two equal arguments are given", function() {
    expect(5).toEqual(5)
  })
})
// 
// describe("toEqual tester", function () {
//   it("returns false when two equal arguments are given", function() {
//     expect(6).toEqual(5)
//   })
// })

describe("tobeInstanceof tester", function() {
  it("returns true when arg1 is instance of arg2", function() {
    newsStory = new NewsStory
    expect(newsStory).toBeInstanceOf(NewsStory)
  })
})
