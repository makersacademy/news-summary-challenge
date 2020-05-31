function expect(actual){
  return {
    toEqual: function(expected){
      return (actual == expected ? "Pass" : "Fail");
    }
  }
}

function it(label, callback){
  return `${label}: ${callback()}`
}
