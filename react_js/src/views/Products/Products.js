import React, { Component } from 'react';

import ProductsContainer from './container';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  Col,
  Row,
} from 'reactstrap';

class Products extends Component {
  componentDidMount() {
    const { match: {params: {store_id}}, fetchProductsByStoreID } = this.props;
    fetchProductsByStoreID(store_id);
  }

  render() {
    const { allProducts } = this.props;

    return (
      <div className="animated fadeIn">
        <h2>Products</h2>
        <Row>
          {allProducts.map(product => (
            <Col key={product.id} md={3}>
              <Card>
                <CardHeader>{product.title}</CardHeader>
                <CardImg top width="100%" src={product.baseImgURL} />
                <CardBody>
                  <CardText>{product.descriptionFull}</CardText>
                  <CardText>${product.salePrice}</CardText>
                  <Button color="primary">Add to Cart</Button>
                </CardBody>
                <CardFooter>
                  Available: {product.availableQty}
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default ProductsContainer(Products);
