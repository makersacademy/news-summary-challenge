let testItem = new NewsItem(1, 'There was a fire', 'There was a fire at a local factory', 'https://www.picture.com')

describe('NewsItem', function () {
  it('getId returns the id of the newsitem', function() {
    expect(testItem.getId()).toEqual('item1')
  })

  it('getheadline returns the headline of the newsitem', function() {
    expect(testItem.getheadline()).toEqual('There was a fire')
  })

  it('getBody returns the body of the newsitem', function() {
    expect(testItem.getBody()).toEqual('There was a fire at a local factory')
  })

  it('getPicture returns the url of the picture of the newsitem', function() {
    expect(testItem.getPicture()).toEqual('https://www.picture.com')
  })
})
