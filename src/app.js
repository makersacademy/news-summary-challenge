const headline = (id, title, webUrl, apiUrl, imgUrl) => {
	return {
		id,
		title,
		webUrl,
		apiUrl,
		imgUrl,
	};
};

class App {
	constructor(makeHeadlinesRequest, makeSummaryRequest) {
		this.makeHeadlinesRequest = makeHeadlinesRequest;
		this.makeSummaryRequest = makeSummaryRequest;
	}

	getHeadlines() {
		this.makeHeadlinesRequest((data) => {
			let idx = 0;
			data.response.results.forEach((item) => {
				idx++;
				const newHeadline = headline(idx, item.webTitle, item.webUrl, item.apiUrl, item.fields.thumbnail);
				this._articleHeadline(newHeadline);
			});
		});
	}

	_getArticleImage = (articleDiv, imgUrl, idx) => {
		this._articleImage(articleDiv, idx, imgUrl);
	};

	_getSummary = (caller, idx, articleUrl) => {
		this.makeSummaryRequest(articleUrl, (data) => {
			this._articleSummary(caller, idx, data.sentences, articleUrl);
		});
	};

	_articleImage(articleDiv, idx, imgUrl) {
		const img = document.createElement('img');
		img.id = `image-${idx}`;
		img.src = imgUrl;
		articleDiv.prepend(img);
	}

	_articleHeadline(newHeadline) {
		let articleDiv = this._articleArea(newHeadline.id);
		this._getArticleImage(articleDiv, newHeadline.imgUrl, newHeadline.id);
		this._articleTitle(articleDiv, newHeadline.id, newHeadline.title, newHeadline.webUrl);
	}

	_articleSummary(caller, idx, text, url) {
		const div = document.createElement('div');
		div.className = 'summary';
		div.id = `summary${idx}`;
		div.innerText = text;
		this._appendContent(div, this._fullArticleLink(url, idx));
		this._insertAfter(caller, div);
	}

	_articleArea(id) {
		const div = document.createElement('div');
		div.className = 'article';
		div.id = id;
		this._appendContent(document.body, div);
		return div;
	}

	_articleTitle(articleDiv, idx, title, url) {
		const div = document.createElement('div');
		div.className = 'title';
		div.id = `title-${idx}`;
		div.innerText = title;
		this._appendContent(articleDiv, div);
		div.addEventListener('click', this._toggleSummary(div, idx, url));
	}

	_fullArticleLink(url, idx) {
		const a = document.createElement('a');
		a.class = 'article-link';
		a.id = `article-link-${idx}`;
		a.target = '_blank';
		a.innerText = 'View full article';
		a.href = url;
		return a;
	}

	_toggleSummary(caller, idx, url) {
		return () => {
			if (document.querySelector(`#summary${idx}`) === null) {
				this._getSummary(caller, idx, url);
			} else if (document.querySelector(`#summary${idx}`).classList.contains('hide')) {
				this._showElement(document.querySelector(`#summary${idx}`));
			} else {
				this._hideElement(document.querySelector(`#summary${idx}`));
			}
		};
	}

	_hideElement(element) {
		element.classList.add('hide');
	}

	_showElement(element) {
		element.classList.remove('hide');
	}

	_appendContent(parentElement, childElement) {
		parentElement.appendChild(childElement);
	}

	_insertAfter(firstElement, secondElement) {
		firstElement.after(secondElement);
	}
}
