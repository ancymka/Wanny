import React from "react";
import "./Bath.module.css";


import {Card, Form, Row, Table} from "react-bootstrap";



const Bath = props => {


  return (
    <>
      <div>
      <Card variant="top" className="text-center" style={{ width: "45rem"}}>
        <Card.Header>
          Data: //kalendarz
          <br/>
          Wanna nr
          <Form className="d-inline-block ml-0">
            <Form.Group controlId="ControlSelect1">
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Card.Header>
        <Card.Body>
          Dane
          <Table className="w-100" striped hover>
          <tr>
            <td className="w-25 text-right">Identyfikator wkladu: </td>
            <td className="w-10"> </td>
            <td className="w-40 text-left">Jakis wklad 1456</td>
          </tr>
          <tr>
            <td className="w-25 text-right">Kod wkladu: </td>
            <td className="w-10"> </td>
            <td className="w-40 text-left">125456432</td>
          </tr>
          <tr>
            <td className="w-25 text-right">Stanowisko: </td>
            <td className="w-10"> </td>
            <td className="w-40 text-left">5</td>
          </tr>
            <tr>
              <td className="w-25 text-right">Nazwisko operatora: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Kowalski</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 1: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 2: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 3: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 4: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 5: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
            <tr>
              <td className="w-25 text-right">Info nr 6: </td>
              <td className="w-10"> </td>
              <td className="w-40 text-left">Jedn</td>
            </tr>
        </Table>
        </Card.Body>
      </Card>
      </div>
    </>
  );
};

export default Bath;
