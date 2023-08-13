import React from 'react'
import Base from './base'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

function Buttonpage() {

  return (

    <Base>
      <Row xs={1} sm={1} md={1} lg={1} style={{ marginTop: "30px", textAlign: "center" }}>
        <Col><h2>Examples</h2></Col>
        <Col>

          <Button variant="primary">Primary</Button>{' '}
          <Button variant="secondary">Secondary</Button>{' '}
          <Button variant="success">Success</Button>{' '}
          <Button variant="warning">Warning</Button>{' '}
          <Button variant="danger">Danger</Button>{' '}
          <Button variant="info">Info</Button>{' '}
          <Button variant="light">Light</Button>{' '}
          <Button variant="dark">Dark</Button>
          <Button variant="link">Link</Button>
        </Col>

      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{ marginTop: "30px", textAlign: "center" }}>
        <Col><h2>Outline buttons</h2></Col>
        <Col>  <Button variant="outline-primary">Primary</Button>{' '}
          <Button variant="outline-secondary">Secondary</Button>{' '}
          <Button variant="outline-success">Success</Button>{' '}
          <Button variant="outline-warning">Warning</Button>{' '}
          <Button variant="outline-danger">Danger</Button>{' '}
          <Button variant="outline-info">Info</Button>{' '}
          <Button variant="outline-light">Light</Button>{' '}
          <Button variant="outline-dark">Dark</Button>
        </Col>

      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{ marginTop: "30px", textAlign: "center" }}>
        <Col><h2>Button tags</h2></Col>
        <Col>
          <Button href="#">Link</Button> <Button type="submit">Button</Button>{' '}
          <Button as="input" type="button" value="Input" />{' '}
          <Button as="input" type="submit" value="Submit" />{' '}
          <Button as="input" type="reset" value="Reset" /></Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{ marginTop: "30px", textAlign: "center" }}>
        <Col><h2>Sizes</h2></Col>
        <Col>
          <div className="mb-2">
            <Button variant="primary" size="lg">
              Large button
            </Button>{' '}
            <Button variant="secondary" size="lg">
              Large button
            </Button>
          </div>
          <div>
            <Button variant="primary" size="sm">
              Small button
            </Button>{' '}
            <Button variant="secondary" size="sm">
              Small button
            </Button>
          </div>
        </Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{ marginTop: "30px", textAlign: "center" }}>
        <Col><h2>Block buttons</h2></Col>
        <Col>   <div className="d-grid gap-2">
          <Button variant="primary" size="md">
            Block level button
          </Button>
          <Button variant="secondary" size="md">
            Block level button
          </Button>
        </div>
        </Col>
      </Row>

    </Base>


  )
}

export default Buttonpage