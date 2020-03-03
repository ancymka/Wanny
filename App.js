import React from "react";
import "./App.css";
import Menu from "./Components/Menu";
import { Container } from "react-bootstrap";
import Routes from "./Routes/Routes";

function App() {
  return (
    <>
      <Menu/>
      <Container fluid>
        <Routes />
      </Container>
    </>
  );
}

export default App;
