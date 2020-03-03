import React from "react";
import { Card, Col, Button, Table, Modal, Form } from "react-bootstrap";
import "./Stand.module.css";
import { useState } from "react";
import axios from "axios";

const Stand = props => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleSend = () => {
    setShow(false);
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      ...insertion
    })
  };
  const handleShow = () => setShow(true);

  const [insertion, setInsertion] = useState({
    id: "",
    element: "",
    typeOfChrome: "",
    firstElement: {
      name: "",
      nrOfDrawing: "",
      nrOfOrder: "",
      nrOfOperation: "",
      montersSurname: ""
    },
    secondElement: {
      name: "",
      nrOfDrawing: "",
      nrOfOrder: "",
      nrOfOperation: "",
      montersSurname: ""
    }
  });

  return (
    <>
      <Col className="mt-2 mb-2" md="3" as={Card} border="light" text="center">
        <Card.Header>Wanna: {props.index}</Card.Header>
        <Card.Body>
          <h6>Stan procesu:</h6>
          <a onClick={handleShow}>Zajmij Stanowisko</a>
          <div>
            <Button variant="outline-success" size="sm">
              Rozpocznij proces
            </Button>
            <Button variant="outline-danger" size="sm">
              Zakończ proces
            </Button>
          </div>
          <Table className="w-100">
            <tr>
              <td className="w-25">Napiecie</td>
              <td>2137</td>
              <td className="w-10">Jedn</td>
            </tr>
            <tr>
              <td className="w-25">Natężenie</td>
              <td>2137</td>
              <td className="w-10">Jedn</td>
            </tr>
            <tr>
              <td className="w-25">Czas</td>
              <td>2137</td>
              <td className="w-10">Jedn</td>
            </tr>
          </Table>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-dark">Pokaż Wykres</Button>
        </Card.Footer>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tworzenie nowego wkładu</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Identyfikator:</Form.Label>
              <Form.Control
                onChange={e =>
                  setInsertion({
                    ...insertion,
                    id: e.target.value
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Element:</Form.Label>
              <Form.Control
                onChange={e =>
                  setInsertion({
                    ...insertion,
                    element: e.target.value
                  })
                }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Type of chrome:</Form.Label>
              <Form.Control
                  onChange={e =>
                      setInsertion({
                        ...insertion,
                        typeOfChrome: e.target.value
                      })
                  }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
            <Form.Label>Name:</Form.Label>
            <Form.Control
                onChange={e =>
                    setInsertion({
                      firstElement:{
                          ...insertion,
                          name: e.target.value
                      }})
                }
            ></Form.Control>
          </Form.Group>
            <Form.Group>
              <Form.Label>Nr of drawing:</Form.Label>
              <Form.Control
                  onChange={e =>
                      setInsertion({
                        firstElement:{
                            ...insertion,
                            nrOfDrawing: e.target.value
                        }})
                  }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nr of order:</Form.Label>
              <Form.Control
                  onChange={e =>
                      setInsertion({
                          firstElement:{
                              ...insertion,
                        nrOfOrder: e.target.value
                      }})
                  }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Nr of operation:</Form.Label>
              <Form.Control
                  onChange={e =>
                      setInsertion({
                          firstElement: {
                              ...insertion,
                              nrOfOperation: e.target.value
                          }})
                  }
              ></Form.Control>
            </Form.Group>
            <Form.Group>
              <Form.Label>Monters surname:</Form.Label>
              <Form.Control
                  onChange={e =>
                      setInsertion({
                          firstElement: {
                              ...insertion,
                              montersSurname: e.target.value
                          }})
                  }
              ></Form.Control>
          </Form.Group>
              <Form.Group>
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                      onChange={e =>
                          setInsertion({
                              secondElement:{
                                  ...insertion,
                                  name: e.target.value
                              }})
                      }
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Nr of drawing:</Form.Label>
                  <Form.Control
                      onChange={e =>
                          setInsertion({
                              secondElement:{
                                  ...insertion,
                                  nrOfDrawing: e.target.value
                              }})
                      }
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Nr of order:</Form.Label>
                  <Form.Control
                      onChange={e =>
                          setInsertion({
                              secondElement:{
                                  ...insertion,
                                  nrOfOrder: e.target.value
                              }})
                      }
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Nr of operation:</Form.Label>
                  <Form.Control
                      onChange={e =>
                          setInsertion({
                              secondElement: {
                                  ...insertion,
                                  nrOfOperation: e.target.value
                              }})
                      }
                  ></Form.Control>
              </Form.Group>
              <Form.Group>
                  <Form.Label>Monters surname:</Form.Label>
                  <Form.Control
                      onChange={e =>
                          setInsertion({
                              secondElement: {
                                  ...insertion,
                                  montersSurname: e.target.value
                              }})
                      }
                  ></Form.Control>
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Zamknij
          </Button>
          <Button variant="success" onClick={handleSend}>
            Zapisz zmiany
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Stand;
