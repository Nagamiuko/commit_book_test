import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Homepage";
import Home2 from "./Homepage";
import Register from "./components/register/Register";
import MyNovels from "./components/createmynovel/Mycommic";
import AddNovels from "./components/createmynovel/mycreatebook/MycreatN";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/Home" element={<Home2 />} /> */}
        <Route path="/register/user" element={<Register />} />
        <Route path="/edit/user" element={<Register />} />
        <Route path="/MyCollections" element={<MyNovels />} />
        <Route path="/MyCollections/AddNovel" element={<AddNovels />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
