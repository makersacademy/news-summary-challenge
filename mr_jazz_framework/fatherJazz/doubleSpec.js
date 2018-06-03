console.log("----  DOUBLE TESTS ----")

testDouble = stuntDouble('double', ['length'], [true])

console.log("Equal if input name is 'double'")
console.log(expect(testDouble.name).toEqual('double'))

console.log("Equal if length returns true")
console.log(expect(testDouble.length()).toEqual(true))

testDoubleTwo = stuntDouble('double', ['length', 'height', 'name', 'width'], [true, 12, 'Dave', [1,2,3]])

console.log("Equal if height returns 12")
console.log(expect(testDoubleTwo.height()).toEqual(12))

console.log("Equal if name returns Dave")
console.log(expect(testDoubleTwo.name()).toEqual('Dave'))

console.log("Equal if width returns an array")
console.log(expect(testDoubleTwo.width()).toEqual([1,2,3]))
