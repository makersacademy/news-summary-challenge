// framework from https://github.com/aniasobo/notes-app.git 
// credit to https://github.com/maryrosecook/notes-exemplar/tree/master/js/test

// TODO:
// refactor to exports
// import to a test unit file

"use strict";

  function describe(caseUnderTest, describeBlockExecutable) {
      console.log(caseUnderTest);
      describeBlockExecutable();
    };
  
  function it(testCaseScenario, testExecutable) {
    try {
      testExecutable();
      testPassMessage(testCaseScenario);
    } catch (exception) {
      testFailMessage(testCaseScenario, exception);
    } finally {
      testHasRunItsCourse();
    }
  };

  function isTruthy(trueOrFalse) {
    if (!trueOrFalse) {
    throw new Error("Error! " + trueOrFalse + " is not truthy 😡 ");
  }
  };

  function throwsMessage(functionUnderTest, expectedMessage) {
    var outcome = catchExceptionFrom(functionUnderTest);

    if (outcome === undefined) {
    throw new Error("No exceptions here 🙂 ")
    }

    if (outcome.message !== expectedMessage) {
    throw new Error("Expected: " + expectedMessage + "but got: " + outcome.message + " 🤔");
  }
};

  function testPassMessage(testCaseScenario) {
    console.log("😎 ", testCaseScenario); 
  };

  function testFailMessage(testCaseScenario, exception) {
    console.log("️😒 ", testCaseScenario);
    console.log(exception.name);
    console.log(exception.message);
    console.log(exception.stack);
  };

  function testHasRunItsCourse(testCaseScenario) {
    console.log("Your test " + testCaseScenario + "has finished executing 👋");
  };

  function catchExceptionFrom(fun) {
    try {
      fun();
    } catch (exception) {
    return exception;
    }
  };

  function stub(returnValue) {
    function stubFunction() {
      stubFunction.calls.push(argumentsObjectToArray(arguments));
      return returnValue;
    };
  
    stubFunction.calls = [];
  
    return stubFunction;
  };
  
  function argumentsObjectToArray(argumentsObject) {
    return Array.prototype.slice.call(argumentsObject);
  };

exports.describe = describe;
exports.it = it;
exports.isTruthy = isTruthy;
exports.throwsMessage = throwsMessage;
exports.stub = stub;
