import React from 'react'
import Base from './base'
import { Button, Row, Col, Container, Card } from "react-bootstrap"

import Form from 'react-bootstrap/Form'

function Login() {
    return (
        <Base>
            <Row sm={1} md={1} lg={1} xl={1}
                style={{ textAlign: "center" }}>

                <Form
                    style={{ display: "grid", placeItems: "center", marginTop: "50px", }}
                >
                    <Col><h2 style={{ marginBottom: "30px" }}>Login in Page</h2></Col>

                    <Col style={{ textAlign: "center", width: '60%', margin: "5px" }}  >
                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ display: "flex", alignItmes: "start" }}>Email</Form.Label>
                            <Form.Control style={{ textAlign: "center", borderRadius: "1px" }}
                                type="email"
                                placeholder="Example:johndue@gmail.com"
                            /> </Form.Group></Col>



                    <Col style={{ textAlign: "center", width: '60%', margin: "5px" }} variant="success" >
                        <Form.Group className="mb-1" controlId="exampleForm.ControlTextarea1">
                            <Form.Label style={{ display: "flex", alignItmes: "start" }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Your Password"
                                style={{ textAlign: "center", borderRadius: "1px" }}

                            /></Form.Group> </Col>

                    <Col ><Button size="md" variant="success">Login</Button></Col>






                </Form>

                <Col >Don't have account?<a href='/signin' >Sign in</a>
                </Col>
            </Row>

        </Base>
    )
}
export default Login
