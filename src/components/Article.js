import React, { Component } from "react";
// import ArticleList from "./ArticleList";

class Article extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div key={this.props.key}>
        <h2>{this.props.title}</h2>
        <img src={this.props.urlToImage} alt="" style={{ width: "50vw" }} />
        <p>{this.props.description}</p>
        <p>
          <a href={this.props.url}>Read More</a>
        </p>
      </div>
    );
  }
}

export default Article;
