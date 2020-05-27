describe('My test', function() {

  describe('toEqual', function() {
    it('tests if 4 is equal to 4', function() {
      expect(4).toEqual(4)
    })

    it('fails when 3 is not equal to 4', function() {
      expect(3).toEqual(4)
    })
  })

  describe('toBe', function() {
    it('checks if true is true', function() {
      expect(true).toBe(true)
    })

    it('fails when true is not equal to false', function() {
      expect(true).toBe(false)
    })

    it('fails if you try to use non-booleans', function() {
      expect(4).toBe(true)
    })
  })
})
