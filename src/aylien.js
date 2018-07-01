var AYLIENTextAPI = require('aylien_textapi');
var textapi = new AYLIENTextAPI({
  application_id: "370c826c",
  application_key: "Y1ccd57a011ce0ee0690736165c6580bf	"
});

textapi.summarize({
url: "https://www.theguardian.com/film/2018/jun/29/where-is-the-geezer-danny-dyer-rages-at-david-cameron-over-brexit",
sentences_number: 3
},
function(error, response){
  if (error === null) {
    response.sentences.forEach(function(s) {
      console.log(s);
    )};
  }
});
