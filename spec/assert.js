var assert = {
  isTrue: function(description, assertion){
    if(!assertion){
      throw new Error("failed: "+ description)
    }
    else{
      console.log("Passed: " + description)
    }
  }
}
