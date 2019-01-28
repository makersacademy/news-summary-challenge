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

  it('can access and reuturns summary', function() {
    story1.add_summary()
    expect(story1.summary()).toBe("So, classical music is about to be transformed (‘Acoustically perfect’: plans revealed for new £288m London concert hall, 22 January). Or in other words, the capital is about to benefit from an elitist project, blessed by luminary Sir Simon Rattle. No matter that London already possesses the Barbican, the Royal Festival Hall, the Cadogan Hall and the Royal Albert Hall. We need to make a statement to compete with Hamburg, Paris and Los Angeles.\n\nHave Sir Simon and his backers not paused for a moment to consider the sorry state of music education in our schools, and how much more would be achieved by directing that money into music education? It is hard to see this venture as anything more than a vanity project for London and the elite, while music educators up and down the country are searching for scraps.\n\nDr Michael Quigley\n\nCambridge\n\n• Read more Guardian letters – click here to visit gu.com/letters\n\n• Do you have a photo you’d like to share with Guardian readers? Click here to upload it and we’ll publish the best submissions in the letters spread of our print edition")
  });
});
