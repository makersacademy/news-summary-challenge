var assert = {
    isTrue: function(assertionToCheck, name){
        if(!assertionToCheck){
            throw new Error(`%c Assertion failed: ${name} is not truthy`, "color: red");
        }
        else{
            console.log(`%c${name} passed!`, "color: green; background-color: black; font-size: 14px;");
        }
    }
}