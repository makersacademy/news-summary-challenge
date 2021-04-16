let testList = new NewsList()

describe('NewsList', function () {
  it('getList returns an array of newsItems', function() {
    let testArray = [new NewsItem(0, 'test', 'test', 'test')]
    testList.createNewItem('test', 'test', 'test')
    console.log(testArray)
    console.log(testList.getList())
    expect(testList.getList()).toEqualArrayOfObjects(testArray)
  })

  it('createNewItem increases the length of the list array', function() {
    testList.createNewItem('test', 'test', 'test')
    expect(testList.list.length).toBe(2)
    expect(testList.counter).toBe(2)
  })

  it('getCounter returns the counter value', function() {
    expect(testList.getCounter()).toBe(2)
  })
})