// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [
//   {
//     id: 1,
//     image: "https://picsum.photos/id/123/500/500",
//     description: "Post 1 description",
//     date: new Date().toISOString(),
//     likes: 15,
//     comments: ["First comment on post 1"],
//   },
//   {
//     id: 2,
//     image: "https://picsum.photos/id/124/500/500",
//     description: "Post 2 description",
//     date: new Date().toISOString(),
//     likes: 30,
//     comments: ["First comment on post 2"],
//   },
// ];

// const postsSlice = createSlice({
//   name: "posts",
//   initialState,
//   reducers: {
//     createPost: (state, action) => {
//       const newPost = {
//         id: Date.now(),
//         image: action.payload.image,
//         description: action.payload.description,
//         date: new Date().toISOString(),
//         likes: 0,
//         comments: [],
//       };
//       state.push(newPost);
//     },
//     updatePost: (state, action) => {
//       const index = state.findIndex((post) => post.id === action.payload.id);
//       if (index !== -1) {
//         state[index] = action.payload;
//       }
//     },
//     deletePost: (state, action) => {
//       return state.filter((post) => post.id !== action.payload);
//     },
//     likePost: (state, action) => {
//       const index = state.findIndex((post) => post.id === action.payload);
//       if (index !== -1) {
//         state[index].likes += 1;
//       }
//     },
//     addComment: (state, action) => {
//       const { postId, comment } = action.payload;
//       const post = state.find((post) => post.id === postId);
//       if (post) {
//         post.comments.push(comment);
//       }
//     },
//   },
// });

// export const { createPost, updatePost, deletePost, likePost, addComment } = postsSlice.actions;
// export default postsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    image: "https://picsum.photos/id/123/500/500",
    description: "Your mind is for having ideas, not holding them.",
    date: new Date().toISOString(),
    likes: 15,
    comments: ["Great post!", "Nice picture!"],
  },
  {
    id: 2,
    image: "https://picsum.photos/id/124/500/500",
    description: "Post 2 description",
    date: new Date().toISOString(),
    likes: 30,
    comments: ["Amazing!", "Love this!"],
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState: initialState,
  reducers: {
    createPost: (state, action) => {
      const newPost = {
        id: Date.now(),
        image: action.payload.image,
        description: action.payload.description,
        date: new Date().toISOString(),
        likes: 0,
        comments: [],
      };
      state.push(newPost);
    },
    updatePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.id);
      if (index !== -1) {
        state[index] = { ...state[index], ...action.payload };
      }
    },
    deletePost: (state, action) => {
      return state.filter((post) => post.id !== action.payload);
    },
    likePost: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload);
      if (index !== -1) {
        state[index].likes += 1;
      }
    },
    addComment: (state, action) => {
      const index = state.findIndex((post) => post.id === action.payload.postId);
      if (index !== -1) {
        state[index].comments.push(action.payload.comment);
      }
    },
  },
});

export const { createPost, updatePost, deletePost, likePost, addComment } = postsSlice.actions;
export default postsSlice.reducer;
