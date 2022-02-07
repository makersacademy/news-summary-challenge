const AYLIENTextAPI = require('aylien_textapi');

const textapi = new AYLIENTextAPI({
  application_id: "9e9a311f",
  application_key: "6ca28f4db6a82df7da8e1714c85d6e73"
});

// textapi.sentiment({'text': 'John is a very good football player!'}, function(error, response) {
//   if (error === null) {
//     console.log(response);
//   }
// });

curl https://api.aylien.com/api/v1/summarize \
   -H "X-AYLIEN-TextAPI-Application-Key: 9e9a311f" \
   -H "X-AYLIEN-TextAPI-Application-ID: 6ca28f4db6a82df7da8e1714c85d6e73" \
   -d sentences_number=3 \
   -d url="https://content.guardianapis.com/search?q=UK&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=471c3b91-05b6-4377-81e7-16d75aee68f7"

