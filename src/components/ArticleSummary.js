import React, { Component } from "react";
import { getSummary } from "./api";

class ArticleSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      article: []
    };
  }

  componentDidMount() {
    getSummary().then(data => {
      console.log(data);
      this.setState({
        article: data.article
      });
    });
  }

  render() {
    return <div></div>;
  }
}

export default ArticleSummary;
