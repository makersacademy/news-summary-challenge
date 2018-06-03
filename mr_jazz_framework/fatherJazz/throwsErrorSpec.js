console.log("---- PROTOTYPE THROWSERROR TESTS ----")

console.log('Equal when given a specific error')
var errorThrower = function(){
  throw 'error';
}
console.log(expect(expect(errorThrower).throwsError('error')).toEqual('Correct error thrown.'))

console.log('Equal when given a wrong error')
var errorThrower = function(){
  throw 'wrong error';
}
console.log(expect(expect(errorThrower).throwsError('error')).toEqual('Error not thrown.'))

console.log('Equal when no error is given')
var errorThrower = 12;
console.log(expect(expect(errorThrower).throwsError()).toEqual('Error not thrown.'))
