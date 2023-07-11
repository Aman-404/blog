import { Base } from "./components/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
function App() {
  return (
    <div classNameName="App">
      <Base />
      
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
