import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="min-h-screen bg-white"></main>
    </BrowserRouter>
  );
}

export default App;
