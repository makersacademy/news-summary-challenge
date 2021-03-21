function describe(title, body) {
    console.log(title);
    body();
}

function it(title, body) {
    console.log(title);
    body();
}

function clear(element) {
element.innerHTML = "";

}

function expect(actual) {
    return {
        toEqual: (expected) => {
            if (actual === expected) {
                console.log("PASS: Good job")
            } else {
                console.log(`FAIL: expected ${actual} to equal ${expected}`)
            }
        },
        toBe: (expected) => {
            if (actual instanceof expected) {
                console.log("PASS: Good job")
            } else {
                console.log(`FAIL: expected ${actual} to be and instance of ${expected}`)
            }
        }
    }
}
