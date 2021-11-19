import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import NewsPage from "./pages/News";
import SportPage from "./pages/Sport";
import BusinessPage from "./pages/Business";
import SinglePage from "./pages/Single";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/sport" element={<SportPage />} />
        <Route path="/business" element={<BusinessPage />} />
        <Route path="/single-article" element={<SinglePage />} />
      </Routes>
    </div>
  );
}

export default App;
