import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PostDetailModal from "./PostDetailModal";

const images = [
  { id: 1, src: "./woman.png", subtitle: "Image 1", description: "Description 1" },
  { id: 2, src: "./woman.png", subtitle: "Image 2", description: "Description 2" },
  { id: 3, src: "./woman.png", subtitle: "Image 3", description: "Description 3" },
];

const ImageList = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const openModal = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPost(null);
  };

  return (
    <Container className="mb-5">
      <Row className="justify-content-start" style={{ columnGap: "3rem" }}>
        {images.map((image, index) => (
          <Col
            key={index}
            xs="auto"
            className="text-center"
            style={{ padding: "0 0.01rem", cursor: "pointer" }}
            onClick={() => openModal(image)}
          >
            <img
              src={image.src}
              alt={image.subtitle}
              className="rounded-circle img-thumbnail"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <div style={{ fontWeight: "bold", fontSize: "0.9rem" }}>{image.subtitle}</div>
          </Col>
        ))}
      </Row>
      {/* Render the PostDetailModal */}
      {selectedPost && (
        <PostDetailModal
          show={showModal}
          handleClose={closeModal}
          post={selectedPost}
        />
      )}
    </Container>
  );
};

export default ImageList;
