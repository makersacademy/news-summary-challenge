Object.prototype.toEqual = function(element){
  try {
    if(this.valueOf() === element){
      return true;
    } else {
      var e = new Error("<i> [ " + this.valueOf() + " ] is not equal to [ " + element.valueOf() + " ]</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};
