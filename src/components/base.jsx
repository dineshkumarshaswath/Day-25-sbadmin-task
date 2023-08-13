import React, { children } from 'react'
import Button from 'react-bootstrap/Button';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Row } from 'react-bootstrap'

function Base({ children }) {

  return (

    <>
      <Row>
        {['md'].map((expand) => (
          <Navbar key={expand} expand={expand} bg="primary" data-bs-theme="dark" >
            <Container fluid>
              <Navbar.Brand href="/" style={{ marginLeft: "20px" }}>SB Admin</Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    Dashboard
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                  <Nav className="justify-content-end flex-grow-1 pe-3">

                    <NavDropdown
                      title="Components"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/button">Buttons</NavDropdown.Item>
                      <NavDropdown.Item href="/card">
                        Cards
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/table">
                        Table
                      </NavDropdown.Item>


                    </NavDropdown>

                    <NavDropdown
                      title="Utilities"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/alert">Alerts</NavDropdown.Item>
                      <NavDropdown.Item href="/modals">
                        Modals
                      </NavDropdown.Item>
                      <NavDropdown.Divider />

                    </NavDropdown>
                    <NavDropdown
                      title="Pages"
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                    >
                      <NavDropdown.Item href="/login">Login page</NavDropdown.Item>
                      <NavDropdown.Item href="/forgot">
                        Forgot page
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/reset">
                        Reset page
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/notpage">
                        404 page
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/blankpage">
                        Blank page
                      </NavDropdown.Item>
                      <NavDropdown.Divider />

                    </NavDropdown>

                  </Nav>

                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>

        ))}
      </Row>
      <Row>
        {children}

      </Row>

    </>

  )
}
export default Base


