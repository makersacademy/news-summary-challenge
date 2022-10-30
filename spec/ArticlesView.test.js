/**
 * @jest-environment jsdom
 */

const fs = require("fs");
const ArticlesModel = require("../src/ArticlesModel.js");
const ArticlesView = require("../src/ArticlesView.js");

describe("Articles view", () => {
  // it("returns Articles", () => {
  //   const model = new ArticlesModel();
  //   const api = {
  //     loadData: () => {
  //       model.add(fakeJson.response.results);
  //       view.displayNews();
  //     },
  //   };
  //   const view = new ArticlesView(model, api);
  //   view.displayNewsFromApi();
  // expect(document.querySelectorAll("div.news-title").length).toEqual(10);
  //   messageBox.value = "wash the car";
  //   const button = document.querySelector("#add-note-button");
  //   button.click();
  //   expect(document.querySelectorAll("div.note").length).toEqual(1);
  //   expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
  //     "wash the car"
  //   );
  // });
});
// });
