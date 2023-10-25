import Feed from "./Feed";
import { useContext } from "react";
import DataContext from "../context/DataContext";

const Home = () => {
  const { search, setSearch, fetchError, isLoading, searchResults } =
    useContext(DataContext);

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
    </>
  );
};

export default Home;
