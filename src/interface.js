let headlines = `http://content.guardianapis.com/search?`;
let prefix = "http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=";
let suffix = "?show-fields=body";

function loadArticle(url){
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	       let response = JSON.parse(this.response).response.content;
	       clear();
	       let html = buildArticle(response);
	       load(html);
	    }
	};

	xhttp.open("GET", prefix + url + suffix, true);
	xhttp.send();
}

function loadHeadlines(){
	let today = new Date();
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        let response = JSON.parse(this.response).response.results;
	        clear();
	        for(i in response){
	       		let div = makeHeadlineDiv(response, i);
	       		load(div);
	        }
	    }
	};

	xhttp.open("GET", prefix + headlines, true);
	xhttp.send();
}

function getImage(url, id){
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	    if (this.readyState == 4 && this.status == 200) {
	        let response = JSON.parse(this.response).response.content.fields.body;
			let regex = /<img.*?src="(.*?)"/;
			if(response.includes('img')){
				let src = regex.exec(response)[1];
				document.getElementById(id).setAttribute('src', src);
			}
	    }
	}
	xhttp.open("GET", prefix + url + suffix, true);
	xhttp.send();
}

function animate() {
	document.getElementById("sub-header").style.opacity = 1;
	let elem = document.getElementById("title");
	let pos = 100;
	let interval = setInterval(move, 5);
	function move() {
    	if (pos == 0) {
    		clearInterval(interval);
    	} else {
      	pos--;
      	elem.style.bottom = pos + 'px';
    	}
  	}
}

window.onload = function(){
	loadHeadlines();
	animate()	
}