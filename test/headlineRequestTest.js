describe('getAndAddEachIndexIntoObj', function(){

  it('gets and adds index to each headline object', function(){
    headlines = [{
      title: "Hungary election: Victor Orbán expected to win third term - live updates",
      url: "https://www.theguardian.com/world/live/2018/apr/08/hungary-election-victor-orban-expected-to-win-third-term-live-updates",
      imageUrl: undefined
    }]
    actual = getAndAddEachIndexIntoObj(headlines);
    expected = [{
      title: "Hungary election: Victor Orbán expected to win third term - live updates",
      url: "https://www.theguardian.com/world/live/2018/apr/08/hungary-election-victor-orban-expected-to-win-third-term-live-updates",
      imageUrl: undefined,
      id: 0
    }]
    assert.isTrue(actual.length === 1);
  })

  it('gets and adds index to each headline object', function(){
    headlines = [{
      title: "Hungary election: Victor Orbán expected to win third term - live updates",
      url: "https://www.theguardian.com/world/live/2018/apr/08/hungary-election-victor-orban-expected-to-win-third-term-live-updates",
      imageUrl: undefined
    }]
    assert.isTrue(getAndAddEachIndexIntoObj(headlines)[0].title === "Hungary election: Victor Orbán expected to win third term - live updates")
    assert.isTrue(getAndAddEachIndexIntoObj(headlines)[0].url === "https://www.theguardian.com/world/live/2018/apr/08/hungary-election-victor-orban-expected-to-win-third-term-live-updates")
    assert.isTrue(getAndAddEachIndexIntoObj(headlines)[0].imageUrl === undefined)
    assert.isTrue(getAndAddEachIndexIntoObj(headlines)[0].id === 0)
  })
})
