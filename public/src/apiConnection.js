var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "YOUR_APP_ID",
  application_key: "YOUR_APP_KEY"
});


// JS API fetch GET request
fetch(url) // Call the fetch function passing the url of the API as a parameter
.then(function() {
    // Your code for handling the data you get from the API
})
.catch(function() {
    // This is where you run code if the server returns any errors
});
