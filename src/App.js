import "./App.css";
import Header from "./Header/Header";
import Content from "./Content/Content";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import OnePost from "./OnePost/OnePost";

function App() {
  const [posts, setPosts] = useState([]);

  const fetchContent = async () => {
    const res = await fetch("https://blog-u-n.herokuapp.com/api/content");
    const data = await res.json();
    setPosts(data);
    return null;
  };

  useEffect(() => {
    fetchContent();
  }, []);

  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<OnePost data={posts}/>} />
        <Route path="/:category" element={<Content data={posts} />} />
      </Routes>
    </div>
  );
}

export default App;
