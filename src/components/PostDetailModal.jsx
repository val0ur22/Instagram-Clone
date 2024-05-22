import { useState, useContext } from "react";
import { Button, Modal, Image, ListGroup, Form, Col, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addComment } from "../features/posts/postsSlice";
import { ProfileContext } from "../App";

const PostDetailModal = ({ show, handleClose, post }) => {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  const { name, image } = useContext(ProfileContext);

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      dispatch(addComment({ postId: post.id, comment }));
      setComment("");
    }
  };

  return (
    <Modal show={show} onHide={handleClose} size="lg" style={{ maxWidth: '90vw', width: '100%' }}>
      <Modal.Header closeButton>
        <Row className="w-100">
          <Col sm={8}>
            <Image src={post.image} fluid />
          </Col>
          <Col sm={4}>
            <div className="mb-2">
              
              <div className="d-flex justify-content-start align-items-center">
                <Image
                  src={image}
                  alt="uploader"
                  style={{ width: "32px", marginRight: "10px", marginTop: "-5px" }}
                  roundedCircle
                />
                <p className="mb-0">{name}</p>
              </div>
              <hr />
              <div className="d-flex align-items-center mt-2">
                
                <div className="d-flex justify-content-start align-items-center">
                  <p>
                    <Image
                      src={image}
                      alt="uploader"
                      style={{ width: "32px", marginRight: "10px", marginTop: "-5px" }} // Adjusted margin-top
                      roundedCircle
                    />
                  </p>
                  <p className="mb-0">{name} {post.description}</p>
                </div>
              </div>
            </div>
            <ListGroup className="mb-3" style={{ border: "none" }}>
              {post.comments.map((comment, index) => (
                <ListGroup.Item
                  key={index}
                  style={{
                    border: "none",
                    padding: "0.25rem 0",
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  <span style={{ marginLeft: "42px" }}>{comment}</span>
                </ListGroup.Item>
              ))}
            </ListGroup>
            <Form onSubmit={handleCommentSubmit}>
              <Form.Group controlId="comment">
                <Form.Control
                  type="text"
                  placeholder="Add a comment..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="mt-3">
                Post Comment
              </Button>
            </Form>
          </Col>
        </Row>
      </Modal.Header>
    </Modal>
  );
};

export default PostDetailModal;
