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
            "body":'<p>This is a mocked article</p> <img src="https://media.guim.co.uk/3bd332611e054794bc7a2b94d9bba92db1278b07/0_0_4999_3000/1000.jpg" alt="Teacher James Branch standing in a wood" width="1000" height="600" class="gu-image" /> <figcaption> <span class="element-image__caption">Branch aims to find interesting ways to engage pupils so that even complex concepts stick.</span> <span class="element-image__credit">Photograph: Nicholas J White/Guardian</span> </figcaption> </figure> <p>Despite the disruption caused by the pandemic, it’s clear that the 35-year-old – who completed a PGCE in primary education with science at the University of Exeter last year – is relishing his position as a newly qualified teacher (NQT) at Stokenham Area primary, in the village of Stokenham, Devon.</p> <p>“I love getting creative with planning and finding interesting ways to make traditional subjects more engaging to pupils,” he says.</p> <p>“One of my favourite lessons so far was when we took children out into our forest playground to teach them about light and refraction. We angled mirrors up at the tree canopy, which created some amazing visuals. The children were completely captivated, which was brilliant to see.”</p> <p>For someone as active as Branch – he’s a keen runner who regularly sets off at 5am for a 10-mile run before work – the 215-pupil school, just five miles from Torcross and the beaches of Slapton Sands, provides the perfect setting for his lifestyle and his sporting ambitions. Before he reaches his 40th birthday, he has set himself an ambitious target: to complete a sub-three-hour marathon, an ultramarathon and an Ironman triathlon. But it’s all a long way from where his teaching aspirations began.</p>',
            "thumbnail": "https://media.guim.co.uk/e56dbc8d453e9ef795ed3574174a580c3969db67/445_275_7366_4419/500.jpg"
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
    let articleThumbnailHTML = `<div><img src="${data.response.content.fields.thumbnail}" /></div>`;
    let articleBodyPlaceholder = `<div class='article-body'></div>`;

    return `${articleHeadingHTML}${articleThumbnailHTML}${articleBodyPlaceholder}`;
  }

  getArticleSummaryData = (webUrl) => {
    const successObject = {
      "text": "James Branch is in the school hall with a group of eight-year-olds. The room is laid out with gym apparatus, but this isn’t a PE lesson – it’s a science class, and the equipment is being used to demonstrate how electrical circuits work. A wall frame is now a battery, a vaulting horse is a capacitor and benches, placed in a zigzag, are switches.\n\nThis might sound like a novel approach, but for Branch – a primary school teacher with a passion for sports, and a background in physical education and science – it’s a method that makes perfect sense.\n\n“Physical education is a fantastic tool for teaching all kinds of other subjects, particularly science,” he says.\n\n“As with many scientific concepts, electrical charge is quite complex and confusing, but by setting up a course in the gym with the indoor apparatus, the children have a visual to hold on to – it helps to bring the theory to life.”\n\nDespite the disruption caused by the pandemic, it’s clear that the 35-year-old – who completed a PGCE in primary education with science at the University of Exeter last year – is relishing his position as a newly qualified teacher (NQT) at Stokenham Area primary, in the village of Stokenham, Devon.\n\n“I love getting creative with planning and finding interesting ways to make traditional subjects more engaging to pupils,” he says.\n\n“One of my favourite lessons so far was when we took children out into our forest playground to teach them about light and refraction. We angled mirrors up at the tree canopy, which created some amazing visuals. The children were completely captivated, which was brilliant to see.”\n\nFor someone as active as Branch – he’s a keen runner who regularly sets off at 5am for a 10-mile run before work – the 215-pupil school, just five miles from Torcross and the beaches of Slapton Sands, provides the perfect setting for his lifestyle and his sporting ambitions. Before he reaches his 40th birthday, he has set himself an ambitious target: to complete a sub-three-hour marathon, an ultramarathon and an Ironman triathlon. But it’s all a long way from where his teaching aspirations began.\n\nBranch first dipped his toes in the world of education 10 years ago when he was living in Malaysia’s bustling, high-rise capital, Kuala Lumpur. There he worked as a freelance writer, football coach and as a sports teacher at a number of international schools. Before that, he’d had a stint as a ski instructor in Canada after dropping out of his degree in PE at Leeds Metropolitan University.\n\n“As a kid I really enjoyed trying out new sports and giving something a go. Every lunchtime and evening during the school week was taken up with me playing anything and everything possible,” he says.\n\n“When I arrived in Malaysia there was very little organised sport for children, so I set up a football academy to give them an opportunity to play, and I loved seeing them learn.”\n\nHe may not have realised it at the time, but it was an experience that set him on the path to discovering his calling in the classroom.\n\n“It’s easy to see now that my time in Malaysia marked a massive turning point for me,” he says. “Working with kids, older and younger, gave me a love of teaching and a confidence in my own ability. I knew that I wanted to come back to the UK and learn to teach properly.”\n\nBranch returned in 2016 and enrolled at Plymouth Marjon University to complete his PE degree, graduating with first class honours in 2019. So how, and why, did he end up specialising in science?\n\n“I’ve always been interested in science – my grandfather was a lead chemist for English China Clay and encouraged me in STEM subjects,” he says. “Then at uni I devoured science modules in my PE degree. When I saw you could make a traditional subject come alive, I wanted to specialise in it.”\n\nIt’s a decision he hasn’t regretted for a moment, especially as the “phenomenal” staff at the University of Exeter encouraged him to bring his passion for sports and the great outdoors into his teaching, so as to make learning as hands-on as possible. It’s a tactic he’s embraced, as his science class on light and refraction shows. Another lesson that brings back happy memories was one that involved taking pupils to study rock formations on a local beach. “Seeing children physically experience a concept is fantastic,” he says.\n\nBranch has already achieved a lot in his short time as a teacher, but it’s his ambitious plans for sharing his love of sports with pupils after lockdown that he’s most excited about. He hopes to set up after-school clubs in lacrosse, athletics, cross-country and girls’ football, as well as for water sports such as kayaking and paddleboarding. He’s clearly ready to race ahead.\n\n“There may be little like the high of beating your personal best in a race, scoring the winning goal in the 90th minute, or hiking a fresh powder run in the Alps,” he says, “But teaching is so much more meaningful than any of that because of the impact you have on others.\n\n“It’s incredibly rewarding to see children achieve things they thought they couldn’t possibly do, or to break through their fear and try something new. I certainly consider myself very lucky.”\n\nIn teaching every day is different, and so is every teacher. Discover 100 teachers across the country, shaping lives. And if you’d like to know how you can bring your individual passions to a job in teaching, head to Get Into Teaching to find out more.",
      "sentences": ["This might sound like a novel approach, but for Branch – a primary school teacher with a passion for sports, and a background in physical education and science – it’s a method that makes perfect sense.", "Despite the disruption caused by the pandemic, it’s clear that the 35-year-old – who completed a PGCE in primary education with science at the University of Exeter last year – is relishing his position as a newly qualified teacher (NQT) at Stokenham Area primary, in the village of Stokenham, Devon.", "There he worked as a freelance writer, football coach and as a sports teacher at a number of international schools.", "It’s a decision he hasn’t regretted for a moment, especially as the “phenomenal” staff at the University of Exeter encouraged him to bring his passion for sports and the great outdoors into his teaching, so as to make learning as hands-on as possible.", "Branch has already achieved a lot in his short time as a teacher, but it’s his ambitious plans for sharing his love of sports with pupils after lockdown that he’s most excited about."]
    }

    const myPromise = new Promise ((resolve, reject) => {
      resolve(successObject);
    })

    return myPromise;
  }

  renderArticleSummary = (data) => {
    let articleBodyHTML = `<section><p class="article-text">${data.sentences.join(" ")}</p></section>`;

    return `${articleBodyHTML}`;
  }

  getHeadlinesData = () => {
    const successObject = {
      "response":{
        "status":"ok",
        "userTier":"developer",
        "total":109608,
        "startIndex":1,
        "pageSize":10,
        "currentPage":1,
        "pages":10961,
        "results": "Not this",
        "mostViewed":[
          // why is the thumbnail missing in real example?...Why is the fields missing? Imagine we had it...
          {"id":"politics/2021/jul/18/priti-patel-misled-mps-over-plans-for-protest-crackdown",
          "type":"article",
          "sectionId":"politics",
          "sectionName":"Politics",
          "webPublicationDate":"2021-07-18T05:30:21Z",
          "webTitle":"Priti Patel ‘misled’ MPs over plans for protest crackdown",
          "webUrl":"https://www.theguardian.com/politics/2021/jul/18/priti-patel-misled-mps-over-plans-for-protest-crackdown",
          "apiUrl":"https://content.guardianapis.com/politics/2021/jul/18/priti-patel-misled-mps-over-plans-for-protest-crackdown",
          "isHosted":false,
          "pillarId":"pillar/news",
          "pillarName":"News",
          "fields": {"thumbnail": "https://media.guim.co.uk/c1b3265f9827aa80d734c99e73ae86870c1ee4fc/0_102_4000_2401/500.jpg"}},
          
          {"id":"politics/2021/jul/17/tory-jitters-mount-at-political-drift-of-boris-johnsons-government","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-17T06:00:53Z","webTitle":"Tory jitters mount at political drift of Boris Johnson’s government ","webUrl":"https://www.theguardian.com/politics/2021/jul/17/tory-jitters-mount-at-political-drift-of-boris-johnsons-government","apiUrl":"https://content.guardianapis.com/politics/2021/jul/17/tory-jitters-mount-at-political-drift-of-boris-johnsons-government","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/f783b604c1773dab1f9fda8567a3d0c0dbcca28d/0_385_5121_3073/500.jpg"}},
          
          {"id":"politics/2021/jul/18/one-in-five-whitehall-non-executive-directors-have-links-to-political-parties","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-18T06:45:22Z","webTitle":"One in five Whitehall non-executive directors have links to political parties","webUrl":"https://www.theguardian.com/politics/2021/jul/18/one-in-five-whitehall-non-executive-directors-have-links-to-political-parties","apiUrl":"https://content.guardianapis.com/politics/2021/jul/18/one-in-five-whitehall-non-executive-directors-have-links-to-political-parties","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/4e9ac9d6087c4075ebce511a94a7175d02acd694/0_80_3808_2285/500.jpg"}},
          
          {"id":"politics/2021/jul/17/sajid-javid-uk-health-secretary-tests-positive-for-covid","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-17T15:37:25Z","webTitle":"Sajid Javid, England’s health secretary, tests positive for Covid","webUrl":"https://www.theguardian.com/politics/2021/jul/17/sajid-javid-uk-health-secretary-tests-positive-for-covid","apiUrl":"https://content.guardianapis.com/politics/2021/jul/17/sajid-javid-uk-health-secretary-tests-positive-for-covid","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/158a82f78c50bc3f684fd601d066de42d98f94c4/0_0_2601_1560/500.jpg"}},
          
          {"id":"politics/live/2021/jul/16/uk-covid-live-hospitalisation-numbers-chris-whitty-coronavirus-latest-updates","type":"liveblog","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-16T17:41:32Z","webTitle":"UK Covid: new cases pass 50,000 for first time since mid-January with 1 in 95 in England testing positive last week – as it happened","webUrl":"https://www.theguardian.com/politics/live/2021/jul/16/uk-covid-live-hospitalisation-numbers-chris-whitty-coronavirus-latest-updates","apiUrl":"https://content.guardianapis.com/politics/live/2021/jul/16/uk-covid-live-hospitalisation-numbers-chris-whitty-coronavirus-latest-updates","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/fa99de7782bea996d2bf218018ccddef883aabb4/0_335_7548_4529/500.jpg"}},
          
          {"id":"politics/2021/jul/16/johnson-to-press-ahead-with-lifting-covid-rules-despite-worry-over-case-numbers","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-17T10:13:29Z","webTitle":"Johnson to press ahead with lifting Covid rules despite worry over case numbers","webUrl":"https://www.theguardian.com/politics/2021/jul/16/johnson-to-press-ahead-with-lifting-covid-rules-despite-worry-over-case-numbers","apiUrl":"https://content.guardianapis.com/politics/2021/jul/16/johnson-to-press-ahead-with-lifting-covid-rules-despite-worry-over-case-numbers","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/dfd86f9f984e905a9fe75eaf9a3f82a707063481/0_171_5184_3110/500.jpg"}},
          
          {"id":"politics/2021/jul/11/ministry-of-defence-under-fire-for-inventing-rules-wildlife-haven-middlewick-ranges","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-11T10:15:42Z","webTitle":"Ministry of Defence under fire for ‘inventing rules’ to sell wildlife haven","webUrl":"https://www.theguardian.com/politics/2021/jul/11/ministry-of-defence-under-fire-for-inventing-rules-wildlife-haven-middlewick-ranges","apiUrl":"https://content.guardianapis.com/politics/2021/jul/11/ministry-of-defence-under-fire-for-inventing-rules-wildlife-haven-middlewick-ranges","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/71aa23ab7c44078aa827a67717f37f0c37c38870/0_129_3555_2133/500.jpg"}},
          
          {"id":"politics/2021/jul/15/nine-mps-free-euro-2020-tickets-gambling-companies","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-15T10:23:29Z","webTitle":"Nine MPs accepted free Euro 2020 tickets from gambling companies","webUrl":"https://www.theguardian.com/politics/2021/jul/15/nine-mps-free-euro-2020-tickets-gambling-companies","apiUrl":"https://content.guardianapis.com/politics/2021/jul/15/nine-mps-free-euro-2020-tickets-gambling-companies","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/eec6d7d01fd3a44ba24af29ba3ea77fa0892dbba/257_501_1836_1102/500.jpg"}},
          
          {"id":"politics/2021/jun/26/blow-to-johnson-authority-as-health-secretary-loses-all-support","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-06-26T21:44:28Z","webTitle":"Blow to Johnson’s authority as his health minister loses all support","webUrl":"https://www.theguardian.com/politics/2021/jun/26/blow-to-johnson-authority-as-health-secretary-loses-all-support","apiUrl":"https://content.guardianapis.com/politics/2021/jun/26/blow-to-johnson-authority-as-health-secretary-loses-all-support","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/1432dc95ac0da095a3c86aa088e32cbf30c7d509/0_140_3762_2257/500.jpg"}},
          
          {"id":"politics/2021/jul/15/ex-bullingdon-club-member-appointed-to-whitehalls-sleaze-watchdog","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-15T20:49:08Z","webTitle":"Ex-Bullingdon Club member appointed to Whitehall’s sleaze watchdog","webUrl":"https://www.theguardian.com/politics/2021/jul/15/ex-bullingdon-club-member-appointed-to-whitehalls-sleaze-watchdog","apiUrl":"https://content.guardianapis.com/politics/2021/jul/15/ex-bullingdon-club-member-appointed-to-whitehalls-sleaze-watchdog","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/8dcb92d2a4fcc32e1f190ffe46a5368a34338e58/264_392_2180_1308/500.jpg"}},
          
          {"id":"politics/2021/jul/16/labour-accuses-gove-lying-extent-vetting-ppe-deals","type":"article","sectionId":"politics","sectionName":"Politics","webPublicationDate":"2021-07-16T14:09:32Z","webTitle":"Labour accuses Gove of lying about extent of vetting for PPE deals","webUrl":"https://www.theguardian.com/politics/2021/jul/16/labour-accuses-gove-lying-extent-vetting-ppe-deals","apiUrl":"https://content.guardianapis.com/politics/2021/jul/16/labour-accuses-gove-lying-extent-vetting-ppe-deals","isHosted":false,"pillarId":"pillar/news","pillarName":"News", "fields": {"thumbnail": "https://media.guim.co.uk/84ec722fd336f54296bf670c442840f4a207dcc7/50_107_1896_1137/500.jpg"}},
                    
        ]
      }
    }

    const myPromise = new Promise ((resolve, reject) => {
      resolve(successObject);
    })

    return myPromise;
  }

  renderHeadlines = (data) => {
    let articleHeadingHTML = `<h2 class="headline">${data.response.content.webTitle}</h2>`;
    let articleBodyHTML = `<section><p class="article-text">${data.response.content.fields.body}</p></section>`;

    return `${articleHeadingHTML}${articleBodyHTML}`;
  }

}