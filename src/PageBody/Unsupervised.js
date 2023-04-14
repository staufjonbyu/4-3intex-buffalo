import React from "react";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { Tab, Nav, Row, Col } from "react-bootstrap";
import Table from "./Unsupervised/UTable";
import ScatterPlot from "./Unsupervised/ScatterPlot";
import Graph from "./Unsupervised/Graph";
import Findings from "./Unsupervised/Findings";

function Unsupervised() {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <>
      {authStatus !== "authenticated" ? (
        <Tab.Container id="tabs" defaultActiveKey="first">
          <Row className="mt-5 mt-5">
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Table></Table>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <ScatterPlot></ScatterPlot>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Graph></Graph>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Findings></Findings>
                </Tab.Pane>
              </Tab.Content>
            </Col>
            <Col
              md={3}
              className="p-5 justify-content-center align-items-center"
            >
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">Table</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">3-D Scatterplot</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Graph of Cluster</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Findings Explained</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
          </Row>
        </Tab.Container>
      ) : (
        <div>
          <p>...</p>
        </div>
      )}
    </>
  );
}

export default Unsupervised;
