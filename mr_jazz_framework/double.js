function stuntDouble (name, arrayMethod, resultArray) {
  double = {}
  double.name = name
  var i = 0
  arrayMethod.forEach(function(method, i){
    double[method] = function method() { return resultArray[i-1] };
    i++
  })
  return double;
}
