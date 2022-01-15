const NewsApi = require("../src/newsApi")
require('jest-fetch-mock').enableMocks()

describe("NewsApi", () => {
	let subject;
	beforeEach(() => {
		subject = new NewsApi();
	})

	it("creates an instance of itself", ()=>{
		expect(subject).toBeInstanceOf(NewsApi)
	})

	it("has a fetchNews() method", ()=>{
		expect(typeof subject.fetchNews).toBe("function")
	})

	it("calls fetch and loads the news from the API", ()=>{
		const api = new NewsApi();
		fetch.mockResponseOnce(JSON.stringify(['Liverpool wins the league!']))
		api.fetchNews((data)=>{
			expect(data.length).toBe(1)
		})

	})

})