import React from 'react'
import Base from './base'
import { Button, Row, Col, Container, Card } from "react-bootstrap"

import Form from 'react-bootstrap/Form'

function Reset() {
    return (
        <Base>
            <Row sm={1} md={1} lg={1} xl={1}
                style={{ textAlign: "center" }}>

                <Form
                    style={{ display: "grid", placeItems: "center", marginTop: "50px", }}
                >
                    <Col><h2 style={{ marginBottom: "30px" }}>Reset password page </h2></Col>

                    <Col style={{ textAlign: "center", width: '60%', margin: "5px" }}  >
                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ display: "flex", alignItmes: "start" }}>Password</Form.Label>
                            <Form.Control style={{ textAlign: "center", borderRadius: "1px" }}
                                type="password"
                                placeholder="Password"
                            /> </Form.Group></Col>




                    <Col style={{ textAlign: "center", width: '60%', margin: "5px" }}  >
                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ display: "flex", alignItmes: "start" }}>Confirm password</Form.Label>
                            <Form.Control style={{ textAlign: "center", borderRadius: "1px" }}
                                type="password"
                                placeholder="Confirm password"
                            /> </Form.Group></Col>



                    <Col ><Button size="md" variant="success" style={{ marginTop: "10px" }}>Submit</Button></Col>








                </Form>


            </Row>

        </Base>
    )
}
export default Reset

