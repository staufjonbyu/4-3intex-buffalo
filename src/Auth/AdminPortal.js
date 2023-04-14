import { Tab, Nav, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Register from "./Register";
import Admin from "./Admin";
import EditUser from "./EditUser";
import React, { useState, useEffect } from "react";

function AdminPortal() {
const [activeTab, setActiveTab] = useState("first");
const [editUserKey, setEditUserKey] = useState(0);
const switchToEditUserTab = () => {
    setActiveTab("third");
    setEditUserKey(editUserKey + 1);

  };

  useEffect(() => {
    console.log("Active tab:", activeTab);
  }, [activeTab]);


  return (
    <>
      <div className="m-5">
        <h1>Welcome to the Admin Portal</h1>
        <Tab.Container id="tabs" defaultActiveKey={activeTab} key={editUserKey}>
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
                {/* <Nav.Item>
                  <Nav.Link eventKey="third">Edit user</Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Col>
            <Col md={9}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                <Admin switchToEditUserTab={switchToEditUserTab} />

                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Register></Register>
                </Tab.Pane>
                {/* <Tab.Pane eventKey="third">
                  <EditUser></EditUser>
                </Tab.Pane> */}
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default AdminPortal;
