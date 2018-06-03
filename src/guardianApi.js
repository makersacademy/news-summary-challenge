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

  guardian.load("http://content.guardianapis.com/uk?show-editors-picks=true&api-key=test", async function(content){
  var myJSON = await JSON.parse(content.response);
  guardian.editorsPicks = myJSON.response.editorsPicks
  var i = 0
  guardian.editorsPicks.forEach(function(article){
    var a = document.createElement('li');
    a.setAttribute('id', i)
    a.innerHTML= guardian.editorsPicks[i].webTitle;
    var element = document.getElementById("mydiv");
    element.appendChild(a);
    i++
  })

https://content.guardianapis.com/world/2018/jun/02/juncker-eu-italy-olive-branch?show-fields=body&api-key=test
})
