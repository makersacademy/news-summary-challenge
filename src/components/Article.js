import React, { Component } from "react";
// import ArticleList from "./ArticleList";

class Article extends Component {
  render() {
    return (
      <div key={this.props.key}>
        <img src={this.props.urlToImage} alt="" style={{ width: "100%" }} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>
          <a href={this.props.url}>Read More</a>
        </p>
      </div>
    );
  }
}

export default Article;
