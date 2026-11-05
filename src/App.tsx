import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";
import ComingSoonPage from "./pages/ComingSoonPage";

import DeclarationsPage from "./pages/DeclarationsPage";
import ChildProtectionPage from "./pages/ChildProtectionPage";
import GrantProjectPage from "./pages/GrantProjectPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktualnosci" element={<NewsPage />} />

          <Route path="/lekarze-i-harmonogram" element={<ComingSoonPage />} />
          <Route path="/badania/laboratoryjne" element={<ComingSoonPage />} />
          <Route
            path="/dla-pacjenta/deklaracje"
            element={<DeclarationsPage />}
          />
          <Route path="/szczepienia" element={<ComingSoonPage />} />
          <Route path="/badania/usg" element={<ComingSoonPage />} />
          <Route path="/szczepienia/hpv" element={<ComingSoonPage />} />

          <Route
            path="/standardy-ochrony-maloletnich"
            element={<ChildProtectionPage />}
          />
          <Route path="/projekt-grantowy" element={<GrantProjectPage />} />
          <Route path="/regulamin" element={<TermsPage />} />
          <Route path="/polityka-prywatnosci" element={<PrivacyPolicyPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
