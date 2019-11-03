import React from "react";
import ReactDOM from "react-dom";
import ArticleList from "../ArticleList";

describe("Rendering", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ArticleList />, div);
  });
});

describe("Primary type", () => {});

describe("Interaction", () => {});
