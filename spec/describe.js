var describe = function(subject,expectations) {
    console.log(subject);
    expectations();
}

var it = function(expectation,asserts) {
    console.log("  " + expectation);
    asserts();
}