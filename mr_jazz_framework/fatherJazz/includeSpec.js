console.log("---- PROTOTYPE TOINCLUDE TESTS ----")
console.log('Equal if number 1 is in the array')
console.log(expect(expect([1,2,3]).toInclude(1)).toEqual('Value is included.'))

console.log('Equal if number 1 is a string and is not in the array')
console.log(expect(expect([1,2,3]).toInclude("1")).toEqual('Value is not included.'))

console.log('Equalif number 4 is not in the array')
console.log(expect(expect([1,2,3]).toInclude(4)).toEqual('Value is not included.'))

console.log('Equal if it is a empty array')
console.log(expect(expect([]).toInclude('')).toEqual('Value is not included.'))

console.log('Equal if an array is not in the array')
console.log(expect(expect([[1],[2],[3]]).toInclude([35])).toEqual('Value is not included.'))

obj = new Object
obj2 = new Object

console.log('Equal if two objects are compared')
console.log(expect(expect([new Object]).toInclude(new Object)).toEqual('Value is not included.'))
