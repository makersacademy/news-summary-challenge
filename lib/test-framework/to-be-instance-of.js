Object.prototype.toBeInstanceOf = function(type){
  try {
    if (this instanceof type){
      return true;
    } else {
      var e = new Error("<i>" + this.constructor.name + " is not an instance of " + type.name + "</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};
