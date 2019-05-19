function testAPI () {
    console.log(this.responseText);
  }
  
  var request = new XMLHttpRequest();
  
  request.addEventListener("load", testAPI);
  request.open("GET", 'https://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01&api-key=test')

  request.send()


