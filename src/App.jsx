import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Menu from './components/Menu';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="container">
            <a href="/" className="logo">Synt<span>el</span></a>
            <Navigation />
          </div>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>Syntel Restaurant</h3>
                <p>Experience culinary excellence where innovative flavors meet timeless traditions.</p>
                <p>📍 123 Gourmet Avenue, Food District</p>
              </div>
              <div className="footer-section">
                <h3>Contact Info</h3>
                <p>📞 (555) 123-4567</p>
                <p>✉️ info@syntelrestaurant.com</p>
              </div>
              <div className="footer-section">
                <h3>Opening Hours</h3>
                <p>Mon-Thu: 5PM - 10PM</p>
                <p>Fri-Sat: 5PM - 11PM</p>
                <p>Sun: 4PM - 9PM</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 Syntel Restaurant. All rights reserved. | Fine Dining Experience</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;