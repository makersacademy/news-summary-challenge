function beforeEach(beforeStuff){
  if (beforeStuff instanceof Function){
    jaz.before.push(beforeStuff);
  }
}
