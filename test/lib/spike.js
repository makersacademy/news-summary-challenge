"use strict"

function describe(message, testFunc) {
    try {
        console.log('\x1b[2m\x1b[32m%s\x1b[0m', message);
        testFunc();
    } catch (err) {
        console.error('\x1b[2m\x1b[31m%s\x1b[0m', message, err);
        failed(err)
    }
}

function it(message, testFunc) {
    try {
        console.log('\x1b[32m%s\x1b[0m', message);
        testFunc();
        passed()

    } catch (err) {
        console.error("\x1b[31m%s\x1b[0m", message, err);
    }
}

function passed() {
    console.log('\x1b[32m%s\x1b[0m', '\u2714 Assertion: Passed')
}

function failed() {

    console.log('\x1b[31m%s\x1b[0m','\u2718 Assertion: Failed')
}

exports.describe = describe;
exports.it = it;




