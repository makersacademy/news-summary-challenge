/**
 * @jest-environment jsdom
 */

const NewsView = require("../src/newsView")

describe("NewsView", ()=>{
	let view;
	beforeEach(()=>{
		view = new NewsView();
	})

	it("creates an instance of itself", ()=>{
		expect(view).toBeInstanceOf(NewsView)
	})

	it("has a displayNews() method", ()=>{
		expect(typeof view.displayNews).toBe("function")
	})

})