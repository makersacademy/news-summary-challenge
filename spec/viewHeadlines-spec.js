describe('viewHeadlines', function () {
  let story1 = {
    getId: () => { return 0 },
    getHeadline: () => { return 'Coronavirus cured' },
    getLink: () => { return 'https://www.bbc.co.uk/news/health-54873105' }
  }

  let story2 = {
    getId: () => { return 1 },
    getHeadline: () => { return 'Trump defeated' },
    getLink: () => { return 'https://www.bbc.co.uk/news/election-us-2020-54836636' }
  }

  var stories = [story1, story2]

  it("lists each headline from an array of stories", function () {
    viewHeadlines(stories)
    expect(document.getElementById('headlines').innerHTML).toEqual(
      `<ul><li><a href="#article=https://www.bbc.co.uk/news/health-54873105">Coronavirus cured</a></li><li><a href="#article=https://www.bbc.co.uk/news/election-us-2020-54836636">Trump defeated</a></li></ul>`
    )
  })
})