(function(exports) {
  function Describe(desc, fn) {
    var div = document.getElementsByClassName('test-results')[0]
    this.el = document.createElement('p')
    this.ul = document.createElement('ul')
    this.el.innerHTML = desc
    div.appendChild(this.el)
    this.el.appendChild(this.ul)
    fn();
  };

  function It(msg, fn) {
    this.li = document.createElement('li')
    this.li.innerHTML = msg
    this.ul.appendChild(this.li)
    fn()
  };

  function Demand(value) {
    var li = this.li
    this.statement = value
    if (this instanceof Demand) {
      this.value = value
    } else {
      return new Demand(value)
    }
  }
  Demand.prototype = {
    toBe: function(comparator) {
      if(this.value === comparator) {
        li.setAttribute('class', 'pass')
        return true
      } else {
        li.setAttribute('class', 'fail')
        var feedback = document.createElement('p')
        feedback.innerHTML = `Demanded ${this.statement} to be ${comparator} but he's fucked`;
        li.appendChild(feedback)
        return false
      }
    },
    notToBe: function(comparator) {
      if(this.value !== comparator) {
        li.setAttribute('class', 'pass')
        return true
      } else {
        li.setAttribute('class', 'fail')
        var feedback = document.createElement('p')
        feedback.innerHTML = `Demanded ${this.statement} to not be ${comparator} but they sure are`;
        li.appendChild(feedback)
        return false
      }
    },
    toBeAVassalOf: function(comparator) {
      if(comparator.includes(this.value)) {
        li.setAttribute('class', 'pass')
        return true

      } else {
        li.setAttribute('class', 'fail')
        var feedback = document.createElement('p')
        feedback.innerHTML = `Demanded ${this.statement} to be A Vassal of ${comparator} but they rebel`;
        li.appendChild(feedback)
        return false
      }
    },
    // toKnowNothing: function(){
    //   try{
    //     this.value === undefined
    //     li.setAttribute('class', 'fail')
    //     return false
    //     console.log(1)
    //   } catch(error){
    //     console.log('pass')
    //     li.setAttribute('class', 'pass')
    //     return true
    //   }
    // },
    toHaveBeenSummoned: function() {
      try {
        if (this.value.called === true) {
          li.setAttribute('class', 'pass')
          return true
        } else {
          li.setAttribute('class', 'fail')
          var feedback = document.createElement('p')
          feedback.innerHTML = `Demanded the spy to be summoned but they rebel`;
          li.appendChild(feedback)
          return false
        }
      } catch (error) {
        li.setAttribute('class', 'fail')
        var feedback = document.createElement('p')
        feedback.innerHTML = `Demanded the spy to be summoned but they refuse to bend the knee`;
        li.appendChild(feedback)
        return false
      }
    },
    toHaveBeenSummonedWith: function() {
      try {
        for (i = 0; i < this.value.args.length; i++) {
          if (arguments[i] !== this.value.args[i]) {
            li.setAttribute('class', 'fail')
            var feedback = document.createElement('p')
            feedback.innerHTML = `Demanded the spy to be summoned with '${Object.values(arguments)}' but they obtained '${Object.values(this.value.args)}'`;
            li.appendChild(feedback)
            return false
          }
          li.setAttribute('class', 'pass')
          return true
        }
      } catch (error) {
        li.setAttribute('class', 'fail')
        var feedback = document.createElement('p')
        feedback.innerHTML = `Demanded the spy to be summoned with '${Object.values(arguments)}' but they obtained '${Object.values(this.value.args)}'`;
        console.log(Object.values(arguments))
        li.appendChild(feedback)
        return false
      }
    }
  }

  function LittleBird(obj, method) {
    if (this instanceof LittleBird) {
      this.obj = obj
      this.method = method
      obj[`${method}`] = function(count) {
        this[`${method}`].called = true
        this[`${method}`].args = arguments
      }
    } else {
      return new LittleBird(obj, method)
    }
  }

  LittleBird.prototype = {
    andRespond: function(value) {
      var obj = this.obj
      var method = this.method
      obj[`${method}`] = function() {
        this[`${method}`].called = true
        return value
      }
    }
  }

  exports.Describe = Describe
  exports.It = It
  exports.Demand = Demand
  exports.LittleBird = LittleBird
})(this)
