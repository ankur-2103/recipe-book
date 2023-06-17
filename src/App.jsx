import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/search" element={<Home/>} />
        <Route path="/recipe/:id" element={<Recipe/>} />
        <Route path="/faviorites/:id" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
