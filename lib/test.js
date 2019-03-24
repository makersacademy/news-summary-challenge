var assert = {
  isTrue: function(checkingStatus){
    if(!checkingStatus){
      throw new Error( "The" + checkingStatus +"is not correct.")
    }
  }
}
