import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Navbar from './components/Navbar.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <div className='max-w-3xl mx-auto p-4'>
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
      </Routes>
    </div>
  </BrowserRouter>,
)
