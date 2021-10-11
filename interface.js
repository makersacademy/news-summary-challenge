document.addEventListener("DOMContentLoaded", () => { 
  let article = new Articles() ;
  let unorderlist = document.getElementById('headlines');

  function getTodayHeadlines () {
    fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search").then(response => {
      return response.json();
    }).then(data => {
   // Work with JSON data here
     console.log(data);
     let arrTodayheadlines = data.response.results;
     arrTodayheadlines.forEach((story) => {
        let headline = new Headline();
        headline.title = story.webTitle;
        headline.id = story.id
        headline.subjectTitle = story.pillarName
        headline.section = story.sectionName
        headline.url = story.webUrl
        article.headlinesList.push(headline);
     })
     console.log(article.headlinesList)
     getThumbnails();
    })
    
    /*.catch(err => {
      console.log("Houston we have an error"); 
    });
    */

  }


  function getThumbnails () {
    let count = 0
    headlinesList = article.headlinesList;
    headlinesList.forEach((peice) => {
      let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + peice.id + "?show-fields=thumbnail"
      //console.log(url)
      fetch(url).then(response => {
        return response.json();
      }).then(data => {
        thumbnailPic = data.response.content.fields.thumbnail;
        peice.thumbnail = "<img src='" + thumbnailPic + "' style='width:133px;height:80px;' border:'5'>"
        //console.log(peice.thumbnail)
        count +=1 
        //console.log(count)
        if (count >= 10) {
          showHeadlines();
        }
      })
      //console.log(image)
      //showHeadlines();
      
    })
    
  }

  function showHeadlines () {
    console.log("I have been called")
    headlinesList = article.headlinesList;
    for (let i = 0 ; i < headlinesList.length ; i++) {
      let ul = document.createElement('ul')
      let li = document.createElement('li');
      let link = document.createElement('a');
      let segment = document.createElement('div');

      description = `${headlinesList[i].title}`
      let image = document.createElement('div');
      image.innerHTML = `${headlinesList[i].thumbnail}`

      link.textContent = description
      link.href = '#'
      link.id = description
      
      /*
      link.addEventListener('click, (e) => {
        displayHeadline(headlinesList[i]);
        e.preventDefault();
      })
      */
      
      document.getElementById('section-headlines').appendChild(segment)
      //console.log(image.innerHTML)
      //segment.appendChild(image)
      //segment.appendChild(unorderlist)
      li.appendChild(link);
      ul.appendChild(li);
      segment.appendChild(image)
      segment.appendChild(ul)
    }
  }


  //article.pushTestHeadlines();
  getTodayHeadlines();
  //showHeadlines();






  

});