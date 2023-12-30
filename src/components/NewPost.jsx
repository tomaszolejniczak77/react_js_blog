import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import api from "../api/posts";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";

const NewPost = () => {
  const { height } = useWindowSize();

  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const { posts, setPosts } = useContext(DataContext);
  const navigation = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datatime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datatime, body: postBody };
    try {
      const response = await api.post("/posts", newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle("");
      setPostBody("");
      navigation("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };
  return (
    <>
      {height < 600 ? (
        <p className="heightInfo">Please rotate your device to add new post!</p>
      ) : (
        <main className="NewPost">
          <h3>New Post</h3>
          <form className="newPostForm" onSubmit={handleSubmit}>
            <label htmlFor="postTitle">Title:</label>
            <input
              id="postTitle"
              type="text"
              required
              value={postTitle}
              onChange={(e) => setPostTitle(e.target.value)}
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              rows="10"
              id="postBody"
              required
              onChange={(e) => setPostBody(e.target.value)}
              value={postBody}
            ></textarea>
            <button className="submit-btn" type="submit">
              Add New Post
            </button>
          </form>
        </main>
      )}
    </>
  );
};

export default NewPost;
