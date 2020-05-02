// var postApi = function(noteContent) {


//   let data = {note_text: noteContent};

// fetch("http://content.guardianapis.com/editions?q=uk", {
// method: "POST", 
//   body: JSON.stringify(data)
// }).then(res => {
// // console.log("Request complete! response:", res);
// });

// }

var getApi = function(callback) {
  var api_key = process.env.PERSONAL_API_KEY
fetch(`http://content.guardianapis.com/editions?q=uk&api-key=${api_key}`, {
  method: "GET",
}).then(res => {
  return res.json()
}).then(res => {
  console.log("Request complete! response:", res)
  if(callback){
    callback(res);
  }
  return res
})
}