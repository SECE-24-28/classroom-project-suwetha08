import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from './Home'
import About from "./About"
import Contact from "./Contact";
import Users from "./Users";
import Books from "./Books";
import Invoices from "./Invoices"

function App() {
  return (
    <BrowserRouter>
      <h1>I am from App</h1>

      <ul>
        <Link to="/"><li>Home</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <Link to="/user/1"><li>User1</li></Link>
        <Link to="/user/2"><li>User2</li></Link>
        <Link to="/Book"><li>Books</li></Link>
        <Link to="/Book/newbook"><li>New Book</li></Link>
        <Link to="/Book/oldbook"><li>Old Book</li></Link>
        <Link to="/invoices"><li>Invoices</li></Link>

      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<Users />} />
        
        
        <Route path="/Book" element={<Books />}>
          
          <Route path="newbook" element={<Books />} />
          <Route path="oldbook" element={<Books />} />
        </Route>

          <Route path="/invoices" element={<Invoices/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
