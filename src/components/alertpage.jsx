import React from 'react'
import Base from './base'
import { Col, Row } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';



function Alertpage() {

  return (
    <Base>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Examples</h2>
        </Col>

        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Col>
            <Alert key={variant} variant={variant}>
              This is a {variant} alert—check it out!
            </Alert>
          </Col>
        ))}

      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: 'grid', justifyContent: "center"
      }}>
        <Col><h2>Dismissing</h2></Col>
        <Col>
          <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>
              Change this and that and try again. Duis mollis, est non commodo
              luctus,.
            </p>
          </Alert>


        </Col>
      </Row>


      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: 'grid', justifyContent: "center"
      }}>
        <Col><h2>Success Alert</h2></Col>
        <Col>
          <Alert variant="success">
            <Alert.Heading>My Alert</Alert.Heading>
            <p>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
              lacinia odio
            </p>
            <hr />
            <div className="d-flex justify-content-end">
              <Button onClick={() => setShow(false)} variant="outline-success">
                Close me
              </Button>
            </div>
          </Alert>

        </Col>
      </Row>

    </Base>
  )

}
export default Alertpage