describe('Story', function() {

  var story1;

  beforeEach(function() {
    story1 = new Story("London concert hall is a vanity project | Letter");
  });

  it('returns title', function() {
    expect(story1.title).toBe("London concert hall is a vanity project | Letter")
  });
});
