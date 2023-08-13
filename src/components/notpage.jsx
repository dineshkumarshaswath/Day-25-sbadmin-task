import React from 'react'
import Base from './base'
import { Row, Col } from "react-bootstrap"

function Notpage() {
    return (
        <Base>
            <Row xs={1} sm={1} md={1} lg={1} style={{ textAlign: "center" }}>
                <Col>  <h1 style={{
                    width: "100%", marginTop: "20px"
                    , textAlign: "center", color: "black", fontWeight: "bolder"
                }}>404, Page Not Found</h1>
                </Col>
            </Row>


        </Base>
    )

}
export default Notpage