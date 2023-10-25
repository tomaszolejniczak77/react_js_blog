import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NewPost from "./components/NewPost";
import PostPage from "./components/PostPage";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import EditPost from "./components/EditPost";
import { DataProvider } from "./context/DataContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header title={"React JS Blog"} />
        <DataProvider>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post">
              <Route index element={<NewPost />} />
              <Route path="/post/:id" element={<PostPage />} />
            </Route>
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </DataProvider>
        <Footer />
      </div>
    </>
  );
}

export default App;
