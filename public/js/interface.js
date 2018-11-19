  // *************** Variables ******************
  var newspaper = new Newspaper;
  var selected_index = 0;


  // **************** Events **********************
  window.onload = function(){
    var url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/politics"
    var resarr = []
    resarr = fetch(url)
    .then(function(response){
      return(response.json());
    })
    .then(function(resJSON){
      console.log(resJSON)
      var i = 0;
      var resarr = []
      for(i = 0; i < resJSON.response.results.length; i++){
        resarr[i] = []
        resarr[i][0] = resJSON.response.results[i].id
        resarr[i][1] = resJSON.response.results[i].type
        resarr[i][2] = resJSON.response.results[i].sectionId
        console.log(resarr[i])
      }
      newspaper.populate();
      return resarr
    })
    .then(function(){
      showList();
      console.log("Loaded the page")
    })
  }

  document.getElementById('back_button').addEventListener("click", function(){
    document.getElementById('summary').style.display="none";
    document.getElementById('detail').style.display="none";
    document.getElementById('headlines').style.display="block";
  });

  document.getElementById('back_button2').addEventListener("click", function(){
    document.getElementById('summary').style.display="none";
    document.getElementById('detail').style.display="none";
    document.getElementById('headlines').style.display="block";
  });

  document.getElementById('detail_button').addEventListener("click", function(){
    document.getElementById('summary').style.display="none";
    document.getElementById('detail').style.display="block";
    document.getElementById('headlines').style.display="none";
    viewDetails();
  });

  // ***************** Functions ************************

  function showList(){
    var newslist = newspaper.view_headlines();
    for (i = 0; i < newslist.length; i++) {
      var link = document.createElement('a');
      var first_li = document.createElement('li');
      link.href="javascript:viewSummary(" + i + ");";
      link.textContent = newslist[i][0] + " ...";
      first_li.appendChild(link);
      document.getElementById('news_list').appendChild(first_li);
    }
  }

  function viewSummary(i){
    document.getElementById('headlines').style.display="none";
    document.getElementById('detail').style.display="none";
    document.getElementById('summary').style.display="block";
    this.selected_index = i;
    document.getElementById('summary_text').innerHTML = newspaper.view_summary(i);
  }

  function viewDetails(){
    document.getElementById('headlines').style.display="none";
    document.getElementById('detail').style.display="block";
    document.getElementById('summary').style.display="none";
    document.getElementById('detail_text').innerHTML = newspaper.view_details(selected_index);
  }
