const NewsApi = require("../lib/newsApi")

describe("NewsApi", () => {
	let subject;
	beforeEach(() => {
		subject = new NewsApi();
	})

	it("creates an instance of itself", ()=>{
		expect(subject).toBeInstanceOf(NewsApi)
	})
})