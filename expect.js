var expect = function(valueA) {
  return({
    toEqual: function (ValueB) {
      if (valueA == ValueB) {
        return "Pass"
      } else {
        throw Error(`Expected ${ValueB}, but got ${valueA}`)
      }
    },
    toInclude: function (ValueB) {
      if (valueA.includes(valueB)) {
        return "Pass"
      } else {
        throw Error(`Expected ${valueA} to include ${valueB}`)
      }
    }
  })
}