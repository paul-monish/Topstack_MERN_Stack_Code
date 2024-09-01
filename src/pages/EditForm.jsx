import { json, useNavigate, useParams } from "react-router-dom";
import { editPosts, getPost } from "../services/posts-service";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { PostsContext } from "../store/PostsProvider";
import { useDispatch } from "react-redux";
import { editPost } from "../store/redux/postsSlice";

const EditForm = () => {
  const params = useParams();
  const navigate = useNavigate();
  // const { editPost } = useContext(PostsContext);
  const dispatch = useDispatch();
  const [post, setPost] = useState({
    title: "",
    author: "",
  });
  useEffect(() => {
    (async () => {
      const response = await getPost(params?.id);
      setPost(response);
    })();
  }, []);
  const handleChange = (event) => {
    setPost((prevPost) => {
      return {
        ...prevPost,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await editPosts(params?.id, post);
      dispatch(editPost({ id: params?.id, post }));
    } catch (error) {
      alert(error);
    } finally {
      navigate("/posts");
    }
  };
  return (
    <form method="post" className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {JSON.stringify(post)}
      <input
        type="text"
        name="title"
        onChange={handleChange}
        value={post?.title}
      />
      <input
        type="text"
        name="author"
        onChange={handleChange}
        value={post?.author}
      />
      <button>Update</button>
    </form>
  );
};

export default EditForm;
