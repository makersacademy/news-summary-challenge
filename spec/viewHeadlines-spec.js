var headlines = ['Coronavirus cured', 'Trump defeated', 'Brexit cancelled']

it("Lists each headline from an array", function () {
  viewHeadlines(headlines)
  expect(document.getElementById('headlines').innerHTML).toEqual(
    '<ul><li>Coronavirus cured</li><li>Trump defeated</li><li>Brexit cancelled</li></ul>'
  )
})