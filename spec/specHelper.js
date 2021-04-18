
function describe (label, callback) {
  
}

function it (label, callback) {
  resHTML = label
  callback();
}

function expect(input) {
  return {
    toEqual(output) {
      if (input == output) {
        return "pass";
      } else {
        return "fail";
      }
    }
  }
}

console.log(expect(5).toEqual(5));