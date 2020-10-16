describe('Adder', () => {
  it('return 4 when given 2 + 2', () => {
    adder = new Adder();
    expect(adder.add(2,2)).toEq(3)
  })
})