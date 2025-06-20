import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import  Navbar  from "./components/Navbar/Navbar.jsx";
import { About,About2, Contact, Home, Projects } from "./pages";

const App = () => {
  return (
    <main className='bg-black'>
      <Router>
        <div className="w-full sticky top-0 z-50">
          <Navbar />
        </div>
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About2 />} />
          <Route path='/about2' element={<About/>} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </main>
  );
};

export default App;
