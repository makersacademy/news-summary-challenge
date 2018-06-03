function Guardian(){
  this.editorsPicks = []
};


Guardian.prototype.load = function(url, callback) {
        var xhr;

        if(typeof XMLHttpRequest !== 'undefined') xhr = new XMLHttpRequest();
        else {
            var versions = ["MSXML2.XmlHttp.5.0",
                            "MSXML2.XmlHttp.4.0",
                            "MSXML2.XmlHttp.3.0",
                            "MSXML2.XmlHttp.2.0",
                            "Microsoft.XmlHttp"]

             for(var i = 0, len = versions.length; i < len; i++) {
                try {
                    xhr = new ActiveXObject(versions[i]);
                    break;
                }
                catch(e){}
             } // end for
        }

        xhr.onreadystatechange = ensureReadiness;

         function ensureReadiness() {
            if(xhr.readyState < 4) {
                return;
            }

            if(xhr.status !== 200) {
                return;
            }

            // all is well
            if(xhr.readyState === 4) {
                callback(xhr);
            }
        }

        xhr.open('GET', url, true);
        xhr.send('');
    }

var guardian = new Guardian();

  guardian.load("../src/JSON/editorsPicks.json", async function(content){
  var myJSON = await JSON.parse(content.response);
  guardian.editorsPicks = myJSON.response.editorsPicks
  var i = 0
  guardian.editorsPicks.forEach(function(article){
    guardian.load(article.testUrl, async function(content){
      var fields = await JSON.parse(content.response);
      var link = document.createElement('a');
      link.setAttribute('id', i +"link");
      link.setAttribute('onclick', 'expandBody(event.target.id);')
      var title = document.createElement('h1');
      var thumbnail = document.createElement('img');
      thumbnail.setAttribute('id', i +"img");
      thumbnail.setAttribute('src', fields.response.content.fields.thumbnail);
      title.innerHTML= fields.response.content.fields.headline;
      var element = document.getElementById("frontPage");
      element.appendChild(link);
      link.appendChild(thumbnail);
      link.appendChild(title);
      i++;
    })
  })
});

function expandBody(index) {
  console.log(index)
  guardian.load(guardian.editorsPicks[Number(index[0])].testUrl, async function(content){
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
