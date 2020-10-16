describe('Adder', () => {
  
  describe('sums', () => {
    it('return 4 when given 2 + 2', () => {
      adder = new Adder();
      expect(adder.add(2,2)).toEq(4)
    })
  })

  describe('array', () => {
    it('is type of array', () => {
      expect(adder.array).toBeTypeOfArray()
    })
  })
})