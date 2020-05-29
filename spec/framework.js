const describe = (desc, fn) => {
  subject = eval('new ' + describedClass);
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

  toBeAnInstanceOf: (value) => {
    if(exp.constructor === value){
      console.log('     pass')
    }else{
      console.log('     fail')
    }
  },

  toInclude: (value) => {
    if(exp.includes(value)){
      console.log('     pass')
    }else{
      console.log('     fail')
    }
  },
})

const expect = (exp) => matchers(exp)
