


var newArray = []

testarray.forEach(function(element){
  if (element.includes('PASS')){
    newArray.push(element + " &#129297" + "<br>" + "<br>")
    addSmileyToTable();

  } else if (element.includes('FAIL')) {
    newArray.push(element + " &#128545" + "<br>" + "<br>")
    addFailToTable()

  } else {
    newArray.push(element + "<br>")
  }
})

function addSmileyToTable(){
  var table = document.getElementById('myTable')
  var x = table.insertCell(0);
  x.innerHTML = '<img src="dave-1.0.0/daveHappyFace.jpg" width="300" height="300" alt="unhappy-face"/>'
}

function addFailToTable(){
  var table = document.getElementById('myTable')
  var x = table.insertCell(0);
  x.innerHTML = '<img src="dave-1.0.0/daveUnhappyFace.jpg" width="300" height="300" alt="unhappy-face"/>'
}

console.log(newArray.join(''))

document.getElementById("testPassFail").innerHTML = newArray.join(' ')
