import React, { Component } from 'react';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
} from 'reactstrap';

class Product extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        Product Detail
          <Card>
            <CardHeader>Product Title</CardHeader>
            <CardImg top width="100%" src="http://placekitten.com/1000/1000" alt="Don't forget screen readers" />
            <CardBody>
              <CardText>Some random content about how awesome this product is. But we really need to accommodate for a longer display of text because, ya know... marketing</CardText>
              <Button color="primary">Add to Cart</Button>
            </CardBody>
            <CardFooter>
              Qty low Alert
            </CardFooter>
          </Card>
      </div>
    );
  }
}

export default Product;
