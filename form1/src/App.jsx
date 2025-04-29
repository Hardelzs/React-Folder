import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./Contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourite" element={<Favourite />} />
        </Routes>
      </main>
    </MovieProvider>
  );
};

export default App;
