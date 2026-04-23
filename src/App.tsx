import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Blog from './pages/Blog';
import Post from './pages/Post';
import Personal from './pages/Personal';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.css';
import FloatingContact from './components/FloatingContact';

// ✅ Theme type
type Theme = "light" | "dark";

// ✅ Get initial theme safely
const getInitialTheme = (): Theme => {
  const saved = localStorage.getItem("theme");

  if (saved === "light" || saved === "dark") {
    return saved;
  }

  // fallback to system preference
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
};

function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  // ✅ Apply theme globally
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <div className="app">
        
        {/* ✅ Pass theme to Header */}
        <Header theme={theme} setTheme={setTheme} />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <FloatingContact />

        <Footer />
        
      </div>
    </Router>
  );
}

export default App;