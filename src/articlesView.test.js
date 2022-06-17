/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */

const fs = require("fs");
const ArticlesView = require("./articlesView");
const ArticlesModel = require("./articlesModel");
const ArticlesApi = require("./articlesApi");

jest.mock("./articlesModel");
jest.mock("./articlesApi");

describe("ArticlesView", () => {
	beforeEach(() => {
		ArticlesModel.mockClear();
		ArticlesApi.mockClear();
		document.body.innerHTML = fs.readFileSync("./index.html");
		mockModel = new ArticlesModel();
		mockApi = new ArticlesApi();
		view = new ArticlesView(mockModel, mockApi);
		articleData = {
			response: {
				results: [
					{
						webTitle: "Real Madrid reach the Champions League final",
						webUrl: "www.madridfinal.com",
						fields: {
							thumbnail: "madridpicture.jpg",
							bodyText: "article summary here",
						},
					},
				],
			},
		};
		article = {
			headline: "Real Madrid reach the Champions League final",
			image: "madridpicture.jpg",
			url: "www.madridfinal.com",
			summary: "article summary here",
		};
	});

	it("displayArticlesFromApi fetches the data and display it on the page", () => {
		view.api.loadArticles.mockImplementation((callback) =>
			callback(articleData)
		);
		view.model.convertData.mockImplementation(() => article);
		view.model.addArticle.mockImplementation(() => undefined);
		view.model.getArticles.mockImplementation(() => [article]);

		view.displayArticlesFromApi();

		expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
		expect(view.model.convertData).toHaveBeenCalledTimes(1);
		expect(view.model.addArticle).toHaveBeenCalledTimes(1);
		expect(view.model.getArticles).toHaveBeenCalledTimes(1);
		expect(document.querySelector("img.pic").src).toBe(
			"http://localhost/madridpicture.jpg"
		);
		expect(document.querySelector("a.title").href).toBe(
			"http://localhost/www.madridfinal.com"
		);
		expect(document.querySelector("a.title").innerText).toBe(
			"Real Madrid reach the Champions League final"
		);
	});

	it("returns a list of articles matching the users search query", () => {
		view.model.reset.mockImplementation(() => undefined);
		view.api.loadArticles.mockImplementation((callback) =>
			callback(articleData)
		);
		view.model.convertData.mockImplementation(() => article);
		view.model.addArticle.mockImplementation(() => undefined);
		view.model.getArticles.mockImplementation(() => [article]);

		const searchEl = document.querySelector("#search-field");
		searchEl.value = "madrid";
		const searchButtonEl = document.querySelector("#search-button");
		searchButtonEl.click();

		expect(view.api.loadArticles).toHaveBeenCalledTimes(1);
		expect(view.model.reset).toHaveBeenCalledTimes(1);
		expect(view.model.convertData).toHaveBeenCalledTimes(1);
		expect(view.model.addArticle).toHaveBeenCalledTimes(1);
		expect(view.model.getArticles).toHaveBeenCalledTimes(1);
		expect(document.querySelector("img.pic").src).toBe(
			"http://localhost/madridpicture.jpg"
		);
		expect(document.querySelector("a.title").href).toBe(
			"http://localhost/www.madridfinal.com"
		);
		expect(document.querySelector("a.title").innerText).toBe(
			"Real Madrid reach the Champions League final"
		);
	});

	it("displays a message when the user search matches no articles", () => {
		view.model.reset.mockImplementation(() => undefined);
		view.api.loadArticles.mockImplementation((callback) =>
			callback({
				response: {
					results: [],
				},
			})
		);
		view.model.convertData.mockImplementation(() => undefined);
		view.model.addArticle.mockImplementation(() => undefined);
		view.model.getArticles.mockImplementation(() => []);

		const searchEl = document.querySelector("#search-field");
		searchEl.value = "ijrnfewndew";
		const searchButtonEl = document.querySelector("#search-button");
		searchButtonEl.click();

		expect(document.querySelectorAll("div.article").length).toBe(0);
		expect(document.querySelector("div.message").innerText).toBe(
			"No results matching your search"
		);
	});

	it("displays an article summary after clicking the thumbnail", () => {
		view.api.loadArticles.mockImplementation((callback) =>
			callback(articleData)
		);
		view.model.convertData.mockImplementation(() => article);
		view.model.addArticle.mockImplementation(() => undefined);
		view.model.getArticles.mockImplementation(() => [article]);

		view.displayArticlesFromApi();

		const thumbnailEl = document.querySelector("img.pic");
		thumbnailEl.click();
		expect(document.querySelector("h2.headline").innerText).toBe(
			"Real Madrid reach the Champions League final"
		);
		expect(document.querySelector("p.summary").innerText).toBe(
			"article summary here"
		);
	});
});
