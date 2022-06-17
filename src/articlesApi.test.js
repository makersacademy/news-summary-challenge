/* eslint-disable no-undef */
const ArticlesApi = require("./articlesApi");
require("jest-fetch-mock").enableMocks();

describe("ArticlesApi", () => {
	beforeEach(() => {
		api = new ArticlesApi();
		apiResponse = {
			response: [
				{
					id: 9473648,
					webTitle: "Real Madrid reach the Champions League final",
					thumbnail: "somepicture.jpg",
					webURL: "http://www.somelink.com",
					otherInfo: "random info",
				},
			],
		};
		fetch.mockResponseOnce(JSON.stringify(apiResponse));
	});

	it("loadArticles fetches the news headlines from the server", () => {
		api.loadArticles((response) => {
			expect(response).toEqual(apiResponse);
		});
	});
});
