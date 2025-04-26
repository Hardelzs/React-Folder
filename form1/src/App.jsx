import React from "react";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import NavBar from "./Components/NavBar";

const App = () => {
  ;
  return (

    <div>
      <NavBar />
      <main>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/favourite" element={<Favourite />}/>
      </Routes>
      </main>

    </div>
  );
};

export default App;
