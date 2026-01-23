import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';
import Button from './components/Button';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Technologies from './pages/Technologies';
import SolutionPage from './pages/SolutionPage';
import Contact from './pages/Contact';
import RequestDemo from './pages/RequestDemo';
import { solutionsData } from './data/solutionsData';

// Placeholder/Simple Components
const About = () => <div className="container section"><h1>About Nija World</h1><p>Nija World builds secure AI and blockchain solutions for organisations modernising digital operations.</p></div>;
const TechDetail = ({ title }) => <div className="container section"><h1>{title}</h1><p>Technology detail page coming soon.</p><Button to="/technologies" variant="secondary">Back to Technologies</Button></div>;

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-wrapper">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            {/* Technologies */}
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/technologies/blockchain" element={<TechDetail title="Blockchain" />} />
            <Route path="/technologies/ai-digitisation" element={<TechDetail title="AI for Digitisation" />} />
            <Route path="/technologies/ai-automation" element={<TechDetail title="AI for Automation" />} />
            <Route path="/technologies/ai-infrastructure" element={<TechDetail title="AI for Infrastructure" />} />
            <Route path="/technologies/ai-cybersecurity" element={<TechDetail title="AI for Cybersecurity" />} />

            {/* Solutions */}
            <Route path="/solutions" element={<div className="container section"><h1>Solutions</h1><p>Please select a solution from the menu or homepage.</p></div>} />
            <Route path="/solutions/tokenisation" element={<SolutionPage data={solutionsData['tokenisation']} />} />
            <Route path="/solutions/supply-chain" element={<SolutionPage data={solutionsData['supply-chain']} />} />
            <Route path="/solutions/identity" element={<SolutionPage data={solutionsData['identity']} />} />
            <Route path="/solutions/loyalty" element={<SolutionPage data={solutionsData['loyalty']} />} />
            <Route path="/solutions/advisory" element={<SolutionPage data={solutionsData['advisory']} />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/request-demo" element={<RequestDemo />} />

            {/* Fallbacks for other links in footer/nav */}
            <Route path="/case-studies" element={<div className="container section"><h1>Case Studies</h1></div>} />
            <Route path="/insights" element={<div className="container section"><h1>Insights</h1></div>} />
            <Route path="/media" element={<div className="container section"><h1>Media</h1></div>} />
            <Route path="/partners" element={<div className="container section"><h1>Partners</h1></div>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
