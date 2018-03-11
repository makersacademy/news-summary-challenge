// news = new News();
// getWebtitles(news.url, news);
// console.log(news);

// document.getElementById('headlines');
// console.log(document.getElementById('headlines'));
// console.log(news.headlines.length);

var p = new Promise(function(resolve, reject) {

	// Do an async task async task and then...

	if(1+1 === 2) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function() {
	/* do something with the result */
  news = new News();

  getWebtitles(news.url, news);
  console.log(news.headlines[0]);
  console.log(news.headlines);
}).catch(function() {
	/* error :( */
})



// async function displayNotes() {
//   console.log(news.headlines.length);
// };

// displayNotes();
// function displayNotes() {
//   var output = "";
//   for (i = 0; i < news.headlines.length; ++i) {
//     output = '<a href="#">'"</a><br>";
//   }
//
//   document.getElementById('headlines').innerHTML = output;
// }
