var refreshcounter = 0;

window.onload=function(){
  var refreshbtn = document.getElementById('btn');
  refreshbtn.addEventListener("click", function(evt){
    evt.preventDefault();
    // XMLHttpRequest is a built in tool in any web browser.  It establishes a connection with the URL we specify and then it lets us send or receive data
    var ourRequest = new XMLHttpRequest();
    // we want to download data hence use GET
    // this line is telling the browser to go to this url and get the JSON data
    ourRequest.open('GET','https://content.guardianapis.com/search?page-size=15&show-fields=starRating,headline,thumbnail,short-url&api-key=d81d93a1-ac62-49d6-b033-86cdcbb705d2');
    // tell the browser what should happen once the data is loaded
    ourRequest.onload = function(){
      // tell the browser to interpret the data received as json and save that data to ourData
      var ourData = JSON.parse(ourRequest.responseText);
      // console.log(ourData.response.results[0].webTitle);
      renderHTML(ourData);
    };
    ourRequest.send();
  });
};

function renderHTML(data){
  var headlineContainer = document.getElementById('headlines');
  var htmlString = "";
  // for(i=0; i<data.response.results.length; i++){
  for(i=refreshcounter; i<(refreshcounter+3); i++){
    htmlString += ("<img src=" + "'" + data.response.results[i].fields.thumbnail + "'" +"/>"+"<p id=" + i + "><a href='#" + i + "'>" + data.response.results[i].webTitle +"</a></p>")
  }
  // for(i=refreshcounter; i<(refreshcounter+3); i++){
  //   htmlString += ("<img src=" + "'" + data.response.results[i].fields.thumbnail + "'" +"/>"+"<p><a target='_blank' href='" + data.response.results[i].webUrl + "'>" + data.response.results[i].webTitle +"</a></p>")
  // }
  checkhash(data);

  headlineContainer.insertAdjacentHTML('beforeend',htmlString);
  refreshcounter+=3;
  if(refreshcounter>14){
    document.getElementById('btn').classList.add("hide-me");

  };
};

function checkhash(data){

  window.onhashchange = function(){
    if(location.hash!== ""){
      var id = window.location.hash.split("#")[1];
      console.log(id);
      var newsURL = data.response.results[id].webUrl;
      var aylienURL = 'http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url='+ newsURL;
      // curl https://api.aylien.com/api/v1/summarize \
      //  -H "X-AYLIEN-TextAPI-Application-Key: c4fd055da29c1cd557fe5a1610615e05" \
      //  -H "X-AYLIEN-TextAPI-Application-ID: 6cc1ec27" \
      //  -d sentences_number=3 \
      //  -d url="https://www.theguardian.com/world/2017/sep/19/australia-offers-pay-rohingya-refugees-return-myanmar"

      insertSummary();

      function insertSummary(){
        var sumRequest = new XMLHttpRequest();

        //outdated
        // var path="https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/world/2017/sep/19/australia-offers-pay-rohingya-refugees-return-myanmar";
        // sumRequest.onreadystatechange=state_change;
        // sumRequest.open("GET", path, true);
        // sumRequest.setRequestHeader("X-AYLIEN-TextAPI-Application-Key", "c4fd055da29c1cd557fe5a1610615e05");
        // sumRequest.setRequestHeader("X-AYLIEN-TextAPI-Application-ID","6cc1ec27");

        //UrlFetchApp
        // var options = {
        //   headers: {
        //     "X-AYLIEN-TextAPI-Application-Key": "c4fd055da29c1cd557fe5a1610615e05",
        //     "X-AYLIEN-TextAPI-Application-ID": "6cc1ec27"
        //   }
        // };
        // var response = UrlFetchApp.fetch("https://api.aylien.com/api/v1/summarize?url=http://techcrunch.com/2015/10/20/google-to-the-yahoo-rescue", options);
        //
        // Logger.log(response.getContentText());
        //
        // var sumData = response.getContentText();


        sumRequest.open('GET',aylienURL);
        sumRequest.onload = function(){
          var sumData = JSON.parse(sumRequest.responseText);
          console.log(sumData);
          document.getElementById(id).innerHTML = "<h2>" + data.response.results[id].webTitle + "</h2>" + "<p>" + sumData.sentences + "</p>";
        };
        sumRequest.send();
      }
    };
      // .innerHTML = notelistview.noteList.list[id].readText();
  };
}
