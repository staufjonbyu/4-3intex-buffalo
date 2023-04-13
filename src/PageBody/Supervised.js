import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Wrapping from "./Wrapping";
import SexTextile from "./SexTextile";
import Sex from "./Sex";
import HeadDirection from "./HeadDirection";

function Supervised() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  return (
    <>
      {authStatus !== "authenticated" ? (
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row className="m-5">
            <Col
              md={3}
              className="p-5 justify-content-center align-items-center"
            >
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Wrapping</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Sex Textiles</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Sex</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Head Direction</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Wrapping></Wrapping>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <SexTextile></SexTextile>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Sex></Sex>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <HeadDirection></HeadDirection>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        <div>
          <p>Place Auth stuff here</p>
        </div>
      )}
    </>
  );
}

export default Supervised;
