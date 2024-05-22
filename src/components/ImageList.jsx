import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const images = [
  { src: "./woman.png", subtitle: "Image 1" },
  { src: "./woman.png", subtitle: "Image 2" },
  { src: "./woman.png", subtitle: "Image 3" },
];

const ImageList = () => {
  return (
    <Container className="mb-5">
      <Row className="justify-content-start" style={{ columnGap: "3rem" }}>
        {images.map((image, index) => (
          <Col 
            key={index} 
            xs="auto"
            className="text-center"
            style={{ padding: "0 0.01rem" }}
            >
            <img
              src={image.src}
              alt={image.subtitle}
              className="rounded-circle img-thumbnail"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
              />
            <div style={{fontWeight: "bold", fontSize: "0.9rem" }}>{image.subtitle}</div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ImageList;