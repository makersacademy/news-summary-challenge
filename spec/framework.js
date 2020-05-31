const describe = (desc, fn) => {
  console.log(desc);
  fn();
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (value) => {
    if (exp === value) {
      console.log('     pass')
    } else {
      console.log('     fail')
    }
  },

  toIncludeHTMLContent: (value) => {
    if (exp.outerHTML.includes(value)){
      console.log('     pass')
    } else {
      console.log('     fail')
    }
  },

  toBeHTMLNode: () => {
    if(exp instanceof Element || exp instanceof HTMLDocument){
      console.log('     pass')
    }else{
      console.log('     fail')
    }
  }
})

const expect = (exp) => matchers(exp);