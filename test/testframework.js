/*
let it  = (label, testCallback) => {
  console.log(`Test: ${label}`);
  testCallback()
}

const expect = (actual) => {
  return {
  toEqual: (expected) => {
    if (actual===expected){
      console.log('pass')
    } else {
      console.log(`fail, expected ${expected} but got ${actual}`)
    }
   },
   toNotEqual: (unexpected) => {
     if (actual===unexpected){
       console.log(`fail, expected and actual were same`)
     }else{
       console.log('pass')
     }
   },
      toBeAnArray: () => {
        if (actual instanceof Array){
          console.log(`pass`)
        }else{
           console.log(`fail, expected ${actual}`)
        }
      }
  }

}

*/
