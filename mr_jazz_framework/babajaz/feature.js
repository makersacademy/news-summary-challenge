function feature(testText, block) {
  console.log(testText)
  this.jaz = new BabaJaz();
  block();
  jaz.consoleArray.forEach(function(answer){
    var array = answer.split(',')
    console.log(array[0], array[1]);
  })
};
