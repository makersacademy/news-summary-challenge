import React, { Component } from "react";
import { getArticles } from "./api";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    getArticles().then(data => {
      console.log(data);
      this.setState({
        articles: data.articles
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.articles.map((item, index) => {
          return (
            <div key={index}>
              <h2>{item.title}</h2>
              <img src={item.urlToImage} alt="" style={{ width: "50vw" }} />
              <p>{item.description}</p>
              <p>
                <a href={item.url}>Read More</a>
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Articles;
