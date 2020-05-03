function it(label, testFunction) {
    document.write(`<div>${label}</div>`)
    try { testFunction();
}
catch(err) {
    document.write(err.message)
}
};

function expect(a) {
    var toEqual = function(b) {
        if (a === b) {
            document.write('<div>Pass</div><br><br>')
        } else {
            document.write('<div>Fail</div><br><br>')
        }
        
    }
    return {
        toEqual: toEqual
    }
}
