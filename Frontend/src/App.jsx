import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import  Navbar  from "./components/Navbar/Navbar.jsx";
import { About,About2, Contact, Home, Projects } from "./pages";
import { ToastContainer } from "react-toastify";
import ChatBot from "./components/ChatBot.jsx";

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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
      <ChatBot />
    </main>
  );
};

export default App;
