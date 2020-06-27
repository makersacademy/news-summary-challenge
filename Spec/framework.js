var expect = {
    isEqual: function(assert, testName) {
        if (!!assert) {
            console.log(`${testName} passed`)
        } else {
            console.log(`${testName} FAILED`)
        }
    }
}