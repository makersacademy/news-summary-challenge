const wrapper = document.querySelector('wrapper')
var secretkey = config.SECRET_KEY;

fetch('https://content.guardianapis.com/search?api-key=' + secretkey)
.then(response => response.json())
.then(data => {
  var title = document.getElementById("wrapper").innerHTML = data["response"]["results"][0]["webTitle"];
    // or do something useful with it
});


// //take the content fo the article
// store it
// inject it into a new page
