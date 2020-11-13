describe('viewHeadlines', function () {
  let story1 = {
    getId: () => { return 0 },
    getHeadline: () => { return 'Coronavirus cured' },
    getLink: () => { return 'https://www.bbc.co.uk/news/health-54873105' },
    isSelected: () => { return false }
  }

  let story2 = {
    getId: () => { return 1 },
    getHeadline: () => { return 'Trump defeated' },
    getLink: () => { return 'https://www.bbc.co.uk/news/election-us-2020-54836636' },
    isSelected: () => { return false }
  }

  var stories = [story1, story2]

  it("lists each headline from an array of stories", function () {
    viewHeadlines(stories)
    expect(document.getElementById('headlines').innerHTML).toEqual(
      `<a href="#story=0"><div class="headline">Coronavirus cured</div></a><a href="#story=1"><div class="headline">Trump defeated</div></a>`
    )
  })

  it("If a story is selected, it prints the story with the class headline-selected", function () {
    story2.isSelected = function () { return true }
    viewHeadlines(stories)
    expect(document.getElementById('headlines').innerHTML).toEqual(
      `<a href="#story=0"><div class="headline">Coronavirus cured</div></a><a href="#story=1"><div class="headline-selected">Trump defeated</div></a>`
    )
  })
})