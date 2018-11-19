News Summary Challenge

Credit goes to John Littler for assisting me with setting up the fetch function and to Preeti Udas for pointers on debugging.

To load, clone https://github.com/davidbest1882/news-summary-challenge.git.
Add an API key to line 12 of headlines.js
Open index.html

I wasn't able to complete the story to show the news summary when the item was selected. I was unable to load the page without a "Cannot read property 'addEventListener' of null" error which appears to be due to the "document.getElementById("image1")" command on line 50 loading before the elements are dynamically created. I experimented with 
