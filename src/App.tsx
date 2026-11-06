import { Route, Routes } from "react-router-dom";

import Navbar from "./components/layouts/Navbar";
import Footer from "./components/layouts/Footer";

import HomePage from "./pages/HomePage";
import NewsPage from "./pages/NewsPage";

import DeclarationsPage from "./pages/DeclarationsPage";
import ChildProtectionPage from "./pages/ChildProtectionPage";
import GrantProjectPage from "./pages/GrantProjectPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import DoctorsSchedulePage from "./pages/DoctorsSchedulePage";
import RegistrationRulesPage from "./pages/RegistrationRulesPage";
import HomeVisitsPage from "./pages/HomeVisitsPage";
import HPVVaccinationPage from "./pages/HPVVaccinationPage";
import VaccinationsPage from "./pages/VaccinationsPage";
import UltrasoundPage from "./pages/UltrasoundPage";
import LaboratoryTestsPage from "./pages/LaboratoryTestsPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aktualnosci" element={<NewsPage />} />

          <Route
            path="/lekarze-i-harmonogram"
            element={<DoctorsSchedulePage />}
          />
          <Route
            path="/badania/laboratoryjne"
            element={<LaboratoryTestsPage />}
          />
          <Route
            path="/dla-pacjenta/deklaracje"
            element={<DeclarationsPage />}
          />
          <Route path="/szczepienia" element={<VaccinationsPage />} />
          <Route path="/badania/usg" element={<UltrasoundPage />} />
          <Route path="/szczepienia/hpv" element={<HPVVaccinationPage />} />

          <Route
            path="/standardy-ochrony-maloletnich"
            element={<ChildProtectionPage />}
          />
          <Route
            path="/dla-pacjenta/zasady-rejestracji"
            element={<RegistrationRulesPage />}
          />
          <Route
            path="/dla-pacjenta/wizyty-domowe"
            element={<HomeVisitsPage />}
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
