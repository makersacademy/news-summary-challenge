describe('Square', function () {
  it('#area returns the area', function () {
    const square = new Square(7);
    expect(square.area()).toBe(49);
  })

  it('test 2', function () {
    const square = new Square(7);
    expect(square.area()).notToBe(45);
  })

  it('test 3', function () {
    const square = new Square(7);
    expect(square.area()).notToBe(49);
  })

  scenario('Errors', function () {
    it('it throws an error', function () {
      const x = function() {error_square = new Square('x'); }
      expect(x).toThrowError();
    })
  })
})
