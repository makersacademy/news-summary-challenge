console.log = function(message) {
  var li = document.createElement("p")
  var msg = document.createTextNode(message)
  
  li.appendChild(msg)
  document.getElementById('result').appendChild(li);
  
};

let testnum = 0;

function it(label, callback) {
  testnum++;
  console.log("Test "+ `${testnum}: ${label}`)
  callback()
}

function expect(value) {
  return {
    toEqual: function(expected) {
      if (value == expected) {
        console.log("⟶ Pass") 
      }
      else {
        console.log("⟶ Fail")
      }
      
      
    },
    notToEqual: function(expected) {
      if (value != expected) {
        console.log("⟶ Pass") 
      } else {
        console.log("⟶ Fail")
      }
    },
    toBe: function(expected) {
      if (value === expected) {
        console.log("⟶ Pass") 
      } else {
        console.log("⟶ Fail")
      }
    },
    notToBe: function(expected) {
      if (value !== expected) {
        console.log("⟶ Pass") 
      } else {
        console.log("⟶ Fail")
      }
    },
    toThrowWhen: function(expected) {
      if (value == expected) {
        console.log("⟶ Pass") 
      } else {
        console.log("⟶ Fail")
      }
    },
    change: function(expected, change, method) {
      if (value === expected) {
        var state1 = expected;
        if (method === change) {
          console.log("⟶ Pass") 
        } else {
          console.log("⟶ Fail")
        }
      }
      throw ["Fail", "Initial state not equal to expected state"];
    }
  }
}

