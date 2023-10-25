import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <nav className="Nav">
        <ul>
          <li>
            <Link to="/">
              <button className="nav-btn">Home</button>
            </Link>
          </li>
          <li>
            <Link to="/post">
              <button className="nav-btn">Post</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button className="nav-btn">About</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
