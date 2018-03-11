// news = new News();
// getWebtitles(news.url, news);
// console.log(news);

// document.getElementById('all');
// console.log(document.getElementById('all'));
// console.log(news.all.length);

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
  // Create the news and api url containing object
  container = new Container();
	// Call the getAll function

  

  getAll(container.url, container);
  console.log(container);
  // console.log(news.all);
  // console.log(news.all);
  console.log(getFormattedDate());
}).catch(function() {
	/* error :( */
})



// async function displayNotes() {
//   console.log(news.all.length);
// };

// displayNotes();
// function displayNotes() {
//   var output = "";
//   for (i = 0; i < news.all.length; ++i) {
//     output = '<a href="#">'"</a><br>";
//   }
//
//   document.getElementById('headlines').innerHTML = output;
// }
