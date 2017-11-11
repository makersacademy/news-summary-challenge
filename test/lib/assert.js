function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
        throw new FailedTestError("Failed: " + assertionToCheck + " is not truthy", {type: "Failed test", details: {assertion: assertionToCheck, expected: true}});
    }
}

function isArray(assertionToCheck) {
    if (!assertionToCheck instanceof Array) {
        throw new Error("Assertion Failed: " + assertionToCheck + " is not an Array");
    }
}

function isEmpty(assertionToCheck) {
    if (!assertionToCheck.length === 0 || assertionToCheck) {
        throw new Error("Assertion Failed: " + assertionToCheck + " is not empty");
    }
}

function toBe(actual, expected) {
    if (actual !== expected) {
        throw new Error('Assertion: Failed. ' + actual + ' does not equal ' + expected + '.');
    }
}

function itContains(list, obj) {
    for (let i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return;
        }
    }
    throw new Error('Assertion: Failed! list does not contain the object');
}

function htmlContainsText(html, htmlTag, text) {
    let elements = html.getElementsByTagName(htmlTag);
    let found = false;
    let actual = '';

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].textContent === text) {
            found = true;
            actual = elements[i].textContent;
            break;
        }
    }

    if (!found) {
        throw new Error('Assertion: Failed! list does not contain the object');
    }
}

function throws(testFunction, expectedMessage) {
    var exception = catchExceptionFrom(testFunction);

    if (exception === undefined) {
        throw new Error("Did not throw exception");
    }

    if (exception.message !== expectedMessage) {
        throw new Error("Expected '" + expectedMessage + "' but got '" + exception.message + "'");
    }
};

function FailedTestError(message, infoObj) {
    this.message = message;
    this.infoObj = infoObj;
    this.errorArray = function() {
        return { message: message, infoObj: infoObj };
    };
}

function catchExceptionFrom(fn) {
    try {
        fn();
    } catch (exception) {
        return exception;
    }
};


exports.isTrue = isTrue;
exports.isArray = isArray;
exports.isEmpty = isEmpty;
exports.toBe = toBe;
exports.itContains = itContains;
exports.htmlContainsText = htmlContainsText;
exports.throws = throws;