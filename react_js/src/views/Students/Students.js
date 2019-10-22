import React, { Component } from 'react';

import StudentsContainer from './container';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  CardImg,
  CardText,
  Table,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

import {
  Link,
} from "react-router-dom";

class Students extends Component {
  componentDidMount() {
    const { fetchAllStudents, fetchCreateStudent } = this.props;
    fetchAllStudents();
  }

  render() {
    const { allStudents, fetchCreateStudent } = this.props;

    const convertGradeToLetter = (grade) => {
      if(grade <= 59) return 'F';
      if(grade <= 69) return 'D';
      if(grade <= 79) return 'C';
      if(grade <= 89) return 'B';
      if(grade <= 99) return 'A';
      if(grade === 100) return 'A+';
    }
    
    const currentFormValues = () => ({
      name: document.getElementById('name').value,
      grade: document.getElementById('grade').value,
    });

    const handleSave = (e) => {
      e.preventDefault();
      fetchCreateStudent(currentFormValues());
    };

    return (
      <div className="animated fadeIn">    
        <Card>
          <CardHeader>Students</CardHeader>
          <CardBody>
            <Table>
              <tbody>
                <tr>
                  <td>
                    <FormGroup>
                      <Label for="name">Student Name</Label>
                      <Input type="text" name="name" id="name" placeholder="Chapman" />
                    </FormGroup>
                  </td>
                  <td>
                    <FormGroup>
                      <Label for="grade">Grade</Label>
                      <Input type="text" name="grade" id="grade" placeholder="81" />
                    </FormGroup>
                  </td>

                </tr>
              </tbody>
            </Table>
                    <Button color="primary" type="button" onClick={handleSave}>Save</Button>
          </CardBody>
        </Card>

        <Card>
          <CardHeader>Students</CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>Student ID</th>
                  <th>Name</th>
                  <th>Percent Grade</th>
                  <th>Letter Grade</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {allStudents.reverse().map(student => (
                  <tr>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.grade}%</td>
                    <td>{convertGradeToLetter(student.grade)}</td>
                    <td>
                      <Button color="danger">Delete</Button>{' '}
                      <Button color="warning">Edit</Button>{' '}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>

          </CardBody>
          <CardFooter>

          </CardFooter>
        </Card>
      </div>
    );
  }
}

export default StudentsContainer(Students);
