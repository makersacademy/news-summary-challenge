'use strict';

class MockGuardian {
  getArticleData = (url) => {
    const successObject = {
      "response": {
        "status":"ok",
        "userTier":"developer",
        "total":1,
        "content": {
          "id":"100-teachers/2021/mar/26/sport-and-science-theyre-a-natural-match-for-this-creative-teacher",
          "type":"article",
          "sectionId":"100-teachers",
          "sectionName":"100 teachers, 100 passions, 100 ways to shape lives",
          "webPublicationDate":"2021-03-26T10:05:08Z",
          "webTitle":"Sport and science? They’re a natural match for this creative teacher",
          "webUrl":"https://www.theguardian.com/100-teachers/2021/mar/26/sport-and-science-theyre-a-natural-match-for-this-creative-teacher",
          "apiUrl":"https://content.guardianapis.com/100-teachers/2021/mar/26/sport-and-science-theyre-a-natural-match-for-this-creative-teacher",
          "fields": {
            "body":'<p>This is a mocked article</p> <img *src*=\*"https://media.guim.co.uk/3bd332611e054794bc7a2b94d9bba92db1278b07/0_0_4999_3000/1000.jpg\"* *alt*=\*"Teacher* *James* *Branch* *standing* *in* *a* *wood\"* *width*=\*"1000\"* *height*=\*"600\"* *class*=\*"gu-image\"* /> <figcaption> <span *class*=\*"element-image__caption\"*>Branch aims to find interesting ways to engage pupils so that even complex concepts stick.</span> <span *class*=\*"element-image__credit\"*>Photograph: Nicholas J White/Guardian</span> </figcaption> </figure>  <ul> <li><p>Branch aims to find interesting ways to engage pupils so that even complex concepts stick</p></li> </ul> <p>Despite the disruption caused by the pandemic, it’s clear that the 35-year-old – who completed a PGCE in primary education with science at the University of Exeter last year – is relishing his position as a newly qualified teacher (NQT) at Stokenham Area primary, in the village of Stokenham, Devon.</p> <p>“I love getting creative with planning and finding interesting ways to make traditional subjects more engaging to pupils,” he says.</p> <p>“One of my favourite lessons so far was when we took children out into our forest playground to teach them about light and refraction. We angled mirrors up at the tree canopy, which created some amazing visuals. The children were completely captivated, which was brilliant to see.”</p> <p>For someone as active as Branch – he’s a keen runner who regularly sets off at 5am for a 10-mile run before work – the 215-pupil school, just five miles from Torcross and the beaches of Slapton Sands, provides the perfect setting for his lifestyle and his sporting ambitions. Before he reaches his 40th birthday, he has set himself an ambitious target: to complete a sub-three-hour marathon, an ultramarathon and an Ironman triathlon. But it’s all a long way from where his teaching aspirations began.</p>'
          },
          "isHosted":false
        }
      }
    }

    const myPromise = new Promise ((resolve, reject) => {
      resolve(successObject);
    })

    return myPromise;
  }

  renderArticle = (data) => {
    let articleHeadingHTML = `<h2 class="headline">${data.response.content.webTitle}</h2>`;
    let articleBodyHTML = `<section><p class="article-text">${data.response.content.fields.body}</p></section>`;

    return `${articleHeadingHTML}${articleBodyHTML}`;
  }

}