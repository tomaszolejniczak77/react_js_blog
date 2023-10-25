import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <article className="post">
      <Link className="post-link" to={`/post/${post.id}`}>
        <h3>{post.title}</h3>
      </Link>
      <p className="data-time">{post.datatime}</p>
      <p className="post-body">
        {post.body.length <= 25 ? post.body : `${post.body.slice(0, 25)}...`}
      </p>
    </article>
  );
};

export default Post;
