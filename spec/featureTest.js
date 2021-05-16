function it (label, test) {

  console.log(`test: ${label}`)
  test()
}

function expect(actualValue) {
  return { 
      toEqual: function (expectedValue){
          if(actualValue === expectedValue){
              console.log("your test has passed, you are an amazing coder!!!")

          } else {
              console.log("failure, but do not let this get you down, see below for details and debug!!!")
              console.log(`expected: ${expectedValue}\ngot: ${actualValue}\nPlease review your code`)
          } 
      },

      toBeTruthy: function(){
          if(actualValue === true){
              console.log("your test has passed, you are an amazing coder!!!")
          } else {
              console.log("failure, but do not let this get you down, see below for details and debug!!!")
          }
      }
  }
}

// ----------------------------------------------------------------------------------------------------------------------------- //
