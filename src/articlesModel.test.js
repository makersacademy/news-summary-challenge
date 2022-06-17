/* eslint-disable no-undef */
const ArticlesModel = require("./articlesModel");

describe("ArticlesModel", () => {
	beforeEach(() => {
		model = new ArticlesModel();
	});

	it("starts off with an empty list of articles", () => {
		expect(model.getArticles()).toEqual([]);
	});

	it("addArticle adds an article with a headline to this.articles", () => {
		const article = {
			headline: "Real Madrid reach the Champions League final",
		};
		model.addArticle(article);
		expect(model.getArticles()).toEqual([article]);
	});

	it("convertData converts the data for an article received from the API into a more readable JS object", () => {
		const data = {
			webTitle: "Real Madrid reach the Champions League final",
			webUrl: "www.madridfinal.com",
			fields: {
				thumbnail: "madridpicture.jpg",
				bodyText: "summary here",
			},
		};
		const article = {
			headline: "Real Madrid reach the Champions League final",
			image: "madridpicture.jpg",
			url: "www.madridfinal.com",
			summary: "summary here",
		};
		expect(model.convertData(data)).toEqual(article);
	});

	it("reset empties the articles array", () => {
		const article = {
			headline: "Real Madrid reach the Champions League final",
		};
		model.addArticle(article);
		expect(model.getArticles()).toEqual([article]);

		model.reset();
		expect(model.getArticles()).toEqual([]);
	});
});
