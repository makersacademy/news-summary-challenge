var mykey = config.MY_KEY;

var url = 'https://content.guardianapis.com/search?api-key=' + mykey;

var req = new Request(url);

fetch(req)
    .then(function(response) {

            if (response.status === 200) {
                return response.json();
            }
            else {
                throw new Error ("wrong")
            }        
    })
    .then(data => {
  
        var articles = data.response.results;
       
        var listView = new ListView(articles)

        document.getElementById('headlines-list').innerHTML = listView.displayHtml()

    })
    .catch(error => {
        console.error(error)
    });
