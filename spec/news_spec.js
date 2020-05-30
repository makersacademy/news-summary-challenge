//open console.log to view test results

//dummy interface functions;

function loadArticle(url){};
function loadHeadlines(){};
function getImage(url, id){};
function animate(){};

//doubles

let headlinesDouble = {
	0: {
		apiUrl: "https://www.test.com",
		webTitle: "title",
		sectionName: "section"
	}
};

let articleDouble = {
	apiUrl: "https://www.test.com",
	webTitle: "title",
	sectionName: "section",
	type: "article",
	webPublicationDate: "2020-05-30T14:05:36Z",
	webTitle: "title",
	fields: {
		body: "test test"
	}
};

//main tests

describe('makeHeadlineDiv', function(){

	let html = makeHeadlineDiv(headlinesDouble, 0);

	it('returns html node', function(){
		expect(html).toBeHTMLNode();
	})

	it('contains correct content', function(){
		expect(html).toIncludeHTMLContent('<div class="mainHeadline" onclick="loadArticle(&quot;http://www.test.com&quot;)">');
		expect(html).toIncludeHTMLContent('<h3>SECTION</h3>');
		expect(html).toIncludeHTMLContent('<img id="image0" class="headlineImage">');
		expect(html).toIncludeHTMLContent('<h2>TITLE</h2>');
		expect(html).toIncludeHTMLContent('</div>');
	})
})

describe('buildArticle', function(){

	let html = buildArticle(articleDouble);

	it('returns html node', function(){
		expect(html).toBeHTMLNode();
	})

	it('contains correct content', function(){
		expect(html).toIncludeHTMLContent('<div class="article">');
		expect(html).toIncludeHTMLContent('<div class="summary">');
		expect(html).toIncludeHTMLContent(`<button class="myButton" onclick="loadHeadlines()">Today's Headlines</button>`);
		expect(html).toIncludeHTMLContent('<h2>TITLE</h2>');
		expect(html).toIncludeHTMLContent('Topic: SECTION (Article)');
		expect(html).toIncludeHTMLContent('Sat May 30 2020 15:05:36 GMT+0100 (British Summer Time)');
		expect(html).toIncludeHTMLContent('</div>test test</div>');
	})
})

describe('removeS', function(){
	it('removes 5th letter of string', function(){
		expect(removeS('123456')).toBe('12346');
	})
})

describe('toTitleCase', function() {
	it('capitalises first letter of each word', function() {
		expect(toTitleCase('test test')).toBe('Test Test');
	})
})	