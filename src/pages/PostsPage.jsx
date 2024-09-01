import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { deletePosts, getPosts } from "../services/posts-service";
import { PostsContext } from "../store/PostsProvider";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, deletePost } from "../store/redux/postsSlice";

const PostsPage = () => {
  // const { posts, addPosts, addPost, editPost, deletePost } =
  //   useContext(PostsContext);
  const posts = useSelector((state) => state.post.posts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        const response = await getPosts();
        dispatch(addPosts(response));
      } catch (error) {
        console.error(error);
      }
    })();
  }, [posts]);

  const handleAddForm = () => {
    navigate("/form");
  };

  const handleDelete = async (id) => {
    try {
      const response = await deletePosts(id);
      dispatch(deletePost(id));
    } catch (error) {
      alert(error);
    } finally {
      navigate("/posts");
    }
  };

  // const handleEdit = () => {
  //   navigate(`/edit-form/${post?.id}`);
  // };
  return (
    <div className="w-full flex flex-col justify-start items-center gap-6">
      <div className="flex  w-1/2 justify-end ">
        <button
          className="bg-indigo-600 rounded-md shadow-md px-4 py-2 text-white"
          onClick={handleAddForm}
        >
          Add Posts
        </button>
      </div>
      {posts?.length > 0 ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-1/2">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Author
                </th>
                <th scope="col" className="px-6 py-3 text-center" colSpan={2}>
                  Action
                </th>

                {/* <th scope="col" className="px-6 py-3">
            <span className="sr-only">Edit</span>
          </th> */}
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr
                  className="bg-white border-b  hover:bg-gray-50 "
                  key={post?.id}
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {post.id}
                  </th>
                  <td className="px-6 py-4">{post?.title}</td>
                  <td className="px-6 py-4">{post?.author}</td>
                  <td className="px-6 py-4">
                    {/* <button className="bg-indigo-600 rounded-md px-3 py-2 text-slate-100" onClick={handleEdit}>Edit</button> */}
                    <Link
                      className="bg-indigo-600 rounded-md px-3 py-2 text-slate-100"
                      to={`/edit-form/${post?.id}`}
                    >
                      Edit
                    </Link>
                  </td>
                  <td className="px-6 py-4">
                    <button
                      className="bg-red-600 rounded-md px-3 py-2 text-slate-100"
                      onClick={() => handleDelete(post?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-center">No Posts Found</h1>
        </div>
      )}
    </div>
  );
};

export default PostsPage;
