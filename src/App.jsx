import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Album from './pages/Album';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Info from './pages/Info';
import ButterflyBackground from './components/ButterflyBackground';
import Video from './pages/Video';


function App() {
  return (
    <>
    <ButterflyBackground />
      <Navbar />
      <div style={{ 
        marginTop: '4rem', 
        paddingTop: '50px', 
        padding: '1rem', 
        fontFamily: "'Jua', sans-serif",
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ width: '100%', maxWidth: '500px' }}>
          <Routes>
            <Route path="/" element={<Gallery />} />
            <Route path="/about" element={<Info />} />
            <Route path="/album" element={<Album />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;