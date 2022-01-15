const NewsView = require("../src/newsView")

describe("NewsView", ()=>{
	let view;
	beforeEach(()=>{
		view = new NewsView();
	})

	it("creates an instance of itself", ()=>{
		expect(view).toBeInstanceOf(NewsView)
	})

})