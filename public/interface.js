// let headlines = [["BREAKING NEWS 1", "NEWS SUMMARY 1", "http://public.media.smithsonianmag.com/legacy_blog/smiley-face-1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 2", "NEWS SUMMARY 2", "https://ih1.redbubble.net/image.499518885.1931/flat,750x1000,075,f.u1.jpg", "https://www.theguardian.com/uk"], ["BREAKING NEWS 3", "NEWS SUMMARY 3", "https://images.emojiterra.com/google/android-11/512px/1f634.png", "https://www.theguardian.com/uk"]]
let headlines = []
// the new order for the array needs to be 0, title, 1, url, 2, summary, 3, img. this needs to be updated below in showHeadlines.

showHeadlines = () => {
  headlines.forEach(headline =>
    document
    .getElementById("headlines").innerHTML += `<div id=headline${headlines.indexOf(headline)}><a href=#${headlines.indexOf(headline)}>` + headline[0] + `</a>`
    + `<div id=photo${headlines.indexOf(headline)}></div>` 
    + `<div id=news-blurb${headlines.indexOf(headline)}></div>` 
    + `<a href=${headline[1]}><button>Visit full article</button></a></div>`
    + "<br>");
}

showImage = () => {
  headlines.forEach(headline =>
    addImage(headline[3], headlines.indexOf(headline)))
}

addImage = (src, i) => {
  let img = document.createElement("img");
  img.src = src;
  img.width = 150;
  img.height = 75;
  document.getElementById(`photo${i}`).appendChild(img);
} 

// --- API LOGIC ---

const proxyURL = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl="
const guardianURL = "http://content.guardianapis.com/search?to-date=2021-02-22&q=headlines"
const headlinesURL = proxyURL + guardianURL

const stubJSON = `{
	"response": {
		"status": "ok",
		"userTier": "developer",
		"total": 2251008,
		"startIndex": 1,
		"pageSize": 10,
		"currentPage": 1,
		"pages": 225101,
		"orderBy": "newest",
		"results": [{
			"id": "tv-and-radio/2021/feb/23/the-simpsons-dr-hibbert-harry-shearer-replaced-by-black-actor-kevin-michael-richardson",
			"type": "article",
			"sectionId": "tv-and-radio",
			"sectionName": "Television & radio",
			"webPublicationDate": "2021-02-22T23:13:46Z",
			"webTitle": "TEST - The Simpsons' Dr Hibbert: Harry Shearer replaced by black actor Kevin Michael Richardson",
			"webUrl": "https://www.theguardian.com/tv-and-radio/2021/feb/23/the-simpsons-dr-hibbert-harry-shearer-replaced-by-black-actor-kevin-michael-richardson",
			"apiUrl": "https://content.guardianapis.com/tv-and-radio/2021/feb/23/the-simpsons-dr-hibbert-harry-shearer-replaced-by-black-actor-kevin-michael-richardson",
			"isHosted": false,
			"pillarId": "pillar/arts",
			"pillarName": "Arts"
		}, {
			"id": "world/2021/feb/22/emma-coronel-arrested-wife-el-chapo-drug-trafficking",
			"type": "article",
			"sectionId": "world",
			"sectionName": "World news",
			"webPublicationDate": "2021-02-22T23:04:02Z",
			"webTitle": "TEST - Emma Coronel, wife of El Chapo, arrested on drug trafficking charges",
			"webUrl": "https://www.theguardian.com/world/2021/feb/22/emma-coronel-arrested-wife-el-chapo-drug-trafficking",
			"apiUrl": "https://content.guardianapis.com/world/2021/feb/22/emma-coronel-arrested-wife-el-chapo-drug-trafficking",
			"isHosted": false,
			"pillarId": "pillar/news",
			"pillarName": "News"
		}, {
			"id": "australia-news/2021/feb/23/us-moves-to-support-australian-push-to-tackle-chinas-human-and-labour-rights-abuses",
			"type": "article",
			"sectionId": "australia-news",
			"sectionName": "Australia news",
			"webPublicationDate": "2021-02-22T23:00:12Z",
			"webTitle": "TEST - US moves to support Australian push to tackle China's 'human and labour rights abuses'",
			"webUrl": "https://www.theguardian.com/australia-news/2021/feb/23/us-moves-to-support-australian-push-to-tackle-chinas-human-and-labour-rights-abuses",
			"apiUrl": "https://content.guardianapis.com/australia-news/2021/feb/23/us-moves-to-support-australian-push-to-tackle-chinas-human-and-labour-rights-abuses",
			"isHosted": false,
			"pillarId": "pillar/news",
			"pillarName": "News"
		}]
	}
}`

const saveFetch = fetch 

//stub 
fetch = function(){
  console.log('inside mock')
  return {then: function(){
    return { 
      then: function(callback){
        callback(JSON.parse(stubJSON))
      }
    }
  }}

}

fetch(headlinesURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    for(let i = 0; i < data.response.results.length; i++) {
      headlines.push([data.response.results[i].webTitle, data.response.results[i].webUrl])
    }
  })

// fetch(headlinesURL)
//   .then(response => response.json())
//   .then(data => console.log(data));

// let test = []
// let test2 = []

// function getNewsData() {
//   return fetch("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?to-date=2021-02-22&q=headlines");
// }

// getNewsData().then(response => {
//   response.json().then(newsData => {
//     for(let i = 0; i < newsData.response.results.length; i++) {
//       test.push([newsData.response.results[i].webTitle, newsData.response.results[i].webUrl])
//       }
//   })
// })

// i need to take the urls out of the test array and add them to the fetch method below. this will need to be some sort of each/for loop.
// function getNewsSummary() {
//   return fetch("http://news-summary-api.herokuapp.com/aylien?apiRequestUrl=https://api.aylien.com/api/v1/summarize?url=https://www.theguardian.com/tv-and-radio/2021/feb/23/the-simpsons-dr-hibbert-harry-shearer-replaced-by-black-actor-kevin-michael-richardson")
// }

// this can then be pushed into the test array and each should come in third in the running order
// getNewsSummary().then(response => {
//   response.json().then(newsSummary => {
//     test2.push(newsSummary)
//   })
// })

// console.log(test)
// console.log(test2)
showHeadlines()
showImage()

fetch = saveFetch