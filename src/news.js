function makeHeadlineDiv(response, index){
	let url = removeS(response[index].apiUrl);
    getImage(url, 'image' + index);
	let div = document.createElement('div');
    div.setAttribute("class", "summary");
    div.setAttribute("class", "mainHeadline");
    div.setAttribute("onclick", `loadArticle("${url}")`);
    let headline = document.createElement('h2');
    headline.innerHTML = response[index].webTitle.toUpperCase();
    let topic = document.createElement('h3');
    topic.innerHTML = `${response[index].sectionName.toUpperCase()}`;
    let image = document.createElement('img');
    image.setAttribute('id', 'image' + index);
    image.setAttribute('class', 'headlineImage');
    div.append(topic);
    div.append(image);
    div.append(headline);
    console.log(response);
    return div;
}

function buildArticle(response){

	let div = document.createElement('div');
	div.setAttribute("class", "article");
	let summary = document.createElement('div');
	summary.setAttribute('class', 'summary');
	let button = document.createElement('button');
	button.setAttribute('class', 'myButton');
	button.setAttribute('onclick', 'loadHeadlines()')
	button.innerHTML = "Today's Headlines";
	summary.append(button);
	let headline = document.createElement('h2');
	headline.innerHTML = response.webTitle.toUpperCase();
	summary.append(headline);
	summary.insertAdjacentHTML('beforeend', "       Topic: " + response.sectionName.toUpperCase());
	summary.insertAdjacentHTML('beforeend', " (" + toTitleCase(response.type) + ")");
	summary.insertAdjacentHTML('beforeend', '<br>');
	summary.insertAdjacentHTML('beforeend', new Date(response.webPublicationDate));
	summary.insertAdjacentHTML('beforeend', '<br><br>');
	div.append(summary);
	div.insertAdjacentHTML('beforeend', response.fields.body);
	return div;
}

function removeS(url){
	let part1 = url.substring(0, 4);
 	let part2 = url.substring(5, url.length);
 	return part1 + part2;
}

function toTitleCase(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

function clear(){
	document.getElementById('body').innerHTML = "";
	return document.getElementById('body'); //For test
}

function load(html){
	document.getElementById('body').appendChild(html);
	return document.getElementById('body'); //For test
}