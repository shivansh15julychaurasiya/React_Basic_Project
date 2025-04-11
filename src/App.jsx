import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';

// Dummy page components
const Home1 = () => <h1 className="text-center mt-5">🏠 Home Page</h1>;
const About = () => <h1 className="text-center mt-5">ℹ️ About Page</h1>;
const Contact = () => <h1 className="text-center mt-5">📞 Contact Page</h1>;

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <div className="container mt-">
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
