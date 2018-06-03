function expandBody(index) {
  var real = guardian.editorsPicks[Number(index[0])].apiUrl + "?show-fields=all&api-key=test"
  var test = guardian.editorsPicks[Number(index[0])].testUrl
  guardian.load(test, async function(content){
    var fields = await JSON.parse(content.response);
    var link = document.createElement('a');

  document.getElementById('main').innerHTML= fields.response.content.fields.body
  var x = document.getElementById('frontPage');
  x.style.display = "none";
  var y = document.getElementById('secondPage');
  y.style.display = "block";
})};

function goBack() {
  var x = document.getElementById('frontPage');
  x.style.display = "block";
  var y = document.getElementById('secondPage');
  y.style.display = "none";

};
