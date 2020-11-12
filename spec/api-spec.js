it('Retrieves headlines', function () {
  expect(api.headlines()[0]).toEqual('test 1')
  expect(api.headlines()[1]).toEqual('test 2')
})