const describe = (description, fn) => {
  console.log(description);
  fn();
}

const it = (message, fn) => describe('  ' + message, fn)

const expect = (exp) => matchers(exp)

const matchers = (exp) => ({
 toEqual: (assertion) => {
   if (exp === assertion) {
     console.log(`${exp} is equal to ${assertion}`, 'color: limegreen')
     return true
   } else {
     console.log(`${exp} is not equal to ${assertion}`, 'color: red')
     return false
   }
 },

 notToEqual: (assertion) => {
  if (exp != assertion) {
    console.log(`${exp} is unequal to ${assertion}. Good!` , 'color: limegreen')
    return true
  } else {
    console.log(`${exp} is equal to ${assertion}. Bad!`, 'color: red')
    return false
  }
},

 toContain: (assertion) => {
   if (exp.includes(assertion)) {
     console.log(`%c  ${exp} includes ${assertion}`, 'color: limegreen')
     return true
   } else {
     console.log(`%c  ${exp} includes ${assertion}`, 'color: red')
     return false
   }
 },

 
 toThrowError: (error) => {
   try {
    exp();
  }
  catch(err) {
    var caughtErrorText = err.toString();
   }
   finally {
      var errorText = 'Error: ' + error
      if (errorText === caughtErrorText) {
      console.log(`"${caughtErrorText}" has been thrown!`, 'color: limegreen')
      } else {
       console.log(`"${caughtErrorText}" has not been thrown even though it should have been.`, 'color: red')
      }
  }
}
})

const expectEquality = (a,b) => {
 if (a === b) {
   console.log(`${a} is equal to ${b}`)
   return true
 } else {
   console.log(`${a} is not equal to ${b}`)
   return false
}

}


const checkError = (a) => {
 try {
   a();
 }
 catch(err) {
   console.log("You can't do that!" + err);
 }
}

