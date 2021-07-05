import React, { Component } from "react";
import Button from "react-bootstrap/Button";

class Article extends Component {
  render() {
    return (
      <div
        key={this.props.key}
        className="mt-2 mb-5"
        style={{ paddingBottom: "10px" }}
      >
        <img
          src={this.props.urlToImage}
          alt=""
          style={{ width: "100%", paddingBottom: "10px" }}
        />
        <h2
          className="my-4"
          style={{
            fontSize: "34px",
            fontFamily: "Titillium Web, sans-serif",
            fontWeight: "600"
          }}
        >
          {this.props.title}
        </h2>
        <p
          className="my-2"
          style={{
            fontSize: "20px",
            fontFamily: "Titillium Web, sans-serif",
            fontWeight: "300",
            color: "#999999"
          }}
        >
          {this.props.description}
        </p>
        <div className="my-4">
          <a href={this.props.url}>
            <Button variant="warning" size="sm">
              Original Article
            </Button>
          </a>
          {/* <Button variant="secondary" size="sm" className="mx-2 ">
            Summary
          </Button> */}
        </div>
      </div>
    );
  }
}

export default Article;
