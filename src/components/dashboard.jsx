import React from 'react'
import Base from './base'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function Dashboard() {
    const history = useHistory()

    return (
        <Base>
            <Row xs={1} sm={2} md={2} lg={3} style={{ rowGap: "20px", marginTop: "30px", marginLeft: "10px" }}>
                <Col>
                    <Card style={{ width: '18rem' }} className='card'>

                        <Card.Body>
                            <Card.Title>Buttons</Card.Title>
                            <Card.Text>
                                You can explore super button collections here
                            </Card.Text>
                            <Button variant="primary" onClick={() => history.push("/button")} >Click</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card style={{ width: '18rem' }} className='card'>

                        <Card.Body>
                            <Card.Title>Cards</Card.Title>
                            <Card.Text>
                                You can explore many Card collections here
                            </Card.Text>
                            <Button variant="success" onClick={() => history.push("/card")}>Click</Button>
                        </Card.Body>
                    </Card>
                </Col>

                <Col> <Card style={{ width: '18rem' }} className='card'>

                    <Card.Body>
                        <Card.Title>Tables</Card.Title>
                        <Card.Text>
                            You can explore many Tables collections here
                        </Card.Text>
                        <Button variant="danger" onClick={() => history.push("/table")}>Click</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem' }} className='card'>
                        <Card.Body>
                            <Card.Title>pages</Card.Title>
                            <Card.Text>
                                You can explore many Pages collections here
                            </Card.Text>
                            <Button variant="warning" onClick={() => history.push("/login")}>Click</Button>
                        </Card.Body>
                    </Card></Col>







                <Col><Card style={{ width: '18rem' }} className="card">

                    <Card.Body>
                        <Card.Title>Utilities</Card.Title>
                        <Card.Text>
                            You can explore many Utilities collections here
                        </Card.Text>
                        <Button variant="info" onClick={() => history.push("/alert")}>Click</Button>
                    </Card.Body>
                </Card>
                </Col><Card style={{ width: '18rem' }} className="card">

                    <Card.Body>
                        <Card.Title>Pages</Card.Title>
                        <Card.Text>
                            You can explore many Pages collections here
                        </Card.Text>
                        <Button variant="secondary" onClick={() => history.push("/notpage")}>Click</Button>
                    </Card.Body>
                </Card>


            </Row>
        </Base>
    )
}

export default Dashboard