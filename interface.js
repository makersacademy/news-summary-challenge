document.addEventListener("DOMContentLoaded", () => { 
  let article = new Articles() ;
  let section1 = document.querySelector('#section-headlines'),
      section2 = document.querySelector('#article-body');

  section2.style.display = 'none';

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
        console.log(data.response.content.fields.thumbnail)
        //peice.thumbnail = "<img src='" + thumbnailPic + "' style='width:133px;height:80px;' border:'5'>"
        peice.thumbnail = `<img src="${thumbnailPic}">`
        //console.log(peice.thumbnail)
        count +=1 
        //console.log(count)
        if (count >= 9) {
          //showHeadlines();
          getArticleBody();
        }
      })
      //console.log(image)
      //showHeadlines();
      
    })
    
  }


  function getArticleBody() {
    let count = 0 
    headlinesList = article.headlinesList
    headlinesList.forEach((peice) => {
      let url = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/" + peice.id + "?show-fields=body"
      fetch(url).then(response => {
        return response.json();
      }).then(data => {
        articleBody = data.response.content.fields.body
        peice.body = articleBody
        count += 1
      })
    })
    showHeadlines();
  }


  function showHeadlines () {
    console.log("I have been called")
    headlinesList = article.headlinesList;
    let segment = document.createElement('div');
    document.getElementById('section-headlines').appendChild(segment)

    for (let i = 0 ; i < headlinesList.length ; i++) {
      let li = document.createElement('li');
      let link = document.createElement('a');
      let ul = document.createElement('ul')
      
      
      description = `${headlinesList[i].title}`
      let image = document.createElement('div');

      if (headlinesList[i].thumbnail === undefined ) {
        image.innerHTML =  `${headlinesList[headlinesList.length].thumbnail}`
      } else {
        image.innerHTML = `${headlinesList[i].thumbnail}`
      }

      (link.textContent = description),
      (link.href = '#'),
      (link.id = description);
      
      
      link.addEventListener('click', (e) => {
        displayArticle(headlinesList[i]);
        e.preventDefault();
      });
  
      
      segment.appendChild(ul)
      li.appendChild(link);
      ul.appendChild(li);
      segment.appendChild(image)
      
    }
  }


  function displayArticle(obj) {
    section1.style.display = 'none';
    section2.style.display = 'block';
    document.querySelector('#article-title').innerHTML = obj.title
    document.querySelector('#full-article').innerHTML = obj.body
    document.querySelector('#back-button').addEventListener('click', (e) => {
      section1.style.display = 'block';
      section2.style.display = 'none';
    });
  }


  //article.pushTestHeadlines();
  getTodayHeadlines();
  //showHeadlines();






  

});