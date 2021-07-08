(function(exports) {

    function describe(desc, func) {
        appendResult(desc);
        exceptionCatcher(func);
        statusReporter();
        appendResult("\n\n");
    }

    function it(desc, func) {
        appendResult("it " + desc + ": ");
        exceptionCatcher(func);
    }

    function pass() {
        appendResult("- pass");
        exports.passes += 1;
    }

    function fail() {
        appendResult("=======================================>>> fail!");
        exports.fails += 1;
    }

    function expect(expression){
        return {
            toBe: function(assertion) {
                 if (expression === assertion) {
                     pass();
                 } else {
                     fail();
                 }
            },
            toNotBe: function(assertion) {
                 if (expression !== assertion) {
                     pass();
                 } else {
                     fail();
                 }
            },
            toBeInstanceOf: function(object){
                 if (expression instanceof object) {
                     pass();
                 } else {
                     fail();
                 }
            }
        }
    }

    function appendResult(text){
        var parentElem = document.getElementById('test_header');
        var elem = document.createElement('div');
        elem.innerText = text;
        elem.style.fontSize = "medium";
        elem.style.fontStyle = "italic";
        parentElem.appendChild(elem);
    }

    function statusReporter() {
        appendResult("\n********************* Totals *******************");
        appendResult("Total tests: " + (exports.passes + exports.fails));
        appendResult("Fails: " + exports.fails);
        appendResult("Passses: " + exports.passes);
    }

    function exceptionCatcher(func) {
        try {
            func();
        } catch (e) {
          appendResult("ERROR: " + e);
          exports.fails += 1;
        }
    }

    exports.it = it;
    exports.describe = describe;
    exports.pass = pass;
    exports.fail = fail;
    exports.expect = expect;
    exports.fails = 0;
    exports.passes = 0;
})(this);

// var cat = {
//             meow: function() {return "meow"},
//             walk: function() {return "walk"}
//           };
// describe('cat', function(){
//
//    it('can meow', function(){
//       expect(cat.meow()).toBe("meow");
//    });
//
//    it('can walk', function(){
//       expect(cat.walk()).toBe("walk");
//    });
//
//    it('can bark', function(){
//       expect(cat.bark()).toBe(TypeError);
//    });
//
// });
