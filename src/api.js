var xhr = new XMLHttpRequest();
xhr.open("GET", "https://content.guardianapis.com/search?api-key=ed6927b1-f9a7-4f6d-b095-12ada4b6f100", false);
xhr.send();

if(xhr.status == 200)
console.log(xhr.response)
var data = JSON.parse(xhr.responseText)
console.log(data)
