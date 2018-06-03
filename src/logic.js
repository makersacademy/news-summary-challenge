  var guardian = new Guardian();

  var realUrl = "http://content.guardianapis.com/uk?show-editors-picks=true&api-key=test"
  var testUrl = "../src/JSON/editorsPicks.json"

  guardian.load(testUrl , async function(content){
    var myJSON = await JSON.parse(content.response);
    guardian.editorsPicks = myJSON.response.editorsPicks
    var i = 0
    guardian.editorsPicks.forEach( async function(article){
      var real = article.apiUrl + "?show-fields=all&api-key=test"
      var test = article.testUrl
      await guardian.load(test , async function(content){
        var fields = await JSON.parse(content.response);
        _addHtml(fields, i)
        i++;
    })
  })
});

function _addHtml(fields, i) {
  var link = document.createElement('a');
  var title = document.createElement('h1');
  var thumbnail = document.createElement('img');
  var element = document.getElementById("frontPage");
  link.setAttribute('id', i +"link");
  link.setAttribute('onclick', 'expandBody(event.target.id);')
  title.setAttribute('id', i +"title");
  thumbnail.setAttribute('id', i +"img");
  thumbnail.setAttribute('src', fields.response.content.fields.thumbnail);
  title.innerHTML= fields.response.content.fields.headline;
  element.appendChild(link);
  link.appendChild(thumbnail);
  link.appendChild(title);
}
