/**
 * @jest-environment jsdom
 */
require("jest-fetch-mock").enableFetchMocks();
const NewsView = require("../src/newsView")
const fs = require("fs");
const NewsApi = require("../src/newsApi");

describe("NewsView", ()=>{
	let view;
	beforeEach(()=>{
		view = new NewsView();
	})

	it("creates an instance of itself", ()=>{
		expect(view).toBeInstanceOf(NewsView);
	})

	it("has a displayNews() method", ()=>{
		expect(typeof view.displayNews).toBe("function");
	})

	it("has a routechange() method", ()=>{
		expect(typeof view.routechange).toBe("function");
	})

	it("has a loadPopUp() method", ()=>{
		expect(typeof view.loadPopUp).toBe("function");
	})

	it("load() helper method calls the api.fetchNews(), grabs the latest news headlines array and displays it to our app", ()=>{
		document.body.innerHTML = fs.readFileSync('./index.html');
		const api = new NewsApi();
		const view = new NewsView();
		fetch.mockResponseOnce(JSON.stringify(['Humans Landed on Mars!']))
		view.load();
		let news = document.querySelectorAll('.news-block')
		expect(news.length).toBe(1)
	})


})