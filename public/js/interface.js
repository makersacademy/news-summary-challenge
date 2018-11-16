// *************** Variables ******************
var newspaper = new Newspaper
var selected_index = 0
newspaper.populate();


// **************** Events **********************

document.getElementById('back_button').addEventListener("click", function(){
  document.getElementById('summary').style.display="none";
  document.getElementById('detail').style.display="none";
  document.getElementById('headlines').style.display="block";
});

document.getElementById('detail_button').addEventListener("click", function(){
  document.getElementById('summary').style.display="none";
  document.getElementById('detail').style.display="block";
  document.getElementById('headlines').style.display="none";
  viewDetails()
});

// ***************** Functions ************************

function showList(){

  var newslist = newspaper.view_headlines()
  for (i = 0; i < newslist.length; i++) {

    var link = document.createElement('a')
    var first_li = document.createElement('li')

    link.href="javascript:viewSummary(" + i + ");";
    link.textContent = newslist[i][0] + "...";

    first_li.appendChild(link)
    document.getElementById('news_list').appendChild(first_li)
  }
}

function viewSummary(i){
  document.getElementById('headline').style.display="none";
  document.getElementById('detail').style.display="none";
  document.getElementById('summary').style.display="block";
  this.selected_index = i;
  document.getElementById('summary_text').innerHTML = newspaper.view_summary(i);
}

function viewDetails(){
  document.getElementById('headline').style.display="none";
  document.getElementById('detail').style.display="block";
  document.getElementById('summary').style.display="none";
  document.getElementById('detail_text').innerHTML = newspaper.view_details(selected_index);
}
