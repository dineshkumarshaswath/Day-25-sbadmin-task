import Table from 'react-bootstrap/Table';
import Base from './base';
import { Row, Col } from 'react-bootstrap';

function BasicExample() {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

function StripedColumnsExample() {
  return (
    <Table striped="columns">
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}


function ResponsiveExample() {
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 12 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 12 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
      </tbody>
    </Table>
  );
}

function Tablepage() {
  return (
    <Base>

      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2> Striped Table Example</h2>
        </Col>
        <Col> <StripedColumnsExample /></Col>
      </Row>
      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center"
      }}>
        <Col><h2>Table Example</h2>
        </Col>
        <Col> <BasicExample /></Col>
      </Row>


      <Row xs={1} sm={1} md={1} lg={1} style={{
        marginTop: "30px", textAlign: "center", display: "grid"
        , justifyContent: "center", padding: "20px"
      }}>
        <Col><h2> Responsive Table Example</h2>
        </Col>
        <Col> <ResponsiveExample /></Col>
      </Row>

    </Base>
  )
}

export default Tablepage;