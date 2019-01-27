describe('Story', function() {

  var story1;

  beforeEach(function() {
    story1 = new Story("London concert hall is a vanity project | Letter", "https://www.theguardian.com/music/2019/jan/27/london-concert-hall-is-a-vanity-project");
  });

  it('returns title', function() {
    expect(story1.title).toBe("London concert hall is a vanity project | Letter")
  });

  it('returns url', function() {
    expect(story1.url).toBe("https://www.theguardian.com/music/2019/jan/27/london-concert-hall-is-a-vanity-project")
  });

});
