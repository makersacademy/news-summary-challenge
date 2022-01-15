const NewsModel = require("../src/newsModel")

describe("NewsModel", ()=>{
	let model;
	beforeEach(()=>{
		model = new NewsModel();
	})

	it("creates an instance of itself", ()=>{
		expect(model).toBeInstanceOf(NewsModel)
	})

})