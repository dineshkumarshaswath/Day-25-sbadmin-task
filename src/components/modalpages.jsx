import React from 'react'
import Base from './base'
import { Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';

function StaticExample() {
  return (
    <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}



function Closemodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Formmodal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Form demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

function Modalpage() {
  return (
    <Base>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: 'grid', justifyContent: "center"
      }}>
        <Col><h3>Modals Example</h3>
        </Col>
        <Col>
          <StaticExample />
        </Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: 'grid', justifyContent: "center"
      }}>
        <Col><h3>Live demo</h3>
        </Col>
        <Col>
          <Closemodal />
        </Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: 'grid', justifyContent: "center"
      }}>
        <Col><h3>Form Modal</h3>
        </Col>
        <Col>
          <Formmodal />
        </Col>
      </Row>



    </Base>
  )

}

export default Modalpage