import Layout from "./Layout";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPage from "./PostPage";
import About from "./About";
import Missing from "./Missing";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur, eligendi aut, officia hic qui dolor dolores veniam a exercitationem totam quis! Ratione, eaque! Voluptatibus in qui harum culpa laudantium.",
    },
    {
      id: 2,
      title: "My Second Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur, eligendi aut, officia hic qui dolor dolores veniam a exercitationem totam quis! Ratione, eaque! Voluptatibus in qui harum culpa laudantium.",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur, eligendi aut, officia hic qui dolor dolores veniam a exercitationem totam quis! Ratione, eaque! Voluptatibus in qui harum culpa laudantium.",
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2022 11:17:36 AM",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius tenetur, eligendi aut, officia hic qui dolor dolores veniam a exercitationem totam quis! Ratione, eaque! Voluptatibus in qui harum culpa laudantium.",
    },
  ]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
    navigate("/");
  };

  const handleDelete = (id) => {
    const postsList = posts.filter((post) => post.id !== id);
    setPosts(postsList);
    navigate("/");
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout posts={posts} setSearchResults={setSearchResults} />}
      >
        <Route index element={<Home posts={searchResults} />} />
        <Route path="post">
          <Route
            index
            element={
              <NewPost
                handleSubmit={handleSubmit}
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
              />
            }
          />
          <Route
            path="/post/:id"
            element={<PostPage posts={posts} handleDelete={handleDelete} />}
          />
        </Route>
        <Route path="about" element={<About />} />
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
