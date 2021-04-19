function expect(a) {
  return {
    toEqual: function(b){
      if (a == b) {
        console.log("Pass")
      }
      else {
        console.log("Fail")
      }
    },

    toEqualArray: function(b) {
      var result = (a.length === b.length && a.every((v, i) => v === b[i]));
      console.log(result)
    }
  }
}