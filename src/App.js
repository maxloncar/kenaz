import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import CategoryPage from "./pages/Category";
import SinglePage from "./pages/Single";
import Navigation from "./components/header/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/category" element={<CategoryPage />} />
        <Route path="/single" element={<SinglePage />} />
      </Routes>
    </>
  );
}

export default App;
