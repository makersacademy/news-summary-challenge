console.log("---- PROTOTYPE BEEMPTY TESTS ----")

console.log('Equal if nothing is in the array.')
console.log(expect(expect([]).toBeEmpty()).toEqual('Array is empty.'))

console.log('Equal if something is in the array.')
console.log(expect(expect([3]).toBeEmpty()).toEqual('Array is not empty.'))

console.log('Equal if multiple elements are in the array.')
console.log(expect(expect([1, 2, "3"]).toBeEmpty()).toEqual('Array is not empty.'))

console.log('Equal if an empty string is in the array.')
console.log(expect(expect(['']).toBeEmpty()).toEqual('Array is not empty.'))

console.log('Equal if an array is in the array.')
console.log(expect(expect([[3]]).toBeEmpty()).toEqual('Array is not empty.'))
