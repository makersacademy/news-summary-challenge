// Test that toEqual works
console.log("---- PROTOTYPE TOEQUALS TESTS ----")
jaz = new Jaz();

console.log("Returns true if to values are same and same type")
console.log(isTrue(expect(1).toEqual(1) === "Values are equal."))

console.log("Returns true if values are different")
console.log(isTrue(expect(1).toEqual(2) === "Values are not equal."))

console.log("Returns true if arrays are the same")
console.log(isTrue(expect([1,2,3]).toEqual([1,2,3]) === "Values are equal."))

console.log("Returns true if arrays are different")
console.log(isTrue(expect([1,2,4]).toEqual([1,2,3]) === "Values are not equal."))

console.log("Returns true if arrays are same with string vs number")
console.log(isTrue(expect([1,2,4]).toEqual([1,"2",3]) === "Values are not equal."))

console.log("Returns true if arrays have different length")
console.log(isTrue(expect([1,2,3,4]).toEqual([1,2,3]) === "Values are not equal."))

console.log("Returns true if values are different type")
console.log(isTrue(expect("1").toEqual(1) === "Values are not equal."))

console.log("Returns true if hashes are the same")
console.log(isTrue(expect({1: 2, 3: 4}).toEqual({1: 2, 3: 4}) === "Values are equal."))

console.log("Returns true if hashes are the same but have different type of values")
console.log(isTrue(expect({1: 2,2: 3}).toEqual({1: 2,2: "3"}) === "Values are not equal."))

console.log("Returns true if hashes are not the same")
console.log(isTrue(expect({1: 2, 3: 5}).toEqual({1: 2, 3: 4}) === "Values are not equal."))

console.log("Returns true if hashes are not the same length")
console.log(isTrue(expect({1: 2, 3: 5,4: 6}).toEqual({1: 2, 3: 4}) === "Values are not equal."))

console.log("Object test")
console.log(isTrue(expect(Number).toEqual(Number) === "Values are equal."))
