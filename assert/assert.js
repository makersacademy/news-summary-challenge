var assert = {
    isTrue: function(assertionToCheck, name){
        if(!assertionToCheck){
            console.log(`%c Assertion failed: ${name}  is not truthy`, "color: red");
            throw new Error(`%c Assertion failed: ${name} is not truthy`, "color: red");
        }
        else{
            console.log(`%c ${name} passed!`, "color: green");
        }
    }
}