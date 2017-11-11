'use strict';

(function(exports) {

  exports.expect = function(firstArg) {

    const not = ' not';

    function _executeTest(options) {
      if (!options.assertion) {
        throw new Error(_errorMessage(options.errorType, options.errorOperator, options.secondArg));
      };
    };

    function _errorMessage(errorType, errorOperator, secondArg) {
      if (errorType === 'single comparison') {
        return "Test failed: " + firstArg + " is not true.";
      } else {
        return 'Test failed: expected ' + firstArg + errorOperator + secondArg + '.';
      }
    };

    function _executionContext(context, assertion) {
      return (context === ' not') ? !assertion : assertion;
    }

    function toEqual(secondArg) {
      _executeTest({
        assertion: _executionContext(this, (firstArg === secondArg)),
        errorOperator: (this + " to equal "),
        secondArg: secondArg
      });
    };

    function toInclude (secondArg) {
      _executeTest({
        assertion: _executionContext(this, (firstArg.includes(secondArg))),
        errorOperator: (this + " to contain "),
        secondArg: secondArg
      });
    };

    function instanceOf (secondArg) {
      _executeTest({
        assertion: _executionContext(this, (firstArg instanceof secondArg)),
        errorOperator: (this + " to be an instance of "),
        secondArg: secondArg
      })
    };

    function truthy () {
      _executeTest({
        assertion: (!firstArg),
        errorOperator: (" is not true"),
        errorType: 'single comparison'
      });
    };

    function falsy () {
      _executeTest({
        assertion: (firstArg),
        errorOperator: (" is not false"),
        errorType: 'single comparison'
      });
    };

    return {
      toEqual: toEqual,
      toInclude: toInclude,
      toBe: {
        true: truthy,
        false: falsy,
        instanceOf: instanceOf
      },
      not: {
        toEqual: toEqual.bind(not),
        toInclude: toInclude.bind(not),
        toBe: {
          instanceOf: instanceOf.bind(not)
        }
      }
    }

  };

})(this);
