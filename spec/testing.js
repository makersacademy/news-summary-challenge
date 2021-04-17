
function expect(a) {
  return { 
    toEqual: function(b) {
      if(a === b) {
        console.log("Pass");
      }
      else {
        console.log("Fail");
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`)
  console.log(callback())
}

function describe(label, callback)

it('2 + 2 is equal to 4', function() {
  expect(2+2).toEqual(4);
})

it('2 + 3 is equal to 4', function() {
  expect(2+3).toEqual(4);
})