import React, { Component } from "react";
import { getArticles, getSummary } from "./api";
import Article from "./Article";

class ArticleList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      summary: []
    };
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        articles: data.articles
      });
    });
    getSummary().then(data => {
      this.setState({
        summary: data
      });
    });
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.articles.map((item, index) => {
          return (
            <div>
              <Article
                key={index}
                title={item.title}
                urlToImage={item.urlToImage}
                description={item.description}
                url={item.url}
              />
              {/* <p>{this.state.summary.sentences}</p> */}
            </div>
          );
        })}
      </div>
    );
  }
}

export default ArticleList;
