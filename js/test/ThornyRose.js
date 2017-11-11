
(function (exports) {
  function ThornyRose(obj) {
    this.obj = obj
  }

  ThornyRose.prototype = {
    toEqual: function (assertion) {
      var displayToPage = new CreateDiv("toEqual")

      if (typeof this.obj === 'function') {
        if (this.obj() !== assertion) {
          errorMessage = catchThorns(new Error("D'oh! "+this.obj + " does not equal to " + assertion));
          displayToPage.setMessage(errorMessage)
          displayToPage.addClass("error");
        } else {
          displayToPage.setMessage("You nailed it!! " + this.obj() + " === " + assertion)
          console.log("You nailed it! " + this.obj() + " === " + assertion);
        }
      } else {
        if (this.obj !== assertion) {
          
          errorMessage = catchThorns(new Error("D'oh! "+ this.obj + " does not equal to " + assertion));
          displayToPage.setMessage(errorMessage)
          displayToPage.addClass("error");
        } else {
          displayToPage.setMessage("You nailed it!! " + this.obj + " === " + assertion)
          
          console.log("You nailed it!! " + this.obj + " === " + assertion);
        }
      }
    },

    toBeTypeOf: function (type) {
      var displayToPage = new CreateDiv("toBeTypeOf")
      if (this.obj instanceof eval(type) ){
        console.log(this.obj)
        displayToPage.setMessage("You nailed it!! " +this.obj + " is type of " + type)
        
      } else {
        errorMessage = catchThorns( new Error(this.obj + " is NOT instance of " + type));
        displayToPage.setMessage(errorMessage);
        displayToPage.addClass("error");
        
      }
    }
  
  }

  var expect = function (obj) {
    return new ThornyRose(obj);
  }

  var catchThorns = function (thorn){
    try{
      throw thorn;
    } catch (e) {
      return e.stack ;
    }
  }
 
  exports.hope = expect;
  
})(this);


(function (exports) {
  var describe = function (text, fn) {
    var displayToPage = new CreateDiv("describe");
    displayToPage.setMessage(text);
    console.log(text);
    fn();
  }
  exports.showOff = describe;
})(this);


(function (exports) {
  var it = function (text, fn) {
    var displayToPage = new CreateDiv("it");
    displayToPage.setMessage(text);
    
    
    console.log(text);
    fn();
  }
  exports.theThingy = it;
})(this);