import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/about/About';
import Contact from './components/Contact/Contact';
import Gallery from './components/Gallery/Gallery';
import Academic from './components/Academics/Academic';
import Faculty from './components/faculty/Faculty';
import Student from './components/Students/Student';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/gallery' element={<Gallery/>} />
      <Route path='/academic' element={<Academic/>} />
      <Route path='/Faculty' element={<Faculty/>} />
      <Route path='/Faculty' element={<Faculty/>} />
      <Route path='/student' element={<Student/>} />
      
     </Routes>
     
    </div>
  );
}

export default App;
