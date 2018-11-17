(function(exports) {
  function expect(value) {

    function toEqual(assertion) {
      value === assertion ? console.log('✅') : console.log('❌')
    }

    function compareArray(array) {
      if (value.length != array.length) {
        console.log(false)
      }
      for (var i = 0; i < value.length; ++i) {
        if (value[i] != array[i]) {
          console.log(false)
        }
      }
      console.log('✅')
    }

    function toHaveContent(assertion) {
      value.includes(assertion) ? console.log('✅') : console.log('❌')
    }

    function toNotHaveContent(assertion) {
      value.includes(assertion) ? console.log('❌') : console.log('✅')
    }

    return {
      toEqual: toEqual,
      compareArray: compareArray,
      toHaveContent: toHaveContent,
      toNotHaveContent: toNotHaveContent
    }
  }

  exports.expect = expect

})(this)
