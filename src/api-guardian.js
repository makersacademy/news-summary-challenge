(function(exports){

  function APIGuardian(){
    var xhr = new XMLHttpRequest();

    var showTopStoriesToday = document.getElementById("show-top-stories");
    showTopStoriesToday = [];

    xhr.onreadystatechange = processRequest();
      if( this.readyState == 4 && this.status = 200 ){
        var response = JSON parse(xhr.responseText);
        showtopStoriesTodayArray.push(response.response.results[0].webTitle);
        if(!this.readyState == 404){
          alert("There is no news today. Or there's something wrong with your Internet.");
          return false;
        }

      }
      showtopStoriesTodayID.innerHTML = showtopStoriesTodayArray;
  };
  xhr.open('GET', "url")

  console.log(xhr.status);

  document.getElementById("showTopStoriesToday").innerHTML = response;

  exports.APIGUARDIAN = APIGUARDIAN;
})(this);

// "https://content.guardianapis.com/search"
//--config<file>
