function it(label, testFunction) {
    document.write(`<div>${label}</div>`)
    try { testFunction();
} catch(err) {
    var stackTrace = err.stack.split(' at ').join(' <br>     StackTrace: at ')
    document.write(`<div style='color:red'>TEST FAILED DUE TO ERROR</div><br><br><div>${stackTrace}</div><br><br>`)
}
    document.write(`<br>`)
};

function expect(a) {
    var toEqual = function(b) {
        if (a === b) {
            document.write(`<div style="color:green"> Pass </div>`)
        } else {
            document.write(`<div style="color:red">Fail : ${a} is not equal to ${b} </div>`)
        }     
    }
    return {
        toEqual: toEqual
    }
}





