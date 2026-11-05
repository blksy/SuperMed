import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktualnosci" element={<NewsPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
