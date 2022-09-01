import { useState, useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Nav from "./Nav";
import { Outlet } from "react-router-dom";

const Layout = ({ posts, setSearchResults }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredResults = posts.filter(
      (post) =>
        post.body.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchResults(filteredResults.reverse());
  }, [posts, search]);

  return (
    <div className="App">
      <Header title="React JS Blog" />
      <Nav search={search} setSearch={setSearch} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
