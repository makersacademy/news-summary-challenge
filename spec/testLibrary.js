class assert {
    static checkTest(assertionToCheck, test){
        if (!assertionToCheck) {
            throw new Error("Test has failed for " + test);
        } else {
            console.log("Test has passed for " + test)
        }
    }
}