class Emerald {
    constructor(testObj) {
        this.testObj = testObj;
        this.isPassing;
        this.msg;
    }

    toEq(value) {
        if (this.testObj == value) {
            this.isPassing = true;
        } else {
            this.msg = `Expected ${this.testObj} to equal ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }

    toStrictlyEq(value) {
        if (this.testObj === value) {
            this.isPassing = true;
        } else { 
            this.msg = `Expected ${this.testObj} to be ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }

    toInclude(value) {
        if(this.testObj.includes(value)) {
            this.isPassing = true;
        } else {
            this.msg = `Expected ${this.testObj} to include ${value}`;
            this.isPassing = false;
        }
        elementBuilder(this.msg, this.isPassing);
    }
}

let numPassing = 0;
let numFailing = 0;
let itElement, descElement;

const expect = (testObj) => new Emerald(testObj);

const describe = (desc, fn) => {
    descElement = document.createElement('div');

    descElement.innerText = desc;
    descElement.className = 'desc'

    document
        .getElementById('test-container')
        .appendChild(descElement)
    fn();
}

const it = (desc, fn) => {
    itElement = document.createElement('div');
    itElement.innerText = desc;

    try {
        fn();
    } catch(err) {
        elementBuilder(err, false);
    }
}

const numberBuilder = () => {
    let numContainer = document.getElementById('num-container');

    numContainer.innerText = `${numPassing + numFailing} specs | ${numFailing} failing`

    if(numFailing > 0) {
        numContainer.className = 'num-failing'
    } else {
        numContainer.className = 'num-passing'
    }
}

const elementBuilder = (msg, isPassing) => {
    let testResultElement = document.createElement('div');

    testResultElement.className = 'test-result'

    if(msg) {
        testResultElement.innerText = msg;
    }

    if(isPassing) {
        itElement.className = 'it-pass';
        numPassing++;
    } else {
        itElement.className = 'it-fail';
        numFailing++;
    }   

    descElement.appendChild(itElement).appendChild(testResultElement);

    numberBuilder();
}