import React, { createContext, useState } from "react";
import { Col, Container, Row, Tabs, Tab } from "react-bootstrap";
import IconButton from "./components/IconButton";
import { Avatar } from "@mui/material";
import ProfileHeader from "./components/ProfileHeader";
import { PROFILE_DATA } from "../data.js";
import ImageGrid from "./components/ImageGrid";
import ImageList from "./components/ImageList";
import AddPostModal from "./components/AddPostModal";
import PostDetailModal from "./components/PostDetailModal";
import "./App.css";

export const ProfileContext = createContext(null);

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);
  const altText = "woman";
  const [key, setKey] = useState("posts");

  const tabStyle = {
    fontWeight: "400",
    fontSize: "0.80rem",
    borderBottom: "none",
    cursor: "pointer",
    padding: "0.5rem 0.5rem",
    color: "grey",
    display: "flex",
    alignItems: "center",
    position: "relative",
    backgroundColor: "transparent",
  };

  const activeTabStyle = {
    ...tabStyle,
    fontWeight: "500",
    color: "black",
  };

  const getIndicatorPosition = () => {
    switch (key) {
      case "posts":
        return "calc(40% - 6px)";
      case "saved":
        return "calc(48% - 6px)";
      case "tagged":
        return "calc(56% - 6px)";
      default:
        return "0";
    }
  };

  return (
    <ProfileContext.Provider value={PROFILE_DATA}>
      <Row>
        <Col
          sm={1}
          className="d-flex flex-column justify-content-start align-items-center vh-100 bg-light"
          style={{ position: "sticky", top: 0 }}
        >
          <IconButton className="bi bi-instagram" isTop />
          <IconButton className="bi bi-house" />
          <IconButton className="bi bi-search" />
          <IconButton className="bi bi-compass" />
          <IconButton className="bi bi-film" />
          <IconButton className="bi bi-chat" />
          <IconButton className="bi bi-heart" />
          <IconButton className="bi bi-plus-square" onClick={openModal} />
          <IconButton>
            <Avatar src="/woman.png" alt={altText} />
          </IconButton>
          <IconButton className="bi bi-list" isBottom />
        </Col>
        <Col sm={11}>
          <Container>
            <ProfileHeader />

            <ImageList />

            <div style={{ position: "relative", borderTop: "1px solid lightgrey" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-1px",
                  left: getIndicatorPosition(),
                  width: "60px",
                  height: "1.2px",
                  backgroundColor: "black",
                  transition: "left 0.3s ease",
                }}
              />
              <Tabs
                id="profile-tabs"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 justify-content-center"
                variant="transparent"
                style={{ borderBottom: 'none' }}
                tabclassname="custom-tab"
              >
                <Tab
                  eventKey="posts"
                  title={
                    <span style={key === "posts" ? activeTabStyle : tabStyle}>
                      <i className="bi bi-grid-3x3 me-1" />
                      <span>POSTS</span>
                    </span>
                  }
                />
                <Tab
                  eventKey="saved"
                  title={
                    <span style={key === "saved" ? activeTabStyle : tabStyle}>
                      <i className="bi bi-bookmark me-1" />
                      <span>SAVED</span>
                    </span>
                  }
                />
                <Tab
                  eventKey="tagged"
                  title={
                    <span style={key === "tagged" ? activeTabStyle : tabStyle}>
                      <i className="bi bi-person-square me-1" />
                      <span>TAGGED</span>
                    </span>
                  }
                />
              </Tabs>
            </div>
            <ImageGrid />
            <AddPostModal show={showModal} handleClose={closeModal} />
          </Container>
        </Col>
      </Row>
      <PostDetailModal show={showModal} handleClose={closeModal} commenterImage="/woman.png" />
    </ProfileContext.Provider>
  );
}
