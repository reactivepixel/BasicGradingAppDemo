import React, { Component } from 'react';

import StoresContainer from './container';

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

import {
  Link,
} from "react-router-dom";

class Stores extends Component {
  componentDidMount() {
    const { fetchAllStores } = this.props;
    fetchAllStores();
  }

  render() {
    const { allStores } = this.props;

    return (
      <div className="animated fadeIn">
        <Button tag={Link} to={'/store/form/'} color='primary' className="float-right">New Store</Button>
        <h2>Stores</h2>
        <Row>
          {allStores.map(store => (
            <Col key={store.id} md={3}>
              <Card>
                <CardHeader>{store.title}</CardHeader>
                <CardImg top width="100%" src="https://source.unsplash.com/random/500x500" />
                <CardBody>
                  <Button tag={Link} to={`/${store.id}/products`} color='secondary'>View Store</Button>
                  <Button tag={Link} to={`/store/form/${store.id}`} color='secondary'>Edit Store</Button>
                </CardBody>
                <CardFooter>
                  <address>
                    {store.street1}<br />
                    {store.street2}<br />
                    {store.city}, {store.state} {store.zip}
                  </address>
                </CardFooter>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default StoresContainer(Stores);
