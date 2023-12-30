import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
  const { search, setSearch, fetchError, isLoading, searchResults } =
    useContext(DataContext);

  const { height } = useWindowSize();

  return (
    <>
      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input
          id="search"
          type="text"
          placeholder="Search Posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </form>
      {height < 600 ? (
        <p className="heightInfo">Please rotate your device to read posts!</p>
      ) : (
        <main className="Home">
          {isLoading && <h3>Loading posts...</h3>}
          {!isLoading && fetchError && <p>{fetchError}</p>}
          {!isLoading &&
            !fetchError &&
            (searchResults.length ? (
              <Feed posts={searchResults} />
            ) : (
              <p>No posts to display.</p>
            ))}
        </main>
      )}
    </>
  );
};

export default Home;
