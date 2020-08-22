i = 0

// Before/After each test defaults to true. Toggle to turn off. Contents of these objects will be evaluated if true.
let isAfterEachOn = true;
let isBeforeEachOn = true;

const assert = {

    toggleBeforeEach: function() {
        return isBeforeEachOn = !isBeforeEachOn;
    },

    toggleAfterEach: function() {
        return isAfterEachOn = !isAfterEachOn;
    },

    status:  function() {
        console.log("Before each: " + isBeforeEachOn)
        console.log("After each: " + isAfterEachOn)
    },

    //run what you want to happen before each test here!!
    beforeEach: function() {
        if (isBeforeEachOn) {
         $noteCount = 0;
        }
    },

    // run what you want to happen after each test here!!
    afterEach: function() {
        if (isAfterEachOn) {
            $noteCount = 0;
        }
        updateTests();
    },

    isTrue: function(assertionToCheck, title = 'untitled') {
        this.beforeEach();
        let test = i++
        if (!assertionToCheck) {
            if (this.isTrue.arguments)  { console.log((this.isTrue.arguments)); }
            if (this.isTrue.caller)  { console.log((this.isTrue.caller)); }
            test += ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not truthy";
            this.tests.push(test);
            //  UPDATES OCCUR MID-TEST BECAUSE OF ERROR THROWS. WITHOUT MID-TEST UPDATE THE ARRAY CONTAINING TESTS WILL NOT BE UPDATED.
            updateTests();
            throw new Error(test);
        } else {
            test += ") " + title + ' <b>PASSED!</b>';
            this.tests.push(test)
            console.log(test);
        }
        this.afterEach();
    },

    isFalse: function(assertionToCheck, title = 'untitled') {
        this.beforeEach();
        let test = i++
        if (assertionToCheck) {
            if (this.isFalse.arguments) { console.log(this.isFalse.arguments); }
            if (this.isFalse.caller)  { console.log((this.isFalse.caller)); }
            test += ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not falsy";
            this.tests.push(test);
            updateTests();
            throw new Error(test);
            //throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionToCheck + " is not falsy");
        } else {
            test += ") " + title + ' <b>PASSED!</b>';
            this.tests.push(test);
            console.log(test);
        }
        this.afterEach();
    },

    isEqTo: function(assertionOne, assertionTwo, title = 'untitled') {
        this.beforeEach();
        let test = i++
        if (assertionOne !== assertionTwo) {
            if (this.isEqTo.arguments) console.log(this.isEqTo.arguments)
            if (this.isEqTo.caller)  { console.log((this.isEqTo.caller)); }
            test += ") Assertion failed: (" + title + '): ' + assertionOne + " <b> is not equal to </b> " + assertionTwo;
            this.tests.push(test);
            updateTests();
            throw new Error(test);
            //throw new Error(i++ + ") Assertion failed: (" + title + '): ' + assertionOne + " is not equal to " + assertionTwo + "");
        } else {
            //test += ') ' + title + ":" + assertionOne + "<b> is equal to </b>" + assertionTwo + '<b>PASSED!</b>'
            test += ') ' + title + '<b> PASSED!</b>'
            this.tests.push(test)
            console.log(test);
        }
        this.afterEach();
    },

    tests: [],
}

//Change element ID to match the element in your SpecRunner as desired
function updateTests() {
    document.getElementById("tests").innerHTML = "<h1>Test suite</h1><br/>" + assert.tests.map(test => test + "<br/>" + "<hr>").join(" ")
}
