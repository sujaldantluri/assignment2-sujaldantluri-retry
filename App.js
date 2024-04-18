import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Tab, ListGroup, Form, Button } from 'react-bootstrap';
import todoItems from './todoItems';
import './App.css';

function App() {
  const getVariant = (dueDate) => {

    const today = new Date();
    const diffDays = (dueDate - today) / (1000 * 3600 * 24); //get current day difference
    if (diffDays < 2) return 'danger';
    else if (diffDays < 4) return 'warning';
    else if (diffDays < 7) return 'success';
    else return 'primary';
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <h1>Assignment 2: Sujal's Todo List</h1>
        </Col>
      </Row>
      <Row>
        <Col>
        <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Enter title" />
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Due Date</Form.Label>
    <Form.Control type="date" />
  </Form.Group>

  <Button variant="primary" type="submit" className ="mb-3">
    Submit
  </Button>
</Form>
        </Col>
      </Row>
      <Row></Row>
      <Tab.Container defaultActiveKey="#todo0">
        <Row>
          <Col sm={4}>
            <ListGroup>
              {todoItems.map((item, idx) => (
                <ListGroup.Item action href={`#todo${idx}`} variant={getVariant(item.dueDate)}>
                  {item.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              {todoItems.map((item, idx) => (
                <Tab.Pane eventKey={`#todo${idx}`}>
                  <h4 contentEditable>Description</h4>
                  <p contentEditable>{item.description}</p>
                  <input type="date" defaultValue={item.dueDate.toISOString().split('T')[0]} />
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default App;
