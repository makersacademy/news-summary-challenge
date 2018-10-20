describe('Summary view', function() {
  var summaryView = new SummaryView('Zombie invaded Makers Academy on a moonless night and ate all screens');

  it('can be instantiated', function() {
    assert.isTrue(summaryView instanceof SummaryView)
  })

  it('returns summary html', function() {
    assert.isTrue(summaryView.returnSummary() === '<div>Zombie invaded Makers Academy on a moonless night and ate all screens</div>' )
  })
})
