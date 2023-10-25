import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import api from "../api/posts";

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const navigation = useNavigate();

  const post = posts.find((post) => post.id === +id);

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const upatedPosts = [...posts];
      const newPosts = upatedPosts.filter((post) => post.id !== id);
      setPosts(newPosts);
      navigation("/");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
      <main className="Home">
        <article className="post">
          {post && (
            <>
              <h3>{post.title}</h3>
              <p className="data-time">{post.datatime}</p>
              <p className="post-body">{post.body}</p>
              <div className="post-btns">
                <Link to={`/edit/${post.id}`}>
                  <button className="edit-btn">Edit Post</button>
                </Link>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(post.id)}
                >
                  Delete Post
                </button>
              </div>
            </>
          )}
          {!post && (
            <>
              <h2>Post Not Found</h2>
              <p>
                <Link className="link" to="/">
                  Visit Our Homepage
                </Link>
              </p>
            </>
          )}
        </article>
      </main>
    </>
  );
};

export default PostPage;
