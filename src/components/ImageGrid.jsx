// import { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Row, Col, Image, Button } from "react-bootstrap";
// import UpdatePostModal from "./UpdatePostModal";
// import PostDetailModal from "./PostDetailModal";
// import { deletePost, likePost } from "../features/posts/postsSlice";

// export default function ImageGrid() {
//   const posts = useSelector((state) => state.posts);
//   const dispatch = useDispatch();
//   const [showUpdateModal, setShowUpdateModal] = useState(false);
//   const [showDetailModal, setShowDetailModal] = useState(false);
//   const [currentPost, setCurrentPost] = useState(null);

//   const handleCloseUpdateModal = () => {
//     setCurrentPost(null);
//     setShowUpdateModal(false);
//   };

//   const handleShowUpdateModal = (post) => {
//     setCurrentPost(post);
//     setShowUpdateModal(true);
//   };

//   const handleCloseDetailModal = () => {
//     setCurrentPost(null);
//     setShowDetailModal(false);
//   };

//   const handleShowDetailModal = (post) => {
//     setCurrentPost(post);
//     setShowDetailModal(true);
//   };

//   const handleDelete = (postId) => {
//     dispatch(deletePost(postId));
//   };

//   const handleLike = (postId) => {
//     dispatch(likePost(postId));
//   };

//   const renderImages = () => {
//     return posts.map((post) => (
//       <Col md={4} key={post.id} className="mb-4">
//         <Image
//           src={post.image}
//           fluid
//           onClick={() => handleShowDetailModal(post)}
//           style={{ cursor: "pointer" }}
//         />
//         <Button onClick={() => handleLike(post.id)} variant="outline-danger">
//           <i className="bi bi-heart"></i> {post.likes}
//         </Button>
//         <Button onClick={() => handleShowUpdateModal(post)} variant="outline-primary">
//           <i className="bi bi-pencil-square"></i>
//         </Button>
//         <Button onClick={() => handleDelete(post.id)} variant="outline-danger">
//           <i className="bi bi-trash"></i>
//         </Button>
//       </Col>
//     ));
//   };

//   return (
//     <>
//       <Row>{renderImages()}</Row>
//       {currentPost && (
//         <UpdatePostModal
//           show={showUpdateModal}
//           handleClose={handleCloseUpdateModal}
//           postId={currentPost.id}
//         />
//       )}
//       {currentPost && (
//         <PostDetailModal
//           show={showDetailModal}
//           handleClose={handleCloseDetailModal}
//           post={currentPost}
//         />
//       )}
//     </>
//   );
// }

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Row, Col, Image, Button } from "react-bootstrap";
import UpdatePostModal from "./UpdatePostModal";
import PostDetailModal from "./PostDetailModal";
import { deletePost, likePost } from "../features/posts/postsSlice";

export default function ImageGrid() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDetailModal, setShowDetailModal] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);

  const handleCloseUpdateModal = () => {
    setCurrentPost(null);
    setShowUpdateModal(false);
  };

  const handleShowUpdateModal = (post) => {
    setCurrentPost(post);
    setShowUpdateModal(true);
  };

  const handleCloseDetailModal = () => {
    setCurrentPost(null);
    setShowDetailModal(false);
  };

  const handleShowDetailModal = (post) => {
    setCurrentPost(post);
    setShowDetailModal(true);
  };

  const handleDelete = (postId) => {
    dispatch(deletePost(postId));
  };

  const handleLike = (postId) => {
    dispatch(likePost(postId));
  };

  const renderImages = () => {
    return posts.map((post) => (
      <Col md={4} key={post.id} className="mb-4">
        <Image
          src={post.image}
          fluid
          onClick={() => handleShowDetailModal(post)}
          style={{ cursor: "pointer" }}
        />
        <Button onClick={() => handleLike(post.id)} variant="outline-danger">
          <i className="bi bi-heart"></i> {post.likes}
        </Button>
        <Button onClick={() => handleShowUpdateModal(post)} variant="outline-primary">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button onClick={() => handleDelete(post.id)} variant="outline-danger">
          <i className="bi bi-trash"></i>
        </Button>
      </Col>
    ));
  };

  return (
    <>
      <Row>{renderImages()}</Row>
      {currentPost && (
        <UpdatePostModal
          show={showUpdateModal}
          handleClose={handleCloseUpdateModal}
          postId={currentPost.id}
        />
      )}
      {currentPost && (
        <PostDetailModal
          show={showDetailModal}
          handleClose={handleCloseDetailModal}
          post={currentPost}
        />
      )}
    </>
  );
}
