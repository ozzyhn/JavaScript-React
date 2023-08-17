import React, {Component} from "react";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import { Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";

export default class App extends Component {

  state={currentCategory:""}
  changeCategory =(category) => {
    this.setState({currentCategory:category.categoryName})
  }
  render() {
    productInfo = { title: "ProductList" };
    categoryInfo = { title: "Category List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi></Navi>
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo}></CategoryList>
            </Col>
            <Col xs="9">
              <ProductList info={productInfo}></ProductList>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
