import React, { Component } from 'react';

import StoresContainer from './container';

import {
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  Card,
  CardBody,
  CardHeader,
  CardFooter,
} from 'reactstrap';

import {
  Link,
} from "react-router-dom";

class Stores extends Component {
  componentDidMount() {
    const { fetchAllStores, match: {params: {store_id}} } = this.props;
    fetchAllStores();
  }

  render() {
    const { allStores, fetchCreateStore, updateStore, fetchUpdateStore, fetchDeleteStore } = this.props;
    
    const currentFormValues = () => ({
      title: document.getElementById('title').value,
    });

    const handleChange = (e) => {
      e.preventDefault();
      updateStore(currentFormValues());
    };

    const handleSave = (e) => {
      e.preventDefault();
      fetchCreateStore(currentFormValues());
    };
    const handleDelete = (e) => {
      e.preventDefault();
      fetchDeleteStore(currentFormValues());
    };

    return (
      <div className="animated fadeIn">
        <h2>Stores</h2>
        <Card>
          <CardHeader>Create New Store</CardHeader>
          <CardBody>

            <Form>

              <FormGroup>
                <Label for="title">Title</Label>
                <Input type="text" name="title" id="title" placeholder="Title of the Store" />
              </FormGroup>

              {/* <Button tag={Link} to="" color="success">Save</Button> */}
              <FormGroup>
                <Button color="primary" type="button" onClick={handleSave}>Save</Button>
                {/* <Button color="danger" type="button" onClick={handleDelete}>Delete</Button> */}
              </FormGroup>
            </Form>

          </CardBody>
          <CardFooter>
           
          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default StoresContainer(Stores);
