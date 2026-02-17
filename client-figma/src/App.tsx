import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "./components/Layout";
import { HomePage } from "./pages/HomePage";
import { TechnologiesPage } from "./pages/TechnologiesPage";
import { TechnologyDetailPage } from "./pages/TechnologyDetailPage";
import { SolutionsPage } from "./pages/SolutionsPage";
import { SolutionDetailPage } from "./pages/SolutionDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { CaseStudiesPage } from "./pages/CaseStudiesPage";
import { InsightsPage } from "./pages/InsightsPage";
import { MediaPage } from "./pages/MediaPage";
import { PartnersPage } from "./pages/PartnersPage";
import { ContactPage } from "./pages/ContactPage";
import { AdminPage } from "./pages/AdminPage";
import "./styles/animations.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route
                  path="/technologies"
                  element={<TechnologiesPage />}
                />
                <Route
                  path="/technologies/:slug"
                  element={<TechnologyDetailPage />}
                />
                <Route
                  path="/solutions"
                  element={<SolutionsPage />}
                />
                <Route
                  path="/solutions/:slug"
                  element={<SolutionDetailPage />}
                />
                <Route
                  path="/case-studies"
                  element={<CaseStudiesPage />}
                />
                <Route path="/insights" element={<InsightsPage />} />
                <Route path="/media" element={<MediaPage />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}