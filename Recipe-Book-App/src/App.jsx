import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetails from "./pages/RecipeDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage id="home-page" />}></Route>
      <Route path="/about" element={<About id="about" />}></Route>
      <Route path="/recipes/:recipeId" element={<RecipeDetails/>}></Route>
      <Route path="*" element={<NotFoundPage id="not-found-page" />}></Route>
    </Routes>
  );
}

export default App;
