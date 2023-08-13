import React from 'react'
import Base from './base'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';


function Cardpage() {
  return (
    <Base>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Basic Example</h2></Col>
        <Col >
          <Card style={{ width: '18rem' }} >
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center",
        display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2> Title, text, and links</h2></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row >
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Image Cards</h2></Col>
        <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
        </Col>
      </Row >
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Header and Footer</h2></Col>
        <Col>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Navigation</h2>
        </Col>
        <Col>
          <Card>
            <Card.Header>
              <Nav variant="tabs" defaultActiveKey="#first">
                <Nav.Item>
                  <Nav.Link href="#first">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#disabled" disabled>
                    Disabled
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Card.Header>
            <Card.Body>
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Base>
  )
}

export default Cardpage