import { Tab, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Admin from "./Admin";

function AdminPortal() {
  return (
    <>
      <div className="m-5">
        <h1>Welcome to the Admin Portal</h1>
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row className="">
            <Col
              md={3}
              className="p-3 justify-content-center align-items-center"
            >
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">View User List</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Create new user</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Admin></Admin>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Register></Register>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default AdminPortal;
