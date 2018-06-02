describe('A sample test', function () {
  var testReturnValues = new TestReturnValues()
  it('contains dog (contains test)', function () {
    assert.arrayContains(testReturnValues.notEmptyObject, "dog")
  })
  it('is empty (empty test)', function () {
    assert.isEmpty(testReturnValues.emptyObject)
  })
  it('is equal to expected (equality test)', function () {
    assert.isEqual(testReturnValues.equalStatement, "test string")
  })
  it('is true-ish (the true test)', function () {
    assert.isTrue(testReturnValues.trueStatement == true)
  })
  it('should tell me if a method exists', function () {
    respondsTo(testReturnValues, 'tester')
  })
  it('should spy on a function call', function () {
    spyOn(testReturnValues, 'tester')
    testReturnValues.callTester()
  })
})
