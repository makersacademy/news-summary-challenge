const NewsModel = require("../src/newsModel")

describe("NewsModel", ()=>{
	let model;
	beforeEach(()=>{
		model = new NewsModel();
	})

	it("creates an instance of itself", ()=>{
		expect(model).toBeInstanceOf(NewsModel)
	})

	it("has a getNews() method", ()=>{
		expect(model.getNews().length).toBe(0)
	})

	it("has a updateNews() method", ()=>{
		let newNewsArr = ['PM resigned'];
		model.updateNews(newNewsArr)
		expect(model.getNews().length).toBe(1)
	})

})