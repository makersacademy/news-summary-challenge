
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
  console.log(getFormattedDate());
}).catch(function() {
	/* error :( */
})
