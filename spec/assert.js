let fail = "<p style='color: red;'>Failed</p>";
let pass = "<p style='color: green;'>Passed</p>";

var assert = {
    isTrue: function(assertionToCheck) {
        if (!assertionToCheck) {
            document.write(fail);
            throw new Error (`Expected ${assertionToCheck} to be truthy`);
        } else {
            document.write(pass)
        }
    },
    isInstance: function(object, instance) {
        if (instance instanceof object) {
            document.write(pass);
        } else {
            document.write(fail);
            throw new Error (`Expected ${instance} to be an instance of ${object}, but it is not`);
        }
    },    
    isEqual: function(a, b) {
        if (a !== b) {
            document.write(fail);
            throw new Error (`${a} is not equal to ${b}`);
        } else {
            document.write(pass);
        }
    }    
};
