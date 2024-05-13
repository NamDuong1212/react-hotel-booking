import Navbar from "./components/Navbar/index"
import Pricing from "./pages/Pricing"
import Home from "./pages/Home"
import About from "./pages/About"
import LoginSignup from "./pages/LoginSignup.js"
import { Route, Routes } from "react-router-dom"
import "./App.css"
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/loginsignup" element={<LoginSignup />}/>
        </Routes>
      </div>
    </>
  )
}

export default App