function expect(actual){
  return {
    toEqual: function(expected){
      if (actual == expected) {
        return "Pass"
      } else {
        return "Fail"
      }
    }
  }
}

function it(label, callback){
  result = callback()
  return console.log(`${label}: ${result}`);
}
