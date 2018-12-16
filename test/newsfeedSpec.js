'use strict';

var testjs = new TestJS();

console.log(testjs);
testjs.test('a passing test', function() {
    var square = new Square(10);
    testjs.assertEquals(square.area(), 100);
});

testjs.test('a failing test', function() {
    var square = new Square(10);
    testjs.assertEquals(square.area(), 1);
});
