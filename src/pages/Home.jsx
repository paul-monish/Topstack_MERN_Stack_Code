import React, { useContext, useEffect } from "react";
import { PostsContext } from "../store/PostsProvider";
import { useSelector } from "react-redux";
import { getCategories } from "../services/product-service";

const Home = () => {
  // const { posts } = useContext(PostsContext);
  const posts = useSelector((state) => state.post.posts);

  const [localPost, setLocalPosts] = React.useState([]);
  useEffect(() => {
    (() => {
      try {
        setLocalPosts(posts);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [posts]);

  useEffect(()=>{
    (
      async() => {
        try{
          const response=await getCategories();
          console.log(response,'res');
        }catch(error){
          console.log(error,'error');
          
        }
        
        
      }
    )()
  },[])

  return (
    <div className="flex flex-wrap justify-center gap-5 w-full">
      {localPost.map((post) => {
        return (
          <div
            key={post.id}
            className="flex  flex-col h-[20%] bg-indigo-400 rounded-md px-3 py-2 shadow-md"
          >
            <p>{post?.title}</p>
            <p>{post?.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
