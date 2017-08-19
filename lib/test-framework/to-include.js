Object.prototype.toInclude = function(element){
  try {
    if(this.includes(element)){
      return true;
    } else {
      var e = new Error("<i>" + this.constructor.name + " is not included in " + element.name + "</i><br>");
      throw (e.stack);
    }
  }
  catch(err){
    return err;
  }
};
