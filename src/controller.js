fetch("https://content.guardianapis.com/search?api-key=aabcd544-37ed-434f-a275-e2af9055b42b")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var body = data.response
      for (var i = 0; i < data.response.results.length; i++) {
        var headLine = body.results[i].webTitle
        var myForm = document.createElement('form');
        var node = document.createElement("p");
        var myInput = document.createElement('input');
        myInput.setAttribute('type', 'submit');
        myInput.setAttribute('value', 'View summary');
        myForm.appendChild(myInput);
        document.body.appendChild(myForm);
        node.innerHTML = `<a href='${body.results[i].apiUrl}?api-key=aabcd544-37ed-434f-a275-e2af9055b42b'>${headLine}</a>`
        document.body.appendChild(node);
      }

  })
