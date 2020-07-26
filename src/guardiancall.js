var url = 'http://content.guardianapis.com/world?format=json&api-key='+key+'&show-fields=thumbnail'
console.log(url)
// Call API
function apiCall() {
  fetch(url)
// Await Response
  .then(
    function(response) {
      console.log(response.status)
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' +
            response.status);
          return;
        }
// Receive JSON back
      console.log("We have got to fetch")
      response.json().then(function(data) {
        console.log(data)

// Map results with:
//  id
//  title
//  date
//  image
        data.response.results.map((newsitem, index) => {
          console.log(index);
          // Create Block
          block_to_insert = document.createElement( 'div');
          block_to_insert.id = 'div'+index;
          block_to_insert.classList.add('newsitem');
          document.getElementById('newsItemGuardian').appendChild(block_to_insert);
          // Add Image to block
          var image = document.createElement('img');
          console.log(newsitem.fields.thumbnail)
          image.setAttribute("src", newsitem.fields.thumbnail);
          document.getElementById('div'+index).appendChild(image);
          // Add Date to block
          var date = document.createElement("P");
          // date.innerHTML = newsitem.webPublicationDate;
          // dateinput(newsitem.webPublicationDate)
          var year = newsitem.webPublicationDate.split("-")[0]
          console.log("year"+year)
          var month = newsitem.webPublicationDate.split("-")[1]-1
          console.log("month"+month)
          var day = newsitem.webPublicationDate.split("-")[2].split("T")[0]
          console.log("day"+day)
          var hour = newsitem.webPublicationDate.split("-")[2].split("T")[1].split(':')[0]
          console.log("hour"+hour)
          var minute = newsitem.webPublicationDate.split("-")[2].split("T")[1].split(':')[1]
          console.log("minute"+minute)
          var second = newsitem.webPublicationDate.split("-")[2].split("T")[1].split(':')[2].slice(0, -1)
          console.log("second"+second)
          dateinput = new Date(year,month,day,hour,minute,second)
          console.log(dateinput)
          console.log("Wed Mar 25 2015 00:00:00 GMT+0000 (Greenwich Mean Time)")
          console.log("date" + americanpie(dateinput))
          date.innerHTML = americanpie(dateinput)
          document.getElementById('div'+index).appendChild(date);
          // Add Paragraph to block
          var para = document.createElement("P");
          para.innerHTML = newsitem.webTitle;
          document.getElementById('div'+index).appendChild(para);
          
          // console.log(newsitem.id);
          // console.log(newsitem.webTitle)
          // console.log(newsitem.webPublicationDate)
        })
      })
  })
  // 
}

function date() {}


// Map results with:
//  id
//  title
//  date
//  image