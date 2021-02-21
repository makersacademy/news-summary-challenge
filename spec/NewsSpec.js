let webtitle = "Alex Salmond speech – first minister hits back over Scottish independence"

describe('News', function () {
  it('returns the web title', function() {
    expectEqualMatch(getSummary(text, webtitle)
  })
})
