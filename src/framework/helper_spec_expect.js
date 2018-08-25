// This is my latest attempt at a test framework

var expect = function(desc, arg) {
    return {
        isLessThan: function(arg2) {
            
            if (arg >= arg2) {
                throw new Error(`Failed at ${desc}: ${arg} is not less than ${arg2}!`)
            } else {
                console.log(`Passed test: ${desc}`)
            }
        },

        isGreaterThan: function(arg2) {
            
            if (arg2 >= arg) {
                throw new Error(`Failed at ${desc}: ${arg} is not greater than ${arg2}!`)
            } else {
                console.log(`Passed test: ${desc}`)
            }
        },

        isEqualTo: function(arg2) {
            if (arg === arg2) {
                console.log(`Passed test: ${desc}`)
            } else {
                throw new Error(`Failed at ${desc}: ${arg} is not equal to ${arg2}!`)
            }
        }
    }
}

