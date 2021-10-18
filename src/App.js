import React from "react";
import { Container, Row, Col, Nav, } from "reactstrap";
//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faSignOutAlt, faBell } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import POS from "./pages/pos/";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Container fluid={true}>
            <Row>
              <Col sm="3" className="text-center header-col-brand">
                STORE MANAGEMENT
              </Col>
              <Col sm="5" className="header-col-nav">
                <Nav className=" ml-auto">
                </Nav>
              </Col>
            </Row>
          </Container>
        </header>
        <main className="main-app">
          <Container className="container-main" fluid>
            <POS />
          </Container>
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  );
}

export default App;
