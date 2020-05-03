


document.addEventListener("DOMContentLoaded", function() {
  function getRequestToGuardian(callBack) {
    let guardianURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search"
    var request = new XMLHttpRequest();
    //var herokuappURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
    console.log(request)
    

    request.onload = function(){
      let parsedResponse = JSON.parse(this.responseText)
      let results = parsedResponse.response.results
      let headLineList = document.getElementById('headlines')
     
      populateHeadlineList(results ,headLineList)
    
    }
    request.open('GET', guardianURL)
    request.send()
  } 

  getRequestToGuardian()
});
//}


function populateHeadlineList(results ,headLineList) { 
  results.forEach(function(result){
    //let aylienURL = "http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=" + result.webUrl
    //console.log(aylienURL)
    //console.log(result.webUrl)
   
    var request = new XMLHttpRequest();
  

    headLineList.innerHTML += result.webTitle + '<br>' 
    addGuardianLinks(result, headLineList)
  })
  //request.open('Get', aylienURL)
  //request.send()
}

function addGuardianLink(result, headLineList){
  headLineList.innerHTML += `<a href='${result.webUrl}'> Link to original news article </a>`
  headLineList.innerHTML += '<br>' + '<br>'
}





// document.getElementById("individual-note-view").style.display = "none";
// // populateNoteList();
// // window.addEventListener("hashchange", showEntireNote);
// // gets the list from the server
// getRequest()

// function getRequest() {
//   var request = new XMLHttpRequest();
//   request.open('GET', 'http://localhost:1234/notes', true);
//   request.onload = function() {
//     if (this.status >= 200 && this.status < 400) {
//       // Success!
//       var resp = this.response;
//       var notes = JSON.parse(resp)
//       populateTestList(notes)
//     } else {
//       // We reached our target server, but it returned an error
//     }
//   };
//   request.onerror = function() {
//     // There was a connection error of some sort
//   };
//   request.send();
// }

// function populateTestList(notes) {
//   let testList = document.getElementById("testing");
//   testList.innerHTML = ""
//   notes.shortList.forEach((note, index) => {
//     console.log(note)
//     console.log(index)
//     testList.innerHTML += `<a onclick="viewNote('${index}','${notes.fullList}')" id='${note}'>${note}<br></a>`;
//   })
// }

// function viewNote(index, notes) {
//   var notesArray = notes.split(",")

//   let testList = document.getElementById("testing");
//   testList.innerHTML = notesArray[index]
//   testList.innerHTML += '<br>'
//   testList.innerHTML += '<button type="button" onclick="goBack()">Back</button>'
// }

// function goBack() {
//   location.reload();
// }

// function postRequest(sendData) {
//   var request = new XMLHttpRequest();
//   request.open('POST', 'http://localhost:1234/notes', true);
//   request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
//   request.send(sendData);

// }

// function addNote(event) {
//   event.preventDefault();
//   const element = document.getElementById("add-note");
//   // notebook.addNote(element.value);
//   const sendData = element.value
//   element.value = "";
//   // populateNoteList();
//   postRequest(sendData)
//   getRequest()
// }