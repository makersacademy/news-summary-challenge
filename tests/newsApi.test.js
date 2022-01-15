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

	it("calls fetch and loads the news from the API", async ()=>{
		const api = new NewsApi();
		fetch.mockResponseOnce(JSON.stringify(['Liverpool wins the league!']))
		await api.fetchNews((data)=>{
			expect(data).toBe(['Liverpool wins the league!']);
			expect(fetch).toHaveBeenCalledTimes(1)
		});

		
	})

})