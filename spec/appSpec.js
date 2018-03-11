describe("app", function() {

  it("Newscollector has 10 news", function() {
    getNews()
    expect(COLLECTOR.content.length).toEqual(10)
  });

});
