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
     showHeadlines();
    })
    
    /*.catch(err => {
      console.log("Houston we have an error"); 
    });
    */

  }

  function showHeadlines () {
    headlinesList = article.headlinesList;
    for (let i = 0 ; i < headlinesList.length ; i++) {
      let li = document.createElement('li');
      let link = document.createElement('a');
      description = `${headlinesList[i].title}`

      link.textContent = description
      link.href = '#'
      link.id = description

      /*
      link.addEventListener('click, (e) => {
        displayHeadline(headlinesList[i]);
        e.preventDefault();
      })
      */
      li.appendChild(link);
      unorderlist.appendChild(li);
    }
  }


  //article.pushTestHeadlines();
  //getTodayHeadlines();
  //showHeadlines();


});