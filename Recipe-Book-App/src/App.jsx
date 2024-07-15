import "./App.css";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import RecipeDetails from "./pages/RecipeDetails";
import { useState } from "react";
import list from "./data/recipes.json";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {

  const [recipes, setRecipes] = useState(list);

  return (
    <>
    
    <Navbar />
    <Sidebar />
    
    <Routes>
      <Route path="/" element={<HomePage id="home-page" recipes={recipes} setRecipes={setRecipes}/>}></Route>
      <Route path="/about" element={<About id="about" />}></Route>
      <Route path="/recipes/:recipeId" element={<RecipeDetails recipes={recipes} setRecipes={setRecipes}/>}></Route>

      <Route path="*" element={<NotFoundPage id="not-found-page" />}></Route>
    </Routes>

    <Footer />

    </>
    
    
    
  );
}

export default App;
