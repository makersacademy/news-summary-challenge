// ad339e35-4416-47fb-be04-999f51fd9ea6

const GUARDIAN_URL = "https://content.guardianapis.com/search?production-office=uk&q=politics&api-key=ad339e35-4416-47fb-be04-999f51fd9ea6"

let request = new XMLHttpRequest();
request.open("GET", GUARDIAN_URL, true);
request.send();
request.onload = () => {
  console.log(request);
  if (request.status === 200) {
    abc = request.response
    abcd =JSON.parse(abc).response.results
    console.log(abcd);
    list = [];
    for(i = 0; i < abcd.length; i++) {
//      console.log({title: abcd[i].webTitle,
//      url: abcd[i].webUrl});
      list.push(abcd[i].webTitle, abcd[i].webUrl);
      console.log(list);
    }
    newslist = new Newslist(list);
    console.log(newslist);
  } else {
    console.log(`error ${request.status}  ${request.statusTEXT}`)
  }
}
