import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ArticleList from "./components/ArticleList";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={2}></Col>
            <Col sm={8}>
              <h1> The News</h1>
              <Button variant="primary">Primary</Button>
              <br></br>
              <ArticleList />
            </Col>
            <Col sm={2}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
