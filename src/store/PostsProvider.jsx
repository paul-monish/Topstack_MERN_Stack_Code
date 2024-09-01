import { useState } from "react";
import { createContext } from "react";

const initialState = {
  posts: [],
  addPosts: () => {},
  addPost: () => {},
  deletePost: () => {},
  editPost: () => {},
};
export const PostsContext = createContext(initialState);

const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const addPosts = (posts) => {
    setPosts(posts);
  };
  const addPost = (post) => {
    setPosts((prev) => {
      return [...prev, post];
    });
  };
  const deletePost = (id) => {
    setPosts((prev) => {
      return [...prev.filter((post) => post.id !== id)];
    });
  };
  const editPost = (id, post) => {
    setPosts((prev) => {
      const index = prev.findIndex((p) => p.id === id);
      const newPosts = [...prev];
      if (index != -1) {
        newPosts[index] = post;
      }
      return [...newPosts];
    });
  };
  const ctxValue = {
    posts,
    addPosts,
    addPost,
    deletePost,
    editPost,
  };
  return (
    <PostsContext.Provider value={ctxValue}>{children}</PostsContext.Provider>
  );
};

export default PostsProvider;
